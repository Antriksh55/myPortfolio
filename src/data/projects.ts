import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "ride-booking-testing",
    title: "Ride Booking Testing Platform",
    description:
      "A full-stack ride booking system paired with a comprehensive Playwright automation suite. Features cross-browser E2E testing across Chromium, Firefox, and WebKit with retry handling, automatic screenshot capture on failures, and a custom dashboard for one-click test execution with live logs and real-time result tracking.",
    techStack: ["Playwright", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Antriksh55/RideBooking-Testing",
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "TestTube",
        label: "Cross-Browser Testing",
        detail: "Automated E2E tests across Chromium, Firefox, and WebKit",
      },
      {
        icon: "ShieldCheck",
        label: "Test Isolation",
        detail: "beforeEach hooks reset state for consistent, independent test runs",
      },
      {
        icon: "Zap",
        label: "Race Condition Handling",
        detail: "Concurrent driver allocation with optimized DB operations",
      },
      {
        icon: "LayoutDashboard",
        label: "Custom Dashboard",
        detail: "One-click execution, live logs, and Playwright HTML report integration",
      },
    ],
  },
  {
    id: "mini-search-engine",
    title: "Mini Search Engine",
    description:
      "A full-stack mini search engine built with Node.js and Elasticsearch, supporting fast full-text search, indexing, and query ranking. Features a Redis caching layer for low-latency repeated queries, MongoDB for persistent data storage, and is fully containerized with Docker for easy deployment.",
    techStack: ["Node.js", "Express.js", "Elasticsearch", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com/Antriksh55/Search-Engine",
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "Search",
        label: "Full-Text Search",
        detail: "Powered by Elasticsearch for fast, ranked query results",
      },
      {
        icon: "Zap",
        label: "Redis Caching",
        detail: "Low-latency responses for repeated search queries",
      },
      {
        icon: "Database",
        label: "MongoDB Storage",
        detail: "Persistent document storage and indexing pipeline",
      },
      {
        icon: "Box",
        label: "Dockerized",
        detail: "Fully containerized for consistent dev and production environments",
      },
    ],
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    description:
      "A web-based library automation platform to manage book inventory, real-time availability, and borrowing/return workflows with a modern dashboard interface. Built with Java Servlets and JSP using a layered service architecture, featuring borrow history tracking, due date management, and automated fine calculation.",
    techStack: ["Java", "JSP", "Servlets", "Maven", "Apache Tomcat", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Antriksh55/LibraryManagementSystem1",
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "BookOpen",
        label: "Book Inventory",
        detail: "Real-time availability tracking and catalog management",
      },
      {
        icon: "Layers",
        label: "Layered Architecture",
        detail: "Java Servlets with service layer for clean business logic separation",
      },
      {
        icon: "LayoutDashboard",
        label: "Dynamic SSR",
        detail: "JSP-powered server-side rendering for seamless UI-backend data flow",
      },
      {
        icon: "Clock",
        label: "Fine Calculation",
        detail: "Automated tracking of due dates and penalty computation",
      },
    ],
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description:
      "An exciting new project is currently in development. Stay tuned for updates.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description:
      "Another innovative project is on the way. Check back soon.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
];
