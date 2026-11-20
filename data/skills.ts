export interface Skill {
  name: string;
  category: "Frontend" | "State & Forms" | "Backend" | "Tools";
  iconName: string;
  status?: "Learning" | "Core";
  level?: string;
}

export const skillCategories = ["Frontend", "State & Forms", "Backend", "Tools"] as const;

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", iconName: "Code2", status: "Core" },
  { name: "CSS3", category: "Frontend", iconName: "Palette", status: "Core" },
  { name: "JavaScript (ES6+)", category: "Frontend", iconName: "FileCode", status: "Core" },
  { name: "TypeScript", category: "Frontend", iconName: "FileJson", status: "Core" },
  { name: "React", category: "Frontend", iconName: "Atom", status: "Core" },
  { name: "Next.js", category: "Frontend", iconName: "Layers", status: "Core" },
  { name: "Tailwind CSS", category: "Frontend", iconName: "Wind", status: "Core" },

  // State & Forms
  { name: "Redux Toolkit", category: "State & Forms", iconName: "Boxes", status: "Core" },
  { name: "Formik", category: "State & Forms", iconName: "FormInput", status: "Core" },
  { name: "Yup", category: "State & Forms", iconName: "ShieldCheck", status: "Core" },

  // Backend & Databases (Production Full-Stack Capabilities)
  { name: "Express.js", category: "Backend", iconName: "Server", status: "Core" },
  { name: "Node.js", category: "Backend", iconName: "Cpu", status: "Core" },
  { name: "PostgreSQL", category: "Backend", iconName: "Database", status: "Core" },
  { name: "Prisma ORM", category: "Backend", iconName: "Layers", status: "Core" },
  { name: "REST APIs", category: "Backend", iconName: "Network", status: "Core" },
  { name: "JWT & RBAC Auth", category: "Backend", iconName: "ShieldCheck", status: "Core" },
  { name: "Zod Validation", category: "Backend", iconName: "Code2", status: "Core" },
  { name: "MongoDB", category: "Backend", iconName: "Database", status: "Core" },

  // Tools
  { name: "Git", category: "Tools", iconName: "GitBranch", status: "Core" },
  { name: "GitHub", category: "Tools", iconName: "Github", status: "Core" },
  { name: "VS Code", category: "Tools", iconName: "Terminal", status: "Core" },
  { name: "Postman", category: "Tools", iconName: "Send", status: "Core" },
  { name: "Vercel", category: "Tools", iconName: "Cloud", status: "Core" },
];

export const currentlyLearning = [
  { topic: "Advanced PostgreSQL Indexing & Performance", progress: "Active" },
  { topic: "Docker Containerization & Deployment", progress: "Active" },
  { topic: "WebSockets & Real-Time Notification Pipelines", progress: "Active" },
  { topic: "CI/CD Workflows & Automated Testing Pipelines", progress: "Active" },
  { topic: "Full-Stack Server Actions & Microservices", progress: "Active" },
];
