# Architecture Overview

## Tech Stack
This project is a static site built using the following technologies:
- **[Next.js 14](https://nextjs.org/)**: The underlying React framework used for static site generation (SSG) and fast page routing.
- **[Nextra](https://nextra.site/)**: A powerful framework built on top of Next.js specifically designed for building documentation sites. We use the `nextra-theme-docs` theme.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Used alongside PostCSS for utility-first styling.
- **[MDX](https://mdxjs.com/)**: Markdown for the component era. It allows us to write standard markdown while seamlessly embedding React components (like the Sidebar Tracker).

## Routing and Structure
Nextra handles routing through the filesystem. Every `.md` or `.mdx` file placed inside `src/pages/` automatically becomes a route.

### The `_meta.js` System
Instead of relying purely on alphabetical file names, Nextra uses `_meta.js` (or `_meta.json`) files to determine the order and display names of items in the sidebar. 
- **Root `_meta.js`**: Located at `src/pages/_meta.js`. Controls the top-level sections (e.g., Design Patterns, HLD, LLD) and Navbar links (`type: "page"`).
- **Nested `_meta.js`**: Each subdirectory (e.g., `src/pages/02-hld/_meta.js`) dictates the order of topics within that specific section.

## Styling & Theme Configuration
The overall look and feel, including the navbar, logos, SEO metadata, and footer, are controlled by the `theme.config.jsx` file at the root of the repository. Nextra injects these configurations globally.

## The Progress Tracker Component
To help users track their learning journey, we've implemented a custom React component located at `src/components/Tracker.tsx`. 
- **How it works:** It is injected globally into the main layout via `theme.config.jsx`. It parses the active Nextra sidebar DOM, injects checkboxes next to each topic, and syncs the checked state to the user's `localStorage`.
