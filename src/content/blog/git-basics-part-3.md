---
title: "Git Basics: Working with Remote Repositories"
description: Push your code to GitHub and collaborate with your team
pubDatetime: 2025-12-11
author: Jaime AP
slug: "git-basics-part-3"
featured: false
draft: false
tags:
  - Git
  - Tutorial
series: "git-basics"
seriesOrder: 3
---

Local repositories are great, but the real collaboration happens when you connect to a remote like GitHub or GitLab.

## Adding a Remote

```bash
git remote add origin https://github.com/username/repo.git
```

## Pushing Your Code

Send your commits to the remote:

```bash
git push -u origin main
```

The `-u` flag sets up tracking, so future pushes only need `git push`.

## Pulling Changes

Get updates from your team:

```bash
git pull origin main
```

## The Complete Workflow

Here's a typical day with Git:

1. `git pull` - Get latest changes
2. `git checkout -b feature/my-task` - Create feature branch
3. Work, commit, repeat
4. `git push -u origin feature/my-task` - Push your branch
5. Create a Pull Request on GitHub
6. Merge after review

That's it! You now know the fundamentals of Git. Practice these commands daily and they'll become second nature.
