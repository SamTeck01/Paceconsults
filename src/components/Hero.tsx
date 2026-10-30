import Image from "next/image";
import Link from "next/link";
import { nav } from "@/data/site";
import { ArrowRight } from "./icons";
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
  video?: string; // muted background loop, plays over the image
  flyer?: boolean; // show the image whole (a flyer) over a blurred copy of itself
};

export default function Hero({ current, image, alt, title, sub, cta, eyebrow, coord, short, imagePosition, video, flyer }: Props) {
  return (
    <section className={`hero ${short ? "short" : ""}`} aria-label={title}>
      <div className="hero-img">
        {flyer ? (
          <>
            <Image src={image} alt="" fill priority sizes="60vw" className="scale-110 object-cover blur-2xl brightness-75" aria-hidden="true" />
            <Image src={image} alt={alt} fill priority sizes="(max-width: 820px) 100vw, 60vw" className="object-contain object-left-top pb-[48%] pl-4 pr-[42%] pt-20 md:object-right md:px-0 md:py-20 md:pr-[8%]" />
          </>
        ) : (
          <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
        )}
        {video && (
          <video className="absolute inset-0 h-full w-full object-cover" src={video} poster={image} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        )}
      </div>
      <Link href="/" className="absolute left-0 top-2 z-[2] block max-md:top-1" aria-label="Pace Consults home">
        <Image src="/images/logo.png" alt="Pace Consults" width={654} height={285} priority className="h-[58px] w-auto max-md:h-[46px]" />
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
