import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { Label, TextLink } from "@/components/ui";
import WhatsAppForm from "@/components/WhatsAppForm";
import { estates } from "@/data/estates";
import { site, telHref, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book an inspection or visit Pace Consults at ${site.address.line1}, Oyo. Call ${site.phones[0]}.`,
};

export default function ContactPage() {
  const ways = [
    { href: waLink(), k: "WhatsApp · fastest", v: "Chat with sales" },
    { href: telHref(site.phones[0]), k: "Call", v: site.phones[0] },
    { href: `mailto:${site.email}`, k: "Email", v: site.email },
    { href: site.instagram, k: "Instagram", v: site.instagramHandle },
  ];
  return (
    <main className="page">
      <Hero
        short
        current="/contact"
        image="/images/hero-road.jpg"
        alt="A road towards open land at sunset"
        title="Come and see the land."
        sub="Book an inspection, ask a question, or walk into our office. We're always open."
      />

      <section className="mt-24" aria-labelledby="reach">
        <Label>Reach Us</Label>
        <h2 id="reach" className="h-sec mb-8">Four ways to talk to Pace.</h2>
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {ways.map((w) => (
            <a key={w.k} href={w.href} className="flex min-h-[130px] flex-col justify-between bg-field p-5.5 transition-colors hover:bg-[#ececE7] md:min-h-[180px]">
              <small className="text-[13px] text-grey">{w.k}</small>
              <b className="break-words text-[17px] font-normal tracking-[-0.02em] text-green md:text-[22px]">{w.v}</b>
            </a>
          ))}
        </div>
        <p className="note">Also on {site.phones.slice(1).join(" and ")}.</p>
      </section>

      <section className="sec" aria-labelledby="book">
        <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>Book an Inspection</Label>
            <h2 id="book" className="h-sec max-w-[16ch]">Choose an estate and a day.</h2>
            <p className="mt-4 max-w-[38ch] text-grey">Submit and WhatsApp opens with your details filled in. Press send and we'll confirm.</p>
          </div>
          <WhatsAppForm
            intro="Hello Pace, I'd like to book an inspection."
            submitLabel="Request inspection"
            fields={[
              { name: "estate", label: "Estate", type: "select", options: [...estates.map((e) => e.name), "Not sure yet"], full: true },
              { name: "name", label: "Full name", required: true },
              { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
              { name: "date", label: "Preferred date", type: "date" },
              { name: "kind", label: "Inspection", type: "select", options: ["Physical, on site", "Virtual, on WhatsApp video"] },
              { name: "budget", label: "Budget", type: "select", options: ["Under ₦500k", "₦500k – ₦1m", "₦1m – ₦5m", "Over ₦5m"] },
              { name: "notes", label: "Anything else?", type: "textarea" },
            ]}
          />
        </div>
      </section>

      <section className="sec" aria-labelledby="office">
        <Label>Office</Label>
        <div className="grid items-start gap-14 md:grid-cols-2">
          <div>
            <h2 id="office" className="h-big max-w-[14ch]">{site.address.line1}.</h2>
            <ul className="list mt-8">
              <li><span>Address</span><span>{site.address.line2}</span></li>
              <li><span>Hours</span><span>{site.hours}</span></li>
              <li><span>Pay</span><span>Only into Pace's company account. Never by DM.</span></li>
            </ul>
            <TextLink href={site.address.mapUrl} className="mt-7">Open in Google Maps</TextLink>
          </div>
          <figure>
            <svg viewBox="0 0 640 440" role="img" aria-label="Map sketch: Pace Building beside Alapo Bridge on Abiodun Atiba Road" className="block h-auto w-full bg-field">
              <path d="M0 250 C160 230 300 270 640 220" fill="none" stroke="#9FC3D9" strokeWidth="18" />
              <path d="M300 0 L330 440" fill="none" stroke="#fff" strokeWidth="22" />
              <path d="M300 0 L330 440" fill="none" stroke="#0A3D14" strokeWidth="2" strokeDasharray="10 10" />
              <rect x="296" y="232" width="46" height="34" fill="#BDBDB8" />
              <rect x="350" y="170" width="44" height="44" fill="#E66B1E" />
              <g fontFamily="var(--font-inter-tight)" fontSize="13" fill="#111">
                <text x="404" y="190" fontWeight="600">Pace Building</text>
                <text x="404" y="208" fill="#666">beside Alapo Bridge</text>
                <text x="230" y="300" fill="#666">Alapo Bridge</text>
              </g>
            </svg>
            <figcaption className="mt-2 text-xs text-grey">Sketch, not to scale.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
