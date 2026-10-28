import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Label, TextLink } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Guides, market notes and Pace Podcasts on buying land in Oyo State.",
};

// Topics drawn from Pace's own posts. Link each to an article or video when published.
const posts = [
  { img: "/images/velora-aerial.jpg", kind: "Market note", t: "17–28 million homes short: what Nigeria's housing deficit means for you." },
  { img: "/images/academy-board.jpg", kind: "Guide", t: "Allocation letter, deed, survey plan: what each document proves." },
  { img: "/images/land-soil.jpg", kind: "Guide", t: "How to spot omo-onile and fake titles before you pay." },
  { img: "/images/academy-host.jpg", kind: "Video · Pace Podcasts", t: "Got ₦100k–₦200k? Where to start in Oyo town." },
  { img: "/images/land-wheat.jpg", kind: "Market note", t: "Real estate and GDP: why land holds value when money doesn't." },
  { img: "/images/academy-speaker.jpg", kind: "Video", t: "Is there a gated estate in Oyo town? We asked the street." },
];

export default function InsightsPage() {
  return (
    <main className="page">
      <Hero
        short
        current="/insights"
        image="/images/land-tractor.jpg"
        alt="Farmland with hay bales under a blue sky"
        title="Buy and wait. Don't wait and buy."
        sub="Guides, market notes and Pace Podcasts on land in Oyo State."
      />

      <section className="mt-24" aria-labelledby="ft">
        <Label>Featured</Label>
        <div className="grid gap-1 md:grid-cols-[7fr_5fr]">
          <div className="relative h-[280px] md:h-[520px]">
            <Image src="/images/velora-house.jpg" alt="A modern home in Oyo" fill sizes="(max-width: 820px) 100vw, 58vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-between gap-8 bg-field p-8">
            <div>
              <small className="text-[13px] text-grey">Guide</small>
              <h2 id="ft" className="mt-2.5 text-[clamp(26px,2.6vw,34px)] leading-[1.1]">Why Oyo? The case for buying in the Pace-setter city.</h2>
              <p className="mt-4 text-[#555]">New roads, universities and the Alaafin's new residence are arriving in Oyo town. Here's what that means for land prices — and why early buyers win.</p>
            </div>
            <TextLink href={site.instagram}>Follow on Instagram</TextLink>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="latest">
        <Label>Latest</Label>
        <h2 id="latest" className="h-sec mb-9">Read, watch, listen.</h2>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.t} className="group">
              <div className="relative h-[260px] overflow-hidden">
                <Image src={p.img} alt="" fill sizes="(max-width: 820px) 100vw, 33vw" className="object-cover transition-transform duration-900 group-hover:scale-[1.04]" />
              </div>
              <small className="mt-3.5 block text-[13px] text-grey">{p.kind} · Coming soon</small>
              <h3 className="mt-1.5 text-[22px] leading-[1.2] text-ink">{p.t}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
