# alessandrostefanone.github.io

Personal academic website for Alessandro Stefanone, built with Astro, Tailwind CSS, and DaisyUI.

The site includes:

- a home page with profile and recent publications
- a publications page with optional media previews
- a CV page with experience, education, awards, publications, and skills

## Tech Stack

- Astro 5
- Tailwind CSS
- DaisyUI
- React support for Astro

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Main Content Files

Most of the site content is managed directly from a few files:

- `src/settings.ts`: profile info, social links, site metadata, theme settings
- `src/data/cv.ts`: experiences, education, skills, publications, awards
- `src/data/researchIcons.ts`: icons used for research areas

Main pages:

- `src/pages/index.astro`: home page
- `src/pages/publications.astro`: publications page
- `src/pages/cv.astro`: CV page

## Editing Publications

Publications are defined in `src/data/cv.ts`.

Each publication supports fields such as:

- `title`
- `authors`
- `journal`
- `time`
- `link`
- `abstract`
- `status`
- `media`

Example:

```ts
{
  title: "Example Paper",
  authors: "Author One, Author Two",
  journal: "Journal Name",
  time: "2026",
  link: "https://doi.org/example",
  abstract: "Short abstract.",
  status: "Conference Paper",
  media: [
    {
      type: "image",
      src: "/publications/example-image.png",
      alt: "Example figure",
      caption: "Example caption.",
    },
  ],
}
```

## Publication Media

Media for publications is currently served from the `public/publications/` folder.

Current examples:

- `public/publications/DT_model.jpg`
- `public/publications/dt_mt.gif`
- `public/publications/e-nose.png`
- `public/publications/poster_llm.png`

Rules:

- use `type: "image"` for JPG, PNG, and GIF assets
- use `type: "video"` for video files
- set `src` to the public path, for example `/publications/my-media.png`
- add `caption` only when you want text displayed under the media

On the publications page:

- media is rendered only if the publication has a `media` entry
- clicking media opens an expanded preview dialog
- clicking the paper title or `Read` opens the publication link in a new tab

## CV and Skills

The CV page reads its content from `src/data/cv.ts`.

Sections currently managed there:

- `experiences`
- `education`
- `skills`
- `publications`
- `awards`

## Blog

The project still includes a blog collection definition in `src/content.config.ts`, pointing to:

```text
src/content/BlogPosts/
```

At the moment, that directory is not populated, so Astro shows warnings during build. The main site works correctly without blog content.

## Deployment

This repository is configured as a static Astro site and is intended to be deployed to GitHub Pages at:

```text
https://alessandrostefanone.github.io
```

Key site-level configuration lives in `src/settings.ts`, especially:

- `template.website_url`
- `template.base`
- `seo`

## Notes

- Publication images on `publications.astro` are currently served as standard image paths from `public/`.
- Astro may suggest replacing some `<img>` tags with the `Image` component for optimization. That is a possible future improvement, but not required for the site to work.
