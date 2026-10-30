export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  offers: { name: string; body: string }[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "land-surveying",
    name: "Land Surveying",
    short: "Registered survey plans, boundary, as-built and express surveys.",
    intro:
      "A survey tells you exactly what you own. We fix your boundaries with GNSS equipment, draw them on a plan and lodge it, so your title stands up when you build, sell or borrow against the land.",
    image: "/images/velora-aerial.jpg",
    offers: [
      { name: "Registered survey plan", body: "For a plot you've bought. Required for C of O and most land documents." },
      { name: "Perimeter & boundary survey", body: "Fixes beacons on the ground and settles boundary questions with neighbours." },
      { name: "As-built survey", body: "Records what has been built against the approved plan — for banks and approvals." },
      { name: "Topographic survey", body: "Levels and features of the site, before you design or build." },
      { name: "Express survey", body: "When time matters. One express client is now on our retainer." },
    ],
    deliverables: ["Signed survey plan", "Beacon coordinates", "Digital copy for your records"],
  },
  {
    slug: "gis-mapping",
    name: "GIS & Mapping",
    short: "Estate layouts, plot demarcation and land-use maps.",
    intro:
      "Accurate insight into your property. We produce digital site maps, estate layouts and land-use data that planners, investors and families can read.",
    image: "/images/academy/flipchart.jpg",
    offers: [
      { name: "Estate layout & plot demarcation", body: "Roads, drainage alignment and numbered plots, planned before sale." },
      { name: "Site analysis", body: "Access, terrain and land use around your site." },
      { name: "Plot coordinates", body: "Every plot located precisely, for your records and title." },
    ],
    deliverables: ["Layout drawings", "Digital map files", "Coordinate schedule"],
  },
  {
    slug: "consultancy",
    name: "Real Estate Consultancy",
    short: "Brokerage, land banking and retainer advice.",
    intro:
      "Your brokerage and surveying firm in Oyo State. We help you buy right, land-bank for the future and sell with clean paperwork.",
    image: "/images/office-2.jpg",
    offers: [
      { name: "Brokerage & listings", body: "Buy or sell land and homes, with documents checked by surveyors." },
      { name: "Land banking", body: "Where to buy early in Oyo, Ibadan and Lagos — and when." },
      { name: "Retainer service", body: "Ongoing advice for repeat buyers and developers." },
    ],
    deliverables: ["Written advice", "Due-diligence report", "Transaction support"],
  },
  {
    slug: "construction",
    name: "Sustainable Construction & Smart Homes",
    short: "From the first block to handover, on land we've surveyed.",
    intro:
      "Environmental development experts. We build homes that last on land we have already surveyed, and supervise every stage to handover.",
    image: "/images/site-supervision.jpg",
    offers: [
      { name: "Residential construction", body: "Bungalows and duplexes, built to your plan." },
      { name: "Smart-home fittings", body: "Modern fittings for security and comfort. Ask us for the current scope." },
      { name: "Project supervision", body: "Professional oversight from foundation to finishing." },
    ],
    deliverables: ["Bill of quantities", "Build schedule", "Handover documents"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
