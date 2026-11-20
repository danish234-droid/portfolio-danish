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
    id: "fullstack-architecture",
    title: "Full-Stack System Engineering & Monorepos",
    subtitle: "Production Application Architecture & Delivery",
    period: "2025 — Present",
    type: "Focus",
    description:
      "Engineered full-stack applications like FixNear, implementing scalable multi-tier architectures with Express 5, PostgreSQL, and Prisma ORM alongside reactive Next.js frontends. Mastered role-based authentication pipelines, relational modeling, and automated testing.",
    highlights: [
      "Architected multi-tier REST APIs with Express 5, PostgreSQL, and Prisma ORM",
      "Implemented JWT authentication with token revocation and RBAC authorization",
      "Constructed automated integration test suites for backend middleware and auth flows",
      "Designed responsive Next.js frontend interfaces with Tailwind CSS and modular state",
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Prisma ORM", "TypeScript", "Node.js", "JWT", "Zod", "REST APIs"],
    icon: "Rocket",
  },
];
