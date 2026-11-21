import type { Metadata } from "next";

import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Experience } from "@/components/home/experience";
import { Intro } from "@/components/home/intro";
import { SelectedWork } from "@/components/home/selected-work";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { education, experience } from "@/content/experience";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const currentRole = experience.find((role) => !role.end);

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  ...(currentRole && { worksFor: { "@type": "Organization", name: currentRole.company } }),
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  sameAs: [site.links.github, site.links.linkedin],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={person} />
      <Intro />
      <SelectedWork />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
