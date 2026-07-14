"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)] sm:flex-row">
        <p>© {new Date().getFullYear()} Sanskar Jain — All rights reserved.</p>
        <a
          href="#top"
          className="-m-3 inline-block p-3 transition-colors hover:text-[var(--color-accent)]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
