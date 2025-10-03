# Content Management System

This folder contains all the content for the Eiers Lab website, organized as Markdown files with YAML frontmatter.

## Structure

```
content/
├── students/
│   ├── phd/          # PhD student profiles
│   ├── masters/      # Master's student profiles (optional)
│   └── undergrad/    # Undergraduate profiles (optional)
├── research/         # Research area descriptions
├── publications/     # Publication entries
└── news/            # News and updates
```

## Adding Content

### PhD Students

Create a new file in `content/students/phd/` with the format `firstname-lastname.md`:

```markdown
---
name: Student Name
role: PhD Student
research: Research Focus Area
email: email@stevens.edu
photo: /images/students/photo.jpg
order: 1
---

Bio content here in Markdown format. Supports **bold**, *italic*, links, etc.
```

### Research Areas

Create a new file in `content/research/` with a descriptive slug:

```markdown
---
title: Research Area Name
icon: brain  # Options: brain, shield, alert-triangle, network, book-open, layers
order: 1
---

Description of the research area in Markdown.
```

### Publications

Create a new file in `content/publications/`:

```markdown
---
title: "Paper Title"
authors: "Author Names"
venue: "Conference/Journal Name"
year: 2025
type: "Conference"  # or "Journal"
links:
  paper: "url"
  arxiv: "url"
order: 1
---

Abstract or description in Markdown.
```

### News Items

Create a new file in `content/news/`:

```markdown
---
title: News Title
date: 2025-03-15
category: publication  # Options: publication, award, team, event
order: 1
---

News content in Markdown.
```

## Features

- **YAML Frontmatter**: Structured metadata at the top of each file
- **Markdown Body**: Rich content formatting with Markdown syntax
- **Automatic Sorting**: Content is sorted by the `order` field or alphabetically
- **Dynamic Loading**: No need to edit TypeScript code - just add/edit Markdown files

## Workflow

1. Add a new Markdown file in the appropriate folder
2. Fill in the frontmatter with required fields
3. Write content in the body using Markdown
4. Save the file - it will automatically appear on the website

No code changes needed!
