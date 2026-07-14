"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Command = { prompt: string; output: string[] };

// Lines are kept short so the session fits a square panel in the hero's
// right column without wrapping.
const COMMANDS: Command[] = [
  {
    prompt: "whoami",
    output: ["sanskar — software developer"],
  },
  {
    prompt: "cat status.txt",
    output: ["open to new opportunities", "replies within a day"],
  },
  {
    prompt: "cat stack.txt",
    output: ["java / spring boot / next.js", "python / sql / iot"],
  },
  {
    prompt: "open contact",
    output: ["→ sanskarjain2001@outlook.com"],
  },
];

export default function Terminal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [shownOutput, setShownOutput] = useState<boolean[]>([]);

  useEffect(() => {
    if (!inView || reduceMotion || lineIndex >= COMMANDS.length) return;

    const prompt = COMMANDS[lineIndex].prompt;

    if (charIndex < prompt.length) {
      // Human rhythm: a beat to "think" before each command starts, a
      // hair of hesitation after each space, jittered keystrokes between.
      const delay =
        charIndex === 0
          ? 350
          : 24 + Math.random() * 48 + (prompt[charIndex - 1] === " " ? 90 : 0);
      const id = setTimeout(() => setCharIndex((c) => c + 1), delay);
      return () => clearTimeout(id);
    }

    const revealId = setTimeout(() => {
      setShownOutput((prev) => {
        const next = [...prev];
        next[lineIndex] = true;
        return next;
      });
    }, 150);

    const advanceId = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 700);

    return () => {
      clearTimeout(revealId);
      clearTimeout(advanceId);
    };
  }, [inView, reduceMotion, lineIndex, charIndex]);

  // Reduced motion: no character-by-character typing — render the whole
  // session at once (the typing effect above never runs).
  const shownLineIndex = reduceMotion ? COMMANDS.length : lineIndex;
  const finished = shownLineIndex >= COMMANDS.length;

  return (
    <div
      ref={wrapRef}
      className="flex aspect-square w-full flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-ink)] shadow-xl"
    >
      <div className="flex items-center gap-2 border-b border-[var(--color-paper)]/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[var(--color-paper)]/15" />
        <span className="h-2 w-2 rounded-full bg-[var(--color-paper)]/15" />
        <span className="h-2 w-2 rounded-full bg-[var(--color-paper)]/15" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-paper)]/60">
          sanskar@portfolio — zsh
        </span>
      </div>

      {/* Every command + output line is rendered (hidden until its turn)
          from the first paint, so the panel never changes size while it
          "types" — it's locked to a square by the wrapper anyway. */}
      <div className="flex-1 space-y-2.5 px-4 py-4 font-mono text-xs leading-relaxed">
        {COMMANDS.map((cmd, i) => {
          const isCurrent = i === shownLineIndex;
          const isFuture = i > shownLineIndex;
          const typed = isCurrent ? cmd.prompt.slice(0, charIndex) : cmd.prompt;
          const promptDone = !isCurrent || charIndex >= cmd.prompt.length;
          const outputVisible = i < shownLineIndex || shownOutput[i];

          return (
            <div key={cmd.prompt} className={isFuture ? "invisible" : undefined}>
              <div className="flex items-baseline gap-2 text-[var(--color-paper)]">
                <span className="text-[var(--color-accent)]">$</span>
                <span>{typed}</span>
                {isCurrent && !promptDone && (
                  // Solid while typing — real terminals only blink the
                  // caret when idle.
                  <span className="inline-block h-3.5 w-[6px] bg-[var(--color-paper)]/70" />
                )}
              </div>
              <div>
                {cmd.output.map((line, j) => (
                  <div
                    key={line}
                    className={`pl-4 text-[var(--color-paper)]/55 transition-opacity duration-300 ${
                      outputVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: outputVisible ? `${j * 90}ms` : "0ms",
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div
          className={`flex items-baseline gap-2 text-[var(--color-paper)] ${
            finished ? "" : "invisible"
          }`}
        >
          <span className="text-[var(--color-accent)]">$</span>
          <span
            className={`inline-block h-3.5 w-[6px] bg-[var(--color-paper)]/70 ${
              reduceMotion ? "" : "caret-blink"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
