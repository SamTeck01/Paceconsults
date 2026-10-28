"use client";

import { useState } from "react";
import { waLink } from "@/data/site";

export type FormField =
  | { name: string; label: string; type?: "text" | "tel" | "email" | "date"; required?: boolean; full?: boolean }
  | { name: string; label: string; type: "select"; options: string[]; full?: boolean }
  | { name: string; label: string; type: "textarea"; full?: boolean };

// No backend yet: the form composes a WhatsApp message to Pace with the visitor's answers.
export default function WhatsAppForm({ intro, fields, submitLabel, dark }: { intro: string; fields: FormField[]; submitLabel: string; dark?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = fields.map((f) => `${f.label}: ${String(data.get(f.name) ?? "").trim() || "—"}`);
    window.open(waLink(`${intro}\n\n${lines.join("\n")}`), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-x-6 gap-y-5.5 md:grid-cols-2 ${dark ? "dark" : ""}`}>
      {fields.map((f) => (
        <div key={f.name} className={`field ${f.full || f.type === "textarea" ? "md:col-span-2" : ""}`}>
          <label htmlFor={f.name}>{f.label}</label>
          {f.type === "select" ? (
            <select id={f.name} name={f.name}>{f.options.map((o) => <option key={o}>{o}</option>)}</select>
          ) : f.type === "textarea" ? (
            <textarea id={f.name} name={f.name} rows={3} />
          ) : (
            <input id={f.name} name={f.name} type={f.type ?? "text"} required={f.required} autoComplete={f.name === "name" ? "name" : f.type === "tel" ? "tel" : undefined} />
          )}
        </div>
      ))}
      <div className="flex flex-wrap items-center gap-4 md:col-span-2">
        <button className="btn orange" type="submit">{submitLabel}</button>
        {sent && <span className={`text-sm ${dark ? "text-white/80" : "text-grey"}`} role="status">WhatsApp opened with your details — press send and we'll reply shortly.</span>}
      </div>
    </form>
  );
}
