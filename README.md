# Netflix Clone

A Next.js App Router Netflix-inspired interface with TMDB content, responsive carousels, animated details modal, and persisted My List state.

## Run locally

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_TMDB_API_KEY` to a TMDB v3 API key.
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000).

When the TMDB key is absent or a request fails, the app uses built-in mock movie data and imagery, so the UI remains fully usable.

## Commands

- `npm run dev` — local development server
- `npm run build` — production build validation
- `npm run start` — serve a production build
