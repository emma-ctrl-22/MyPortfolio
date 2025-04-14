const ExperienceItem = ({ title, company, duration, description }: {
  title: string;
  company: string;
  duration: string;
  description: string;
}) => {
  return (
    <div className="mb-8 p-4 border border-gray-700 rounded-lg bg-gray-800/50">
      <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
      <p className="text-md text-gray-400 italic mb-1">{company} | {duration}</p>
      <p className="text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col gap-6 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">Experience</h2>
      {/* Placeholder Experience Items - Replace with your actual experience */}
      <ExperienceItem
        title="Placeholder Role 1"
        company="Placeholder Company A"
        duration="Jan 202X - Present"
        description="Describe your key responsibilities and achievements here. Focus on impact and technologies used."
      />
      <ExperienceItem
        title="Placeholder Role 2"
        company="Placeholder Company B"
        duration="May 202Y - Dec 202X"
        description="Another example of a role. Mention specific projects or contributions if possible."
      />
      {/* Add more ExperienceItem components as needed */}
    </section>
  );
};

export default Experience; 