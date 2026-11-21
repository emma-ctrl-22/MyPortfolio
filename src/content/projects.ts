import type { StaticImageData } from "next/image";

import gridguard from "@/assets/work/gridguard.jpg";
import raffle from "@/assets/work/raffle.jpg";
import ubihealthRider from "@/assets/work/ubihealth-rider.jpg";
import ubihealth from "@/assets/work/ubihealth.jpg";
import workerdom from "@/assets/work/workerdom.jpg";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Figure {
  src: StaticImageData;
  alt: string;
  caption: string;
}

interface BaseProject {
  slug: string;
  title: string;
  /** One sentence, written for a stranger. */
  summary: string;
  platform: string;
  /** Who it was built for or with. */
  context?: string;
  period?: string;
  status?: "In development";
  stack: readonly string[];
  links: readonly ProjectLink[];
}

/** Featured projects get a case-study page, so they must carry the extra fields. */
export interface FeaturedProject extends BaseProject {
  featured: true;
  role: string;
  figures: readonly [Figure, ...Figure[]];
  overview: readonly string[];
  built: readonly string[];
}

export interface ArchivedProject extends BaseProject {
  featured: false;
}

export type Project = FeaturedProject | ArchivedProject;

// Source: CV (public/emmanuel-nyatepe-cv.pdf).
// TODO(emmanuel): add real numbers wherever you have them (downloads, users, draws run, uptime).
const projects: readonly Project[] = [
  {
    featured: true,
    slug: "ubihealth",
    title: "UbiHealth",
    summary: "Healthcare on your phone: a patient app, a pharmacy module and a rider app that delivers the medication.",
    platform: "iOS & Android, three apps",
    context: "Steaman Group",
    period: "2025 – now",
    stack: ["React Native", "TypeScript", "Expo", "REST APIs"],
    links: [
      {
        label: "Patient app on the App Store",
        href: "https://apps.apple.com/gh/app/ubihealth-by-steaman/id6743393044",
      },
      {
        label: "Rider app on the App Store",
        href: "https://apps.apple.com/gh/app/ubihealth-rider-by-steaman/id6757375024",
      },
    ],
    role: "Full-stack developer. Built the pharmacy module and the rider app; upgraded the patient app.",
    figures: [
      {
        src: ubihealth,
        alt: "UbiHealth's App Store listing showing appointment booking and doctor search screens.",
        caption: "The patient app on the App Store.",
      },
      {
        src: ubihealthRider,
        alt: "UbiHealth Rider's App Store listing showing delivery screens.",
        caption: "The rider app, built from an empty repository.",
      },
    ],
    overview: [
      "UbiHealth lets patients book appointments, order medication and see a doctor without leaving home. When I joined Steaman Group the patient app was already live. My job was to keep it healthy and build out the rest of the platform.",
      "The work split three ways. I modernised the existing app, built the pharmacy side from nothing, and built a separate app for the riders who deliver the orders. All three share the same backend, so a pharmacy accepting an order is what puts a job in front of a rider.",
    ],
    built: [
      "The whole pharmacy module: onboarding new pharmacies, managing inventory and processing orders.",
      "The rider app from scratch, including order assignment, delivery status updates and navigation designed for people using it on the move.",
      "An upgrade of the patient app to meet Google Play's 16 KB memory page-size requirement, shipped without disrupting live users.",
      "Integration with the backend APIs that run pharmacy operations in real time, written in strict TypeScript with clear module boundaries.",
    ],
  },
  {
    featured: true,
    slug: "mtn-liberia-raffle",
    title: "MTN Liberia raffle system",
    summary:
      "The app MTN Liberia uses to pick winners in live promotional draws. It keeps working offline and syncs when the connection comes back.",
    platform: "Desktop (Electron) & web",
    context: "Tech231, for MTN Liberia",
    period: "2024",
    stack: ["React", "Electron", "Node.js", "TypeScript", "PostgreSQL"],
    links: [],
    role: "Software engineer on a remote contract from Accra.",
    figures: [
      {
        src: raffle,
        alt: "Desktop app login screen with a banner offering to continue in offline mode.",
        caption: "Signing in while offline. The banner at the bottom switches the app to offline mode.",
      },
    ],
    overview: [
      "Promotional draws happen live, in front of an audience. The software has to pick winners fairly, record every step so the result can be checked later, and keep going if the internet doesn't.",
      "I built it as an Electron desktop app backed by Node.js, then delivered a browser version so more of the team could use it. The source and the product belong to Tech231. They can verify my work on it.",
    ],
    built: [
      "An offline-first architecture: draws run against local data and sync automatically when the connection returns.",
      "Inter-process communication between Electron's main and renderer processes, so heavy work never blocks the interface.",
      "Randomised draw logic, event logging and winner validation on the Node.js side, giving each draw an audit trail.",
      "A browser-based version of the platform for wider access.",
      "The start of a native rebuild in C++ and Qt for speed and tighter OS integration.",
    ],
  },
  {
    featured: true,
    slug: "gridguard",
    title: "GridGuard",
    summary:
      "Tells you whether the power is on at home or at work. A small IoT device reports every change, and the app turns that into outage history.",
    platform: "IoT, backend & mobile",
    status: "In development",
    stack: ["React Native", "Go", "Node.js", "MQTT", "VPS + CI/CD"],
    links: [],
    role: "Everything after the hardware: APIs, database, servers, deployment and the mobile app.",
    figures: [
      {
        src: gridguard,
        alt: "Mobile screen showing hours with and without power, longest outage and number of outages for one location.",
        caption: "Power statistics for one location.",
      },
    ],
    overview: [
      "Anyone who has lived through dumsor knows the question: is the power back yet? GridGuard answers it by putting a device on the supply and reporting each time the power goes off or comes back.",
      "Devices send signals to an API written in Go, which stores each status change against its device. A separate Node.js API serves that history to the mobile app, which turns it into outage counts, the longest outage and average restoration times.",
    ],
    built: [
      "A Go service that receives and processes real-time signals from the IoT devices.",
      "Per-device persistence of power status changes.",
      "A Node.js API that serves the data to the mobile app.",
      "The VPS setup and CI/CD pipelines for both backend services.",
      "The React Native app, built to use as little data as possible and stay reliable.",
    ],
  },
  {
    featured: true,
    slug: "workerdom",
    title: "WorkerDom",
    summary: "A marketplace for hiring verified electricians, plumbers, masons and other tradespeople.",
    platform: "Web app",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: [{ label: "workerdom.com", href: "https://workerdom.com/" }],
    role: "Designed and built the full stack. I deploy and maintain it.",
    figures: [
      {
        src: workerdom,
        alt: "WorkerDom home page with a search bar and profiles of tradespeople.",
        caption: "The home page at workerdom.com.",
      },
    ],
    overview: [
      "Finding a good tradesperson in Accra usually means asking around and hoping. WorkerDom puts verified professionals, their ratings and their prices in one place you can search.",
    ],
    built: [
      "A responsive React frontend for browsing, searching and viewing worker profiles.",
      "Node.js services for authentication, listings and job requests.",
      "The full job flow between a client and a service provider, from request to completion.",
      "The production deployment, which I still maintain.",
    ],
  },
  {
    featured: false,
    slug: "steaman-mall",
    title: "Steaman Mall",
    summary:
      "An e-commerce app. I modernised its React Native codebase and brought it up to Google Play's 16 KB requirement.",
    platform: "iOS & Android",
    context: "Steaman Group",
    period: "2025",
    stack: ["React Native"],
    links: [{ label: "App Store", href: "https://apps.apple.com/gh/app/steaman-mall/id6465788511" }],
  },
  {
    featured: false,
    slug: "my-lineage",
    title: "My Lineage",
    summary:
      "Family trees plus a small social network. The tree is drawn with Skia, chat runs on Stream, and the backend is Spring Boot.",
    platform: "Mobile",
    stack: ["React Native", "Skia", "Spring Boot"],
    links: [],
  },
  {
    featured: false,
    slug: "airstate",
    title: "AirState",
    summary: "Search and manage land and property listings, with Firebase auth and SMS verification.",
    platform: "Web",
    stack: ["React", "Firebase"],
    links: [{ label: "airstatefinder.web.app", href: "https://airstatefinder.web.app" }],
  },
  {
    featured: false,
    slug: "cmc-ghana",
    title: "CMC Ghana",
    summary: "A school website in five languages, with online admissions and an admin panel.",
    platform: "Web",
    stack: ["React", "Firebase", "i18n"],
    links: [{ label: "cmcghanaedu.com", href: "https://www.cmcghanaedu.com/" }],
  },
  {
    featured: false,
    slug: "steaman-realty",
    title: "Steaman Realty",
    summary: "Property listings and enquiries.",
    platform: "Web",
    context: "Steaman Group",
    stack: ["Next.js", "TypeScript", "Firebase"],
    links: [{ label: "steamanrealty.com", href: "https://steamanrealty.com/" }],
  },
];

export const featuredProjects: readonly FeaturedProject[] = projects.filter(
  (project): project is FeaturedProject => project.featured,
);

export const archivedProjects: readonly ArchivedProject[] = projects.filter(
  (project): project is ArchivedProject => !project.featured,
);

export function getFeaturedProject(slug: string): FeaturedProject | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}

/** The featured project after this one, wrapping around, for "next project" links. */
export function getNextFeaturedProject(slug: string): FeaturedProject | undefined {
  if (featuredProjects.length < 2) return undefined;
  const index = featuredProjects.findIndex((project) => project.slug === slug);
  return featuredProjects[(index + 1) % featuredProjects.length];
}
