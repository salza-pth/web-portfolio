# web-portfolio

My personal portfolio — a single-page site built with React and Vite.
It covers who I am, what I've been working on, and how to reach me, with a
focus on data, databases, and web development.

**Live:** _add your Vercel URL here after deploy_

## Sections

- **Hero** — intro and a link to my CV
- **About** — short background and what I'm currently exploring
- **Projects** — selected coursework and team projects, with a detail view for each
- **Experience** — organizational and leadership roles
- **Achievements & Certifications**
- **Tools & Technologies**
- **Contact** — email and social links

## Tech stack

- React 18
- Vite
- CSS Modules
- Self-hosted fonts via `@fontsource` (Fraunces for headings, Inter for body)

No UI framework or extra runtime dependencies — just React and plain CSS.

## Running locally

Requires Node.js 18+ (20 recommended).

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├─ components/
│  ├─ layout/      # Navbar, MobileMenu, Footer
│  ├─ sections/    # Hero, About, Projects, Experience, Achievements, Tools, Contact
│  └─ ui/          # shared pieces (modal, icons, image preview)
├─ data/           # content as data (projects, experience, tools, etc.)
├─ hooks/          # small custom hooks
└─ styles/         # design tokens + global styles
public/
├─ files/cv.pdf    # downloadable/viewable CV
├─ images/         # project screenshots and photos
└─ logos/          # technology logos
```

Content lives in `src/data/`, so updating a project or adding a tool is just a
data edit — no component changes needed.

## Deployment

Deployed on Vercel. Pushing to `main` triggers an automatic redeploy.
