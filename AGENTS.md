<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This repository is built with Next.js 14 and Nextra documentation theme. The actual content is driven through MDX pages under `src/pages` and ordered using `_meta.js` files.

## Project Overview
- **Content:** MDX/Markdown pages in `src/pages`
- **Framework:** Next.js 14 + React 18 + Nextra Docs
- **Styling:** Tailwind CSS 4 via PostCSS
- **Language:** TypeScript for app shell; Markdown/MDX for knowledge base content
- **Routing:** Nextra uses page folders and `index.mdx` for each topic
- **Sidebar:** Controlled via `src/pages/_meta.js` and `src/pages/<section>/_meta.js`

## Folder Structure
- `src/pages/index.mdx` — home page
- `src/pages/_meta.js` — top-level sidebar order
- `src/pages/01-system-design/` — system design section
- `src/pages/02-dsa-patterns/` — DSA patterns section
- `src/pages/03-concurrency-and-os/` — concurrency section
- `src/pages/04-behavioral-and-leadership/` — leadership section
- `src/components/` — custom UI components such as the sidebar tracker
- `src/styles/` — global CSS

## Content Guidelines
- Every concept must be its own folder containing `index.mdx`
- Use relative links for cross-references
- Update `src/pages/<section>/_meta.js` to order topics in the sidebar
- Keep Markdown content self-contained and interview-focused
- Prefer clean headings, sections, and well-structured examples
- Use modern Python code examples only
- Add Mermaid diagrams for important concepts

## UI Constraints
- Minimal UI, markdown-first design
- No heavy custom page templates or complex interactive components
- Sidebar tracker is the only custom UI behavior
- Avoid animations, modal overlays, or unnecessary styling logic

## Do's
- Add new knowledge base topics under `src/pages`
- Keep content in MDX with markdown-first semantics
- Cross-link related chapters using relative paths
- Preserve the existing sidebar metadata structure
- Add interview question sections to every page

## Don'ts
- Do not add new content outside `src/pages`
- Do not alter the app shell for content layout unless absolutely needed
- Do not add full React pages in `src/components` unless they support Markdown display
- Do not use framework assumptions from older Next.js app router patterns
- Do not break `src/pages/_meta.js` ordering format

## Notes for Agents
- Use `src/pages/01-system-design/_meta.js` to insert new system design topics
- Use `src/pages/02-dsa-patterns/index.mdx` etc. for section content entry points
- Prefer `index.mdx` inside a topic folder rather than nested file names
- The app uses a custom `SidebarTracker` to inject localStorage checkboxes

<!-- END:nextjs-agent-rules -->