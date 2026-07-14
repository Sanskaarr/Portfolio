"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

export default function CaseStudyOverlay({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const isOpen = !!project;
  const reduceMotion = useReducedMotion();

  // Keep rendering the last project while the close animation plays —
  // `project` goes null the instant onClose fires, but the dialog needs
  // content on screen for the ~350ms it takes to animate out.
  const [renderedProject, setRenderedProject] = useState<Project | null>(
    project
  );
  const scrollYRef = useRef(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);
  const prevBodyStyleRef = useRef({
    position: "",
    top: "",
    left: "",
    right: "",
    width: "",
    overflow: "",
  });

  if (project && project !== renderedProject) {
    setRenderedProject(project);
  }

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Trap Tab inside the dialog — the page behind is scroll-locked but
      // still in the tab order, so without this, keyboard focus walks out
      // of the modal into invisible content.
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || active === dialogRef.current)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    prevFocusRef.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    // Lock the body in place (not just overflow: hidden) so the page can't
    // shift or scroll behind the modal — overflow alone still lets iOS
    // Safari rubber-band the background and lets the scrollbar-width
    // change nudge the layout.
    scrollYRef.current = window.scrollY;
    const body = document.body;
    prevBodyStyleRef.current = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  // Wait for the CRT power-off animation to actually finish before
  // restoring scroll. Doing it the instant `project` goes null snapped the
  // body back to position mid-animation (scrollTo + scrollbar reflow),
  // which — combined with the exit flash — read as a full page reload.
  const handleExitComplete = () => {
    const body = document.body;
    const prev = prevBodyStyleRef.current;
    body.style.position = prev.position;
    body.style.top = prev.top;
    body.style.left = prev.left;
    body.style.right = prev.right;
    body.style.width = prev.width;
    body.style.overflow = prev.overflow;
    // `<html>` has Tailwind's `scroll-smooth` class (globals.css nav anchor
    // links rely on it), so an unqualified scrollTo here inherits smooth
    // behavior: the page snaps to 0 the instant `position: fixed` is
    // cleared above, then glides back down over ~300ms — visually
    // indistinguishable from a browser restoring scroll after a reload.
    // Force instant to bypass the CSS behavior for this correction only.
    window.scrollTo({ top: scrollYRef.current, left: 0, behavior: "instant" });
    prevFocusRef.current?.focus();
    setRenderedProject(null);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && renderedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.16, delay: 0.2 } }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            aria-label="Close case study"
            onClick={onClose}
            className="absolute inset-0 bg-[var(--color-ink)]/50 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.16, delay: 0.2 } }}
          />

          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={`${renderedProject.name} case study`}
            className="relative flex max-h-[86vh] w-full max-w-3xl flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper)] shadow-2xl focus:outline-none"
            style={{ transformOrigin: "center" }}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : {
                    scaleY: 0.006,
                    scaleX: 1,
                    opacity: 1,
                    filter: "brightness(3) contrast(1.4)",
                  }
            }
            animate={
              reduceMotion
                ? { opacity: 1, transition: { duration: 0.2 } }
                : {
                    scaleY: [0.006, 0.05, 1],
                    scaleX: [1, 1, 1],
                    opacity: [1, 1, 1],
                    filter: [
                      "brightness(3) contrast(1.4)",
                      "brightness(1.6) contrast(1.15)",
                      "brightness(1) contrast(1)",
                    ],
                    transition: {
                      duration: 0.85,
                      ease: ["easeIn", "easeOut"],
                      times: [0, 0.28, 1],
                    },
                  }
            }
            exit={reduceMotion ? { opacity: 0, transition: { duration: 0.15 } } : {
              // Real CRT power-off is two fast stages, not a mirror of the
              // slower power-on unroll: the vertical raster collapses almost
              // instantly into a bright horizontal line, then that line's
              // width and afterglow decay to a point over a shorter tail.
              // Front-loading scaleY and holding scaleX at 1 until the line
              // has formed gets that "snap, then die out" read instead of
              // a generic squish.
              scaleY: [1, 0.045, 0.006],
              scaleX: [1, 1, 0.02],
              opacity: [1, 1, 0],
              filter: [
                "brightness(1) contrast(1)",
                "brightness(2.2) contrast(1.3)",
                "brightness(4) contrast(1.5)",
              ],
              transition: {
                duration: 0.36,
                ease: ["circIn", "easeOut"],
                times: [0, 0.35, 1],
              },
            }}
          >
            {!reduceMotion && (
              <>
                {/* power-on flash line */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px -translate-y-1/2 bg-[var(--color-accent)]"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                />

                {/* scanline texture — flashes in, settles to near-invisible */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, rgba(23,20,15,0.55) 0px, rgba(23,20,15,0.55) 1px, transparent 1px, transparent 3px)",
                  }}
                  initial={{ opacity: 0.35 }}
                  animate={{ opacity: 0.025 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                />
              </>
            )}

            <motion.div
              className="flex flex-1 flex-col overflow-y-auto"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0.2 }
                  : { duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }
              }
            >
              <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-4 md:px-10">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">
                  Case Study {renderedProject.number} / {renderedProject.year}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="-m-3 cursor-pointer p-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Close ×
                </button>
              </div>

              <div
                className={
                  renderedProject.image
                    ? "flex max-h-[60vh] items-center justify-center overflow-hidden"
                    : "flex aspect-[16/6] items-center justify-center overflow-hidden"
                }
                style={renderedProject.image ? undefined : { background: renderedProject.tone }}
              >
                {renderedProject.image ? (
                  <Image
                    src={renderedProject.image}
                    alt={`${renderedProject.name} screenshot`}
                    width={renderedProject.imageWidth ?? 1600}
                    height={renderedProject.imageHeight ?? 1000}
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="max-h-[60vh] w-full object-contain"
                    style={{ height: "auto" }}
                  />
                ) : (
                  <span className="font-display text-5xl font-[800] text-[var(--color-ink)]/20 md:text-6xl">
                    {renderedProject.name}
                  </span>
                )}
              </div>

              <div className="px-6 py-8 md:px-10 md:py-10">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
                  {renderedProject.name}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-[var(--color-ink-soft)]">
                  {renderedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">
                  {renderedProject.tags.map((t, i) => (
                    <span key={t} className="flex items-center gap-4">
                      {i > 0 && (
                        <span className="text-[var(--color-line)]">/</span>
                      )}
                      {t}
                    </span>
                  ))}
                </div>

                {(renderedProject.liveUrl ||
                  renderedProject.demoUrl ||
                  renderedProject.codeUrl) && (
                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {renderedProject.liveUrl && (
                      <a
                        href={renderedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 border border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-paper)] transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        Live project
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                    {renderedProject.demoUrl && (
                      <a
                        href={renderedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-my-3 inline-block py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
                      >
                        Watch demo
                      </a>
                    )}
                    {renderedProject.codeUrl && (
                      <a
                        href={renderedProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-my-3 inline-block py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
                      >
                        View code
                      </a>
                    )}
                  </div>
                )}

                <div className="mt-10 grid gap-6 border-t border-[var(--color-line)] pt-8 sm:grid-cols-3">
                  {renderedProject.highlights.map((h) => (
                    <p
                      key={h}
                      className="text-sm leading-relaxed text-[var(--color-ink)]"
                    >
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
