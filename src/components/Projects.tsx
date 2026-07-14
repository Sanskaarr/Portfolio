"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import CaseStudyOverlay from "./CaseStudyOverlay";
import { PROJECTS, type Project } from "@/data/projects";

function ProjectRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  // Screenshot drift stays inside the frame's padding so the full image
  // is always visible — the oversized-field trick would clip its edges.
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12px", "12px"]);
  const reversed = index % 2 === 1;

  return (
    <div
      className={`grid items-center gap-10 border-t border-[var(--color-line)] py-12 first:border-t-0 md:grid-cols-2 md:gap-16 md:py-16 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <motion.div
          ref={frameRef}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "0px 0px 220px 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          {project.image ? (
            <motion.div
              style={{ y: reduceMotion ? 0 : imgY }}
              className="absolute inset-0 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            </motion.div>
          ) : (
            /* The field is taller than the frame and drifts inside it on
               scroll, so the motion reads as depth behind a mask — moving
               the whole card instead just wobbled it against the layout. */
            <motion.div
              style={{ y: reduceMotion ? 0 : y, background: project.tone }}
              className="absolute inset-x-0 -inset-y-[8%] flex items-center justify-center"
            >
              <span className="font-display text-4xl font-[800] text-[var(--color-ink)]/20 md:text-5xl">
                {project.name}
              </span>
            </motion.div>
          )}
          {/* Pinned to the frame — the fixed point that makes the drift
              behind it legible. */}
          <span className="absolute left-5 top-5 font-mono text-xs text-[var(--color-ink)]/40">
            {project.number}
          </span>
        </motion.div>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
            {project.number}
            <span className="h-px flex-1 bg-[var(--color-line)]" />
            {project.year}
          </div>
          <h3 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)] md:text-5xl">
            {project.name}
          </h3>
          <p className="mt-5 max-w-md leading-relaxed text-[var(--color-ink-soft)]">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">
            {project.tags.map((t, i) => (
              <span key={t} className="flex items-center gap-4">
                {i > 0 && <span className="text-[var(--color-line)]">/</span>}
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={() => onOpen(project)}
            className="mt-4 inline-block cursor-pointer py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
          >
            View case study →
          </button>
        </div>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <div className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          <span className="h-px w-10 bg-[var(--color-accent)]" />
          Selected Work
        </div>
        <h2 className="max-w-xl text-balance font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-5xl">
          Things I&apos;ve designed, built and shipped.
        </h2>
      </Reveal>

      <div className="mt-10">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.name} project={p} index={i} onOpen={setActive} />
        ))}
      </div>

      <CaseStudyOverlay project={active} onClose={() => setActive(null)} />
    </section>
  );
}
