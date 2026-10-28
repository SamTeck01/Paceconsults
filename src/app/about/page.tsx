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
const team: { name: string; role: string; photo?: string }[] = [
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
        image="/images/team-gate.jpg"
        alt="The Pace team outside the office"
        imagePosition="center 35%"
        title="We are Pace. We set the pace."
        sub={`A surveying and real-estate firm from Oyo town, registered with CAC as ${site.rc}.`}
      />

      <section className="mt-24" aria-labelledby="story">
        <Label id="story">Our Story</Label>
        <p className="tone">
          Pace Associate &amp; Integrated Consults began with surveying,{" "}
          <span>because every honest land deal starts with knowing exactly where the land is. From that base we grew into estates — Primo, Ìdèra, Velora, Orange County, Ilé Ìrè — consultancy, construction and an academy, all from our building beside Alapo Bridge.</span>
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
        <Label>Leadership &amp; Team</Label>
        <h2 id="team" className="h-sec mb-9">The people behind every plot.</h2>
        <div className="grid grid-cols-2 gap-x-1 gap-y-10 md:grid-cols-4">
          {team.map((p) => (
            <div key={p.name}>
              <div className="relative flex h-[220px] items-end bg-field p-3.5 text-xs text-grey md:h-[380px]">
                {p.photo ? <Image src={p.photo} alt={p.name} fill sizes="(max-width: 820px) 50vw, 25vw" className="object-cover" /> : <span>Photo coming soon</span>}
              </div>
              <h3 className="mt-3.5 text-xl text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-grey">{p.role}</p>
            </div>
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
              { src: "/images/academy-speaker.jpg", alt: "Inside the Pace office, logo on the wall" },
              { src: "/images/team-gate.jpg", alt: "Team outside the office" },
              { src: "/images/academy-folder.jpg", alt: "Pace Academy folder" },
              { src: "/images/academy-group.jpg", alt: "A gathering in the office" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
