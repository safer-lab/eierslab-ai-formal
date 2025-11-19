# Professional Academic Lab Website

A clean, minimal, professional website for academic research labs. Built with the easiest possible content management system.

## Design Philosophy

- **Clean & Minimal**: Professional academic aesthetic with lots of white space
- **Typography-Focused**: Clear hierarchy using font weights and sizes
- **Easy Content Management**: Update everything through simple text files
- **No Coding Required**: All content updates via markdown and config files

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- Markdown-based content system
- shadcn/ui components

## Getting Started

### 1. Update Lab Information (2 minutes)

Edit `src/config/site.ts` - just change the text between quotes:

```typescript
labName: "Your Lab Name",
pi: {
  name: "Your Name",
  email: "your.email@university.edu",
  // ...
}
```

### 2. Add Content (No Coding!)

Create `.md` files in the `content/` folder:

- **Research**: `content/research/your-topic.md`
- **Publications**: `content/publications/your-paper.md`
- **Students**: `content/students/phd/student-name.md`
- **News**: `content/news/your-update.md`

See `CONTENT-GUIDE.md` for detailed instructions and examples.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Content Management

The website automatically displays content from markdown files. Just add a new `.md` file and it appears on the site!

**Example - Add a publication:**

Create `content/publications/my-paper-2025.md`:

```markdown
---
title: "Your Paper Title"
authors: "Author Names"
venue: "Conference Name"
year: 2025
order: 1
---

Optional description here.
```

That's it! The publication will appear automatically.

## Complete Documentation

See `CONTENT-GUIDE.md` for complete instructions on managing all content.

## Deployment

Commit your changes and push to deploy:

```bash
git add .
git commit -m "Update content"
git push
```
