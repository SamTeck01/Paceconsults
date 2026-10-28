import Link from "next/link";
import FeaturedEstates from "@/components/FeaturedEstates";
import Hero from "@/components/Hero";
import { ArrowUpRight } from "@/components/icons";
import PlanCalculator from "@/components/PlanCalculator";
import { Collage, Label, Rows, TextLink } from "@/components/ui";
import { estates, planOptions } from "@/data/estates";
import { services } from "@/data/services";
import { site, telHref } from "@/data/site";

const pillars = [
  { href: "/services/land-surveying", title: "Surveyed before it's sold", body: "Our own surveyors map every plot. You get a survey plan in your name." },
  { href: "/buy-land", title: "Documents at allocation", body: "Pay your deposit and receive your receipt and allocation letter." },
  { href: "#plan", title: "Plans from ₦100k deposit", body: "Half plot, full plot or an acre. Spread the balance over months." },
];

export default function Home() {
  return (
    <main className="page">
      <Hero
        current="/"
        image="/images/hero-road.jpg"
        alt="A car driving down a dusty laterite road towards open land at sunset"
        title={site.tagline}
        sub="Surveyed, documented and allocated. Estates in Oyo, Ibadan and Lagos."
        cta={{ href: "/contact", label: "Book an Inspection" }}
        coord="7°51′N 3°56′E · Oyo town"
      />

      {/* Intro + pillars */}
      <section aria-label="Why Pace" className="relative z-[3] grid gap-10 md:-mt-16 md:grid-cols-[5fr_7fr]">
        <div className="flex flex-col justify-between gap-10 pt-8 md:pt-24">
          <p className="max-w-[46ch]">
            {site.legalName} is a surveying and real-estate firm in Oyo town. We survey every plot before we sell it, so you get clean land and your documents from day one.
          </p>
          <TextLink href="/estates">Find Your Plot</TextLink>
        </div>
        <div className="grid gap-2.5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article key={p.title} className={`pillar rise d${i + 1}`}>
              <Link href={p.href} className="sq self-end" aria-label={p.title}><ArrowUpRight /></Link>
              <span className="mt-3.5 text-[22px] text-[#c9c9c9]">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-medium leading-tight text-ink">{p.title}</h3>
              <p className="mt-2.5 text-[13.5px] text-grey">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sec" aria-labelledby="featured">
        <Label>Featured Estates</Label>
        <FeaturedEstates estates={estates} />
      </section>

      <section className="sec" aria-labelledby="numbers">
        <Label id="numbers">By the Numbers</Label>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="num"><b>400+</b><span>Plots allocated at Primo Phase I</span></div>
          <div className="num"><b>70%</b><span>Of Primo III sold in its first month</span></div>
          <div className="num"><b>{estates.length}</b><span>Estates across Oyo, Ibadan and Lagos</span></div>
          <div className="num"><b>₦100k</b><span>Lowest entry deposit, at Ìdèra</span></div>
        </div>
      </section>

      <section className="sec" aria-labelledby="about">
        <Label id="about">About</Label>
        <p className="tone">
          Surveying is the bedrock of every development. At Pace, we map the land before we sell it,{" "}
          <span>so every client knows where their plot starts and ends, holds the right documents from day one, and owns dry, accessible land with no omo-onile wahala. {site.watchword}</span>
        </p>
        <div className="mt-18 h-px bg-rule" />
      </section>

      <section className="mt-18" aria-labelledby="services">
        <div className="mb-9 flex items-start justify-between gap-8">
          <Label id="services">Our Services</Label>
          <TextLink href="/services">View Services</TextLink>
        </div>
        <div className="grid items-end gap-14 md:grid-cols-[5fr_7fr]">
          <Rows items={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))} />
          <Collage
            images={[
              { src: "/images/velora-aerial.jpg", alt: "Surveyed plots beside a neighbourhood in Oyo" },
              { src: "/images/team-gate.jpg", alt: "The Pace team in hi-vis vests outside the office" },
              { src: "/images/academy-speaker.jpg", alt: "A session in the Pace office" },
              { src: "/images/velora-house.jpg", alt: "A home design for Velora by Pace" },
            ]}
          />
        </div>
      </section>

      <section id="plan" className="sec panel grid gap-14 md:grid-cols-[5fr_7fr]" aria-labelledby="plan-h">
        <div>
          <p className="label !text-white/70">[Plan Your Plot]</p>
          <h2 id="plan-h" className="text-[clamp(28px,3vw,36px)] leading-[1.12]">See your deposit and monthly payment before you visit.</h2>
          <p className="mt-4.5 max-w-[40ch] text-white/80">
            Choose an estate, a size and how long you need. When it looks right, send the plan to our team on WhatsApp and we'll book your inspection.
          </p>
          <p className="mt-5 text-[13px] text-white/70">Launch prices from Pace's product papers. Confirmed with you before payment.</p>
        </div>
        <PlanCalculator options={planOptions()} />
      </section>

      <section className="sec" aria-labelledby="why-oyo">
        <Label>Why Oyo</Label>
        <div className="grid items-start gap-14 md:grid-cols-2">
          <div>
            <h2 id="why-oyo" className="h-big max-w-[14ch]">The Pace-setter city is still early.</h2>
            <p className="mt-6 max-w-[46ch]">
              Nigeria is short of 17 to 28 million homes. Oyo town sits where the Ibadan, Ogbomoso, Iseyin and Ilorin roads meet, with a new Ogbomoso expressway, universities and new development arriving. Land here is priced for today, not for what is coming.
            </p>
            <p className="mt-4 max-w-[46ch]">Buy and wait. Don't wait and buy.</p>
            <ul className="list mt-8 max-w-[520px]">
              <li><span>Office</span><span>{site.address.line1}, Abiodun Atiba Rd</span></li>
              <li><span>North</span><span>Velora, Primo and Ìdèra — near Ajayi Crowther University and the Oyo–Ogbomoso roads</span></li>
              <li><span>West</span><span>Orange County Oyo, Balogun, off Iseyin Expressway</span></li>
              <li><span>Ibadan</span><span>Ilé Ìrè, Ido — near Eleyele and the Ladoke Akintola station</span></li>
            </ul>
          </div>
          <figure>
            <OyoMap />
            <figcaption className="mt-2 text-xs text-grey">Schematic, not to scale. Exact coordinates come with every survey plan.</figcaption>
          </figure>
        </div>
      </section>

      <section className="sec" aria-labelledby="visit">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Label>Visit</Label>
            <h2 id="visit" className="h-big">Come and walk the land with us.</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link className="btn" href="/contact">Book an inspection</Link>
            <a className="btn ghost" href={telHref(site.phones[0])}>Call {site.phones[0]}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function OyoMap() {
  return (
    <svg viewBox="0 0 640 560" role="img" aria-label="Schematic map of Pace estates around Oyo town" className="block h-auto w-full bg-field">
      <g fill="none" stroke="#C9C9C4" strokeWidth="1" opacity=".55">
        <path d="M0 80h640M0 160h640M0 240h640M0 320h640M0 400h640M0 480h640M80 0v560M160 0v560M240 0v560M320 0v560M400 0v560M480 0v560M560 0v560" />
      </g>
      <g fill="none" stroke="#0A3D14" strokeWidth="3" strokeLinecap="round">
        <path d="M320 290 L360 0" /><path d="M320 290 L300 560" /><path d="M320 290 L0 250" /><path d="M320 290 L640 120" />
      </g>
      <g fontFamily="var(--font-inter-tight)" fontSize="12" fill="#666">
        <text x="370" y="24">to Ogbomoso</text><text x="312" y="548" textAnchor="end">to Ibadan</text><text x="10" y="238">to Iseyin</text><text x="630" y="108" textAnchor="end">to Ilorin</text>
      </g>
      <g fontFamily="var(--font-inter-tight)" fontSize="13" fill="#111">
        <rect x="314" y="284" width="12" height="12" fill="#E66B1E" /><text x="334" y="295" fontWeight="600">Pace office</text>
        <circle cx="380" cy="140" r="7" fill="#0A3D14" /><text x="392" y="145">Velora · Primo</text>
        <circle cx="342" cy="70" r="7" fill="#0A3D14" /><text x="268" y="75">Ìdèra</text>
        <circle cx="120" cy="250" r="7" fill="#0A3D14" /><text x="70" y="232">Orange County Oyo</text>
        <circle cx="304" cy="520" r="7" fill="#0A3D14" /><text x="318" y="525">Ilé Ìrè, Ibadan ↓</text>
      </g>
    </svg>
  );
}
