import Reveal from "./Reveal";

const FOCUS = [
  ["Backend", "Java, Spring Boot, REST APIs, microservices"],
  ["Frontend", "Next.js, React, responsive interfaces"],
  ["Data & AI", "Power BI, AI/ML basics, data visualization"],
  ["IoT", "Sensor pipelines, Python, low-cost prototyping"],
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
              I ship full-stack products end-to-end — from architecture to
              deployment — and care about every step in between.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl leading-relaxed text-[var(--color-ink-soft)]">
              MCA graduate from Amity University with hands-on experience
              owning backend services in Java and Spring Boot, building
              responsive frontends with Next.js, and wrangling IoT sensor
              pipelines in Python. I&apos;ve led two real-world client
              projects and built a health wearable prototype for under ₹3K.
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
