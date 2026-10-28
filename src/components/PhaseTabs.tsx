"use client";

import { useState } from "react";
import { type Phase, naira, statusLabel } from "@/data/estates";

export default function PhaseTabs({ phases, initial = 0 }: { phases: Phase[]; initial?: number }) {
  const [i, setI] = useState(initial);
  const p = phases[i];
  return (
    <div>
      <div role="tablist" aria-label="Phases" className="mb-12 flex flex-wrap border-b border-rule">
        {phases.map((ph, j) => (
          <button
            key={ph.name}
            role="tab"
            aria-selected={j === i}
            onClick={() => setI(j)}
            className={`relative mr-6 py-3.5 pr-0 text-[15px] transition-colors ${j === i ? "font-medium text-ink after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-orange" : "text-fade hover:text-ink"}`}
          >
            {ph.name}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="grid gap-14 md:grid-cols-[5fr_7fr]">
        <div>
          <p className="tone !text-[28px]">
            {p.lead} <span>{p.body}</span>
          </p>
          <p className="mt-5"><span className="chip !bg-ink" data-s={p.status}>{statusLabel[p.status]}</span></p>
        </div>
        <table className="table">
          <thead><tr><th scope="col">Size</th><th scope="col">Price</th></tr></thead>
          <tbody>
            {p.plans.map((pl) => (
              <tr key={pl.size}>
                <td>{pl.size}</td>
                <td className="big">{pl.price ? naira(pl.price) : "On request"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
