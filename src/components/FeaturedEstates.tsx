"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type City, type Estate, fromPrice, shortNaira, statusLabel } from "@/data/estates";
import { ArrowRight, ArrowUpRight } from "./icons";

const cities: ("All" | City)[] = ["All", "Oyo", "Ibadan", "Lagos"];

export default function FeaturedEstates({ estates }: { estates: Estate[] }) {
  const [city, setCity] = useState<"All" | City>("All");
  const shown = (city === "All" ? estates.filter((e) => e.featured) : estates.filter((e) => e.city === city).sort((a, b) => Number(a.status === "sold-out") - Number(b.status === "sold-out"))).slice(0, 3);

  return (
    <>
      <div className="mb-7 grid gap-8 md:grid-cols-[1fr_auto]">
        <h2 id="featured" className="h-sec max-w-[24ch]">Two estates selling now, surveyed and ready for inspection.</h2>
        <ul className="flex flex-col items-end gap-1" aria-label="Filter estates by city">
          {cities.map((c) => (
            <li key={c}>
              <button type="button" className="filter max-md:text-base" aria-pressed={c === city} onClick={() => setCity(c)}>
                {c === city && <ArrowRight />}
                {c === "All" ? "All cities" : c}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div key={city} className={`page-in grid gap-1 ${["", "", "md:grid-cols-2", "md:grid-cols-3"][shown.length]}`}>
        {shown.map((e) => (
          <EstateCard key={e.slug} estate={e} />
        ))}
      </div>
    </>
  );
}

export function EstateCard({ estate: e }: { estate: Estate }) {
  const from = fromPrice(e);
  return (
    <Link
      href={`/estates/${e.slug}`}
      className="card"
      onMouseEnter={(ev) => ev.currentTarget.querySelector("video")?.play().catch(() => {})}
      onMouseLeave={(ev) => ev.currentTarget.querySelector("video")?.pause()}
    >
      <Image src={e.images.hero} alt={`${e.name}, ${e.area}`} fill sizes="(max-width: 820px) 100vw, 33vw" className="object-cover" />
      {e.video && <video src={e.video.loop} muted loop playsInline preload="none" aria-hidden="true" />}
      <div className="absolute inset-x-[18px] top-4 z-[2]">
        <h3 className="text-2xl text-white">{e.name}</h3>
        <p className="mt-1.5 max-w-[34ch] text-[13px] text-white/90">{e.area}</p>
      </div>
      <div className="absolute inset-x-[18px] bottom-4 z-[2] flex items-end justify-between gap-3">
        <span className="link text-[13px] text-white">
          <span>View Estate Details</span>
          <ArrowUpRight />
        </span>
        <span className="text-right text-[13px] text-white/90">
          <span className="chip" data-s={e.status}>{statusLabel[e.status]}</span>
          <b className="mt-1.5 block text-[22px] font-normal text-white">{from ? `From ${shortNaira(from)}` : "Price on request"}</b>
          {e.coord}
        </span>
      </div>
    </Link>
  );
}
