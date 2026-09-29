export const projects = [
  {
    id: 9,
    title: "Sunrise Family Clinic Voice Agent",
    description: "AI phone agent for a clinic. Verifies callers against FHIR patient records, triages requests with Claude, and sends urgent calls to a person before any AI is involved.",
    longDescription: "A Twilio Voice phone agent for a fictional clinic: callers give their name and date of birth, get verified against a FHIR patient server, and have their request triaged by Claude into one of five categories. Urgent phrases are caught by a keyword check before any model call. A failed match gets one retry, and any API error or repeated failure transfers the caller to a person.",
    image: "/images/sunrise-clinic-voice-agent.png",
    videoUrl: "https://youtu.be/aYGwVPTqIp0",
    githubUrl: "https://github.com/alikirat/clarus-voice-demo",
    tags: ["Node.js", "Express.js", "Twilio Voice", "Anthropic API", "FHIR", "Vitest"],
    featured: true,
    highlights: [
      "Urgent-phrase check on every caller response, before any model call",
      "Failed matches get one retry, then transfer to a person; API errors transfer immediately",
      "PHI-safe logging: only an explicit field allowlist ever gets logged",
      "Twilio signature validation on every route",
      "44 automated tests across identity parsing, urgent detection, and the full call flow"
    ]
  },
  {
    id: 8,
    title: "WordPress Demo Sites",
    description: "Four working WordPress.com marketing sites, education, healthcare, SaaS, and local business, built entirely in the block editor with a shared design system and no plugins or paid plan required.",
    longDescription: "A homepage and four example landing pages built with raw Gutenberg block markup: reusable unsynced patterns, one shared set of design tokens across every page, and a conversion-first structure (clear offer, proof, objection handling, one CTA) on each. Built to show both WordPress delivery skills for clients and technical range beyond the React/Node stack.",
    image: "/images/wordpress-demo-sites.png",
    liveUrl: "https://alikirat.wordpress.com",
    tags: ["WordPress", "Gutenberg Blocks", "Block Editor", "Web Design", "Copywriting"],
    featured: true,
    highlights: [
      "Four live example sites: education, healthcare, SaaS, and local business",
      "Reusable, unsynced block patterns instead of locked template parts",
      "One shared design token system (colors, type) across every page",
      "Conversion-first page structure: offer, proof, objections, one CTA",
      "No plugins, no paid plan, core blocks only"
    ]
  },
  {
    id: 1,
    title: "Atlas Taxi",
    description: "Production-ready full-stack ride booking platform built for a small taxi business. Features JWT authentication, role-based access control, admin dashboard with search and sorting, and MongoDB data persistence with performance indexing. Source-available (PolyForm Shield).",
    longDescription: "A comprehensive MERN stack application that handles user registration, ride scheduling, and admin management. Built with 12+ protected API endpoints, secure authentication using httpOnly cookies, and deployed across Netlify, Render, and MongoDB Atlas.",
    image: "/images/atlas-taxi.png",
    liveUrl: "https://atlastaxi.netlify.app",
    githubFrontend: "https://github.com/alikirat/atlas-taxi-frontend",
    githubBackend: "https://github.com/alikirat/atlas-taxi-backend",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "CSS Modules", "Axios", "bcrypt"],
    featured: true,
    highlights: [
      "JWT authentication with httpOnly cookies",
      "Role-based access control (User/Admin)",
      "12+ protected REST API endpoints",
      "Admin dashboard with search & sorting",
      "MongoDB indexing for performance",
      "Mobile-first responsive design",
      "Licensed PolyForm Shield: code is source-available, not open source"
    ]
  },
  {
    id: 6,
    title: "JobMatch AI",
    description: "AI-powered job search assistant that ingests job postings, scores them against your resume, analyzes skill gaps, and helps optimize your resume content, all surfaced through a swipeable review interface. Source-available (PolyForm Noncommercial).",
    longDescription: "A full-stack monorepo built around a Google ADK 2.0 agent graph (ingest → ATS gate check → semantic fit scoring → gap analysis → resume optimization), a FastAPI backend with MongoDB persistence, and a React + TypeScript frontend for reviewing scored jobs. Licensed for noncommercial use only.",
    image: "/images/jobmatch-ai.png",
    githubUrl: "https://github.com/alikirat/jobmatch-ai",
    tags: ["React", "TypeScript", "FastAPI", "Python", "MongoDB", "Google ADK", "Gemini AI"],
    featured: true,
    highlights: [
      "Multi-stage agent graph: ingest, ATS gate check, semantic fit scoring, gap analysis, resume optimization",
      "FastAPI backend with MongoDB persistence",
      "React + TypeScript swipeable review interface",
      "Google ADK 2.0 workflow powered by Gemini",
      "Adzuna API integration for live job ingestion",
      "Licensed PolyForm Noncommercial: code is source-available, not open source"
    ]
  },
  {
    id: 3,
    title: "Customer Support Graph Agent",
    description: "A multi-agent customer support system built with Google ADK 2.0, featuring a graph workflow that classifies and routes shipping queries using LLM agents.",
    longDescription: "A production-grade customer support workflow constructed using Google's Agent Development Kit (ADK) 2.0. The graph workflow utilizes a Pydantic-based LLM classifier to categorize user queries (shipping vs. unrelated), and routes shipping queries to a dedicated FAQ agent with playful, emoji-rich response formatting, while politely declining out-of-scope inquiries.",
    image: "/images/customer-support-agent.png",
    githubUrl: "https://github.com/alikirat/customer-support-agent",
    tags: ["Python", "Google ADK 2.0", "Pydantic", "agents-cli", "Gemini AI", "Graph Workflows"],
    featured: true,
    highlights: [
      "ADK 2.0 graph workflow architecture",
      "Sequential and conditional routing with Edge.chain()",
      "Pydantic-based classification schema",
      "Robust state management (user_query and inquiry_category)",
      "Playful and emoji-rich shipping FAQ node",
      "Comprehensive unit testing and ruff/ty check validation"
    ]
  },
  {
    id: 4,
    title: "AI Chatbot",
    description: "Chat app powered by the Groq API, with user accounts and chat history scoped per user. React frontend, Express/MongoDB backend.",
    longDescription: "Full-stack chatbot with JWT-based authentication: each account has its own private conversation history, backed by a REST API with per-user access control.",
    image: "/images/chatbot.png",
    liveUrl: "https://akdev-chatbot.netlify.app/",
    githubFrontend: "https://github.com/alikirat/chatbot",
    githubBackend: "https://github.com/alikirat/chatbot-backend",
    tags: ["React", "Node.js", "Groq AI", "Express.js", "MongoDB", "JWT Auth"],
    featured: false,
    highlights: [
      "User accounts with JWT authentication",
      "Chats scoped per user, no shared data between accounts",
      "Groq AI integration for chat responses",
      "Express.js/MongoDB backend API",
      "One-click demo login for quick access"
    ]
  },
  {
    id: 7,
    title: "Equipment Tracker",
    description: "Internal tool for tracking physical equipment and asset checkouts. Staff check items in and out with live status updates, admins manage the catalog and checkout history through a separate panel. Source-available (PolyForm Shield).",
    longDescription: "A Laravel 12 app built stage by stage: Livewire-powered checkout/check-in with no page reloads, an Alpine-driven live search, server-validated maintenance reporting, hand-built session auth, a queued overdue-return email job, and a FilamentPHP admin panel with read-only checkout history to protect the audit trail.",
    image: "/images/equipment-tracker.png",
    githubUrl: "https://github.com/alikirat/equipment-tracker",
    tags: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL", "FilamentPHP", "PHP"],
    featured: true,
    highlights: [
      "Livewire check-out/check-in flow, no page reloads",
      "Alpine-powered live search on the equipment list",
      "Queued overdue-return email notification",
      "Event/listener pair logging every checkout",
      "FilamentPHP admin panel with read-only checkout history",
      "Licensed PolyForm Shield: code is source-available, not open source"
    ]
  },
  {
    id: 5,
    title: "GitHub Repository Gallery",
    description: "Dynamic single-page React application that leverages the GitHub REST API to showcase repositories. Features asynchronous data fetching, client-side filtering, and responsive design with clean state management.",
    longDescription: "A polished portfolio piece demonstrating API integration, error handling, and modern React patterns. Built with component modularity and user experience in mind.",
    image: "/images/repo-gallery.png",
    liveUrl: "https://alikirat.github.io/github-repo-gallery/",
    githubUrl: "https://github.com/alikirat/github-repo-gallery",
    tags: ["React", "GitHub API", "JavaScript", "HTML5", "CSS3", "REST API"],
    featured: false,
    highlights: [
      "GitHub REST API integration",
      "Real-time repository filtering",
      "Async/await error handling",
      "Responsive UI components",
      "Clean state management"
    ]
  }
];

export const featuredProjects = projects.filter(project => project.featured);
