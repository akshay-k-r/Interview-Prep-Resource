import fs from 'fs';
import path from 'path';
import nextra from 'nextra';

const srcPages = path.resolve('src/pages');

// 1. Build global slug registry at startup
const globalRegistry = new Map(); // slug -> Array of { relPath, route }

function getSlug(fileName, relPath) {
  if (fileName === 'index.mdx' || fileName === 'index.md') {
    if (relPath === 'index.mdx' || relPath === 'index.md') return 'home';
    const parts = path.dirname(relPath).split(path.sep);
    return parts[parts.length - 1];
  }
  return fileName.replace(/\.(mdx|md)$/, '');
}

function scanPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanPages(fullPath);
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      const relPath = path.relative(srcPages, fullPath);
      const slug = getSlug(entry.name, relPath);
      let route = '/' + relPath.replace(/\\/g, '/').replace(/(index)?\.(mdx|md)$/, '').replace(/\/$/, '');
      if (route === '') route = '/';
      
      const item = { relPath, route };
      if (globalRegistry.has(slug)) {
        globalRegistry.get(slug).push(item);
      } else {
        globalRegistry.set(slug, [item]);
      }
    }
  }
}

// Perform scan at startup
try {
  scanPages(srcPages);
  console.log(`[Nextra Link Resolver] Loaded ${globalRegistry.size} unique slugs into the registry.`);
} catch (err) {
  console.error('[Nextra Link Resolver] Failed to scan pages:', err);
}

// Select the best target match for a slug from a compiling file's path
function selectBestMatch(compilingRelPath, slug) {
  const matches = globalRegistry.get(slug);
  if (!matches || matches.length === 0) return null;
  if (matches.length === 1) return matches[0];
  
  const compilingSegments = compilingRelPath.split(path.sep).filter(Boolean);
  let bestMatch = null;
  let bestScore = -1;
  
  for (const m of matches) {
    // Demote legacy system design if we have other options
    const isLegacy = m.route.startsWith('/01-system-design');
    const hasOtherOption = matches.some(x => !x.route.startsWith('/01-system-design'));
    if (isLegacy && hasOtherOption) {
      continue;
    }
    
    // Calculate shared path segments (closer directory gets higher priority)
    const matchSegments = m.relPath.split(path.sep).filter(Boolean);
    let score = 0;
    const minLen = Math.min(compilingSegments.length, matchSegments.length);
    for (let i = 0; i < minLen; i++) {
      if (compilingSegments[i] === matchSegments[i]) {
        score++;
      } else {
        break;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = m;
    }
  }
  
  return bestMatch || matches[0];
}

function checkTargetExists(urlPath) {
  const cleanUrl = urlPath.split('#')[0].split('?')[0];
  if (cleanUrl === '/') return true;
  const p = cleanUrl.slice(1);
  const possible = [
    path.join(srcPages, p, 'index.mdx'),
    path.join(srcPages, p, 'index.md'),
    path.join(srcPages, p + '.mdx'),
    path.join(srcPages, p + '.md'),
  ];
  return possible.some(fp => fs.existsSync(fp));
}

// Custom Remark plugin for dynamic, self-healing slug resolution
function remarkResolveSlugLinks() {
  return (tree, file) => {
    const filePath = file.history[0] || file.path;
    if (!filePath) return;
    const fileDir = path.dirname(filePath);
    const compilingRelPath = path.relative(srcPages, filePath);
    
    function walk(node) {
      if (node.type === 'link') {
        const url = node.url;
        if (url && !url.startsWith('http') && !url.startsWith('mailto:') && !url.startsWith('#') && !url.startsWith('javascript:')) {
          
          let cleanLink = url;
          let suffix = '';
          const hashStart = url.indexOf('#');
          const queryStart = url.indexOf('?');
          const splitIndex = (hashStart !== -1 && queryStart !== -1) ? Math.min(hashStart, queryStart) : (hashStart !== -1 ? hashStart : queryStart);
          if (splitIndex !== -1) {
            cleanLink = url.substring(0, splitIndex);
            suffix = url.substring(splitIndex);
          }
          
          // 1. Dynamic topic slug resolution (topic:slug-name)
          if (cleanLink.startsWith('topic:')) {
            const slug = cleanLink.substring(6);
            const match = selectBestMatch(compilingRelPath, slug);
            if (match) {
              node.url = match.route + suffix;
              return;
            }
          }
          
          // 2. Absolute path self-healing
          if (cleanLink.startsWith('/')) {
            if (checkTargetExists(cleanLink)) {
              return; // Already correct
            }
            const parts = cleanLink.split('/');
            const slug = parts[parts.length - 1] || parts[parts.length - 2];
            const match = selectBestMatch(compilingRelPath, slug);
            if (match) {
              node.url = match.route + suffix;
              return;
            }
          }
          
          // 3. Relative path resolution & self-healing fallback
          const resolvedLocalPath = path.resolve(fileDir, cleanLink);
          if (resolvedLocalPath.startsWith(srcPages)) {
            const relToPages = path.relative(srcPages, resolvedLocalPath);
            let route = '/' + relToPages.replace(/\\/g, '/').replace(/(index)?\.(mdx|md)$/, '').replace(/\/$/, '');
            if (route === '') route = '/';
            
            if (checkTargetExists(route)) {
              node.url = route + suffix;
              return;
            }
          }
          
          // Fallback: If relative path does not exist, resolve via slug lookup
          const urlParts = cleanLink.split('/');
          const targetSlug = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2];
          if (targetSlug) {
            const match = selectBestMatch(compilingRelPath, targetSlug);
            if (match) {
              node.url = match.route + suffix;
            }
          }
        }
      }
      if (node.children) {
        node.children.forEach(walk);
      }
    }
    walk(tree);
  };
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  mdxOptions: {
    remarkPlugins: [
      remarkResolveSlugLinks
    ]
  }
});

export default withNextra();
