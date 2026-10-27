# Schoolyard Records — Website Starter

A custom-coded, responsive Next.js homepage concept for Schoolyard Records. The design combines luxury editorial layouts, collegiate roots, and independent hip-hop culture without copying another company's exact branding.

## Important before publishing

- Replace `public/images/artist-01.svg`, `artist-02.svg`, `artist-03.svg`, and `release-art.svg` with Schoolyard-approved photos and actual release artwork.
- Update `src/data/content.ts` with confirmed artist names, releases, official streaming URLs, and event details. Current entries are clearly marked starter placeholders.
- Replace the temporary wordmark in `src/app/page.tsx` with the existing approved Schoolyard logo when its file is available.
- Update `metadataBase` in `src/app/layout.tsx` after the domain is selected.
- Confirm that `schoolyardrecords1876@gmail.com` is still the correct public contact email before launch.
- Add real social profile links and privacy language before enabling submissions or collecting visitor information.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Project structure

```text
schoolyard-records-site/
├── public/
│   └── images/             # Replaceable local artwork and photo slots
├── src/
│   ├── app/
│   │   ├── globals.css     # Responsive design system and styling
│   │   ├── layout.tsx      # Metadata and root document
│   │   └── page.tsx        # Homepage sections and navigation
│   └── data/
│       └── content.ts      # Artist, release, and event content
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Roadmap

1. Replace starter art and sample content with approved Schoolyard assets and verified details.
2. Add individual artist, release, event, culture, and creative pages.
3. Connect a headless CMS so authorized team members can update content without code changes.
4. Add validated contact/submission forms with spam protection and privacy disclosures.
5. Select and register a domain, deploy, then test links, accessibility, performance, and mobile layouts.

This starter does not yet include a CMS, database, ticket checkout, authentication, or a live form backend. Contact links currently open email drafts.
