// Company-wide details. Edit here and every page updates.

export const site = {
  name: "Pace Consults",
  legalName: "Pace Associate & Integrated Consults Ltd",
  rc: "RC 7362467",
  tagline: "Setting the pace for land in Oyo.",
  watchword: "Prosperity for all.",
  url: "https://paceconsults.com",
  address: {
    line1: "Pace Building, beside Alapo Bridge",
    line2: "Abiodun Atiba Road, Oyo, Oyo State 211271",
    mapUrl: "https://maps.google.com/?q=Alapo+Bridge+Abiodun+Atiba+Road+Oyo",
  },
  phones: ["0703 468 0780", "0817 367 6999", "0816 878 1298"],
  whatsapp: "2347034680780",
  email: "paceconsultltd@gmail.com",
  instagram: "https://www.instagram.com/paceconsult_associates/",
  instagramHandle: "@paceconsult_associates",
  facebook: "https://www.facebook.com/61578585044124/",
  hours: "Always open — call ahead for weekend inspections",
  // Default company account. Estates with their own account override this in estates.ts.
  bank: { bank: "Zenith Bank", number: "1311919609", name: "Pace Associates" },
} as const;

export const telHref = (phone: string) => "tel:+234" + phone.replace(/\s/g, "").replace(/^0/, "");

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/estates", label: "Estates" },
  { href: "/services", label: "Services" },
  { href: "/academy", label: "Academy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
