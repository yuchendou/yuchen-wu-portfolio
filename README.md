# Yuchen Wu — Personal Portfolio

Professional portfolio for internship and graduate applications in cybersecurity, software engineering, backend, Trust & Safety, and AI-related roles.

Built with **React**, **TypeScript**, **Vite**, and modern CSS. Ready for **Vercel** deployment.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview the production build locally |

## Configure personal links

Edit `src/config/site.ts`:

- `GITHUB_URL`
- `LINKEDIN_URL`
- `EMAIL`
- `RESUME_URL` (default `/resume.pdf`)
- `RESUME_ENABLED` — set to `true` after placing `public/resume.pdf`

Empty values keep links visible but inactive so the site never invents contact details.

## Add assets

Suggested placeholders to replace:

- `public/resume.pdf`
- FarmLink UI screenshots / architecture
- Cybersecurity lab network diagram (no real IPs/secrets)
- Accessible Camera App screenshot
- Yulon internship visuals (only if permitted)
- AI privacy research diagram
- Optional Open Graph image (then add `og:image` in `index.html`)

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: Vite (build `npm run build`, output `dist`).
4. `vercel.json` already includes an SPA rewrite for client-side routes.

## Project structure

```text
src/
  components/     Navbar, Hero, About, Experience, Projects, Skills, Education, Contact, Footer
  pages/          Home + project detail pages
  data/           experience, projects, skills, education
  config/site.ts  Contact / resume placeholders
  styles/         Layout CSS
public/           favicon, resume
```

## Content accuracy

This site intentionally avoids invented employers, grades, repositories, or URLs. Review FarmLink feature status, internship metrics, and research framing before publishing.
