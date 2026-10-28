# Pace Consults website

The website for **Pace Associate & Integrated Consults Ltd** (RC 7362467): surveying, GIS, real-estate consultancy and estates in Oyo, Ibadan and Lagos.

Built with Next.js 15 (App Router) and Tailwind CSS 4. Every page is static, so it is fast on mobile data and easy to host on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Updating content (no design changes needed)

| What | File |
|---|---|
| Estates, prices, deposits, months, status, documents, landmarks, FAQs | `src/data/estates.ts` |
| Phone numbers, email, address, bank account, socials | `src/data/site.ts` |
| Services | `src/data/services.ts` |
| Team members | `src/app/about/page.tsx` (`team` list) |
| Open roles | `src/app/careers/page.tsx` (`roles` list) |
| Photos | `public/images/` |

- **Add an estate:** copy an entry in `estates.ts`, give it a new `slug`, and its page appears at `/estates/<slug>`.
- **Calculator:** any plan with `price`, `deposit` and `months` shows up in "Plan your plot" automatically.
- **Prices:** update `pricesAsAt` whenever prices change.
- **Estate bank account:** an estate with its own `account` (e.g. Orange County) shows that account. Every other estate shows the company account from `site.ts`.

## Forms

There is no backend yet. Inspection, quote, Academy and careers forms open WhatsApp (0703 468 0780) with the visitor's answers filled in. To collect submissions by email instead, connect a form service (e.g. Formspree or Resend) in `src/components/WhatsAppForm.tsx`.

## Before launch — to confirm with Pace

- Official logo vector (the mark in `src/components/icons.tsx` is redrawn from the Instagram avatar).
- High-res drone and site photos. Several land photos are stand-ins (`hero-road`, `land-*`). Team and Academy photos are low-res crops from social media.
- Primo III, Primo Premium and Esolad Gardens prices; deposits and months for Orange County and Primo.
- Ilé Ìrè title: the product paper says both "Survey Plan" (FAQ) and "C of O in view" (documents page).
- Directors' photos and the founding story.
- The final domain (`site.url` in `src/data/site.ts`).

## Design

The layout follows the "Ardene" reference: a framed hero with hexagon-angle cuts, a small stacked nav, [bracket] labels, ↗ square buttons, numbered rows, and two-tone statements. The brand uses Pace green `#0A3D14` and Pace orange `#E66B1E`, with Inter Tight for text and Montserrat 800 for the wordmark.
