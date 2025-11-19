# Content Management Guide

This website uses **the simplest possible content management system** - just edit text files! No coding required.

## Quick Start

### 1. Update Basic Lab Info (5 minutes)

Edit `src/config/site.ts` to update your lab name, PI info, contact details, and research highlights. Just change the text between quotes.

```typescript
labName: "Your Lab Name Here",
pi: {
  name: "Your Name",
  email: "your.email@university.edu",
  // ... etc
}
```

### 2. Add Research Areas

Create `.md` files in `content/research/` folder:

**File: `content/research/machine-learning.md`**
```markdown
---
title: Machine Learning
order: 1
---

Description of your research area goes here. You can use **bold**, *italics*, and [links](https://example.com).

Add multiple paragraphs as needed.
```

### 3. Add Publications

Create `.md` files in `content/publications/` folder:

**File: `content/publications/paper-2025.md`**
```markdown
---
title: "Your Paper Title"
authors: "Author Names"
venue: "Conference/Journal Name"
year: 2025
order: 1
links:
  paper: "https://link-to-paper.com"
---

Optional abstract or description here.
```

### 4. Add PhD Students

Create `.md` files in `content/students/phd/` folder:

**File: `content/students/phd/jane-doe.md`**
```markdown
---
name: Jane Doe
research: Machine Learning
email: jane.doe@university.edu
order: 1
---

Optional bio or additional info.
```

### 5. Add News Items

Create `.md` files in `content/news/` folder:

**File: `content/news/2025-01-new-grant.md`**
```markdown
---
title: Received New Research Grant
date: 2025-01-15
category: award
order: 1
---

Details about the news item. Can include multiple paragraphs and **formatting**.
```

## Adding Photos

You have **three easy options** for adding photos:

### Option 1: Use External URLs (Easiest)
Just use a direct link to an image hosted elsewhere (e.g., your university website, LinkedIn, etc.):

```markdown
---
name: Jane Doe
photo: "https://example.com/photos/jane.jpg"
---
```

### Option 2: Store Photos Locally (Recommended)
1. Create folders: `public/images/people/`, `public/images/news/`, etc.
2. Add your photos to the appropriate folder
3. Reference them in markdown:

```markdown
---
name: Jane Doe
photo: "/images/people/jane-doe.jpg"
---
```

**Example folder structure:**
```
public/
└── images/
    ├── people/          # Student and PI photos
    │   ├── jane-doe.jpg
    │   └── john-smith.jpg
    ├── news/            # News-related images
    └── research/        # Research illustrations
```

### Option 3: Use Placeholder Services (For Testing)
Use services like unsplash for temporary photos:
```markdown
photo: "https://images.unsplash.com/photo-..."
```

### Photo Guidelines

- **Format**: JPG or PNG
- **Size**: 400x400px to 800x800px works well for profile photos
- **File naming**: Use lowercase with hyphens (e.g., `jane-doe.jpg`)
- **Keep files small**: Aim for under 500KB per photo

## Folder Structure

```
content/
├── research/          # Research areas
├── publications/      # Publications
├── students/
│   └── phd/          # PhD student profiles
└── news/             # News and updates

public/
└── images/           # Store your photos here
    ├── people/       # Team photos
    ├── news/         # News images
    └── research/     # Research-related images
```

## Tips

1. **Files appear automatically** - Just save a new `.md` file and refresh the website
2. **Order matters** - Use the `order: 1` field to control ordering (lower numbers first)
3. **Dates format** - Always use `YYYY-MM-DD` format (e.g., 2025-01-15)
4. **No coding needed** - Everything is plain text, edit in any text editor

## Markdown Basics

```markdown
# Heading
**bold text**
*italic text*
[link text](https://url.com)

- Bullet point
- Another point

1. Numbered list
2. Another item
```

## Need Help?

- All content is in the `content/` folder
- Basic site info is in `src/config/site.ts`
- Everything else is automatic!

## Deployment

After making changes:
```bash
git add .
git commit -m "Update content"
git push
```

That's it! Your site is now updated.
