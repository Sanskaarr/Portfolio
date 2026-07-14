import Reveal from "./Reveal";

const GROUPS = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "REST APIs", "Microservices", "MongoDB"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "HTML/CSS", "Shopify"],
  },
  {
    title: "Data & AI",
    items: ["Power BI", "AI/ML basics", "Data Visualization"],
  },
  {
    title: "Tools",
    items: ["Git", "Linux", "XAMPP", "IoT Sensors"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-[var(--color-line)] bg-[var(--color-paper-dim)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            <span className="h-px w-10 bg-[var(--color-accent)]" />
            Toolkit
          </div>
          <h2 className="max-w-lg text-balance font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
            The stack behind the craft.
          </h2>
        </Reveal>

        <div className="mt-10">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="flex flex-col gap-3 border-t border-[var(--color-line)] py-6 md:flex-row md:items-baseline md:gap-8 md:py-7">
                <h3 className="w-full shrink-0 font-display text-xl font-semibold text-[var(--color-ink)] md:w-56">
                  {group.title}
                </h3>
                <p className="flex-1 leading-relaxed text-[var(--color-ink-soft)]">
                  {group.items.join("  /  ")}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[var(--color-line)]" />
        </div>
      </div>
    </section>
  );
}
