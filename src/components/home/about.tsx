import Image from "next/image";

import portrait from "@/assets/me.jpg";
import { Section } from "@/components/section";
import { education } from "@/content/experience";
import { stack } from "@/content/stack";

export function About() {
  return (
    <Section id="about" index="03" title="About">
      <div className="grid gap-12 lg:grid-cols-9 lg:gap-10">
        <figure className="max-w-sm lg:col-span-3">
          <div className="border border-rule bg-wash">
            <Image
              src={portrait}
              alt="Emmanuel sitting on a wooden bench, arms stretched along the backrest."
              sizes="(min-width: 1024px) 280px, 384px"
              placeholder="blur"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-muted">Me, off the clock.</figcaption>
        </figure>

        <div className="lg:col-span-6">
          <div className="space-y-6 text-xl leading-relaxed">
            <p>
              I studied Computer Science at {education.school} in Oyibi. My first job in tech was mostly hardware: a
              summer at 37 Military Hospital running cable, setting up switches and swapping hard drives. I also wrote a
              small C# app there to keep track of the hospital&rsquo;s medical equipment, and I&rsquo;ve been writing
              software for other people ever since.
            </p>
            <p>
              A lot of my work is the unglamorous kind. I take an app that&rsquo;s already live, with real users, and
              upgrade it without anyone noticing. I&rsquo;m just as happy starting from an empty repository, as long as
              the result ends up in someone&rsquo;s hands.
            </p>
            <p className="text-muted">I speak English and Adangbe, and enough Ewe for a conversation.</p>
          </div>

          <dl className="mt-12 border-t border-rule text-lg">
            {stack.map(({ area, tools }) => (
              <div key={area} className="grid gap-x-6 gap-y-1 border-b border-rule py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="pt-1 label text-muted">{area}</dt>
                <dd>{tools.join(", ")}</dd>
              </div>
            ))}
            <div className="grid gap-x-6 gap-y-1 border-b border-rule py-3 sm:grid-cols-[8rem_1fr]">
              <dt className="pt-1 label text-muted">Education</dt>
              <dd>
                {education.degree}, {education.school}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
