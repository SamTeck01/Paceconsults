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

**Selling vs sold out:** set an estate's `status` to `"sold-out"` and the site moves it to past projects automatically: it leaves the calculator, the inspection forms and the payment tables, and its page points visitors to the estates still on sale. Set it back to `"selling"` to relaunch it.


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

- High-res drone and site photos. Several land photos are stand-ins (`hero-road`, `land-*`). Team and Academy photos are low-res crops from social media.
- Deposit and instalment terms for Orange County Oyo and Epe (add `deposit` and `months` to show monthly figures in the calculator).
- Directors' photos and the founding story.
- The final domain (`site.url` in `src/data/site.ts`).

## Design

The layout follows the "Ardene" reference: a framed hero with hexagon-angle cuts, a small stacked nav, [bracket] labels, ↗ square buttons, numbered rows, and two-tone statements. The brand uses Pace green `#0A3D14` and Pace orange `#E66B1E`, with Inter Tight for text and Montserrat 800 for the wordmark.
