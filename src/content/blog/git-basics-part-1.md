---
title: "Git Basics: Setting Up Your First Repository"
description: Learn how to initialize a Git repository and make your first commit
pubDatetime: 2025-12-11
author: Jaime AP
slug: "git-basics-part-1"
featured: false
draft: false
tags:
  - Git
  - Tutorial
series: "git-basics"
seriesOrder: 1
---

Every developer needs to know Git. It's the backbone of modern software development, enabling teams to collaborate without stepping on each other's toes.

## Installing Git

First, make sure Git is installed on your system:

```bash
git --version
```

If you don't have it, download it from [git-scm.com](https://git-scm.com/).

## Creating Your First Repository

Navigate to your project folder and run:

```bash
git init
```

This creates a hidden `.git` folder that tracks all your changes.

## Your First Commit

Stage your files and commit:

```bash
git add .
git commit -m "Initial commit"
```

Congratulations! You've just created your first Git repository. In the next part, we'll explore branching strategies.
