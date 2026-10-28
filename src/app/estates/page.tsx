import type { Metadata } from "next";
import EstateBrowser from "@/components/EstateBrowser";
import Hero from "@/components/Hero";
import { Label } from "@/components/ui";
import { estates } from "@/data/estates";

export const metadata: Metadata = {
  title: "Estates",
  description: "Surveyed, documented land in Oyo, Ibadan and Lagos: Velora, Ilé Ìrè, Orange County, Primo, Ìdèra and more.",
};

export default function EstatesPage() {
  return (
    <main className="page">
      <Hero
        short
        current="/estates"
        image="/images/velora-aerial.jpg"
        alt="Aerial view of cleared plots beside a developed neighbourhood in Oyo"
        title="Every estate, surveyed and ready."
        sub={`${estates.length} estates across Oyo, Ibadan and Lagos. Filter by city or budget.`}
      />
      <section className="mt-24" aria-labelledby="all">
        <Label>All Estates</Label>
        <EstateBrowser estates={estates} />
        <p className="note mt-12">Every price is confirmed in writing before you pay.</p>
      </section>
    </main>
  );
}
