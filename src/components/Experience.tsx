import Reveal from "./Reveal";

const ROLES = [
  {
    company: "Prekies Babycare",
    role: "Website & Technical Head",
    period: "Feb 2026 — Present",
    description:
      "Designed and built the company website from scratch — planning, UI/UX structure and deployment — with product showcasing, streamlined navigation and performance improvements.",
  },
  {
    company: "Karwaanfilms.com",
    role: "Project Lead",
    period: "Jul 2023 — Jan 2024",
    description:
      "Led a team building a platform for human-centric documentaries, photos and film on Next.js and MongoDB. Owned end-to-end delivery, coordinating testing and validation for a scalable, high-performance launch.",
  },
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications",
    school: "Amity University",
    period: "2024 — 2026",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Guru Gobind Singh Indraprastha University",
    period: "Completed",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          <span className="h-px w-10 bg-[var(--color-accent)]" />
          Experience
        </div>
        <h2 className="max-w-lg text-balance font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
          Where I&apos;ve built things.
        </h2>
      </Reveal>

      <div className="mt-10">
        {ROLES.map((r, i) => (
          <Reveal key={r.company} delay={i * 0.06}>
            <div className="grid gap-2 border-t border-[var(--color-line)] py-8 md:grid-cols-[180px_1fr] md:gap-10">
              <div className="flex items-start gap-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)] md:pt-1.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[var(--color-accent)]" />
                {r.period}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                    {r.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
                    {r.company}
                  </span>
                </div>
                <p className="mt-2 max-w-xl leading-relaxed text-[var(--color-ink-soft)]">
                  {r.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-[var(--color-line)]" />
      </div>

      <Reveal>
        <div className="mt-16 mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          <span className="h-px w-10 bg-[var(--color-accent)]" />
          Education
        </div>
      </Reveal>

      <div className="mt-8">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06}>
            <div className="grid gap-2 border-t border-[var(--color-line)] py-6 md:grid-cols-[180px_1fr] md:gap-10">
              <div className="flex items-start gap-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)] md:pt-1">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[var(--color-accent)]" />
                {e.period}
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  {e.degree}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">
                  {e.school}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-[var(--color-line)]" />
      </div>
    </section>
  );
}
