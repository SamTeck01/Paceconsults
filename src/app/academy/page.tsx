import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Label } from "@/components/ui";
import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Pace Real Estate Academy",
  description: "A capacity-building programme for the next generation of realtors in Oyo State.",
};

const modules = [
  { t: "Real estate documentation", b: "Allocation letters, deeds, survey plans, C of O and Governor's consent." },
  { t: "Legal frameworks & mortgages", b: "The Land Use Act and how financing works in Nigeria." },
  { t: "Surveying for realtors", b: "Reading a survey plan and walking beacons on site." },
  { t: "Sales & client care", b: "Inspections, objections and closing — the Pace way." },
  { t: "Digital marketing", b: "Selling land on Instagram, TikTok and WhatsApp." },
  { t: "Spotting fraud", b: "Omo-onile, fake titles and how to protect clients." },
];

const wall = [
  { src: "/images/academy/class-wide.jpg", alt: "A full Academy class in session", cls: "col-span-2 row-span-2" },
  { src: "/images/academy/facilitator.jpg", alt: "A facilitator teaching at the flipchart", cls: "" },
  { src: "/images/academy/student.jpg", alt: "A participant speaking to the class", cls: "" },
  { src: "/images/academy/certificate.jpg", alt: "A graduate receiving her certificate", cls: "" },
  { src: "/images/academy/folder.jpg", alt: "A Pace Real Estate Academy folder", cls: "" },
  { src: "/images/academy/class.jpg", alt: "Participants in an Academy session", cls: "col-span-2" },
  { src: "/images/academy/cohort-out.jpg", alt: "An Academy cohort outside the Pace office", cls: "col-span-2" },
];

export default function AcademyPage() {
  return (
    <main className="page">
      <Hero
        short
        current="/academy"
        image="/images/academy/hero.jpg"
        alt="An Academy cohort celebrating with their certificates"
        imagePosition="center 35%"
        title="Pace Real Estate Academy."
        sub="A capacity-building programme for the next generation of realtors in Oyo State."
        cta={{ href: "#join", label: "Join the Next Cohort" }}
      />

      <section className="mt-24" aria-labelledby="about">
        <Label id="about">About the Academy</Label>
        <p className="tone">
          From conversations to commission.{" "}
          <span>The Academy teaches what we practise every day: how land is surveyed, documented and sold honestly — and how to build a real-estate career on it. Graduates leave certified.</span>
        </p>
      </section>

      <section className="sec" aria-labelledby="learn">
        <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>What You Learn</Label>
            <h2 id="learn" className="h-sec max-w-[16ch]">Taught by people who sell land daily.</h2>
          </div>
          <ul className="list">
            {modules.map((m, i) => (
              <li key={m.t}><span>0{i + 1}</span><span>{m.t}<p>{m.b}</p></span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="inside">
        <div className="mb-7 flex justify-between gap-8">
          <Label id="inside">Inside the Academy</Label>
          <span className="label">#conversations2commission</span>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-1 md:auto-rows-[260px] md:grid-cols-4">
          {wall.map((w) => (
            <div key={w.src} className={`relative ${w.cls}`}>
              <Image src={w.src} alt={w.alt} fill sizes="(max-width: 820px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="sec panel grid gap-14 md:grid-cols-[5fr_7fr]" aria-labelledby="j">
        <div>
          <p className="label !text-white/70">[Join]</p>
          <h2 id="j" className="text-[clamp(28px,3vw,36px)] leading-[1.12]">Register for the next cohort.</h2>
          <p className="mt-4.5 max-w-[38ch] text-white/80">Leave your details and we'll send dates, fees and what to bring.</p>
        </div>
        <WhatsAppForm
          dark
          intro="Hello Pace, I'd like to join the next Pace Real Estate Academy cohort."
          submitLabel="Register interest"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "experience", label: "Experience", type: "select", options: ["New to real estate", "Selling already", "Investor"] },
          ]}
        />
      </section>
    </main>
  );
}
