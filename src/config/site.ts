/**
 * Single source of truth for personal details and links.
 * Change something here and it changes everywhere (metadata, JSON-LD, footer, contact).
 */
export const site = {
  name: "Emmanuel Nyatepe",
  shortName: "Emmanuel",
  role: "Full-stack engineer",
  location: "Accra, Ghana",
  timeZone: "Africa/Accra",
  email: "emmanuelnyatepe35@gmail.com",
  // Set NEXT_PUBLIC_SITE_URL once the new domain is live.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emmanuelnyatepecom.vercel.app",
  cv: "/emmanuel-nyatepe-cv.pdf",
  description:
    "Emmanuel Nyatepe is a full-stack engineer in Accra, Ghana, building React Native and web apps for healthcare, logistics, e-commerce and telecoms.",
  links: {
    github: "https://github.com/emma-ctrl-22",
    linkedin: "https://www.linkedin.com/in/emmanuel-nyatepe-b27a82207",
    source: "https://github.com/emma-ctrl-22/MyPortfolio",
  },
  tagline: "I build mobile and web products end to end, from the database to the App Store.",
  availability: "Open to full-time roles, remote or in Accra, and selected freelance work.",
} as const;
