export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  categories: ("Full Stack" | "Frontend" | "React" | "Next.js" | "JavaScript" | "TypeScript")[];
  technologies: string[];
  features: string[];
  previewGradient: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  statusBadge?: string;
}

export const projectFilterCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
] as const;

export type ProjectCategory = (typeof projectFilterCategories)[number];

export const projects: Project[] = [
  {
    id: "workspace-manager",
    title: "Workspace Manager",
    slug: "workspace-manager",
    shortDescription: "All-in-one productivity suite with Kanban boards, task lists, calendar planning, and workspace analytics.",
    longDescription:
      "A comprehensive workspace and productivity platform engineered with Next.js App Router, React, and TypeScript. Enables multi-workspace switching, drag-and-drop Kanban task pipelines, interactive calendar views, real-time search, multi-criteria filtering, in-app notifications, and persistent dark/light theme preferences.",
    categories: ["Full Stack", "Frontend", "React", "Next.js", "TypeScript"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "dnd-kit"],
    features: [
      "Dynamic Workspace & Project Creation",
      "Interactive Drag-and-Drop Kanban Board with dnd-kit",
      "Flexible List & Calendar Views for Task Scheduling",
      "Global Search and Multi-Tag Filtering",
      "Activity Tracking & Event Notification Center",
      "Responsive Dark / Light Mode with Persistent State",
    ],
    previewGradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    githubUrl: "https://github.com/danish234-droid/workspace-manager",
    liveUrl: "https://workspace-manager-three.vercel.app/",
    featured: true,
    statusBadge: "Flagship Project",
  },
  {
    id: "gaming-ecommerce",
    title: "Gaming E-Commerce Store",
    slug: "gaming-ecommerce",
    shortDescription: "Modern gaming gear and apparel store with dynamic product catalog, shopping cart, and smooth animations.",
    longDescription:
      "A fast, responsive e-commerce web application tailored for gaming peripherals, hardware, and accessories. Built with Next.js and Redux Toolkit to provide instant client-side cart updates, category filtering, product detail modals, and animated cart drawer workflows.",
    categories: ["Frontend", "React", "Next.js", "TypeScript"],
    technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    features: [
      "Dynamic Product Catalog with Live Category & Price Filters",
      "Comprehensive Product Detail Showcase with Image Gallery",
      "Global Redux Cart State Management (Add, Update, Remove, Subtotal)",
      "Interactive Slide-out Cart Drawer with Smooth Transitions",
      "Optimized Mobile First Responsive Layout",
    ],
    previewGradient: "from-purple-500/20 via-pink-500/20 to-indigo-500/20",
    githubUrl: "https://github.com/danish234-droid/gaming-ecommerce-store",
    liveUrl: "https://ecommerce-ebon-six-27.vercel.app/",
    featured: true,
    statusBadge: "Featured",
  },
  {
    id: "atm-management-system",
    title: "ATM Management System",
    slug: "atm-management-system",
    shortDescription: "Robust TypeScript banking simulator supporting secure PIN verification, transactions, and audit logs.",
    longDescription:
      "A structured financial transaction simulator developed in TypeScript. Emulates real-world ATM operations including PIN-based authentication, real-time balance queries, fast cash withdrawals, deposits with input validation, and detailed chronological transaction logs.",
    categories: ["TypeScript"],
    technologies: ["TypeScript", "Node.js", "Inquirer", "Chalk"],
    features: [
      "Secure User Authentication & PIN Validation Logic",
      "Dynamic Account Balance Inquiries & Fast Cash Options",
      "Cash Deposit & Custom Withdrawal with Overdraw Protection",
      "Formatted Transaction History Audit Trail",
      "Type-safe Error Handling & Clean Modular Architecture",
    ],
    previewGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    githubUrl: "https://github.com/danish234-droid/atm-management-system",
    liveUrl: "https://github.com/danish234-droid/atm-management-system",
    featured: false,
    statusBadge: "TypeScript Project",
  },
  {
    id: "coffee-shop-website",
    title: "Artisan Coffee Shop",
    slug: "coffee-shop-website",
    shortDescription: "Aesthetic, fully responsive landing page and digital menu presentation for an artisan specialty coffee house.",
    longDescription:
      "A visually engaging, high-performance coffee house website built using semantic HTML5, modern CSS3 flexbox/grid architectures, and vanilla JavaScript. Features a warm modern aesthetic, hero showcase, interactive menu catalog, testimonials, and contact section.",
    categories: ["Frontend", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    features: [
      "Aesthetic Dark & Warm Espresso Color Palette",
      "Interactive Digital Menu with Tabbed Categories",
      "Fluid Responsive Layout for Mobile, Tablet & Desktop",
      "Smooth Scrollspy Navigation and Reveal Animations",
    ],
    previewGradient: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
    githubUrl: "https://github.com/danish234-droid/coffee-shop-website",
    liveUrl: "https://wrathful-eggnog.surge.sh/",
    featured: false,
    statusBadge: "UI / Web Design",
  },
  {
    id: "javascript-games-collection",
    title: "JavaScript Interactive Games & Mini Apps",
    slug: "javascript-games-collection",
    shortDescription: "Collection of classic interactive web games and utility applications built with pure JavaScript.",
    longDescription:
      "A multi-game showcase featuring classic implementations built from the ground up: Interactive Calculator, Guess The Number (with dynamic hints and high scores), Tic Tac Toe, and DOM practice applications.",
    categories: ["Frontend", "JavaScript"],
    technologies: ["JavaScript (ES6+)"],
    features: [
      "Interactive Calculator with expression parsing & keypad support",
      "Guess The Number: Random algorithm, score tracker, input validator",
      "Tic Tac Toe: Turn alternation, win combination checker, restart state",
      "Image Gallery: Modal view & filter animations",
    ],
    previewGradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    githubUrl: "https://github.com/danish234-droid/javascript-games-hub",
    liveUrl: "https://unbecoming-icicle.surge.sh/",
    featured: false,
    statusBadge: "Practice Suite",
  },
];
