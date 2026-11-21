/** A month in "YYYY-MM" form. Kept as a string so content stays easy to edit. */
export type YearMonth = `${number}-${number}`;

export interface Role {
  company: string;
  location: string;
  title: string;
  start: YearMonth;
  /** Omit for a current role. */
  end?: YearMonth;
  arrangement?: "Remote contract" | "Internship";
  highlights: string[];
}

// Source: CV (public/emmanuel-nyatepe-cv.pdf). Keep the two in sync.
const roles: Role[] = [
  {
    company: "Steaman Group",
    location: "East Legon, Accra",
    title: "Full-stack developer",
    start: "2025-09",
    highlights: [
      "Built and shipped new React Native apps from scratch, including the UbiHealth rider app.",
      "Designed and built UbiHealth's pharmacy module: onboarding, inventory and order processing.",
      "Brought Steaman Mall and UbiHealth up to Google Play's 16 KB page-size requirement without disrupting live users.",
      "Work across React web apps and Ruby on Rails services to deliver features end to end.",
    ],
  },
  {
    company: "Kamak Paperless",
    location: "East Legon, Accra",
    title: "Software engineer",
    start: "2024-06",
    end: "2024-10",
    highlights: [
      "Built a full-stack handyman services platform in React, Node.js and Firebase, with Google Maps search for nearby providers.",
      "Added SMS and email notifications between customers and vendors.",
      "Maintained a legacy JavaServer Faces system for corporate trustees and wrote the SQL behind its automated reports.",
    ],
  },
  {
    company: "Tech231",
    location: "Monrovia, Liberia",
    title: "Software engineer",
    arrangement: "Remote contract",
    start: "2024-04",
    end: "2025-01",
    highlights: [
      "Built the raffle draw system MTN Liberia uses for live promotions, on desktop (Electron) and web.",
      "Designed it offline-first: draws keep working without a connection and sync when it returns.",
      "Led an early rebuild of the desktop app in C++ and Qt for speed and tighter OS integration.",
    ],
  },
  {
    company: "Wigal Solutions",
    location: "Frafraha, Accra",
    title: "Frontend developer",
    arrangement: "Internship",
    start: "2024-03",
    end: "2024-06",
    highlights: [
      "Built a React Native (Expo) point-of-sale app for car-wash businesses, with offline caching.",
      "Built an Electron and React admin portal for monitoring the company's SaaS products.",
    ],
  },
  {
    company: "37 Military Hospital",
    location: "Accra",
    title: "Networking & IT",
    arrangement: "Internship",
    start: "2023-05",
    end: "2023-08",
    highlights: [
      "Ran cable, terminated lines and set up routers and switches for new office areas.",
      "Wrote a C# WinForms equipment management system to track the hospital's medical devices.",
    ],
  },
];

/** Most recent first, regardless of the order roles are written in above. */
export const experience: readonly Role[] = [...roles].sort((a, b) => b.start.localeCompare(a.start));

export const education = {
  degree: "BSc Computer Science",
  school: "Valley View University",
  location: "Oyibi, Ghana",
} as const;
