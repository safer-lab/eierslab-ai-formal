# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/742b532b-db44-4d5e-abb0-375ba4567934

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/742b532b-db44-4d5e-abb0-375ba4567934) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Content Management

This site uses a **Markdown-based content management system**. All content (students, research areas, publications, news) is managed through Markdown files with YAML frontmatter in the `/content` folder.

### Quick Start: Adding Content

**No code changes needed!** Just add/edit Markdown files in the appropriate folder:

- **PhD Students**: `content/students/phd/firstname-lastname.md`
- **Research Areas**: `content/research/area-name.md`
- **Publications**: `content/publications/paper-slug.md`
- **News**: `content/news/news-slug.md`

Each file has:
1. **YAML frontmatter** (metadata at the top between `---`)
2. **Markdown body** (rich content)

See `content/README.md` for detailed documentation and examples.

### Example: Adding a New PhD Student

Create `content/students/phd/jane-doe.md`:

```markdown
---
name: Jane Doe
role: PhD Student
research: Machine Learning Safety
email: jdoe@stevens.edu
photo: /images/students/jane.jpg
order: 4
---

Jane's research focuses on safety verification of machine learning systems...
```

Save the file and it will automatically appear on the People page!

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/742b532b-db44-4d5e-abb0-375ba4567934) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
