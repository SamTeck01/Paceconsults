"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type City, type Estate, fromPrice, shortNaira, statusLabel } from "@/data/estates";

const budgets = {
  Any: [0, Infinity],
  "Under ₦500k": [0, 499_999],
  "₦500k–₦1m": [500_000, 1_000_000],
  "Over ₦1m": [1_000_001, Infinity],
} as const;
type Budget = keyof typeof budgets;

export default function EstateBrowser({ estates }: { estates: Estate[] }) {
  const [city, setCity] = useState<"All" | City>("All");
  const [budget, setBudget] = useState<Budget>("Any");
  const [lo, hi] = budgets[budget];
  const list = estates.filter((e) => {
    if (city !== "All" && e.city !== city) return false;
    if (budget === "Any") return true;
    const p = fromPrice(e);
    return p !== undefined && p >= lo && p <= hi;
  });

  return (
    <>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-7">
        <h2 id="all" className="h-sec max-w-[22ch]">Find land that fits your plan.</h2>
        <div className="flex flex-wrap gap-7">
          <Group label="City">
            {(["All", "Oyo", "Ibadan", "Lagos"] as const).map((c) => (
              <button key={c} type="button" aria-pressed={c === city} onClick={() => setCity(c)}>{c}</button>
            ))}
          </Group>
          <Group label="Budget per plot">
            {(Object.keys(budgets) as Budget[]).map((b) => (
              <button key={b} type="button" aria-pressed={b === budget} onClick={() => setBudget(b)}>{b}</button>
            ))}
          </Group>
        </div>
      </div>
      {list.length ? (
        <div className="grid gap-x-1 gap-y-12 md:grid-cols-3">
          {list.map((e) => {
            const from = fromPrice(e);
            return (
              <Link key={e.slug} href={`/estates/${e.slug}`} className="group flex flex-col">
                <div className="relative h-[300px] overflow-hidden md:h-[420px]">
                  <Image src={e.images.hero} alt={`${e.name}, ${e.area}`} fill sizes="(max-width: 820px) 100vw, 33vw" className="object-cover transition-transform duration-900 ease-[var(--ease-out-strong)] group-hover:scale-[1.04]" />
                  <span className="chip absolute left-3.5 top-3.5" data-s={e.status}>{statusLabel[e.status]}</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-3 pr-3.5 pt-4">
                  <div>
                    <h3 className="text-2xl">{e.name}</h3>
                    <p className="mt-1.5 text-sm text-grey">{e.area}</p>
                  </div>
                  <div className="text-right text-[13px] text-grey">
                    {e.city}
                    <b className="block text-xl font-normal text-ink">{from ? `From ${shortNaira(from)}` : "On request"}</b>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-xl">
          No estate matches that yet. <Link href="/contact" className="underline">Tell us your budget</Link> and we'll call you when one does.
        </p>
      )}
    </>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="label mb-2.5 block">{label}</span>
      <div className="seg" role="group" aria-label={label}>{children}</div>
    </div>
  );
}
