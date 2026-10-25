import Reveal from "./Reveal";

const FOCUS = [
  ["Backend", "Java, Spring Boot, Node, REST APIs, Microservices"],
  ["Frontend", "Next.js, React, Supabase, Shopify, GSAP"],
  ["AI Tooling", "AI dev workflows, LLM API integration, prompt design"],
  ["Systems & IoT", "PostgreSQL, offline sync, sensor pipelines"],
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24"
    >
      <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            About
          </span>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <p className="text-balance font-display text-3xl font-medium leading-tight text-[var(--color-ink)] md:text-4xl">
              I ship production systems fast using AI-assisted workflows —
              owning every architectural decision and every line of code.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl leading-relaxed text-[var(--color-ink-soft)]">
              MCA graduate from Amity University comfortable across backend
              services (Java/Spring Boot, Node), modern frontends (Next.js/React),
              and offline-first data sync. I&apos;ve led real-world client
              projects, architected a production-grade POS and warehouse
              management system, built an NGO platform for early education, and
              shipped a sub-₹3K IoT health wearable.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--color-line)] pt-8 sm:grid-cols-4">
              {FOCUS.map(([title, desc]) => (
                <div key={title}>
                  <div className="font-display text-base font-semibold text-[var(--color-ink)]">
                    {title}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-[var(--color-ink-faint)]">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
