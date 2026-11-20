export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: "fullstack-development",
    title: "Full-Stack Web Development",
    description:
      "Engineering end-to-end, scalable web applications by combining reactive Next.js frontends with robust Express 5 REST APIs, PostgreSQL databases, and Prisma ORM.",
    points: [
      "Full-stack monorepo architecture & clean code modularity",
      "PostgreSQL & Prisma ORM relational schema design & indexing",
      "JWT authentication with token revocation & RBAC permissions",
      "Zod runtime validation, Helmet security & API rate limiting",
    ],
    icon: "Server",
  },
  {
    id: "frontend-development",
    title: "Frontend Engineering",
    description:
      "Crafting responsive, high-performance, and visually refined web interfaces using modern React, Next.js (App Router), and TypeScript.",
    points: [
      "Pixel-perfect responsive design across mobile, tablet, and desktop",
      "Interactive animations and micro-interactions with Framer Motion",
      "Accessibility (WCAG AA), Core Web Vitals & SEO optimization",
      "Clean modular component architectures & design token systems",
    ],
    icon: "Layout",
  },
  {
    id: "backend-api",
    title: "RESTful API & Database Architecture",
    description:
      "Designing robust, secure, and production-ready backend services with Node.js, Express, PostgreSQL, and Prisma with strict contract validation.",
    points: [
      "RESTful API design with centralized error handling middleware",
      "Relational schema modeling with migration lifecycles & relations",
      "Role-Based Access Control (RBAC) and HttpOnly cookie security",
      "Automated integration testing for endpoints and auth flows",
    ],
    icon: "Database",
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce & Marketplace Platforms",
    description:
      "Building smooth digital shopping and on-demand marketplace experiences with dynamic catalogs, search/filter matrices, and booking pipelines.",
    points: [
      "Dynamic catalog browsing & multi-facet filtering",
      "Real-time cart state management and checkout flows",
      "Multi-status booking workflows (Pending, Accepted, Completed)",
      "Customer reviews and rating engines tied to verified orders",
    ],
    icon: "ShoppingBag",
  },
];
