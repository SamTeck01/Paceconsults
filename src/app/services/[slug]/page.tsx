import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import { Collage, Label } from "@/components/ui";
import WhatsAppForm from "@/components/WhatsAppForm";
import { getService, services } from "@/data/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? { title: s.name, description: s.short } : {};
}

export default async function ServicePage({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const n = services.indexOf(s) + 1;

  return (
    <main className="page">
      <Hero
        short
        current="/services"
        image={s.image}
        alt={s.name}
        eyebrow={
          <span className="text-[13px] text-white/75">
            <Link href="/services" className="text-white underline underline-offset-4">Services</Link> / 0{n}
          </span>
        }
        title={s.name}
        sub={s.short}
        cta={{ href: "#quote", label: "Request a Quote" }}
      />

      <section className="mt-24" aria-labelledby="what">
        <Label id="what">What It Is</Label>
        <p className="tone">{s.intro}</p>
      </section>

      <section className="sec" aria-labelledby="offers">
        <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>What We Offer</Label>
            <h2 id="offers" className="h-sec max-w-[16ch]">Which one do you need?</h2>
          </div>
          <ul className="list">
            {s.offers.map((o, i) => (
              <li key={o.name}>
                <span>0{i + 1}</span>
                <span>{o.name}<p>{o.body}</p></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="get">
        <div className="grid items-end gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>You Receive</Label>
            <h2 id="get" className="h-sec max-w-[18ch]">Paperwork that holds up.</h2>
            <ul className="mt-7">
              {s.deliverables.map((d, i) => (
                <li key={d} className="row" data-on={i === 0}><span>0{i + 1}</span><span>{d}</span><span /></li>
              ))}
            </ul>
          </div>
          <Collage
            images={s.slug === "construction" ? [
              { src: "/images/site-supervision.jpg", alt: "Pace engineers supervising a build" },
              { src: "/images/site-walkround.jpg", alt: "Site walk-round with the client" },
              { src: "/images/plan-review.jpg", alt: "Reviewing the building plan on site" },
              { src: "/images/team-gate.jpg", alt: "The Pace field team" },
            ] : [
              { src: "/images/land-soil.jpg", alt: "Cleared land at the edge of a field" },
              { src: "/images/team-gate.jpg", alt: "Pace field team in hi-vis vests" },
              { src: "/images/academy/flipchart.jpg", alt: "Documentation workshop" },
              { src: "/images/velora-aerial.jpg", alt: "Surveyed plots beside a neighbourhood" },
            ]}
          />
        </div>
      </section>

      <section id="quote" className="sec panel grid gap-14 md:grid-cols-[5fr_7fr]" aria-labelledby="q">
        <div>
          <p className="label !text-white/70">[Request a Quote]</p>
          <h2 id="q" className="text-[clamp(28px,3vw,36px)] leading-[1.12]">Tell us about your land.</h2>
          <p className="mt-4.5 max-w-[38ch] text-white/80">We reply on WhatsApp with a written quote.</p>
        </div>
        <WhatsAppForm
          dark
          intro={`Hello Pace, I'd like a quote for ${s.name}.`}
          submitLabel="Send request"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
            { name: "type", label: "Service", type: "select", options: s.offers.map((o) => o.name) },
            { name: "location", label: "Land location" },
            { name: "details", label: "Size and anything we should know", type: "textarea" },
          ]}
        />
      </section>
    </main>
  );
}
