# Photo Examples - Complete Guide

Here are complete, copy-paste examples for adding photos to your website.

## Example 1: PhD Student with Photo (Local File)

**Step 1:** Add photo to `public/images/people/jane-doe.jpg`

**Step 2:** Create `content/students/phd/jane-doe.md`:
```markdown
---
name: Jane Doe
research: Machine Learning for Healthcare
email: jane.doe@university.edu
photo: "/images/people/jane-doe.jpg"
order: 1
---

Jane is a third-year PhD student researching the application of machine learning
to medical diagnosis systems with formal safety guarantees.
```

## Example 2: PhD Student with Photo (External URL)

Create `content/students/phd/john-smith.md`:
```markdown
---
name: John Smith
research: Formal Verification of Neural Networks
email: john.smith@university.edu
photo: "https://www.university.edu/profiles/john-smith/photo.jpg"
order: 2
---

John's research focuses on developing automated verification techniques
for deep neural networks.
```

## Example 3: PhD Student without Photo

Photos are **optional**! Just omit the `photo` field:

Create `content/students/phd/alice-johnson.md`:
```markdown
---
name: Alice Johnson
research: Neurosymbolic AI
email: alice.j@university.edu
order: 3
---

Alice works on combining symbolic reasoning with deep learning.
```

## Example 4: News Item with Image

**Step 1:** Add image to `public/images/news/conference-2025.jpg`

**Step 2:** Create `content/news/2025-01-conference.md`:
```markdown
---
title: Lab Members Present at NeurIPS 2025
date: 2025-01-15
category: publication
order: 1
---

Our team presented three papers at NeurIPS 2025 in Vancouver.

![Conference photo](/images/news/conference-2025.jpg)

The presentations covered topics in formal verification, neurosymbolic AI,
and safe reinforcement learning.
```

## Quick Reference

### For Student/People Photos
```markdown
photo: "/images/people/filename.jpg"     # Local file
photo: "https://example.com/photo.jpg"   # External URL
# or omit photo field entirely for no photo
```

### For Images in Content (News, Research)
```markdown
![Description](/images/news/image.jpg)
![Diagram](/images/research/architecture.png)
```

## Common Scenarios

### Scenario: Team photo already on university website
```markdown
---
name: Professor Smith
photo: "https://www.university.edu/faculty/smith/headshot.jpg"
---
```

### Scenario: Using LinkedIn photo
1. Right-click your LinkedIn photo → "Copy image address"
2. Use that URL:
```markdown
photo: "https://media.licdn.com/dms/image/..."
```

### Scenario: Want to add photos later
Just create the markdown file without the `photo` field. Add it later when ready:
```markdown
---
name: Student Name
research: Research Area
email: email@university.edu
# photo: will add later
---
```

## File Organization

Keep it organized:
```
public/images/
├── people/
│   ├── jane-doe.jpg          # PhD student
│   ├── john-smith.jpg        # PhD student
│   └── prof-wilson.jpg       # PI
├── news/
│   ├── conference-2025.jpg
│   └── award-ceremony.jpg
└── research/
    ├── system-diagram.png
    └── results-chart.png
```

## Pro Tips

1. **Consistency**: Use same dimensions for all people photos (e.g., all 600x600px)
2. **Naming**: Match photo filename to markdown filename (`jane-doe.md` → `jane-doe.jpg`)
3. **Testing**: Start with external URLs, switch to local files when ready
4. **Backup**: Keep original high-res photos in a separate folder

## Need Help?

- Photos don't appear? Check the file path starts with `/images/`
- Slow loading? Compress images using [TinyPNG](https://tinypng.com)
- Want square photos? Use free online croppers like [Crop Circle](https://crop-circle.imageonline.co)
