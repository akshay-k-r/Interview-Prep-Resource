# SDE Interview Prep Knowledge Base

A Markdown-first learning platform built with Next.js 14 and Nextra. This repository is designed for software engineering interview preparation, system design, architecture, and backend engineering.

## Setup

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/pages/` — MDX content pages and section directories
- `src/pages/_meta.js` — top-level sidebar order
- `src/pages/<section>/_meta.js` — section topic order
- `src/components/Tracker.tsx` — localStorage-based sidebar progress tracker
- `theme.config.jsx` — Nextra theme configuration
- `src/styles/globals.css` — global styling

## Content Guidelines

- Add new topics using `src/pages/<section>/<topic>/index.mdx`
- Keep each concept as a separate folder
- Use relative links for cross-topic references
- Follow a learning path from fundamentals to advanced design/case studies
- Include diagrams, examples, pros/cons, and interview questions

## Notes

The repo uses the legacy Nextra pages structure rather than the App Router. Do not move content into `src/app` unless the framework is migrated first.
