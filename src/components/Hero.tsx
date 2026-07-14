"use client";

import { motion } from "framer-motion";
import Terminal from "./Terminal";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-24"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-1/2 hidden -translate-x-1/2 select-none font-display text-[26vw] font-[800] leading-none text-transparent md:block"
        style={{ WebkitTextStroke: "1px var(--color-line)" }}
      >
        BUILD
      </span>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_auto] lg:gap-20"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-faint)]"
          >
            <span className="h-px w-10 bg-[var(--color-ink-faint)]" />
            Introduction
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-5xl font-bold leading-[0.92] tracking-tight text-[var(--color-ink)] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Software
            <br />
            built like it
            <br />
            <span className="text-[var(--color-accent)]">matters.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-balance text-lg leading-relaxed text-[var(--color-ink-soft)]"
          >
            I&apos;m Sanskar Jain — a software developer who ships full-stack
            products end-to-end, from Spring Boot services to Next.js
            frontends to IoT sensor pipelines.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <a
              href="#work"
              className="inline-flex items-center border border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-paper)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="-my-3 inline-block py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
            >
              Or send an email
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="w-full max-w-sm lg:w-80 lg:justify-self-end xl:w-96"
        >
          <Terminal />
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute bottom-10 left-6 hidden items-center gap-3 md:left-10 md:flex"
      >
        <div className="h-14 w-px bg-[var(--color-line)]" />
        <span className="vertical-rl font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-faint)]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
