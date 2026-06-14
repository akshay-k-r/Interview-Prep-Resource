# SDE 2-3 Interview Prep Platform

## Project Overview
This repository is a production-grade Markdown-first knowledge base for software engineering interviews, architecture preparation, and system design learning.

## Tech Stack
- **Next.js 14**
- **React 18**
- **Nextra Docs** theme
- **TypeScript** for app shell
- **Tailwind CSS 4** via PostCSS
- **MDX/Markdown** for all learning content

## Folder Structure
- `src/pages/` — main content sections and topic pages
- `src/pages/_meta.js` — top-level sidebar navigation
- `src/pages/<section>/_meta.js` — section-specific ordering
- `src/pages/<section>/<topic>/index.mdx` — each concept as its own page
- `src/components/Tracker.tsx` — custom sidebar progress tracker

## Content Rules
- Every concept gets its own folder with `index.mdx`
- Use relative links between related topics
- Keep content self-contained, interview-friendly, and beginner-accessible
- Include diagrams, Python examples, trade-offs, and interview questions
- Avoid duplicating concepts across multiple pages

## UI Constraints
- Minimal visual chrome
- Markdown-first page layout
- No heavy custom page templates
- Sidebar tracker is the only custom UI behavior

## Notes for Future Agents
- Add new topics under `src/pages` only
- Update `_meta.js` to expose new pages in the sidebar
- Use `src/pages/index.mdx` for the site landing page
- Preserve the existing section order and naming
- Cross-link relevant concepts using relative markdown paths
