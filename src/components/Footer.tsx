import Link from "next/link";
import { site, telHref, waLink } from "@/data/site";

const explore = [
  { href: "/estates", label: "Estates" },
  { href: "/services", label: "Services" },
  { href: "/buy-land", label: "How to buy" },
  { href: "/academy", label: "Academy" },
  { href: "/insights", label: "Insights" },
];
const company = [
  { href: "/about", label: "About & team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: site.instagram, label: "Instagram" },
  { href: site.facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="mt-[var(--gap)] bg-green px-[var(--gut)] pb-7 pt-16 text-white">
      <div className="mx-auto max-w-[1392px]">
        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-[4fr_2fr_2fr_2fr]">
          <div className="col-span-2 md:col-span-1">
            <h2 className="mb-3 text-[13px] font-medium text-white">{site.legalName}</h2>
            <p className="max-w-[38ch] text-white/80">
              Surveying, GIS, real-estate consultancy and sustainable construction. Every plot we sell is surveyed, documented and allocated.
            </p>
            <a className="btn orange mt-6" href={waLink()}>Chat on WhatsApp</a>
          </div>
          <FooterCol title="Explore" links={explore} />
          <FooterCol title="Company" links={company} />
          <div>
            <h2 className="mb-3 text-[13px] font-medium text-white">Visit</h2>
            <p className="text-white/80">{site.address.line1},<br />{site.address.line2}</p>
            <div className="mt-2.5 flex flex-col">
              {site.phones.map((p) => (
                <a key={p} href={telHref(p)} className="py-[3px] text-white/80 hover:text-white">{p}</a>
              ))}
              <a href={`mailto:${site.email}`} className="py-[3px] text-white/80 hover:text-white">{site.email}</a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="mb-5 mt-16 whitespace-nowrap font-brand text-[min(10.2vw,146px)] font-extrabold leading-[.8] tracking-[-0.045em]">
          PACE<span className="text-orange">.</span>CONSULTS
        </div>
        <div className="flex flex-wrap justify-between gap-5 border-t border-white/20 pt-4.5 text-xs text-white/65">
          <span>© {new Date().getFullYear()} {site.legalName} · {site.rc}</span>
          <span>Only pay into Pace's company account. We never ask for payment by DM.</span>
          <span>{site.watchword}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 text-[13px] font-medium text-white">{title}</h2>
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="block py-[3px] text-white/80 hover:text-white">
          {l.label}
        </Link>
      ))}
    </div>
  );
}
