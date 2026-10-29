import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PhaseTabs from "@/components/PhaseTabs";
import PlanCalculator from "@/components/PlanCalculator";
import { Faq, Label, TextLink } from "@/components/ui";
import WhatsAppForm from "@/components/WhatsAppForm";
import { estates, fromPrice, getEstate, isOnSale, naira, onSale, planOptions, shortNaira, statusLabel } from "@/data/estates";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return estates.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const e = getEstate((await params).slug);
  if (!e) return {};
  return { title: `${e.name} — ${e.area}`, description: e.summary, openGraph: { images: [e.images.hero] } };
}

export default async function EstatePage({ params }: Params) {
  const e = getEstate((await params).slug);
  if (!e) notFound();

  const from = fromPrice(e);
  const options = planOptions([e]);
  const account = e.account ?? site.bank;
  const gallery = e.images.gallery;
  const selling = isOnSale(e);
  const alternatives = onSale().filter((x) => x.slug !== e.slug);

  return (
    <main className="page">
      <Hero
        current="/estates"
        image={e.images.hero}
        video={e.video?.loop}
        alt={`${e.name}, ${e.area}`}
        eyebrow={<span className="chip" data-s={e.status}>{statusLabel[e.status]}</span>}
        title={`${e.name}.`}
        sub={`${e.tagline} ${e.area}.`}
        cta={selling ? { href: "#inspect", label: "Book an Inspection" } : { href: "#now-selling", label: "See What's Selling Now" }}
        coord={`${e.coord} · ${e.city}`}
      />

      <section className="mt-24" aria-labelledby="estate">
        <Label>Estate</Label>
        <h2 id="estate" className="sr-only">About {e.name}</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <Fact k="From" v={from ? shortNaira(from) : "On request"} />
          <Fact k="Title" v={e.title} />
          <Fact k="City" v={e.city} />
          <Fact k="Status" v={statusLabel[e.status]} />
        </div>
        <p className="tone mt-16">
          {e.tagline} <span>{e.summary}</span>
        </p>
      </section>

      {e.phases ? (
        <section className="sec" aria-labelledby="phases">
          <Label>Phases</Label>
          <h2 id="phases" className="h-sec mb-7">Choose a phase.</h2>
          <PhaseTabs phases={e.phases} initial={2} />
        </section>
      ) : (
        <section className="sec" aria-labelledby="pricing">
          <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
            <div>
              <Label>Pricing</Label>
              <h2 id="pricing" className="h-sec max-w-[16ch]">What a plot costs at {e.name}.</h2>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr><th scope="col">Size</th><th scope="col">Price</th><th scope="col">Deposit</th><th scope="col">Balance over</th></tr>
                </thead>
                <tbody>
                  {e.plans.map((p) => (
                    <tr key={p.size}>
                      <td>{p.size}</td>
                      <td className="big">{p.price ? naira(p.price) : "On request"}</td>
                      <td>{p.deposit ? naira(p.deposit) : "Ask us"}</td>
                      <td>{p.months ? `${p.months} months` : "Ask us"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="note">Prices: {e.pricesAsAt}. Confirm current prices with Pace before paying.</p>
            </div>
          </div>
        </section>
      )}

      {options.length > 0 && (
        <section className="sec panel grid gap-14 md:grid-cols-[5fr_7fr]" aria-labelledby="plan">
          <div>
            <p className="label !text-white/70">[Plan Your Plot]</p>
            <h2 id="plan" className="text-[clamp(28px,3vw,36px)] leading-[1.12]">Plan your plot at {e.name}.</h2>
          </div>
          <PlanCalculator options={options} lockEstate />
        </section>
      )}

      {e.features && (
        <section className="sec" aria-labelledby="features">
          <Label>Features</Label>
          <h2 id="features" className="h-sec mb-9">Planned into the estate.</h2>
          <div className="grid gap-1 md:grid-cols-4">
            {e.features.map((f) => (
              <article key={f.name} className="flex min-h-[200px] flex-col justify-between bg-field p-6">
                <h3 className="text-2xl">{f.name}</h3>
                <p className="text-[15px] text-[#555]">{f.body}</p>
              </article>
            ))}
          </div>
          {e.facilities && <p className="mt-6 text-[15px]"><span className="text-grey">Facilities: </span>{e.facilities.join(" · ")}</p>}
        </section>
      )}

      {e.landmarks.length > 0 && (
        <section className="sec" aria-labelledby="location">
          <Label>Location &amp; Landmarks</Label>
          <div className="grid items-start gap-14 md:grid-cols-2">
            <div>
              <h2 id="location" className="h-sec max-w-[18ch]">{e.area}.</h2>
              <ul className="list mt-7">
                {e.landmarks.map((l, i) => (
                  <li key={l.name}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{l.name}{l.note && <p>{l.note}</p>}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {(e.landmarks.some((l) => l.image) ? e.landmarks.filter((l) => l.image).map((l) => ({ src: l.image!, alt: l.name })) : gallery.map((g) => ({ src: g, alt: `${e.name} gallery` })))
                .slice(0, 4)
                .map((im, i) => (
                  <figure key={im.src} className={i === 0 ? "col-span-2" : ""}>
                    <div className={`relative ${i === 0 ? "h-[320px]" : "h-[200px]"}`}>
                      <Image src={im.src} alt={im.alt} fill sizes="(max-width: 820px) 100vw, 45vw" className="object-cover" />
                    </div>
                    <figcaption className="mt-2 text-xs text-grey">{im.alt}</figcaption>
                  </figure>
                ))}
            </div>
          </div>
        </section>
      )}

      {e.video && (
        <section className="sec" aria-labelledby="film">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label>Film</Label>
              <h2 id="film" className="h-sec">See {e.name} from the air.</h2>
            </div>
            <p className="max-w-[40ch] text-sm text-grey">A walkthrough of the masterplan: gate, roads, blocks and facilities. 3D visualisation.</p>
          </div>
          <video className="film" src={e.video.film} poster={e.video.poster} controls playsInline preload="none" />
        </section>
      )}

      {e.images.gallery.length > 2 && (
        <section className="sec" aria-labelledby="gallery">
          <div className="mb-7 flex justify-between gap-6">
            <div>
              <Label>Gallery</Label>
              <h2 id="gallery" className="h-sec">Inside the estate.</h2>
            </div>
            <span className="label self-end">{e.images.gallery.length} renders</span>
          </div>
          <Gallery images={e.images.gallery} name={e.name} />
        </section>
      )}

      <section className="sec" aria-labelledby="docs">
        <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
          <div>
            <Label>What You Get</Label>
            <h2 id="docs" className="h-sec max-w-[16ch]">Documents in your name.</h2>
          </div>
          <ul>
            {e.documents.map((d, i) => (
              <li key={d} className="row" data-on={i === 0}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
                <span />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {selling && (
      <section className="sec grid gap-8 bg-field p-8 md:grid-cols-[5fr_7fr] md:p-12" aria-labelledby="pay">
        <div>
          <Label>Payment Account</Label>
          <h2 id="pay" className="h-sec">Only pay into this account.</h2>
          <p className="mt-3 max-w-[40ch] text-grey">Pace never asks for payment in a DM or to a personal account. Call {site.phones[0]} to confirm before you transfer.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 self-end md:grid-cols-3">
          <Fact k="Bank" v={account.bank} />
          <Fact k="Account number" v={account.number} />
          <Fact k="Account name" v={account.name} />
        </div>
      </section>
      )}

      {selling && e.faq && (
        <section className="sec" aria-labelledby="faq">
          <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
            <div>
              <Label>Questions</Label>
              <h2 id="faq" className="h-sec">Before you buy.</h2>
              {e.externalSite && <TextLink href={e.externalSite} className="mt-6">Visit the {e.name} site</TextLink>}
            </div>
            <Faq items={e.faq} />
          </div>
        </section>
      )}

      {selling ? (
      <section id="inspect" className="sec panel grid gap-14 md:grid-cols-[5fr_7fr]" aria-labelledby="book">
        <div>
          <p className="label !text-white/70">[Book an Inspection]</p>
          <h2 id="book" className="text-[clamp(28px,3vw,36px)] leading-[1.12]">Walk {e.name} with our surveyors.</h2>
          <p className="mt-4.5 max-w-[38ch] text-white/80">Pick a day. We confirm on WhatsApp and meet you at the office or on site.</p>
        </div>
        <WhatsAppForm
          dark
          intro={`Hello Pace, I'd like to inspect ${e.name}.`}
          submitLabel="Request inspection"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
            { name: "date", label: "Preferred date", type: "date" },
            { name: "kind", label: "Inspection", type: "select", options: ["Physical, on site", "Virtual, on WhatsApp video"] },
          ]}
        />
      </section>
      ) : (
      <section id="now-selling" className="sec panel grid gap-14 md:grid-cols-[5fr_7fr]" aria-labelledby="sold">
        <div>
          <p className="label !text-white/70">[Sold Out]</p>
          <h2 id="sold" className="text-[clamp(28px,3vw,36px)] leading-[1.12]">{e.name} is fully sold.</h2>
          <p className="mt-4.5 max-w-[38ch] text-white/80">Thank you to every client who bought early. These estates are selling now.</p>
        </div>
        <div className="grid gap-1 md:grid-cols-2">
          {alternatives.map((x) => (
            <Link key={x.slug} href={`/estates/${x.slug}`} className="group block bg-white/8 p-6 transition-colors hover:bg-white/14">
              <span className="chip" data-s={x.status}>{statusLabel[x.status]}</span>
              <h3 className="mt-4 text-2xl text-white">{x.name}</h3>
              <p className="mt-1.5 text-sm text-white/75">{x.area}</p>
              <p className="mt-6 text-white">{fromPrice(x) ? `From ${shortNaira(fromPrice(x)!)}` : "Price on request"} →</p>
            </Link>
          ))}
        </div>
      </section>
      )}
    </main>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-rule pt-3.5">
      <span className="block text-[13px] text-grey">{k}</span>
      <b className="mt-1.5 block text-[clamp(18px,1.8vw,24px)] font-normal tracking-[-0.02em] text-green">{v}</b>
    </div>
  );
}
