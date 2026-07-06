export const projects = [
  {
    id: 1,
    title: "Atlas Taxi",
    description: "Production-ready full-stack ride booking platform built for a small taxi business. Features JWT authentication, role-based access control, admin dashboard with search and sorting, and MongoDB data persistence with performance indexing.",
    longDescription: "A comprehensive MERN stack application that handles user registration, ride scheduling, and admin management. Built with 12+ protected API endpoints, secure authentication using httpOnly cookies, and deployed across Netlify, Render, and MongoDB Atlas.",
    image: "/images/atlas-taxi.png",
    liveUrl: "https://atlastaxi.netlify.app",
    githubFrontend: "https://github.com/alikirat/frontend-capstone",
    githubBackend: "https://github.com/alikirat/backend-capstone",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "CSS Modules", "Axios", "bcrypt"],
    featured: true,
    highlights: [
      "JWT authentication with httpOnly cookies",
      "Role-based access control (User/Admin)",
      "12+ protected REST API endpoints",
      "Admin dashboard with search & sorting",
      "MongoDB indexing for performance",
      "Mobile-first responsive design"
    ]
  },
  {
    id: 2,
    title: "School Dropout Prevention Multi-Agent System",
    description: "AI-powered multi-agent system built for Kaggle competition using Google's Agent Development Kit. Coordinates specialized agents to analyze student data, predict dropout risk, and recommend interventions.",
    longDescription: "Sophisticated AI system featuring multiple specialized agents (Data Analyst, Risk Assessor, Intervention Strategist, Coordinator) that work together to identify at-risk students and suggest evidence-based intervention strategies.",
    image: "/images/school-dropout.png",
    githubUrl: "https://github.com/alikirat/school-dropout-prevention",
    tags: ["Python", "Google ADK", "Gemini AI", "Multi-Agent Systems", "Data Analysis", "Machine Learning"],
    featured: true,
    highlights: [
      "Multi-agent coordination architecture",
      "Google Agent Development Kit integration",
      "Gemini AI for intelligent analysis",
      "Predictive risk assessment",
      "Evidence-based intervention strategies",
      "Comprehensive documentation for Kaggle"
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
    description: "Intelligent chatbot application powered by Groq AI, designed for fast and efficient conversational responses. Features a React frontend with a Node.js/Express backend for AI processing.",
    longDescription: "Full-stack chatbot demonstrating AI integration capabilities and modern web development practices. Handles real-time conversations with optimized API interactions.",
    image: "/images/chatbot.png",
    liveUrl: "https://akdev-chatbot.netlify.app/",
    githubFrontend: "https://github.com/alikirat/chatbot",
    githubBackend: "https://github.com/alikirat/chatbot-backend",
    tags: ["React", "Node.js", "Groq AI", "Express.js", "JavaScript", "API Integration"],
    featured: false,
    highlights: [
      "Groq AI integration",
      "Real-time chat interface",
      "Express.js backend API",
      "Optimized response handling",
      "Modern UI/UX design"
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
