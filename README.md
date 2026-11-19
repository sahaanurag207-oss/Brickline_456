# Brickline

Brickline is a responsive real-estate landing page built with React and Vite. It showcases properties, development projects, client testimonials, and ways to contact the Brickline team.

## Features

- Responsive navigation with a mobile menu
- Interactive hero, property spotlight, project, and testimonial carousels
- Property and service highlights with contact links
- Consultation links that open an email to `hello@brickline.com`
- Property imagery hosted by Unsplash and fonts loaded from Google Fonts

This is a front-end demo: it does not include a backend, property search, or contact form submission. Contact actions use `mailto:` links.

## Getting started

Install [Node.js](https://nodejs.org/) (18 or newer), then install dependencies and start the development server:

```sh
npm ci
npm run dev
```

Vite prints a local URL in the terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

To check a production build:

```sh
npm run build
npm run preview
```
## 📂 Project Structure

```text
Brickline_456/
├── public/                 # Static assets
├── src/
│   ├── data/
│   │   └── siteData.js     # Centralized hero, property, project, and testimonial content
│   ├── pages/
│   │   └── HomePage.jsx    # Main landing page sections and interactive carousels
│   ├── App.jsx             # Root application component
│   ├── index.css           # Global styles, variables, and responsive layout rules
│   └── main.jsx            # React DOM entry point
├── index.html              # HTML entry template and font imports
├── package.json            # Dependencies and npm scripts
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite bundler configuration
```
