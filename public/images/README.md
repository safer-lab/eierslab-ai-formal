# Images Folder

Store all your website images here!

## Folder Organization

```
images/
├── people/       # Photos of lab members (PI, students, staff)
├── news/         # Images for news items and announcements
└── research/     # Research-related images and diagrams
```

## How to Add Photos

### 1. Add the Image File
Simply drag and drop or copy your image file into the appropriate folder:
- Team photos → `people/`
- News images → `news/`
- Research diagrams → `research/`

### 2. Reference in Markdown
Use the path starting from `/images/`:

**For student profiles:**
```markdown
---
name: Jane Doe
photo: "/images/people/jane-doe.jpg"
---
```

**For news items:**
Add images in the markdown content:
```markdown
![Alt text](/images/news/conference-2025.jpg)
```

## Best Practices

- **File names**: Use lowercase with hyphens (e.g., `jane-doe.jpg`, `neurips-2025.jpg`)
- **Formats**: JPG for photos, PNG for graphics with transparency
- **Size**:
  - Profile photos: 400-800px square
  - News images: 1200px max width
  - Keep file sizes under 500KB when possible
- **Optimization**: Compress images before uploading (use tools like TinyPNG)

## Example

After adding `public/images/people/jane-doe.jpg`, reference it as:
```
/images/people/jane-doe.jpg
```

That's it! The website will automatically display your images.
