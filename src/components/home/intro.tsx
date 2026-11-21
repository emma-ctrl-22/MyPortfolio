import { AccraClock } from "@/components/accra-clock";
import { Fact } from "@/components/fact";

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="pt-16 pb-20 md:pt-28 md:pb-28">
      <p className="label text-muted">Full-stack engineer · Accra, Ghana</p>

      <h1
        id="intro-heading"
        className="mt-8 max-w-[17ch] text-[clamp(2.6rem,7.2vw,6rem)] leading-[0.98] tracking-[-0.03em]"
      >
        I build mobile and web products <em>end to end</em>, from the database to the App Store.
      </h1>

      <div className="mt-12 grid md:mt-16 md:grid-cols-12 md:gap-x-10">
        <p className="text-xl leading-relaxed text-muted md:col-span-7 md:col-start-4 md:text-[1.375rem]">
          I&rsquo;m Emmanuel Nyatepe. I&rsquo;ve been shipping production software since 2024. Right now I&rsquo;m at
          Steaman Group building React Native apps for healthcare and e-commerce. Before that I built the offline-first
          raffle system MTN Liberia uses for its live draws. Most of my work is in TypeScript, and I&rsquo;m comfortable
          taking over a codebase that already has users.
        </p>
      </div>

      <dl className="mt-16 grid text-lg sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
        <Fact term="Currently">Full-stack developer at Steaman Group</Fact>
        <Fact term="Local time">
          <AccraClock />
        </Fact>
        <Fact term="Looking for">Full-time roles, remote or in Accra</Fact>
        <Fact term="Best contact">
          <a href="#contact" className="ink-link">
            Email, details below
          </a>
        </Fact>
      </dl>
    </section>
  );
}
