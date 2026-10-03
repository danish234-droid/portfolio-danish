export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Crafting responsive, high-performance, and visually refined web interfaces using modern React, Next.js (App Router), and TypeScript.",
    points: [
      "Pixel-perfect responsive design across all viewports",
      "Interactive animations and micro-interactions",
      "Accessibility (WCAG AA) & SEO optimization",
      "Clean modular component architectures",
    ],
    icon: "Layout",
  },
  {
    id: "fullstack-development",
    title: "Full-Stack Web Development",
    description:
      "Developing connected web applications by integrating dynamic frontend clients with secure backend REST APIs and MongoDB databases.",
    points: [
      "RESTful API design and route handling",
      "Database schema modeling with MongoDB",
      "Authentication and protected routes",
      "State synchronization with Redux Toolkit",
    ],
    icon: "Server",
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    description:
      "Building smooth digital shopping experiences with dynamic product catalogs, search, filtering, shopping cart workflows, and interactive checkout previews.",
    points: [
      "Dynamic catalog browsing & multi-facet filtering",
      "Client-side cart persistence & management",
      "Smooth animated drawers and modals",
      "Optimized performance and fast load times",
    ],
    icon: "ShoppingBag",
  },
  {
    id: "ui-implementation",
    title: "UI / UX Implementation",
    description:
      "Translating Figma wireframes, UI kits, and conceptual designs into maintainable, semantic code with clean Tailwind CSS utility systems.",
    points: [
      "High-fidelity design-to-code conversion",
      "Custom dark / light theme implementation",
      "Interactive state feedback and micro-interactions",
      "Maintainable design token systems",
    ],
    icon: "Sparkles",
  },
];
