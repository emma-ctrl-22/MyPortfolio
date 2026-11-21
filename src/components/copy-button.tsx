"use client";

import { useEffect, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

const labels: Record<CopyState, string> = {
  idle: "Copy",
  copied: "Copied",
  failed: "Copy failed",
};

interface CopyButtonProps {
  value: string;
  /** What is being copied, for screen readers, e.g. "email address". */
  description: string;
}

export function CopyButton({ value, description }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const id = window.setTimeout(() => setState("idle"), 2000);
    return () => window.clearTimeout(id);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="border border-rule px-3 py-2 label text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
    >
      <span aria-hidden="true">{labels[state]}</span>
      <span className="sr-only">Copy {description}</span>
      <span className="sr-only" role="status">
        {state === "copied" ? `${description} copied` : state === "failed" ? "Copying failed" : ""}
      </span>
    </button>
  );
}
