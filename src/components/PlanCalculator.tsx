"use client";

import { useState } from "react";
import { type PlanOption as Option, naira } from "@/data/estates";
import { waLink } from "@/data/site";

export default function PlanCalculator({ options, lockEstate }: { options: Option[]; lockEstate?: boolean }) {
  const names = [...new Set(options.map((o) => o.estate))];
  const [estate, setEstate] = useState(names[0]);
  const sizes = options.filter((o) => o.estate === estate);
  const [sizeIdx, setSizeIdx] = useState(0);
  const plan = sizes[Math.min(sizeIdx, sizes.length - 1)];
  const [monthsPick, setMonths] = useState(plan.months ?? 0);

  // Instalment maths only when the estate has a published deposit and tenure.
  const instalment = plan.deposit !== undefined && plan.months !== undefined;
  const months = instalment ? Math.min(Math.max(monthsPick, 1), plan.months!) : 0;
  const monthChoices = instalment ? [1, 3, 6, 9, 12].filter((m) => m <= plan.months!) : [];
  const monthly = instalment ? (plan.price - plan.deposit!) / months : 0;

  const msg = instalment
    ? `Hello Pace, I'd like to buy at ${plan.estate}: ${plan.size} for ${naira(plan.price)}. Deposit ${naira(plan.deposit!)}, balance over ${months} month${months > 1 ? "s" : ""} (about ${naira(monthly)}/month). Please book me an inspection.`
    : `Hello Pace, I'd like to buy at ${plan.estate}: ${plan.size} for ${naira(plan.price)}. Please share the deposit and instalment options and book me an inspection.`;

  return (
    <div className="dark">
      {!lockEstate && names.length > 1 && (
        <Step label="Estate">
          {names.map((n) => (
            <button key={n} type="button" aria-pressed={n === estate} onClick={() => { setEstate(n); setSizeIdx(0); }}>
              {n}
            </button>
          ))}
        </Step>
      )}
      {sizes.length > 1 && (
        <Step label="Size">
          {sizes.map((s, i) => (
            <button key={s.size} type="button" aria-pressed={s === plan} onClick={() => setSizeIdx(i)}>
              {s.size}
            </button>
          ))}
        </Step>
      )}
      {instalment && (
        <Step label="Pay the balance over">
          {monthChoices.map((m) => (
            <button key={m} type="button" aria-pressed={m === months} onClick={() => setMonths(m)}>
              {m} month{m > 1 ? "s" : ""}
            </button>
          ))}
        </Step>
      )}
      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3" aria-live="polite">
        <Out value={naira(plan.price)} label={`${plan.size} · plot price`} />
        {instalment ? (
          <>
            <Out value={naira(plan.deposit!)} label="Deposit to start" />
            <Out value={naira(monthly)} label={`A month, for ${months} month${months > 1 ? "s" : ""}`} />
          </>
        ) : (
          <Out value="Flexible" label="Deposit and instalments, confirmed by our team" />
        )}
      </div>
      <a className="btn orange mt-7" href={waLink(msg)}>Send this plan on WhatsApp</a>
    </div>
  );
}

function Step({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5.5">
      <span className="mb-2.5 block text-[13px] text-white/70">{label}</span>
      <div className="seg" role="group" aria-label={label}>{children}</div>
    </div>
  );
}

function Out({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-white/25 pt-3">
      <b className="block text-[clamp(24px,2.6vw,34px)] font-normal tracking-[-0.03em] tabular-nums">{value}</b>
      <span className="text-[13px] text-white/70">{label}</span>
    </div>
  );
}
