# emmanuelnyatepe.com

My portfolio: selected work, case studies, experience and contact details.

Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. The only runtime dependencies are `next`, `react` and `react-dom`.

## Running it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm check        # prettier + eslint + typecheck
pnpm build
```

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, the sitemap and social cards point at the real domain.

## Where things live

| Path                   | What                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| `src/config/site.ts`   | Name, email, links, URL. One place to change personal details.    |
| `src/content/`         | Projects, experience and stack as typed data. Edit content here.  |
| `src/assets/`          | Images, statically imported so Next.js knows their size and blur. |
| `src/components/home/` | One component per homepage section.                               |
| `src/app/work/[slug]/` | Case studies, generated at build time from featured projects.     |
| `src/app/globals.css`  | Design tokens and the three custom utilities.                     |

## Decisions

- **Server Components by default.** Only the Accra clock and the copy-email button ship JavaScript.
- **Content is data, not markup.** A featured project is a discriminated union, so a project can't be featured without the fields its case study needs.
- **The design rules are enforced by the theme.** Border radius, shadows and Tailwind's default palette are removed in `globals.css`, so `rounded-xl` or `bg-blue-500` produce no CSS at all.
- **No animation libraries.** Motion is limited to short CSS transitions and respects `prefers-reduced-motion`.
- **Every page is static.** Case studies use `generateStaticParams` with `dynamicParams = false`, so unknown slugs return a real 404.

## Adding a project

Add an entry to `src/content/projects.ts`. Set `featured: true` and the TypeScript compiler will ask for a role, figures, overview and a list of what you built. The case study page, sitemap entry and social card are generated from that entry.
