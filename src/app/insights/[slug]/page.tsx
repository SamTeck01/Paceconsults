import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import { Label, TextLink } from "@/components/ui";
import { articles, getArticle } from "@/data/articles";
import { site, waLink } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, images: [a.image], publishedTime: a.date },
  };
}

const dateFmt = (d: string) => new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: Params) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    image: `${site.url}${a.image}`,
    datePublished: a.date,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` } },
    mainEntityOfPage: `${site.url}/insights/${a.slug}`,
  };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        short
        current="/insights"
        image={a.image}
        alt={a.imageAlt}
        eyebrow={
          <span className="text-[13px] text-white/80">
            <Link href="/insights" className="text-white underline underline-offset-4">Insights</Link> · {a.kind} · {a.readMins} min read
          </span>
        }
        title={a.title}
      />

      <article className="mx-auto mt-24 max-w-[720px]">
        <p className="label">[{dateFmt(a.date)}]</p>
        <p className="text-[clamp(20px,2vw,26px)] leading-[1.4] tracking-[-0.015em] text-ink">{a.intro}</p>
        {a.sections.map((s) => (
          <section key={s.h} className="mt-12">
            <h2 className="text-[clamp(22px,2.2vw,28px)] leading-tight">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-[1.7] text-[#2b2b2b]">{p}</p>
            ))}
            {s.list && (
              <ul className="mt-4 space-y-2 text-[17px] leading-[1.6] text-[#2b2b2b]">
                {s.list.map((li) => (
                  <li key={li} className="grid grid-cols-[22px_1fr]">
                    <span className="mt-[11px] block h-1.5 w-1.5 bg-orange" aria-hidden="true" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <aside className="mt-16 bg-green p-8 text-white">
          <p className="text-[22px] leading-snug tracking-[-0.015em]">Questions about buying land? Talk to the Pace team.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn orange" href={waLink(`Hello Pace, I just read "${a.title}" and I have a question.`)}>Chat on WhatsApp</a>
            <Link className="btn ghost light" href="/estates">See estates</Link>
          </div>
        </aside>
      </article>

      <section className="sec" aria-labelledby="more">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <Label>Keep Reading</Label>
            <h2 id="more" className="h-sec">More from Insights.</h2>
          </div>
          <TextLink href="/insights">All articles</TextLink>
        </div>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {more.map((m) => (
            <Link key={m.slug} href={`/insights/${m.slug}`} className="group block">
              <div className="relative h-[220px] overflow-hidden">
                <Image src={m.image} alt={m.imageAlt} fill sizes="(max-width: 820px) 100vw, 33vw" className="object-cover transition-transform duration-900 group-hover:scale-[1.04]" />
              </div>
              <small className="mt-3.5 block text-[13px] text-grey">{m.kind} · {m.readMins} min read</small>
              <h3 className="mt-1.5 text-xl leading-tight text-ink">{m.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
