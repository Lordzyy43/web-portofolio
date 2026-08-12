# Portfolio Web

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This project showcases:

- personal introduction and contact links
- featured skills and technologies
- project highlights and case studies
- responsive layout built with reusable components

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Project Structure

- `src/app` - routes, layouts, and global styles
- `src/components` - reusable UI and layout components
- `src/data` - static content for profile, skills, projects, and navigation
- `src/types` - shared TypeScript types
- `public` - static assets

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- Project data is stored in `src/data/projects.ts`.
- The detailed project route is available at `/projects/[slug]`.
- Starter assets from the default Next.js template have been removed to keep the repo lean.
