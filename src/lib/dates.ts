import type { YearMonth } from "@/content/experience";

// Spelled out rather than using Intl: ICU versions disagree ("Sep" vs "Sept"),
// which would make server and client output depend on the machine.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function formatMonth(value: YearMonth): string {
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1] ?? "?"} ${year}`;
}

/** "Sep 2025 – now", "Jun 2024 – Oct 2024" */
export function formatRange(start: YearMonth, end?: YearMonth): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "now"}`;
}
