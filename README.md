# SDE Interview Prep Knowledge Base

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Nextra](https://img.shields.io/badge/Nextra-3-blue?style=for-the-badge&logo=markdown)](https://nextra.site)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/github/stars/akshay-k-r/Interview-Prep-Resource?style=for-the-badge)](https://github.com/akshay-k-r/Interview-Prep-Resource/stargazers)

A comprehensive, production-grade **Markdown-first** learning platform for Software Engineering interviews. Covers System Design (HLD), Low-Level Design (LLD), Design Patterns, DSA, Concurrency, and Behavioral topics.

---

**⭐ If you find this project useful, please star the repo!** It helps others discover it and motivates continued improvements.

## 🚀 Quick Start

**Live :** [Deployed on Vercel](https://interview-prep-resource.vercel.app/)

### Deploy to Vercel (One Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fakshay-k-r%2FInterview-Prep-Resource)

---

# SDE Interview Prep Knowledge Base

A comprehensive, production-grade learning platform for software engineering interview preparation, system design, and architecture. Built with Next.js 14, Nextra, and Markdown for clarity and maintainability.

## 🎯 Project Overview

This repository provides a structured knowledge base covering:
- **System Design & HLD** — distributed systems, databases, caching, messaging, microservices
- **Low-Level Design & LLD** — OOP, SOLID principles, design patterns, Java concurrency
- **Design Patterns** — creational, structural, behavioral patterns
- **Data Structures & Algorithms** — core DSA patterns and techniques
- **Concurrency & OS** — threading, synchronization, scheduling, memory models
- **Behavioral & Leadership** — communication, decision-making, team dynamics

Each topic includes:
- Clear definitions and real-world analogies
- Mermaid diagrams and Python/Java code examples
- Trade-offs, pros/cons, and common mistakes
- Interview questions (beginner to staff engineer level)
- Related topics for cross-reference learning
 
**Progress:** 50/148 topics completed (34%) — see `agent-todo.md` for detailed tracking.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Basic familiarity with Markdown and Next.js

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📂 Repository Structure

```
.
├── README.md                      # This file
├── AGENTS.md                      # Complete project & content guidelines
├── CLAUDE.md                      # References AGENTS.md
├── GEMINI.md                      # References AGENTS.md
├── agent-todo.md                  # Progress tracking (covered vs pending topics)
├── package.json                   # Dependencies & build scripts
├── tsconfig.json                  # TypeScript configuration
├── next.config.mjs                # Next.js configuration
├── theme.config.jsx               # Nextra theme settings
├── postcss.config.mjs             # PostCSS for Tailwind CSS
├── content-graph.mermaid          # Visualize content structure (Mermaid)
├── context-graph.json             # Context graph JSON
├── src/
│   ├── pages/
│   │   ├── index.mdx              # Home/Introduction page
│   │   ├── about.mdx              # About page
│   │   ├── contributing.mdx       # Contributing guidelines
│   │   ├── _meta.js               # Root navigation order
│   │   ├── 01-design-patterns/    # Gang of Four patterns (23 topics)
│   │   ├── 02-hld/                # High-level design (32 topics)
│   │   ├── 03-lld/                # Low-level design (33+ topics)
│   │   ├── 04-dsa-patterns/       # Data structures & algorithms (12 topics) ✅
│   │   ├── 05-concurrency-and-os/ # OS & concurrency (6 topics) ✅
│   │   ├── 06-behavioral-and-leadership/ # Soft skills (5 topics) ✅
│   ├── components/
│   │   └── Tracker.tsx            # Progress tracker component
│   ├── styles/
│   │   └── globals.css            # Global CSS
│   └── _app.tsx                   # Next.js app wrapper
├── public/                        # Static assets
└── theme.config.jsx               # Nextra theme config

```

### Key Files

| File | Purpose |
|------|---------|
| `AGENTS.md` | **Master reference** — project rules, structure, content guidelines |
| `agent-todo.md` | **Progress tracking** — completed topics, pending work, next tasks |
| `src/pages/_meta.js` | Navigation order for main sections |
| `src/pages/<section>/_meta.js` | Topic order within each section |
| `src/pages/<section>/<topic>/index.mdx` | Individual topic content |

---

## 📖 Content Organization

### Section Breakdown

| Section | Status | Topics | Folder |
|---------|--------|--------|--------|
| Design Patterns | ✅ Complete | 23 | `01-design-patterns/` |
| HLD (High-Level Design) | ✅ Complete | 68 | `02-hld/` |
| LLD (Low-Level Design) | ✅ Complete | 33+ | `03-lld/` |
| DSA Patterns | ✅ Complete | 12 | `04-dsa-patterns/` |
| Concurrency & OS | ✅ Complete | 6 | `05-concurrency-and-os/` |
| Behavioral & Leadership | ✅ Complete | 5 | `06-behavioral-and-leadership/` |

### Adding New Topics

1. Create a folder under the appropriate section:
   ```bash
   mkdir src/pages/02-hld/topic-name
   ```

2. Create an `index.mdx` file with content following the template format (see AGENTS.md)

3. Update the section's `_meta.js` to include the new topic:
   ```javascript
   export default {
     "existing-topic": "Existing Topic",
     "topic-name": "Topic Name"  // Add this line
   };
   ```

4. Cross-link related topics using relative paths:
   ```markdown
   - [Related Topic](../related-topic)
   ```

---

## 🎓 Content Format

Each topic follows a consistent structure:

```markdown
# Topic Name

## Introduction
Brief overview of the concept.

## Problem Statement
What problem does this solve?

## Why this exists
Motivation and use cases.

## Key concepts
- Concept 1
- Concept 2

## Python implementation
Code examples showing bad → better → best patterns.

## Interview questions
- **Beginner**: Q & A
- **Intermediate**: Q & A
- **Senior**: Q & A

## Best practices
Actionable guidelines.

## Related topics
Links to cross-referenced content.
```

See `AGENTS.md` for detailed content guidelines.

---

## 🛠️ Project Tech Stack

- **Framework:** Next.js 14 with Pages Router
- **UI Component Library:** Nextra Docs Theme
- **Language:** TypeScript (app shell) + Markdown/MDX (content)
- **Styling:** Tailwind CSS 4 via PostCSS
- **Content:** Markdown/MDX with Mermaid diagrams

### Why This Stack?

- **Next.js 14:** Fast, modern React framework with excellent performance
- **Nextra:** Markdown-first documentation without unnecessary overhead
- **Markdown/MDX:** Version-controllable, searchable, interview-focused content
- **Tailwind CSS:** Minimal utility-first styling, keeps UI clean
- **Mermaid:** Simple, expressive diagrams for system architecture

---

## 📋 Content Guidelines

### Do's ✅
- Keep each concept as a separate folder with `index.mdx`
- Use relative links for cross-topic references
- Include Mermaid diagrams for system design topics
- Provide Python/Java code examples
- Add interview questions at all levels (beginner → staff engineer)
- Update `_meta.js` when adding new pages
- Follow a learning path from fundamentals to advanced topics

### Don'ts ❌
- Do NOT add content outside `src/pages/`
- Do NOT use complex custom React components for content
- Do NOT break the `_meta.js` ordering format
- Do NOT duplicate concepts across multiple pages
- Do NOT add heavy styling or animations
- Do NOT change the sidebar tracker behavior without reason

---

## 🔄 Workflow for Next Agents

1. **Before starting:** Check `agent-todo.md` for progress tracking and pending topics
2. **Reference guidelines:** Read `AGENTS.md` for complete rules and conventions
3. **Create content:** Add new topics following the format in existing pages
4. **Update navigation:** Modify `_meta.js` files to expose new topics
5. **Update tracking:** Add completed topics to `agent-todo.md`

---

## 📊 Progress Tracking

Current completion: **50/148 topics (34%)**

- ✅ **Completed:** DSA Patterns (12/12), Concurrency & OS (6/6), Behavioral & Leadership (5/5)
- 🚧 **Pending:** Design Patterns (8/23), HLD (19/69), LLD (0/33+)

See `agent-todo.md` for detailed breakdown with status for each topic.

---

## 🤝 Contributing

This repository is maintained for educational purposes. To add content:

1. Fork and create a feature branch
2. Add new topics following the format in `AGENTS.md`
3. Update relevant `_meta.js` files
4. Update `agent-todo.md` with progress
5. Submit a pull request

---

## 📝 License

This content is provided for educational purposes. All code examples use Python/Java and are licensed under MIT.

---

## 📧 Support & Questions

For questions about:
- **Content structure:** See `AGENTS.md`
- **Progress & pending work:** See `agent-todo.md`
- **Development setup:** See this README

For specific topics, refer to the relevant section in the knowledge base.

---

## 🔗 Quick Links

- [AGENTS.md](./AGENTS.md) — Project rules & guidelines
- [agent-todo.md](./agent-todo.md) — Progress tracker
- [Home Page](./src/pages/index.mdx) — Learning path
- [About](./src/pages/about.mdx) — About the project
- [Submit contribution](./src/pages/contributing.mdx) — Submit contribution
- [Documentation](./docs/README.md) — Documentation
- [Design Patterns](./src/pages/01-design-patterns/index.mdx) — GoF patterns
- [HLD](./src/pages/02-hld/index.mdx) — System design & architecture
- [LLD](./src/pages/03-lld/index.mdx) — Object-oriented design
- [DSA Patterns](./src/pages/04-dsa-patterns/index.mdx) — Data structures & algorithms
