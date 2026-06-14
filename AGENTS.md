<!-- BEGIN:nextjs-agent-rules -->
# SDE Interview Prep Knowledge Base — Agent Guidelines

This repository is built with Next.js 14 and Nextra documentation theme. The actual content is driven through MDX pages under `src/pages` and ordered using `_meta.js` files.

## Project Overview
- **Content:** MDX/Markdown pages in `src/pages`
- **Framework:** Next.js 14 + React 18 + Nextra Docs
- **Styling:** Tailwind CSS 4 via PostCSS
- **Language:** TypeScript for app shell; Markdown/MDX for knowledge base content
- **Routing:** Nextra uses page folders and `index.mdx` for each topic
- **Sidebar:** Controlled via `src/pages/_meta.js` and `src/pages/<section>/_meta.js`

## Folder Structure (Updated)

Root-level organization:
```
src/pages/
├── index.mdx — home page
├── _meta.js — top-level sidebar order
├── 01-design-patterns/ — Gang of Four patterns (23 topics)
│   ├── _meta.js
│   ├── index.mdx
│   ├── creational/
│   ├── structural/
│   └── behavioral/
├── 02-hld/ — High-Level Design (32 topics)
│   ├── _meta.js
│   └── index.mdx
├── 03-lld/ — Low-Level Design (33+ topics)
│   ├── _meta.js
│   └── index.mdx
├── 04-dsa-patterns/ — DSA Patterns (12 topics) ✅
│   ├── _meta.js
│   └── index.mdx
├── 05-concurrency-and-os/ — Concurrency & OS (6 topics) ✅
│   ├── _meta.js
│   └── index.mdx
├── 06-behavioral-and-leadership/ — Behavioral & Leadership (5 topics) ✅
│   ├── _meta.js
│   └── index.mdx
└── 01-system-design/ — Legacy System Design (35 topics - to migrate to HLD)
    ├── _meta.js
    └── index.mdx
```

Component and style files:
- `src/components/Tracker.tsx` — custom sidebar progress tracker
- `src/styles/globals.css` — global CSS

## Content Guidelines

### For All Topics
- Every concept must be its own folder containing `index.mdx`
- Use relative links for cross-references (e.g., `[Topic](../topic-name)`)
- Update `src/pages/<section>/_meta.js` to order topics in the sidebar
- Keep Markdown content self-contained and interview-focused
- Prefer clean headings, sections, and well-structured examples
- Use modern Python/Java code examples only
- Add Mermaid diagrams for important concepts (especially system design)

### Standard Topic Format
```markdown
# Topic Name

## Introduction
Brief overview.

## Problem Statement
What problem does this solve?

## Why this exists
Motivation and context.

## Real-world analogy
Concrete real-world example.

## Definition
Clear, concise definition.

## Key concepts
- Concept 1
- Concept 2

## Internal working / Mermaid diagram
Architecture or flow visualization.

## Python/Java implementation
### Bad implementation
### Better implementation
### Best implementation

## Step-by-step explanation
Numbered walkthrough.

## Multiple real-world examples
3-5 practical applications.

## Pros
- Advantage 1
- Advantage 2

## Cons
- Disadvantage 1
- Disadvantage 2

## Interview questions
### Beginner
- Q: Question?
- A: Answer.

### Intermediate
- Q: Question?
- A: Answer.

### Senior
- Q: Question?
- A: Answer.

### Staff Engineer
- Q: Question?
- A: Answer.

## Common mistakes
- Mistake 1
- Mistake 2

## Best practices
- Practice 1
- Practice 2

## When NOT to use
Scenarios to avoid.

## Comparison with similar concepts
- **Concept A:** Difference from this topic
- **Concept B:** How they differ

## Summary
One-paragraph summary.

## Related topics
- [Related Topic](../related-topic)
- [Another Topic](../another-topic)
```

### For Design Patterns
- Include Intent, Motivation, Structure, Participants, Collaboration, Implementation
- Show UML diagrams where applicable
- Provide real-world examples from popular libraries/frameworks
- Discuss when to use and when to avoid

### For HLD Case Studies
Each case study should include:
- Functional Requirements
- Non-Functional Requirements
- Capacity Estimation
- System APIs
- Database Design
- Caching Strategy
- Scaling Strategy
- Bottlenecks & Trade-offs
- Failure Handling
- Monitoring & Metrics
- Deployment Strategy
- Potential Improvements

### For LLD & Machine Coding
- Problem Statement
- Requirements (Functional & Non-Functional)
- Class Diagram (or UML)
- Implementation (Code skeleton)
- Test Cases
- Edge Cases
- Complexity Analysis
- Improvements & Extensions

## UI Constraints
- Minimal UI, markdown-first design
- No heavy custom page templates or complex interactive components
- Sidebar tracker is the only custom UI behavior
- Avoid animations, modal overlays, or unnecessary styling logic

## Navigation and Metadata

### Root Navigation (`src/pages/_meta.js`)
Controls order of main sections. Example:
```javascript
export default {
  "index": "Introduction",
  "01-design-patterns": "Design Patterns",
  "02-hld": "HLD (High-Level Design)",
  "03-lld": "LLD (Low-Level Design)",
  "04-dsa-patterns": "DSA Patterns",
  "05-concurrency-and-os": "Concurrency & OS",
  "06-behavioral-and-leadership": "Behavioral & Leadership",
  "01-system-design": "System Design (Legacy)"
};
```

### Section Metadata (`src/pages/<section>/_meta.js`)
Controls topic order within a section. Example:
```javascript
export default {
  "index": "Overview",
  "topic-1": "Topic 1",
  "topic-2": "Topic 2",
  "topic-3": "Topic 3"
};
```

## Do's ✅
- Add new knowledge base topics under `src/pages`
- Keep content in MDX with markdown-first semantics
- Cross-link related chapters using relative paths
- Preserve the existing sidebar metadata structure
- Add interview question sections to every page
- Update `_meta.js` when adding new pages
- Follow the standard topic template
- Include Mermaid diagrams and code examples
- Add real-world analogies and interview questions

## Don'ts ❌
- Do not add new content outside `src/pages`
- Do not alter the app shell for content layout unless absolutely needed
- Do not add full React pages in `src/components` unless they support Markdown display
- Do not use framework assumptions from older Next.js app router patterns
- Do not break `src/pages/_meta.js` ordering format
- Do not duplicate content across multiple pages
- Do not add heavy styling or custom components
- Do not forget to update `_meta.js` when adding new topics

## Notes for Agents

### Before Starting
1. Check `agent-todo.md` for progress tracking
2. Verify what topics are completed vs pending
3. Read these guidelines completely
4. Review similar existing pages for consistency

### Adding New Topics
1. Create folder: `mkdir src/pages/<section>/<topic-name>`
2. Create content: `touch src/pages/<section>/<topic-name>/index.mdx`
3. Write content following the standard format
4. Update `src/pages/<section>/_meta.js` to include new topic
5. Add cross-references to related topics
6. Update `agent-todo.md` with completion status

### Content Creation Best Practices
- Use `index.mdx` inside topic folders (not nested file names)
- The app uses a custom `SidebarTracker` to inject localStorage checkboxes
- Keep sentences concise and scannable
- Use bullet points and short paragraphs
- Include 2-3 code examples per topic (bad → better → best pattern)
- Add 3-5 real-world examples
- Provide interview questions at multiple difficulty levels
- Use relative links for all internal references
- Add Mermaid diagrams for architectural concepts

### Metadata Updates
When adding a new topic:
1. Update `src/pages/<section>/_meta.js` with `"topic-id": "Topic Display Name"`
2. Update `src/pages/<section>/index.mdx` to list the new topic in the Topics section
3. Update `agent-todo.md` to mark the topic as completed

### Cross-Linking
Use relative paths consistently:
```markdown
- [Related Topic](../related-topic)
- [Another Related Topic](../../01-design-patterns/pattern-name)
```

## Progress Tracking

See `agent-todo.md` for:
- Complete list of completed topics (58/147+)
- List of all pending topics (89+)
- Status breakdown by section
- Priority order for next agent work

Current completion: **58/147+ topics (39%)**

<!-- END:nextjs-agent-rules -->