// Insights articles. Each becomes /insights/<slug> with its own SEO title,
// description and structured data. Add a new article by copying an entry.

export type Article = {
  slug: string;
  title: string;
  description: string; // used for search results and social previews (aim for 140–160 characters)
  kind: "Guide" | "Market note";
  date: string; // YYYY-MM-DD
  readMins: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  intro: string;
  sections: { h: string; p: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "why-buy-land-in-oyo",
    title: "Why Oyo? The case for buying land in the Pace-setter city",
    description:
      "Oyo town sits where major roads meet, land is still priced for today, and new development is arriving. Here is why early buyers in Oyo are well placed.",
    kind: "Guide",
    date: "2026-10-30",
    readMins: 5,
    image: "/images/hero-land.jpg",
    imageAlt: "Open land in Oyo town with boundary poles marking new plots",
    keywords: ["land for sale in Oyo", "buy land in Oyo town", "Oyo real estate", "Oyo State land investment"],
    intro:
      "Oyo is one of the oldest cities in Yorubaland, but for a land buyer it behaves like a young one. Prices are still close to their starting point, while the things that push prices up — roads, schools, businesses and people — are already arriving.",
    sections: [
      {
        h: "Oyo sits where the roads meet",
        p: [
          "Oyo town is a natural junction. Roads run south to Ibadan, north to Ogbomoso and Ilorin, and west towards Iseyin. Every journey between those places passes through or near Oyo, and land beside busy roads tends to gain value first.",
          "The newer Ogbomoso expressway and improved access roads make the town easier to reach, and easier to live in while working elsewhere in the state.",
        ],
      },
      {
        h: "Institutions bring steady demand",
        p: [
          "Oyo is home to Ajayi Crowther University, the Federal School of Surveying and a growing number of schools and public offices. Students, lecturers and staff all need somewhere to live, which creates steady demand for houses, hostels and rental flats.",
          "For a land buyer, that means a plot can be more than a store of value: it can become a rental building with tenants close by.",
        ],
      },
      {
        h: "Prices are still early",
        p: [
          "In Lagos and parts of Ibadan, buyers now pay for development that already happened. In Oyo, plots are still priced for what the town is today, not for what it is becoming. That gap is where early buyers gain.",
          "Pace calls it simply: buy and wait, don't wait and buy.",
        ],
      },
      {
        h: "What to check before you buy in Oyo",
        p: ["Early land only rewards you if the purchase is clean. Before paying for any plot, make sure you can answer yes to each of these:"],
        list: [
          "Has the land been surveyed, and will you get a survey plan in your name?",
          "Is the land dry, with road access you can see on inspection?",
          "Will you receive an allocation letter and a deed when you pay?",
          "Are you paying into a company account, not to an individual?",
        ],
      },
      {
        h: "Where Pace fits in",
        p: [
          "Pace Consults is a surveying firm first. We map every plot before we sell it, and allocate it with documents in your name. Our earlier Oyo estates — Primo, Ìdèra and Velora — are sold out; Orange County in Balogun, off Iseyin Expressway, is selling now.",
        ],
      },
    ],
  },
  {
    slug: "nigeria-housing-deficit",
    title: "Nigeria's housing deficit: what it means for land buyers",
    description:
      "Estimates put Nigeria's housing shortage at 17 to 28 million homes. Here is what that gap means for anyone buying land to build, rent or hold.",
    kind: "Market note",
    date: "2026-10-30",
    readMins: 4,
    image: "/images/velora-aerial.jpg",
    imageAlt: "Aerial view of new plots being cleared beside an existing neighbourhood",
    keywords: ["Nigeria housing deficit", "housing shortage Nigeria", "real estate investment Nigeria", "land as investment"],
    intro:
      "Ask any Nigerian who has searched for a flat and you will hear the same story: too few good homes, too many people looking. Industry estimates put the national shortage at somewhere between 17 and 28 million housing units.",
    sections: [
      {
        h: "Why the gap keeps growing",
        p: [
          "Nigeria's population is young and growing fast, and more people move into towns every year. New homes are not being built quickly enough to keep up, so the shortage widens instead of closing.",
          "Every new home needs one thing before anything else: land with a clean title.",
        ],
      },
      {
        h: "What this means for land",
        p: [
          "When demand for homes outpaces supply, the land under those homes becomes more valuable. Well-located, documented plots near growing towns are one of the most direct ways to benefit from the shortage.",
          "It also explains why rental demand is strong around universities, government offices and markets: people need somewhere to live close to where they study and work.",
        ],
      },
      {
        h: "Three ways buyers use land",
        p: ["Most of our clients buy for one of three reasons:"],
        list: [
          "To build a family home, now or in a few years.",
          "To build flats or shops to rent out.",
          "To hold the land and sell it later, after the area develops.",
        ],
      },
      {
        h: "The caution",
        p: [
          "A housing shortage does not make every plot a good buy. Land without a survey, land under dispute, or land you cannot reach by road can lose you money. The opportunity is real, but only for buyers who check the paperwork and inspect the site first.",
        ],
      },
    ],
  },
  {
    slug: "land-documents-explained",
    title: "Allocation letter, deed, survey plan: what each land document proves",
    description:
      "A plain-English guide to the land documents you receive in Nigeria — receipt, allocation letter, deed, survey plan and C of O — and why each one matters.",
    kind: "Guide",
    date: "2026-10-30",
    readMins: 6,
    image: "/images/academy/flipchart.jpg",
    imageAlt: "A Pace Real Estate Academy session on land documentation",
    keywords: ["land documents Nigeria", "allocation letter", "deed of assignment", "survey plan Nigeria", "C of O meaning"],
    intro:
      "Buying land in Nigeria comes with a stack of papers, and many buyers sign without knowing what each one proves. Here is what you should receive, and why it matters.",
    sections: [
      {
        h: "Payment receipt",
        p: ["Proof that you paid, how much and when. Always ask for a receipt from the company, showing the company's name and the account you paid into. Keep every receipt if you pay in instalments."],
      },
      {
        h: "Allocation letter",
        p: ["Confirms which specific plot is yours: the estate, the block and the plot number. Without it, you have paid for 'a plot' but not this plot. A good developer allocates as soon as the agreed payment is made."],
      },
      {
        h: "Contract of sale and acknowledgement letter",
        p: ["The contract sets out the terms of the sale: price, plot, payment plan and what happens if either side does not keep their side. An acknowledgement letter confirms the developer has received your payment and your purchase is recorded."],
      },
      {
        h: "Deed of assignment (or deed of transfer)",
        p: ["The deed is the document that transfers ownership of the land from the seller to you. It should name both parties, describe the land and be signed and witnessed. This is the document you will need to register your interest with the state."],
      },
      {
        h: "Survey plan",
        p: [
          "A survey plan is a drawing made by a registered surveyor that shows the exact shape, size and location of your plot, fixed by beacons on the ground and coordinates on the map. It is how you prove where your land starts and ends.",
          "A survey plan should be in your name. A provisional survey from the developer is a good start; a registered survey plan is stronger.",
        ],
      },
      {
        h: "Certificate of Occupancy (C of O)",
        p: [
          "Under the Land Use Act, land in a state is held by the state government, which grants rights to occupy it. A C of O is the government's grant of that right. 'C of O in view' means the developer is processing one for the estate.",
          "When you later sell land that has a C of O, the buyer will usually need the Governor's consent to complete the transfer.",
        ],
      },
      {
        h: "A simple checklist",
        p: ["Before you finish paying, ask the seller which of these you will get, and when:"],
        list: ["Receipt", "Allocation letter", "Contract of sale", "Deed of assignment or transfer", "Survey plan in your name", "Title status (C of O, or C of O in view)"],
      },
    ],
  },
  {
    slug: "avoid-land-fraud-omo-onile",
    title: "How to avoid land fraud and omo-onile before you pay",
    description:
      "Fake titles, double sales and omo-onile demands cost buyers millions. Here are the practical checks to make before you pay for land in Nigeria.",
    kind: "Guide",
    date: "2026-10-30",
    readMins: 5,
    image: "/images/land-soil.jpg",
    imageAlt: "Cleared land at the edge of a green field",
    keywords: ["land fraud Nigeria", "omo-onile", "how to verify land", "buy land safely Nigeria"],
    intro:
      "Most bad land deals in Nigeria follow a few familiar patterns: the same plot sold to two people, a title that does not exist, or family land-owners (omo-onile) demanding new payments after you buy. Each can be avoided with a few checks.",
    sections: [
      {
        h: "Inspect the land yourself",
        p: ["Never buy land you have not seen, in person or on a live video call. Walk the plot, check the road access, and look at the beacons. If the seller cannot show you the exact plot, stop."],
      },
      {
        h: "Ask who surveyed it",
        p: ["A surveyed plot has beacons on the ground and a plan on paper that match. Ask for the survey plan and compare it with what you see. Pace surveys every plot it sells, so the boundaries are fixed before the sale."],
      },
      {
        h: "Know who you are buying from",
        p: [
          "Buy from a registered company with an office you can visit. Check its CAC registration number (Pace's is RC 7362467) and ask for the estate's title status in writing.",
          "Be careful with roadside agents and sellers who only meet you on site.",
        ],
      },
      {
        h: "Pay the right account, the right way",
        p: ["Pay only into the company's corporate account, never into a staff member's personal account and never because of a message in your DMs. Call the company's published number to confirm the account before you transfer, and get a receipt every time."],
      },
      {
        h: "Settle omo-onile questions upfront",
        p: ["Ask the developer directly whether there are any outstanding claims or charges from family land-owners, and get the answer in writing. On Pace estates, buyers deal with Pace only."],
      },
      {
        h: "The short version",
        p: ["Before you pay, make sure every answer is yes:"],
        list: [
          "I have inspected the exact plot.",
          "The plot is surveyed and I will get a survey plan.",
          "I am buying from a registered company I can visit.",
          "I am paying into the company's account, confirmed by phone.",
          "I know which documents I will receive, and when.",
        ],
      },
    ],
  },
  {
    slug: "why-a-survey-plan-matters",
    title: "Why a survey plan matters more than you think",
    description:
      "A survey plan is the only document that shows exactly where your land is. Learn what it contains, the types of survey, and when you need one.",
    kind: "Guide",
    date: "2026-10-30",
    readMins: 4,
    image: "/images/team-gate.jpg",
    imageAlt: "The Pace field team in hi-vis vests outside the office",
    keywords: ["survey plan", "land surveyor Oyo", "registered survey plan", "boundary survey"],
    intro:
      "A deed says you own a piece of land. A survey plan says which piece. Without one, two people can honestly believe they own the same ground.",
    sections: [
      {
        h: "What a survey plan shows",
        p: ["A survey plan is drawn by a registered surveyor after measuring the land on site. It shows:"],
        list: [
          "The shape and size of the plot",
          "Beacon numbers at each corner",
          "Coordinates that fix the plot on the map",
          "The owner's name and the surveyor's details",
        ],
      },
      {
        h: "Types of survey",
        p: [
          "A perimeter or boundary survey fixes the edges of your land. A topographic survey records levels and features before you design a building. An as-built survey records what has been built against the approved plan, often for banks and approvals.",
        ],
      },
      {
        h: "When you need one",
        p: [
          "You need a survey plan to apply for a C of O, to get building approval, to use land as security for a loan, and to sell cleanly. It also settles boundary questions with neighbours before they become disputes.",
        ],
      },
      {
        h: "Why Pace surveys before it sells",
        p: [
          "Pace Consults started as a surveying firm. We map every estate and every plot before sale, so buyers get land that is already measured and documented. We also survey land you already own — request a quote from our Land Surveying service.",
        ],
      },
    ],
  },
  {
    slug: "buying-land-in-nigeria-from-abroad",
    title: "Buying land in Nigeria from abroad: a safe step-by-step",
    description:
      "Living in the UK, US or elsewhere and buying land at home? Here is how to inspect, pay, sign and receive your documents safely from abroad.",
    kind: "Guide",
    date: "2026-10-30",
    readMins: 5,
    image: "/images/oc-oyo/masterplan.jpg",
    imageAlt: "Masterplan render of Orange County Oyo showing numbered blocks and plots",
    keywords: ["buy land in Nigeria from abroad", "diaspora land purchase Nigeria", "land in Oyo for diaspora"],
    intro:
      "Many of our clients live outside Nigeria. Buying from abroad is safe if you follow a clear process — and risky if you rely on a relative's word or a stranger's photos.",
    sections: [
      {
        h: "1. Inspect by live video",
        p: ["Ask for a live video inspection, not pre-recorded clips. Have the team walk the actual plot, show the beacons, the road access and the surroundings, and answer questions while you watch."],
      },
      {
        h: "2. Verify the company",
        p: ["Check the company's CAC registration and office address. Call the published phone number yourself. If you have someone in Nigeria you trust, ask them to visit the office."],
      },
      {
        h: "3. Pay the company account only",
        p: ["Transfer only into the company's corporate account, and confirm the account by phone first. Keep every receipt. Never send money to an individual, however friendly."],
      },
      {
        h: "4. Sign through a representative or by courier",
        p: ["Documents can be signed by a trusted representative with your written authority, or sent to you by courier to sign and return. Ask for scans of every signed page."],
      },
      {
        h: "5. Keep copies of everything",
        p: ["Store your receipts, allocation letter, contract, deed and survey plan in one safe place, with digital copies backed up. These are your proof of ownership."],
      },
      {
        h: "How Pace helps",
        p: ["We run video inspections, send scanned documents, and keep a single point of contact for diaspora clients. Chat with us on WhatsApp to start."],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
