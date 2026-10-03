export interface JourneyMilestone {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  type: "Education" | "Bootcamp" | "Technical" | "Focus";
  description: string;
  highlights: string[];
  technologies: string[];
  icon: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "gcu-degree",
    title: "BS Software Engineering",
    subtitle: "Government College University Faisalabad (GCUF)",
    period: "2024 — Present",
    type: "Education",
    description:
      "Pursuing a Bachelor of Science in Software Engineering, building strong foundations in computer science theory, algorithms, data structures, object-oriented programming, and software lifecycle design.",
    highlights: [
      "Data Structures & Algorithms in C++ and Java",
      "Software Design Patterns & System Architecture",
      "Database Systems & Database Modeling",
    ],
    technologies: ["C++", "Java", "SQL", "OOP", "Data Structures"],
    icon: "GraduationCap",
  },
  {
    id: "smit-bootcamp",
    title: "Web & Mobile App Development",
    subtitle: "Saylani Mass IT Training Program (SMIT)",
    period: "2025 — Present",
    type: "Bootcamp",
    description:
      "Enrolled in the intensive Saylani Mass IT Training (SMIT) Web and Mobile Application Development program. Focused on industry-standard engineering practices, modern JavaScript, and React ecosystem mastery.",
    highlights: [
      "Deep dive into modern JavaScript (ES6+), DOM, and async patterns",
      "Building responsive, accessible SPAs with React and Next.js",
      "State management with Redux Toolkit and production form workflows",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    icon: "CodeXml",
  },
  {
    id: "intermediate-ics",
    title: "Intermediate in Computer Science (ICS)",
    subtitle: "Punjab Group of Colleges",
    period: "2022 — 2024",
    type: "Education",
    description:
      "Completed intermediate studies with core focus on computer science, mathematics, and physics, sparking the passion for software engineering and programming.",
    highlights: [
      "Computer Science Fundamentals & Logic Building",
      "Mathematics & Analytical Problem Solving",
    ],
    technologies: ["C Programming", "Computer Systems", "Mathematics"],
    icon: "BookOpen",
  },
  {
    id: "fullstack-expansion",
    title: "Expanding into Full-Stack Architecture",
    subtitle: "Continuous Self-Driven Engineering & Projects",
    period: "2025 — 2026",
    type: "Focus",
    description:
      "Actively developing full-stack capabilities with Node.js, Express, MongoDB, and Next.js Server Actions. Practicing clean architecture, API design, JWT auth, and integrating modern AI development tooling.",
    highlights: [
      "Developing RESTful backends and micro-APIs",
      "Database schema design with MongoDB and Mongoose",
      "Adopting AI-assisted pair programming workflows",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Git"],
    icon: "Rocket",
  },
];
