import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Collage, Label } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} (${site.rc}) — a surveying and real-estate firm from Oyo town.`,
};

// Add photos to /public/images and set `photo` when available.
// Staff headshots. Add each person's name and role as Pace confirms them;
// names show on hover once filled in.
const people: { photo: string; name?: string; role?: string }[] = Array.from({ length: 14 }, (_, i) => ({
  photo: `/images/people/p${String(i + 1).padStart(2, "0")}.jpg`,
}));

const team: { name: string; role: string }[] = [
  { name: "Saka Yusuff Olanrewaju", role: "Director" },
  { name: "Kayode Zainab Ayoola", role: "Director" },
  { name: "Otunba Adeyemo Taiwo", role: "Chief Administrative Officer · Senior Partner" },
  { name: "Mariam Otubu", role: "Public Relations" },
];

const values = [
  { t: "Measure first", b: "No plot is sold until our surveyors have mapped it." },
  { t: "Paper, not promises", b: "Documents in your name, every time." },
  { t: "Home for all", b: "Entry from a ₦100k deposit, so more families can own land." },
];

export default function AboutPage() {
  return (
    <main className="page">
      <Hero
        short
        current="/about"
        image="/images/team.jpg"
        alt="The Pace Consults team in the office, in white shirts and orange ties"
        imagePosition="center 30%"
        title="We are Pace. We set the pace."
        sub={`A surveying and real-estate firm from Oyo town, registered with CAC as ${site.rc}.`}
      />

      <section className="mt-24" aria-labelledby="story">
        <Label id="story">Our Story</Label>
        <p className="tone">
          Pace Associate &amp; Integrated Consults began with surveying,{" "}
          <span>because every honest land deal starts with knowing exactly where the land is. From that base we grew into estates — Primo, Ìdèra, Velora, Orange County, Ilé Ìrè — consultancy, construction and an academy, all from our building beside Alapo Bridge. Our motto: setting the pace towards a greater future, and unlocking value.</span>
        </p>
        <div className="mt-18 h-px bg-rule" />
      </section>

      <section className="mt-18" aria-labelledby="values">
        <div className="flex justify-between gap-8"><Label>What We Stand For</Label><span className="label">Our watchword</span></div>
        <h2 id="values" className="h-big mb-10">{site.watchword}</h2>
        <div className="grid gap-1 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.t} className="flex min-h-[160px] flex-col justify-between bg-field p-6 md:min-h-[240px]">
              <h3 className="text-[26px]">{v.t}</h3>
              <p className="text-[15px] text-[#555]">{v.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sec" aria-labelledby="team">
        <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>Leadership</Label>
            <h2 id="team" className="h-sec max-w-[16ch]">The people behind every plot.</h2>
          </div>
          <ul>
            {team.map((p, i) => (
              <li key={p.name} className="row" data-on={i === 0}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{p.name} <span className="text-grey">· {p.role}</span></span>
                <span />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-7">
          {people.map((p, i) => (
            <figure key={p.photo} className="group relative aspect-[4/5] overflow-hidden bg-field">
              <Image src={p.photo} alt={p.name ? `${p.name}, ${p.role}` : `Pace Consults team member ${i + 1}`} fill sizes="(max-width: 820px) 50vw, 14vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              {p.name && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {p.name}<br /><span className="text-white/75">{p.role}</span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      <section className="sec" aria-labelledby="office">
        <div className="grid items-end gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>The Office</Label>
            <h2 id="office" className="h-sec max-w-[16ch]">{site.address.line1}.</h2>
            <ul className="list mt-7">
              <li><span>Address</span><span>{site.address.line2}</span></li>
              <li><span>Phone</span><span>{site.phones.join(", ")}</span></li>
              <li><span>Email</span><span>{site.email}</span></li>
              <li><span>CAC</span><span>{site.legalName} · {site.rc}</span></li>
            </ul>
          </div>
          <Collage
            images={[
              { src: "/images/office-2.jpg", alt: "Inside the Pace office" },
              { src: "/images/team-gate.jpg", alt: "The team outside the Pace office sign" },
              { src: "/images/office-3.jpg", alt: "Staff at work in the office" },
              { src: "/images/office-4.jpg", alt: "The Pace office" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
