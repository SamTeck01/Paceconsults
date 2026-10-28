import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Label, TextLink } from "@/components/ui";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Land surveying, GIS & mapping, real-estate consultancy and sustainable construction in Oyo State.",
};

const steps = [
  { k: "Call", v: "Tell us the land and what you need. We quote in writing." },
  { k: "Visit", v: "Our surveyors go to site with GNSS equipment." },
  { k: "Process", v: "We draw, check and lodge your plan." },
  { k: "Deliver", v: "You receive your documents and a walkthrough." },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <Hero
        short
        current="/services"
        image="/images/land-track.jpg"
        alt="A track curving across open land"
        title="Surveyors first. Then everything else."
        sub="Surveying, GIS, consultancy and construction, from one firm in Oyo."
      />

      <section className="mt-24" aria-labelledby="intro">
        <Label id="intro">Our Services</Label>
        <p className="tone">
          One team takes land from a bare field to a documented plot{" "}
          <span>to a finished home. Clients come to us for one survey and stay on retainer, because the people who measure the land also advise on it and build on it.</span>
        </p>
      </section>

      <section className="sec" aria-label="Service list">
        {services.map((s, i) => (
          <article key={s.slug} className="grid items-start gap-3.5 border-t border-rule py-8 md:grid-cols-[80px_4fr_5fr_3fr] md:gap-8 md:py-11">
            <span className="text-[22px] text-[#c9c9c9]">0{i + 1}</span>
            <div>
              <h2 className="text-[clamp(24px,2.2vw,30px)] leading-[1.1]">{s.name}</h2>
              <TextLink href={`/services/${s.slug}`} className="mt-5">Service details</TextLink>
            </div>
            <div>
              <p className="text-[#444]">{s.intro}</p>
              <ul className="mt-4 text-sm text-grey">
                {s.offers.map((o) => <li key={o.name} className="py-1">{o.name}</li>)}
              </ul>
            </div>
            <Link href={`/services/${s.slug}`} className="relative block h-[220px]">
              <Image src={s.image} alt={s.name} fill sizes="(max-width: 820px) 100vw, 25vw" className="object-cover" />
            </Link>
          </article>
        ))}
      </section>

      <section className="sec" aria-labelledby="how">
        <Label>How We Work</Label>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {steps.map((s) => <div key={s.k} className="num"><b>{s.k}</b><span>{s.v}</span></div>)}
        </div>
        <h2 id="how" className="h-big mt-28 max-w-[18ch]">Need a survey this week? We do express jobs.</h2>
        <Link className="btn mt-7" href="/services/land-surveying#quote">Request a quote</Link>
      </section>
    </main>
  );
}
