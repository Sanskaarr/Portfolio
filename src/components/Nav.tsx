"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-[var(--color-paper)] transition-colors duration-300 ${
        scrolled ? "border-b border-[var(--color-line)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-[var(--color-ink)]"
        >
          Sanskar Jain
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative -my-3 inline-block py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden border border-[var(--color-ink)] px-4 py-2 font-mono text-xs uppercase tracking-widest text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] md:inline-block"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="-m-2 flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-[var(--color-ink)] transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[var(--color-ink)] transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-paper)] md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm uppercase tracking-widest text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
