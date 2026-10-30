// ─────────────────────────────────────────────────────────────
// ESTATES — the single place to update estates, prices and status.
//
// • Prices are in naira (whole numbers, no commas).
// • Update `pricesAsAt` whenever prices change.
// • status: "selling" | "few-left" | "pre-launch" | "coming-soon" | "sold-out"
//   Sold-out estates stay on the site as past projects; they leave the
//   inspection forms and payment tables automatically.
// ─────────────────────────────────────────────────────────────

export type Status = "selling" | "few-left" | "pre-launch" | "coming-soon" | "sold-out";
export type City = "Oyo" | "Ibadan" | "Lagos";

export type Plan = {
  size: string;
  price?: number; // undefined = price to be confirmed
  deposit?: number;
  months?: number;
};

export type Landmark = { name: string; note?: string; image?: string };

export type Phase = {
  name: string;
  status: Status;
  lead: string;
  body: string;
  plans: Plan[];
};

export type Estate = {
  slug: string;
  name: string;
  city: City;
  area: string; // short location line
  coord: string;
  status: Status;
  tagline: string;
  summary: string;
  title: string; // land title
  pricesAsAt: string;
  plans: Plan[];
  documents: string[];
  features?: { name: string; body: string }[];
  facilities?: string[];
  landmarks: Landmark[];
  images: { hero: string; gallery: string[] };
  // Optional video: a short muted loop for the hero and the full film with sound.
  video?: { loop: string; film: string; poster: string };
  account?: { bank: string; number: string; name: string };
  externalSite?: string;
  phases?: Phase[];
  faq?: { q: string; a: string }[];
  featured?: boolean;
};

export const statusLabel: Record<Status, string> = {
  selling: "Selling",
  "few-left": "Few plots left",
  "pre-launch": "Pre-launch",
  "coming-soon": "Coming soon",
  "sold-out": "Sold out",
};

const commonFaq = [
  {
    q: "Are there any encumbrances on the land?",
    a: "No. The land is free from government acquisition, adverse claims or any other encumbrance.",
  },
  {
    q: "Is there a time limit to start building after allocation?",
    a: "No. There is no time limit to commence work on your plot.",
  },
  {
    q: "Can I inspect before paying?",
    a: "Always. Book a physical inspection, or a live video inspection on WhatsApp if you are outside the city.",
  },
];

export const estates: Estate[] = [
  {
    slug: "velora",
    name: "Velora by Pace",
    city: "Oyo",
    area: "Oyo town, near Ajayi Crowther University",
    coord: "7°51′N 3°56′E",
    status: "sold-out",
    tagline: "Own. Build. Flourish.",
    summary:
      "An exclusive buy-and-build estate that blends rural calm with city access — near the new Alaafin residence, Ajayi Crowther University and the new Ogbomoso expressway.",
    title: "Deed of Transfer",
    pricesAsAt: "Launch price",
    plans: [{ size: "Per plot", price: 1_500_000, deposit: 500_000, months: 3 }],
    documents: ["Payment receipt", "Allocation letter", "Deed of Transfer"],
    landmarks: [
      { name: "New Alaafin Residence", note: "A secure, prestigious neighbourhood beside the Alaafin of Oyo's private residence." },
      { name: "Ajayi Crowther University", note: "Programmes include Architecture and Estate Management — steady demand from students and staff." },
      { name: "Federal School of Surveying", note: "A long-established institution for surveying and geomatics." },
      { name: "Primo Phases 1 & 2", note: "Next to Pace's established Primo estates." },
      { name: "New Ogbomoso Expressway", note: "Fast access north and back into Oyo town." },
    ],
    images: { hero: "/images/velora-house.jpg", gallery: ["/images/velora-aerial.jpg", "/images/velora-house.jpg"] },
    faq: [
      { q: "What is the title of the property?", a: "Deed of Transfer." },
      { q: "What do I get after my initial deposit?", a: "A payment receipt and your allocation letter." },
      ...commonFaq,
    ],
  },
  {
    slug: "ile-ire",
    name: "Ilé Ìrè",
    city: "Ibadan",
    area: "Ido, Ibadan",
    coord: "7°30′N 3°43′E",
    status: "sold-out",
    tagline: "Own. Build. Thrive.",
    summary:
      "Buy-and-build land in Ido, Ibadan: 100% dry, flat land in a peaceful, progressive area close to the Ido LGA Secretariat, Eleyele and the Ladoke Akintola train station.",
    title: "Survey plan · C of O in view",
    pricesAsAt: "Launch price",
    plans: [{ size: "500 sqm", price: 900_000, deposit: 500_000, months: 3 }],
    documents: [
      "Free provisional survey in your name",
      "Deed of Assignment",
      "Contract of Sale of Land",
      "Allocation letter",
      "Acknowledgement letter",
      "Payment receipt",
    ],
    features: [
      { name: "100% dry land", body: "Flat landscape, ready to build." },
      { name: "Peaceful and progressive", body: "A calm environment in a fast-growing part of Ibadan." },
      { name: "Flexible payment", body: "₦500k deposit, balance over 3 months." },
      { name: "Secure ownership", body: "Surveyed and documented by Pace." },
    ],
    facilities: ["Well-developed road network", "Commercial centre", "Tech hub", "Close to the expressway", "Gardens and communal spaces"],
    landmarks: [
      { name: "Ido LGA Secretariat", note: "The administrative hub of Ido Local Government.", image: "/images/ido-lga.jpg" },
      { name: "Ido Market", note: "Fresh produce and daily essentials without a long commute.", image: "/images/ido-market.jpg" },
      { name: "Eleyele", note: "The lake, and road links into central Ibadan.", image: "/images/eleyele.jpg" },
      { name: "FRSC Office", note: "Licensing and vehicle services close by." },
      { name: "Ladoke Akintola Station, Omi-Adio", note: "Rail links across Oyo State and beyond.", image: "/images/la-station.jpg" },
    ],
    images: { hero: "/images/ileire-aerial.jpg", gallery: ["/images/ileire-green.jpg", "/images/eleyele.jpg", "/images/ido-market.jpg", "/images/la-station.jpg"] },
    faq: [
      { q: "What is the title of the property?", a: "Survey plan, with C of O in view." },
      { q: "What do I get after my initial deposit?", a: "Payment receipt, acknowledgement letter and contract of sale of land." },
      ...commonFaq,
    ],
  },
  {
    slug: "orange-county-oyo",
    name: "Orange County Oyo",
    city: "Oyo",
    area: "Balogun, off Iseyin Expressway",
    coord: "7°51′N 3°56′E",
    status: "selling",
    featured: true,
    tagline: "…not for everyone.",
    summary:
      "An avant-garde gated estate in Balogun, Oyo — good roads, solar street lights, CCTV and shared facilities, minutes from Iseyin Expressway and the Africhatta film village.",
    title: "C of O in view · Registered survey plan",
    pricesAsAt: "Current product paper",
    plans: [
      { size: "300 sqm", price: 500_000 },
      { size: "450 sqm", price: 750_000 },
      { size: "600 sqm", price: 1_000_000 },
      { size: "Commercial plot", price: 1_000_000 },
    ],
    documents: ["Allocation letter", "Deed of Agreement", "Payment receipt", "Registered survey plan"],
    features: [
      { name: "Good road network", body: "Planned, well-maintained estate roads." },
      { name: "Solar street lights", body: "Lit at night, off the grid." },
      { name: "CCTV", body: "Full-time monitoring, day and night." },
      { name: "Gated community", body: "Private, controlled access." },
    ],
    facilities: ["Gym", "Football pitch", "Basketball court", "Mini mart"],
    landmarks: [
      { name: "Iseyin Expressway", note: "Minutes away — growth and connectivity." },
      { name: "Divisional Police HQ, Balogun", note: "Close by for added security." },
      { name: "Africhatta Film Village", note: "2–3 minutes away." },
      { name: "Danbaba Asphalt Plant", note: "2 minutes away." },
    ],
    images: {
      hero: "/images/oc-oyo/gate.jpg",
      gallery: ["/images/oc-oyo/masterplan.jpg", "/images/oc-oyo/blocks.jpg", "/images/oc-oyo/basketball.jpg", "/images/oc-oyo/gym.jpg", "/images/oc-oyo/pitch.jpg", "/images/oc-oyo/gate-wide.jpg", "/images/oc-oyo/aerial.jpg"],
    },
    video: { loop: "/media/oc-oyo-loop.mp4", film: "/media/oc-oyo-film.mp4", poster: "/media/oc-oyo-poster.jpg" },
    account: { bank: "Zenith Bank", number: "1311968377", name: "Orange County by Pace" },
    externalSite: "https://www.orangecounty.estate/oyo",
    faq: commonFaq,
  },
  {
    slug: "orange-county-epe",
    name: "Orange County Epe",
    city: "Lagos",
    area: "Off Epe–Ijebu Ode Expressway, Lagos",
    coord: "6°35′N 3°59′E",
    status: "selling",
    featured: true,
    tagline: "Lagos called. We answered.",
    summary:
      "A well-planned estate in Epe for comfortable living and smart investment — 25 minutes from Lekki-Epe International Airport.",
    title: "Registered survey plan",
    pricesAsAt: "Pre-launch",
    plans: [
      { size: "300 sqm", price: 3_000_000 },
      { size: "450 sqm", price: 4_000_000 },
      { size: "600 sqm", price: 5_500_000 },
    ],
    documents: ["Allocation letter", "Deed of Agreement", "Payment receipt"],
    facilities: ["Gym", "Football pitch", "Mini mart", "Drainage", "Reliable water supply"],
    landmarks: [
      { name: "Lekki-Epe International Airport", note: "25 minutes" },
      { name: "Yabatech Epe Campus", note: "15 minutes" },
      { name: "LASUED Michael Otedola", note: "15 minutes" },
      { name: "St. Augustine", note: "20 minutes" },
    ],
    images: {
      hero: "/images/oc-epe/gate.jpg",
      gallery: ["/images/oc-epe/aerial.jpg", "/images/oc-epe/entrance.jpg", "/images/oc-epe/pitch-pool.jpg", "/images/oc-epe/pool.jpg", "/images/oc-epe/gym.jpg", "/images/oc-epe/avenue.jpg", "/images/oc-epe/700sqm.jpg", "/images/oc-epe/commercial.jpg", "/images/oc-epe/gatehouse.jpg"],
    },
    video: { loop: "/media/oc-epe-loop.mp4", film: "/media/oc-epe-film.mp4", poster: "/media/oc-epe-poster.jpg" },
    externalSite: "https://www.orangecounty.estate/epe",
    faq: commonFaq,
  },
  {
    slug: "idera",
    name: "Ìdèra by Pace",
    city: "Oyo",
    area: "3 min off Oyo–Ogbomoso Expressway",
    coord: "7°51′N 3°56′E",
    status: "sold-out",
    tagline: "A blend of nature and comfort.",
    summary: "100% dry land with instant allocation and instalments from a ₦100k deposit.",
    title: "Registered survey plan",
    pricesAsAt: "Sept 2025",
    plans: [
      { size: "Half plot · 300 sqm", price: 300_000, deposit: 100_000, months: 6 },
      { size: "Full plot", price: 500_000, deposit: 200_000, months: 6 },
      { size: "1 acre", price: 2_700_000, deposit: 1_000_000, months: 6 },
    ],
    documents: ["Allocation letter", "Deed of Agreement", "Registered survey plan", "Payment receipt"],
    landmarks: [{ name: "Oyo–Ogbomoso Expressway", note: "3 minutes" }],
    images: { hero: "/images/land-track.jpg", gallery: ["/images/land-wheat.jpg"] },
    faq: commonFaq,
  },
  {
    slug: "primo",
    name: "Primo Estate",
    city: "Oyo",
    area: "Oyo town, off the old Oyo–Ogbomoso road",
    coord: "7°51′N 3°56′E",
    status: "sold-out",
    tagline: "Where Pace started.",
    summary: "Pace's flagship estate in five phases — good roads, stable power and a well-developed area. Over 400 plots allocated.",
    title: "Registered survey plan on demand",
    pricesAsAt: "Sept 2025",
    plans: [
      { size: "250 sqm", price: 300_000 },
      { size: "500 sqm", price: 600_000 },
      { size: "1 acre", price: 3_500_000 },
    ],
    documents: ["Allocation letter", "Deed of Agreement", "Registered survey plan (on demand)", "Payment receipt"],
    landmarks: [
      { name: "Atiba LG Secretariat", note: "5 minutes" },
      { name: "Old Oyo–Ogbomoso road", note: "3 minutes" },
      { name: "Velora by Pace", note: "Next door" },
    ],
    images: { hero: "/images/land-grass.jpg", gallery: ["/images/land-soil.jpg", "/images/land-track.jpg", "/images/team-gate.jpg"] },
    phases: [
      {
        name: "Phase I",
        status: "sold-out",
        lead: "Where it started.",
        body: "Launched at about ₦800k a plot, Phase I allocated more than 400 plots in a well-developed part of Oyo town.",
        plans: [{ size: "Standard plot", price: 1_000_000 }, { size: "1 acre", price: 5_500_000 }],
      },
      {
        name: "Extension",
        status: "sold-out",
        lead: "Our fastest seller.",
        body: "The Phase I Extension opened next to the first phase for buyers who missed it — and went quickly.",
        plans: [{ size: "Standard plot", price: 1_000_000 }, { size: "1 acre", price: 5_500_000 }],
      },
      {
        name: "Phase II",
        status: "sold-out",
        lead: "Wide roads, instant allocation.",
        body: "3 minutes off the old Oyo–Ogbomoso road and 5 minutes from Atiba LG Secretariat. All documents at allocation.",
        plans: [{ size: "250 sqm", price: 300_000 }, { size: "500 sqm", price: 600_000 }, { size: "1 acre", price: 3_500_000 }],
      },
      {
        name: "Primo III",
        status: "sold-out",
        lead: "70% sold within a month of launch.",
        body: "Pay 50% and your plot is allocated the same day.",
        plans: [{ size: "Standard plot" }, { size: "1 acre" }],
      },
      {
        name: "Premium",
        status: "sold-out",
        lead: "Twenty plots at the centre.",
        body: "For buyers who want to build and invest at the heart of the estate.",
        plans: [{ size: "Premium plot" }],
      },
    ],
    faq: commonFaq,
  },
  {
    slug: "esolad-gardens",
    name: "Esolad Gardens",
    city: "Oyo",
    area: "Developed area of Oyo town",
    coord: "7°51′N 3°56′E",
    status: "sold-out",
    tagline: "A serene environment.",
    summary: "Land in a developed, serene part of Oyo town. Inspect online or in person.",
    title: "To confirm",
    pricesAsAt: "—",
    plans: [{ size: "Plot" }],
    documents: ["Allocation letter", "Deed of Agreement", "Payment receipt"],
    landmarks: [],
    images: { hero: "/images/land-wheat.jpg", gallery: [] },
    faq: commonFaq,
  },
];

export const isOnSale = (e: Estate) => e.status !== "sold-out";
export const onSale = () => estates.filter(isOnSale);

export const getEstate = (slug: string) => estates.find((e) => e.slug === slug);

export const fromPrice = (e: Estate) => {
  const prices = e.plans.map((p) => p.price).filter((p): p is number => typeof p === "number");
  return prices.length ? Math.min(...prices) : undefined;
};

export const naira = (n: number) => "₦" + Math.round(n).toLocaleString("en-NG");

export const shortNaira = (n: number) =>
  n >= 1_000_000 ? `₦${+(n / 1_000_000).toFixed(1)}m` : `₦${Math.round(n / 1000)}k`;
