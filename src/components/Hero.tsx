import Image from "next/image";
import Link from "next/link";
import { nav } from "@/data/site";
import { ArrowRight, PaceMark } from "./icons";
import { TextLink } from "./ui";

type Props = {
  current: string;
  image: string;
  alt: string;
  title: string;
  sub?: string;
  cta?: { href: string; label: string };
  eyebrow?: React.ReactNode;
  coord?: string;
  short?: boolean;
  imagePosition?: string;
};

export default function Hero({ current, image, alt, title, sub, cta, eyebrow, coord, short, imagePosition }: Props) {
  return (
    <section className={`hero ${short ? "short" : ""}`} aria-label={title}>
      <div className="hero-img">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
      </div>
      <Link href="/" className="absolute left-0 top-2.5 z-[2] flex items-center gap-2.5 max-md:top-1" aria-label="Pace Consults home">
        <PaceMark size={48} />
        <span className="flex flex-col font-brand font-extrabold leading-[.86] text-green">
          <b className="text-[27px] tracking-[-0.01em] max-md:text-[21px]">PACE</b>
          <small className="mt-[3px] text-[9.6px] tracking-[.2em] max-md:text-[7.6px]">CONSULTS</small>
        </span>
      </Link>
      <nav aria-label="Main">
        <ul className="nav">
          {nav.map((n) => {
            const on = n.href === current;
            return (
              <li key={n.href}>
                <Link href={n.href} aria-current={on ? "page" : undefined}>
                  {on && <ArrowRight />}
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hero-copy">
        {eyebrow && <div className="rise mb-3.5">{eyebrow}</div>}
        <h1 className="rise">{title}</h1>
        {sub && <p className="rise d1">{sub}</p>}
        {cta && <TextLink href={cta.href} className="rise d2 mt-6 text-white">{cta.label}</TextLink>}
      </div>
      {coord && <div className="coord">{coord}</div>}
    </section>
  );
}
