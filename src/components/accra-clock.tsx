"use client";

import { useSyncExternalStore } from "react";

import { site } from "@/config/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: site.timeZone,
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 10_000);
  return () => window.clearInterval(id);
}

const getSnapshot = () => formatter.format(Date.now());
// The server can't know the visitor's "now", so it renders a placeholder and the client fills it in.
const getServerSnapshot = () => null;

function aside(time: string): string | null {
  const hour = Number(time.slice(0, 2));
  if (hour < 6) return "probably asleep";
  if (hour >= 23) return "should be asleep";
  return null;
}

/** Live local time in Accra. Hydration-safe without suppressHydrationWarning. */
export function AccraClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const note = time ? aside(time) : null;

  return (
    <span>
      <time className="tabular-nums">{time ?? "--:--"}</time> GMT
      {note && <span className="text-muted"> · {note}</span>}
    </span>
  );
}
