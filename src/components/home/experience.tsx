import { Section } from "@/components/section";
import { experience } from "@/content/experience";
import { formatRange } from "@/lib/dates";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="border-t border-rule">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.start}`}
            className="grid gap-x-10 gap-y-3 border-b border-rule py-8 md:grid-cols-[11rem_1fr] md:py-10"
          >
            <p className="label text-muted tabular-nums md:pt-2">{formatRange(role.start, role.end)}</p>
            <div>
              <h3 className="text-2xl leading-snug tracking-tight">
                {role.title}, <em>{role.company}</em>
              </h3>
              <p className="mt-1.5 label text-muted">
                {role.location}
                {role.arrangement && ` · ${role.arrangement}`}
              </p>
              <ul className="mt-5 max-w-[62ch] space-y-2.5 text-muted">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-6 leading-relaxed before:absolute before:left-0 before:text-rule before:content-['—']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
