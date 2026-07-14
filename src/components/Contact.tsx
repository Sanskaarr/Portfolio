import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-1/2 hidden -translate-x-1/2 select-none font-display text-[22vw] font-[800] leading-none text-transparent md:block"
        style={{ WebkitTextStroke: "1px var(--color-line)" }}
      >
        TALK
      </span>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            <span className="h-px w-10 bg-[var(--color-accent)]" />
            Contact
          </div>
          <h2 className="max-w-2xl text-balance font-display text-5xl font-semibold leading-tight text-[var(--color-ink)] md:text-6xl">
            Let&apos;s build something
            <span className="text-[var(--color-accent)]"> worth talking about.</span>
          </h2>
          <p className="mt-6 max-w-md text-balance leading-relaxed text-[var(--color-ink-soft)]">
            Open to full-time roles and interesting projects. If you&apos;re
            building something worth caring about, I&apos;d love to hear
            from you.
          </p>

          <a
            href="mailto:sanskarjain2001@outlook.com"
            className="group mt-10 inline-flex items-center gap-3 border border-[var(--color-ink)] bg-[var(--color-ink)] px-7 py-4 font-mono text-sm text-[var(--color-paper)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            sanskarjain2001@outlook.com
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="/sanskar-jain-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="-my-3 inline-block py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
            >
              Résumé
            </a>
            <a
              href="https://github.com/Sanskaarr"
              target="_blank"
              rel="noopener noreferrer"
              className="-my-3 inline-block py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jainsanskar"
              target="_blank"
              rel="noopener noreferrer"
              className="-my-3 inline-block py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
            >
              LinkedIn
            </a>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
