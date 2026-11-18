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

## Project structure

```text
src/
  data/siteData.js    Property, hero, showcase, and testimonial content
  pages/HomePage.jsx  Landing page sections and interactive UI
  App.jsx             Application entry component
  index.css           Global styles and responsive layouts
  main.jsx            React root and stylesheet entry
index.html            HTML document and page metadata
vite.config.js        Vite and React configuration
```

Most page copy, project details, and remote image URLs are defined in `src/data/siteData.js`. Section layout and interactions are in `src/pages/HomePage.jsx`.
