import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { ArrowUpRight } from "@/components/icons";
import { Collage, Label } from "@/components/ui";
import WhatsAppForm from "@/components/WhatsAppForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Work at Pace Consults in Oyo town — sales, social media, front desk and HR roles.",
};

// Update this list as roles open and close.
const roles = [
  { t: "Sales Executive", d: "Inspections, client follow-up, closing" },
  { t: "Sales Consultant", d: "Advising buyers and investors" },
  { t: "Social Media Manager", d: "Reels, posts and the Pace voice" },
  { t: "Front Desk Manager", d: "First face of Pace for every visitor" },
  { t: "Human Resources Manager", d: "Hiring, people and culture" },
];

export default function CareersPage() {
  return (
    <main className="page">
      <Hero
        short
        current="/about"
        image="/images/team.jpg"
        alt="The Pace Consults team in the office"
        imagePosition="center 30%"
        title="Work at Pace, Oyo town."
        sub="Join a young team that surveys, sells and builds — and has fun doing it."
      />

      <section className="mt-24" aria-labelledby="roles">
        <Label>Open Roles</Label>
        <h2 id="roles" className="h-sec mb-7">Roles we hire for.</h2>
        <div>
          {roles.map((r, i) => (
            <a key={r.t} href="#apply" className={`group grid grid-cols-[1fr_20px] items-center gap-1.5 border-b border-rule py-6.5 md:grid-cols-[4fr_3fr_2fr_20px] md:gap-6 ${i === 0 ? "border-t" : ""}`}>
              <b className="text-[22px] font-normal tracking-[-0.02em] text-green">{r.t}</b>
              <span className="text-sm text-grey max-md:col-start-1">{r.d}</span>
              <span className="text-sm text-grey max-md:hidden">Full time · Oyo town</span>
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 max-md:col-start-2 max-md:row-start-1" />
            </a>
          ))}
        </div>
      </section>

      <section className="sec" aria-labelledby="why">
        <div className="grid items-end gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>Why Pace</Label>
            <h2 id="why" className="h-sec max-w-[16ch]">What we look for, and what you get.</h2>
            <ul className="list mt-7">
              <li><span>You</span><span>Good communication, sales or marketing experience, BSc or HND. Men and women welcome.</span></li>
              <li><span>We</span><span>Attractive salary, training through the Pace Academy, and a team that celebrates wins.</span></li>
            </ul>
          </div>
          <Collage
            images={[
              { src: "/images/culture-jump.jpg", alt: "Pace staff jumping for joy on Jersey Day" },
              { src: "/images/team.jpg", alt: "The Pace team in the office" },
              { src: "/images/csw-group.jpg", alt: "The team in traditional dress for Customer Service Week" },
              { src: "/images/culture-team.jpg", alt: "Colleagues on estate land on Jersey Day" },
            ]}
          />
        </div>
      </section>

      <section id="apply" className="sec panel grid gap-14 md:grid-cols-[5fr_7fr]" aria-labelledby="a">
        <div>
          <p className="label !text-white/70">[Apply]</p>
          <h2 id="a" className="text-[clamp(28px,3vw,36px)] leading-[1.12]">Tell us about you.</h2>
          <p className="mt-4.5 max-w-[38ch] text-white/80">Then email your CV to {site.email} with the role in the subject line.</p>
        </div>
        <WhatsAppForm
          dark
          intro="Hello Pace, I'd like to apply for a role."
          submitLabel="Send application"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "phone", label: "Phone", type: "tel", required: true },
            { name: "role", label: "Role", type: "select", options: roles.map((r) => r.t) },
            { name: "qualification", label: "Highest qualification" },
          ]}
        />
      </section>
    </main>
  );
}
