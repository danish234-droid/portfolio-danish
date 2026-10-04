const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateResume() {
  const outputPath = path.join(__dirname, "../public/resume/Danish-Ali-Resume.pdf");
  
  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 32, bottom: 32, left: 36, right: 36 },
    info: {
      Title: "Danish Ali - Software Engineer & MERN Stack Developer Resume",
      Author: "Danish Ali",
      Subject: "Software Engineering Resume",
      Keywords: "Software Engineer, MERN Stack, React, Next.js, TypeScript, Node.js, Developer Resume",
      Creator: "Danish Ali Portfolio System",
    },
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const colors = {
    primary: "#0284c7",    // Sky blue accent
    dark: "#0f172a",       // Deep Slate / Charcoal
    secondary: "#334155",  // Slate gray
    muted: "#64748b",      // Lighter slate
    line: "#cbd5e1",       // Divider line
    highlight: "#0369a1",  // Deep Blue link
    bullet: "#0284c7",
  };

  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const startX = doc.page.margins.left;

  // HELPER: Section Heading
  function drawSectionHeader(title) {
    doc.moveDown(0.4);
    const y = doc.y;
    doc
      .fontSize(10.5)
      .font("Helvetica-Bold")
      .fillColor(colors.primary)
      .text(title.toUpperCase(), startX, y, { characterSpacing: 1 });
    
    doc.moveDown(0.2);
    const lineY = doc.y;
    doc
      .strokeColor(colors.line)
      .lineWidth(0.75)
      .moveTo(startX, lineY)
      .lineTo(startX + pageWidth, lineY)
      .stroke();
    doc.moveDown(0.35);
  }

  // HEADER
  doc
    .fontSize(22)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("DANISH ALI", { align: "center", characterSpacing: 1 });

  doc
    .fontSize(10.5)
    .font("Helvetica-Bold")
    .fillColor(colors.primary)
    .text("SOFTWARE ENGINEERING STUDENT & MERN STACK DEVELOPER", {
      align: "center",
      characterSpacing: 0.5,
    });

  doc.moveDown(0.3);

  // Contact Info Row
  const contactText = [
    "Faisalabad, Pakistan",
    "d9963534@gmail.com",
    "+92 3020043773",
    "github.com/danish234-droid",
    "linkedin.com/in/danish-ali",
  ].join("  |  ");

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text(contactText, { align: "center" });

  doc.moveDown(0.2);
  const headerLineY = doc.y;
  doc
    .strokeColor(colors.primary)
    .lineWidth(1.5)
    .moveTo(startX, headerLineY)
    .lineTo(startX + pageWidth, headerLineY)
    .stroke();

  // SECTION 1: PROFESSIONAL SUMMARY
  drawSectionHeader("Professional Summary");
  doc
    .fontSize(8.8)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text(
      "Software Engineering undergraduate (GCUF) and active MERN stack practitioner (SMIT) with strong foundations in computer science, data structures, algorithms, and full-stack software development. Proven track record in developing high-performance, responsive web applications using Next.js 15, React 19, TypeScript, and Tailwind CSS, with expanding backend capabilities in Node.js, Express, and MongoDB. Passionate about writing clean, maintainable code and solving complex technical challenges in agile team environments.",
      { align: "justify", lineGap: 1.5 }
    );

  // SECTION 2: TECHNICAL SKILLS
  drawSectionHeader("Technical Skills");
  
  const skillsList = [
    { category: "Frontend", items: "React 19, Next.js 15 (App Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design" },
    { category: "State & Architecture", items: "Redux Toolkit, Context API, Formik, Yup Schema Validation, RESTful API Integration" },
    { category: "Backend & Databases", items: "Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Relational SQL Basics" },
    { category: "Tools & Fundamentals", items: "Git, GitHub, VS Code, Postman, Vercel, Data Structures & Algorithms (DSA), OOP (C++, Java)" },
  ];

  skillsList.forEach((skill) => {
    doc
      .fontSize(8.6)
      .font("Helvetica-Bold")
      .fillColor(colors.dark)
      .text(`•  ${skill.category}: `, { continued: true })
      .font("Helvetica")
      .fillColor(colors.secondary)
      .text(skill.items, { lineGap: 1.5 });
  });

  // SECTION 3: FEATURED ENGINEERING PROJECTS
  drawSectionHeader("Featured Projects");

  // Project 1: Workspace Manager
  doc
    .fontSize(9.5)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("Workspace Manager — All-in-One Productivity & Kanban Suite", { continued: true })
    .font("Helvetica")
    .fontSize(8)
    .fillColor(colors.highlight)
    .text("  [Live: workspace-manager-three.vercel.app]", {
      link: "https://workspace-manager-three.vercel.app/",
      underline: true,
    });

  doc
    .fontSize(8)
    .font("Helvetica-Oblique")
    .fillColor(colors.primary)
    .text("Tech Stack: Next.js 15, React 19, TypeScript, Tailwind CSS, Redux Toolkit, dnd-kit");

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("• Engineered full-scale productivity app with multi-workspace switching, drag-and-drop Kanban task pipelines, and calendar views.", { lineGap: 1.2 })
    .text("• Integrated Redux Toolkit for real-time task state updates, multi-criteria search filtering, and persistent theme preferences.", { lineGap: 1.2 })
    .text("• Designed modular architecture resulting in zero layout shifts and seamless client-side page transitions.", { lineGap: 1.2 });

  doc.moveDown(0.3);

  // Project 2: Gaming E-Commerce Store
  doc
    .fontSize(9.5)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("Gaming E-Commerce Store — Peripheral & Hardware Platform", { continued: true })
    .font("Helvetica")
    .fontSize(8)
    .fillColor(colors.highlight)
    .text("  [Live: ecommerce-ebon-six-27.vercel.app]", {
      link: "https://ecommerce-ebon-six-27.vercel.app/",
      underline: true,
    });

  doc
    .fontSize(8)
    .font("Helvetica-Oblique")
    .fillColor(colors.primary)
    .text("Tech Stack: Next.js, React, TypeScript, Redux Toolkit, Tailwind CSS, Framer Motion");

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("• Developed high-speed e-commerce application featuring live category and price filtering, product modals, and animated cart drawer.", { lineGap: 1.2 })
    .text("• Implemented global Redux state managing dynamic price computations, quantity modifications, and checkout workflows.", { lineGap: 1.2 });

  doc.moveDown(0.3);

  // Project 3: ATM Management System
  doc
    .fontSize(9.5)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("ATM Management System — Financial Simulator", { continued: true })
    .font("Helvetica")
    .fontSize(8)
    .fillColor(colors.highlight)
    .text("  [GitHub: danish234-droid/atm-management-system]", {
      link: "https://github.com/danish234-droid/atm-management-system",
      underline: true,
    });

  doc
    .fontSize(8)
    .font("Helvetica-Oblique")
    .fillColor(colors.primary)
    .text("Tech Stack: TypeScript, Node.js, Inquirer, Chalk");

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("• Built type-safe banking simulator with PIN authentication, balance queries, fast cash withdrawals, and detailed audit trails.", { lineGap: 1.2 })
    .text("• Applied OOP principles with modular error guards and overdraw constraints.", { lineGap: 1.2 });

  doc.moveDown(0.3);

  // Project 4: Artisan Coffee Shop
  doc
    .fontSize(9.5)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("Artisan Specialty Coffee House — Responsive Web App", { continued: true })
    .font("Helvetica")
    .fontSize(8)
    .fillColor(colors.highlight)
    .text("  [Live: wrathful-eggnog.surge.sh]", {
      link: "https://wrathful-eggnog.surge.sh/",
      underline: true,
    });

  doc
    .fontSize(8)
    .font("Helvetica-Oblique")
    .fillColor(colors.primary)
    .text("Tech Stack: HTML5 Semantic Elements, CSS3 Grid/Flexbox, JavaScript ES6+");

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("• Built modern landing page with tabbed menu filtering, mobile-first responsive layouts, and interactive UI micro-interactions.", { lineGap: 1.2 });

  // SECTION 4: EDUCATION & TRAINING
  drawSectionHeader("Education & Professional Training");

  // Edu 1: BS SE
  doc
    .fontSize(9.2)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("Bachelor of Science in Software Engineering (BS SE)", { continued: true })
    .font("Helvetica-Bold")
    .fillColor(colors.primary)
    .text(" | 2024 — Present", { align: "right" });

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("Government College University Faisalabad (GCUF) • Faisalabad, Pakistan")
    .text("Core Focus: Data Structures & Algorithms (C++/Java), Object-Oriented Programming, Database Systems (SQL), Software Design Patterns.", { lineGap: 1.2 });

  doc.moveDown(0.3);

  // Edu 2: SMIT
  doc
    .fontSize(9.2)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("Web & Mobile Application Development Certification", { continued: true })
    .font("Helvetica-Bold")
    .fillColor(colors.primary)
    .text(" | 2025 — Present", { align: "right" });

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("Saylani Mass IT Training (SMIT) • Faisalabad, Pakistan")
    .text("Intensive software engineering training covering Modern JavaScript (ES6+), React, Next.js App Router, Redux Toolkit, REST API development.", { lineGap: 1.2 });

  doc.moveDown(0.3);

  // Edu 3: ICS
  doc
    .fontSize(9.2)
    .font("Helvetica-Bold")
    .fillColor(colors.dark)
    .text("Intermediate in Computer Science (ICS)", { continued: true })
    .font("Helvetica")
    .fillColor(colors.muted)
    .text(" | 2022 — 2024", { align: "right" });

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("Punjab Group of Colleges • Faisalabad, Pakistan")
    .text("Computer science foundations, structured programming in C, logic building, and analytical mathematics.", { lineGap: 1.2 });

  // SECTION 5: KEY STRENGTHS
  drawSectionHeader("Key Strengths & Values");
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text("• Clean Code & Type Safety: Dedicated to rigorous TypeScript typing, modular architectures, and clean code conventions.", { lineGap: 1.2 })
    .text("• Rapid Learning & Execution: Fast at learning modern frameworks, API designs, and transforming wireframes into production web apps.", { lineGap: 1.2 })
    .text("• Collaboration & Growth: Active team communicator, open to feedback, and committed to continuous full-stack mastery.", { lineGap: 1.2 });

  doc.end();

  writeStream.on("finish", () => {
    console.log("Professional Resume PDF generated successfully at:", outputPath);
  });
}

generateResume();
