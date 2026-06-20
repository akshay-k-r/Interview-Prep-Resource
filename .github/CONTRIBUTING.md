# Contributing to Interview Prep Resource

Thank you for considering contributing to **Interview Prep Resource**!

Every contribution—whether it's a new topic, a typo fix, or an improvement to existing content—helps make this repository a better resource for software engineering interview preparation.

---

# Code of Conduct

Please help maintain a welcoming and professional environment.

* Be respectful and constructive.
* Focus on educational value and technical accuracy.
* Follow the content standards defined in **`AGENTS.md`**.

---

# Ways to Contribute

You can contribute in many ways:

*  Add new interview topics (most common)
*  Fix typos or improve existing content
*  Add Mermaid diagrams or better code examples
*  Improve documentation, README, or tooling
*  Report bugs or suggest new topics

---

#  Development Setup

Clone the repository and start the local development server.

```bash
git clone https://github.com/akshay-k-r/Interview-Prep-Resource.git
cd Interview-Prep-Resource

npm install
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

# Adding New Content

> **Always follow `AGENTS.md`** — it is the single source of truth for writing standards and content structure.

## 1. Check Pending Topics

Review the remaining work:

```text
agent-todo.md
```

---

## 2. Create a Topic Folder

Create a new directory using **kebab-case**.

```bash
mkdir -p src/pages/<section>/<kebab-case-topic-name>
```

Example:

```bash
mkdir -p src/pages/02-hld/rate-limiter
```

---

## 3. Create `index.mdx`

Inside the new folder, create:

```text
index.mdx
```

Use the standard template defined in **`AGENTS.md`**.

---

## 4. Update Navigation

Add the new topic to the corresponding section:

```text
src/pages/<section>/_meta.js
```

---

## 5. Cross-Link Related Topics

Whenever appropriate, link related concepts using relative Markdown links.

Example:

```md
See also: [Consistent Hashing](../consistent-hashing)
```

---

## 6. Update Progress Tracker

Mark the topic as completed in:

```text
agent-todo.md
```

---

#  Pull Request Guidelines

Please keep pull requests focused and easy to review.

* One PR = One topic or one improvement
* Use clear commit/PR titles

Examples:

```text
feat: add Rate Limiter HLD
docs: improve Singleton Pattern explanation
fix: correct typo in CAP theorem
```

Before submitting:

* ✅ Ensure `npm run build` passes
* ✅ Reference related issues (if any)
* ✅ Verify links and formatting

---

#  Content Standards

Every article should:

* Follow the exact section order defined in **`AGENTS.md`**
* Be concise, interview-focused, and easy to scan
* Include practical examples
* Include Mermaid diagrams where appropriate
* Use **Bad → Better → Best** code progression
* Prefer Python and Java examples
* Include beginner, intermediate, and advanced interview questions
* Explain trade-offs and real-world use cases

For complete guidelines, **read `AGENTS.md` before creating content**.

---

#  Questions

Need help?

* Open an issue for discussion.
* Tag **@akshay-k-r** in your Pull Request if you need a review or clarification.

---

#  Thank You

Every contribution helps thousands of developers prepare for technical interviews.

Happy coding, and thank you for contributing!
