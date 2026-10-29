import type { Metadata } from "next";
import { Inter_Tight, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-inter-tight" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Pace Consults — Surveyed land in Oyo, Ibadan and Lagos", template: "%s · Pace Consults" },
  description:
    "Pace Associate & Integrated Consults: surveying, GIS, real-estate consultancy and estates in Oyo, Ibadan and Lagos. Surveyed, documented and allocated.",
  openGraph: { siteName: site.name, locale: "en_NG", type: "website", images: ["/images/hero-road.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Motion />
        {children}
        <Footer />
      </body>
    </html>
  );
}
