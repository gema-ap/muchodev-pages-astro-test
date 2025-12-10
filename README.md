# Astro Blog Starter

Minimal Astro blog template with Pages CMS integration.

## Quick Start

```bash
npm install
npm run dev
```

Open [localhost:4321](http://localhost:4321) in your browser.

## Commands

| Command           | Action                    |
| ----------------- | ------------------------- |
| `npm run dev`     | Start dev server          |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run format`  | Format code with Prettier |
| `npm run lint`    | Lint with ESLint          |

## Project Structure

```
src/
├── content/blog/    # Blog posts (markdown)
├── components/      # Astro/React components
├── layouts/         # Page layouts
├── pages/           # Routes
├── styles/          # Global CSS
└── config.ts        # Site configuration
```

## Configuration

Edit `src/config.ts` to customize:

- Site title, author, description
- Social links
- OG image defaults

## Adding Posts

Create `.md` files in `src/content/blog/` with frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDatetime: 2024-01-01T00:00:00Z
tags:
  - example
---
```

## Tech Stack

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [React](https://reactjs.org/) (for interactive components)
- [Fuse.js](https://fusejs.io/) (search)
