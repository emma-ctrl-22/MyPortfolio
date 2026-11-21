/** What I actually use, grouped by where it runs. Only list things I've shipped with. */
export const stack: readonly { area: string; tools: readonly string[] }[] = [
  { area: "Mobile", tools: ["React Native", "Expo", "React Native Skia"] },
  { area: "Web", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { area: "Backend", tools: ["Node.js", "Go", "Ruby on Rails", "Spring Boot", "PostgreSQL", "Firebase"] },
  { area: "Desktop", tools: ["Electron", "C++ / Qt", "C# / .NET"] },
  { area: "Ops", tools: ["Linux VPS", "CI/CD", "AWS"] },
];
