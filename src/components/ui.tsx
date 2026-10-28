import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "./icons";

export function TextLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const external = href.startsWith("http");
  return (
    <Link href={href} className={`link ${className}`} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      <span>{children}</span>
      <ArrowUpRight />
    </Link>
  );
}

export function Label({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <p className="label" id={id}>
      [{children}]
    </p>
  );
}

export function Rows({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul>
      {items.map((it, i) => (
        <li key={it.label}>
          <Link href={it.href} className="row" data-on={i === 0}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <span>{it.label}</span>
            <ArrowDownRight />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Collage({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-[1.45fr_1fr] grid-rows-[220px_150px] gap-1 md:grid-rows-[300px_200px]">
      {images.slice(0, 4).map((im) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={im.src + im.alt} src={im.src} alt={im.alt} className="reveal h-full w-full object-cover" loading="lazy" />
      ))}
    </div>
  );
}
