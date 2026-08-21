export const projects = [
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
