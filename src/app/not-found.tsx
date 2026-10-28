import Link from "next/link";
import Hero from "@/components/Hero";

export default function NotFound() {
  return (
    <main className="page">
      <Hero short current="" image="/images/land-trail.jpg" alt="A path through woodland" title="This plot isn't on our map." sub="The page you're looking for has moved or doesn't exist." />
      <p className="mt-16"><Link className="btn" href="/estates">See all estates</Link></p>
    </main>
  );
}
