import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Faq, Label } from "@/components/ui";
import { naira, onSale } from "@/data/estates";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "How to buy land",
  description: "Inspect, pay, get allocated and take your documents home. How buying land with Pace works.",
};

const steps = [
  { t: "Inspect", b: "Visit the estate with our team, or take a live video inspection on WhatsApp." },
  { t: "Choose & pay", b: "Pick your plot size and pay into Pace's company account — never to an individual." },
  { t: "Allocate", b: "Receive your payment receipt and allocation letter, and see your plot's beacons." },
  { t: "Documents", b: "Deed, survey plan and contract of sale in your name, as listed for each estate." },
];

export default function BuyLandPage() {
  const rows = onSale().flatMap((e) => e.plans.filter((p) => p.price).map((p) => ({ e, p })));
  return (
    <main className="page">
      <Hero
        short
        current="/estates"
        image="/images/land-wheat.jpg"
        alt="A wide field under a cloudy sky"
        title="Buying land with Pace, step by step."
        sub="Inspect, pay, get allocated and take your documents home. No middlemen."
      />

      <section className="mt-24" aria-labelledby="steps">
        <Label>Four Steps</Label>
        <h2 id="steps" className="h-sec mb-9 max-w-[24ch]">From first call to allocation.</h2>
        <div className="grid gap-1 md:grid-cols-4">
          {steps.map((s, i) => (
            <article key={s.t} className="flex min-h-[200px] flex-col bg-field p-6 md:min-h-[300px]">
              <span className="text-[56px] leading-none tracking-[-0.04em] text-green">0{i + 1}</span>
              <h3 className="mt-auto text-[22px] text-ink">{s.t}</h3>
              <p className="mt-2.5 text-sm text-[#555]">{s.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sec grid items-center gap-6 bg-green p-7 text-white md:grid-cols-[5fr_7fr] md:gap-12 md:p-12" aria-labelledby="fraud">
        <h2 id="fraud" className="text-[clamp(26px,2.6vw,34px)] leading-[1.12] text-white">Only pay into Pace's company account.</h2>
        <div>
          <p className="text-[17px] text-white/85">
            Pace never asks for payment in a DM, to a staff member's personal account, or to an agent you met by the roadside. Confirm by phone on {site.phones[0]} before every transfer.
          </p>
          <p className="mt-4 text-white">
            {site.bank.bank} · <b className="font-medium">{site.bank.number}</b> · {site.bank.name}
          </p>
          <p className="mt-1 text-sm text-white/70">Some estates have their own account — it's shown on each estate page.</p>
        </div>
      </section>

      <section className="sec" aria-labelledby="plans">
        <Label>Payment Plans</Label>
        <h2 id="plans" className="h-sec mb-7">Current prices by estate.</h2>
        <div className="overflow-x-auto">
          <table className="table min-w-[640px]">
            <thead><tr><th scope="col">Estate</th><th scope="col">Size</th><th scope="col">Price</th></tr></thead>
            <tbody>
              {rows.map(({ e, p }) => (
                <tr key={e.slug + p.size}>
                  <td><Link href={`/estates/${e.slug}`} className="underline underline-offset-4">{e.name}</Link></td>
                  <td>{p.size}</td>
                  <td className="big">{naira(p.price!)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note">Confirm current prices before paying.</p>
      </section>

      <section className="sec" aria-labelledby="faq">
        <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
          <div><Label>Questions</Label><h2 id="faq" className="h-sec">Common questions.</h2></div>
          <Faq
            items={[
              { q: "What do I need to bring?", a: "A valid ID (NIN, passport, driver's licence or voter's card), two passport photographs, next-of-kin details and your proof of payment." },
              { q: "Can I buy from abroad?", a: "Yes. We inspect by video, sign documents with your representative or by courier, and send scans of everything." },
              { q: "Is there a time limit to start building?", a: "No. There is no time limit to commence work on your plot after allocation." },
              { q: "Do you help me build?", a: "Yes. Our construction team builds on land we have surveyed — ask for a quote." },
              { q: "How do I stay updated?", a: `Follow ${site.instagramHandle} on Instagram and our other socials.` },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
