import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Label, TextLink } from "@/components/ui";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Insights — guides to buying land in Oyo and Nigeria",
  description:
    "Plain-English guides on buying land in Oyo and Nigeria: land documents, survey plans, avoiding fraud, buying from abroad and the housing market.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;
  return (
    <main className="page">
      <Hero
        short
        current="/insights"
        image="/images/land-tractor.jpg"
        alt="Farmland with hay bales under a blue sky"
        title="Buy and wait. Don't wait and buy."
        sub="Plain-English guides to buying land safely in Oyo and across Nigeria."
      />

      <section className="mt-24" aria-labelledby="ft">
        <Label>Featured</Label>
        <Link href={`/insights/${featured.slug}`} className="group grid gap-1 md:grid-cols-[7fr_5fr]">
          <div className="relative h-[280px] overflow-hidden md:h-[520px]">
            <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width: 820px) 100vw, 58vw" className="object-cover transition-transform duration-900 group-hover:scale-[1.03]" />
          </div>
          <div className="flex flex-col justify-between gap-8 bg-field p-8">
            <div>
              <small className="text-[13px] text-grey">{featured.kind} · {featured.readMins} min read</small>
              <h2 id="ft" className="mt-2.5 text-[clamp(26px,2.6vw,34px)] leading-[1.1]">{featured.title}</h2>
              <p className="mt-4 text-[#555]">{featured.description}</p>
            </div>
            <span className="link"><span>Read the guide</span></span>
          </div>
        </Link>
      </section>

      <section className="sec" aria-labelledby="latest">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <Label>Latest</Label>
            <h2 id="latest" className="h-sec">Guides and market notes.</h2>
          </div>
          <TextLink href="/contact">Ask us a question</TextLink>
        </div>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {rest.map((a) => (
            <Link key={a.slug} href={`/insights/${a.slug}`} className="group block">
              <div className="relative h-[260px] overflow-hidden">
                <Image src={a.image} alt={a.imageAlt} fill sizes="(max-width: 820px) 100vw, 33vw" className="object-cover transition-transform duration-900 group-hover:scale-[1.04]" />
              </div>
              <small className="mt-3.5 block text-[13px] text-grey">{a.kind} · {a.readMins} min read</small>
              <h3 className="mt-1.5 text-[22px] leading-[1.2] text-ink">{a.title}</h3>
              <p className="mt-2 text-sm text-grey">{a.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
