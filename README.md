# itsthomas.dev

My personal site — designed and built from scratch, no template.

The hero is a replay of a real run shape from [Lykos](https://github.com/Tcadle434/prediction-market-agent),
my open-source prediction-market agent (ingest → RAG → forecast → human approval → paper fill →
hash-chained audit record), and the career section renders as a hash-chained log in the same spirit.

- **Framework**: Next.js 15 (App Router, fully static output)
- **Styling**: Tailwind CSS v4 — theme tokens in `src/app/globals.css`
- **Type**: Fraunces + IBM Plex Mono via `next/font`
- **Motion**: CSS only — staggered load reveals, IntersectionObserver scroll-ins, `prefers-reduced-motion` respected
- **Deployment**: Vercel

## Run it

```bash
npm install
npm run dev
```

Content lives in [`src/lib/content.ts`](src/lib/content.ts) — projects, career log, and links are
plain data, so edits don't touch layout code.
