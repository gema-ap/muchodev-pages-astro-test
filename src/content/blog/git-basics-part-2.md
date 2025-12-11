---
title: "Git Basics: Branching and Merging"
description: Understanding branches and how to merge your work effectively
pubDatetime: 2025-12-11
author: Jaime AP
slug: "git-basics-part-2"
featured: false
draft: false
tags:
  - Git
  - Tutorial
series: "git-basics"
seriesOrder: 2
---

Branches are where the real power of Git shines. They let you experiment without breaking your main codebase.

## Creating a Branch

```bash
git checkout -b feature/new-feature
```

This creates a new branch and switches to it immediately.

## Working on Your Branch

Make changes, commit them as usual:

```bash
git add .
git commit -m "Add new feature"
```

Your changes are isolated from the main branch until you decide to merge.

## Merging Back

When your feature is ready, merge it back:

```bash
git checkout main
git merge feature/new-feature
```

## Handling Conflicts

Sometimes Git can't auto-merge. When that happens:

1. Open the conflicting files
2. Look for `<<<<<<<` markers
3. Resolve the conflicts manually
4. Stage and commit the resolution

In the final part of this series, we'll cover working with remote repositories.
