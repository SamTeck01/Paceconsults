"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Site-wide motion layer: scroll reveals with stagger, counting numbers,
// hero parallax and a scroll progress bar. Pure transform/opacity;
// everything is skipped for prefers-reduced-motion.

const REVEAL = [
  ".sec > *",
  ".pillar",
  ".num",
  ".card",
  ".row",
  ".list li",
  ".faq details",
  ".table tbody tr",
  ".tone",
  "main section > div > *",
].join(",");

export default function Motion() {
  const path = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("motion");
    if (reduce) return;

    // Reveal: tag elements below the fold, stagger siblings, release on view.
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter(
      (el) => !el.closest(".hero") && el.getBoundingClientRect().top > window.innerHeight * 0.92,
    );
    els.forEach((el) => {
      const i = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--d", `${Math.min(i, 6) * 70}ms`);
      el.classList.add("r");
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Count up: "400+", "70%", "₦500k" — keeps prefix and suffix.
    const nums = Array.from(document.querySelectorAll<HTMLElement>(".num b"));
    const counter = new IntersectionObserver((entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        counter.unobserve(e.target);
        const el = e.target as HTMLElement;
        const m = el.textContent?.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
        if (!m) return;
        const [, pre, n, post] = m;
        const end = parseFloat(n);
        const dp = n.includes(".") ? 1 : 0;
        const t0 = performance.now();
        const step = (t: number) => {
          const k = Math.min((t - t0) / 1200, 1);
          const eased = 1 - Math.pow(1 - k, 4);
          el.textContent = pre + (end * eased).toFixed(dp) + post;
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }),
    );
    nums.forEach((n) => counter.observe(n));

    // Parallax on the hero photo + progress bar, one rAF per scroll.
    const heroImg = document.querySelector<HTMLElement>(".hero-img img");
    const bar = document.getElementById("progress");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (heroImg && y < 1000) heroImg.style.translate = `0 ${y * 0.18}px`;
        if (bar) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      counter.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [path]);

  return <div id="progress" aria-hidden="true" />;
}
