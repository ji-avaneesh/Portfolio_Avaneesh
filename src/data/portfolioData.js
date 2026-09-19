export const portfolioData = {
  personalInfo: {
    subtitle: "Full Stack Developer building modern web applications and AI-powered products with modern web and Agentic AI technologies."
  },
  stats: [
    { value: "20+", label: "Projects & Experiments" },
    { value: "15+", label: "Technologies" },
    { value: "2025", label: "MCA Graduate" },
    { value: "Full Stack & AI", label: "Core Focus" }
  ],
  home: {
    availability: [
      { type: "Full-time Software / Full Stack Roles" },
      { type: "AI & Agentic AI Product Engineering" },
      { type: "Freelance & Technical Collaborations" }
    ],
    exploring: [
      { name: "Agentic AI & Multi-Agent Systems" },
      { name: "Local LLMs & Ollama" },
      { name: "RAG & Vector Pipelines (Qdrant/FAISS)" },
      { name: "Scalable Backend Architecture" }
    ],
    techStrip: [
      "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", 
      "Agentic AI", "Ollama", "Qdrant", "Redis", "Docker", "Git"
    ]
  },
  about: {
    description: "I am a dedicated Full Stack Developer and AI product builder with a strong mathematical foundation. I develop clean, well-architected web systems, modern fluid user interfaces, and practical AI/Agentic AI workflows. I prioritize product usability, honest technical craftsmanship, and maintainable engineering.",
    badges: [
      { text: "MCA Graduate", subtext: "HBTU Kanpur (2023–2025)" },
      { text: "Full Stack Dev", subtext: "React, Node, Express, Mongo" },
      { text: "Based in Noida", subtext: "Noida, UP (Available)" }
    ],
    expertise: [
      {
        title: "Full Stack Development",
        desc: "Building highly interactive responsive web applications using React, Next.js, Node.js, and clean RESTful API standards."
      },
      {
        title: "AI / GenAI & Agentic AI",
        desc: "Developing contextual retrieval pipelines (RAG), integrating local LLMs (Ollama), and exploring autonomous multi-agent task orchestration."
      },
      {
        title: "Backend & Systems",
        desc: "Structuring database schemas, query optimizations, robust token-based middleware, and scalable real-time WebSocket servers."
      },
      {
        title: "Product Engineering",
        desc: "Transforming ideas into tangible MVPs with refined glassmorphism design tokens, micro-interactions, and accessible user flows."
      }
    ],
    philosophy: [
      {
        title: "Understand the problem.",
        desc: "Analyze user pain points and define logical system limits before writing code."
      },
      {
        title: "Design the system.",
        desc: "Plan schema boundaries, API models, and clean separation of concerns."
      },
      {
        title: "Build the smallest useful version.",
        desc: "Develop a working MVP to test core logic rapidly without over-engineering."
      },
      {
        title: "Test it, improve it, and ship it.",
        desc: "Refactor based on real inputs, run compiler checks, and deploy to production."
      }
    ],
    exploring: [
      "Agentic AI",
      "Multi-Agent Orchestration",
      "Local LLMs (Ollama)",
      "RAG & Vector Search",
      "LangChain & FAISS",
      "System Architecture",
      "SaaS / Product Engineering",
      "Cloud & Containerization"
    ]
  },
  projects: {
    // ⭐ CATEGORY 1 — MAIN PROJECTS (Strongest projects, highest visibility)
    main: [
      {
        id: "anr-book-store",
        title: "ANR Book Store",
        category: "Full Stack / E-Commerce",
        description: "Full-stack bookstore platform featuring searchable catalog filtering, persistent shopping carts, user authentication, and secure checkout workflows.",
        highlight: "Robust full-stack architecture with JWT authentication, optimized schema design, and modular state management.",
        tech: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
        githubUrl: "https://github.com/anrpvtltd/ANR-Book-Store",
        liveUrl: null,
        status: "built",
        badge: "Main Project"
      },
      {
        id: "cleanx",
        title: "CleanX",
        category: "System Tool / Utility",
        description: "High-performance developer cleaner utility designed to search duplicate files, analyze disk usage, and purge redundant build caches safely.",
        highlight: "Combines high-speed low-level file traversal with an intuitive desktop UI dashboard.",
        tech: ["C++", "Node.js", "Electron", "File System"],
        githubUrl: "https://github.com/anrpvtltd/CleanX",
        liveUrl: null,
        status: "built",
        badge: "Main Project"
      },
      {
        id: "anr-pvt-ltd",
        title: "ANR Pvt Ltd",
        category: "Enterprise Web Platform",
        description: "Scalable enterprise web system showcasing modular product lineups, interactive showcase panels, and containerized deployment setups.",
        highlight: "Enterprise architecture featuring server-driven layout composition and responsive micro-animations.",
        tech: ["React", "Express", "Docker", "CSS3", "Vite"],
        githubUrl: "https://github.com/anrpvtltd/ANR-Pvt-Ltd",
        liveUrl: null,
        status: "built",
        badge: "Main Project"
      },
      {
        id: "anr-software-solution",
        title: "ANR Software Solution",
        category: "Operations & Services Hub",
        description: "Central software management cockpit handling customer ticketing, microservices health logs, and account lifecycle monitoring.",
        highlight: "Real-time socket status propagation and structured MongoDB aggregation pipelines.",
        tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
        githubUrl: "https://github.com/anrpvtltd/ANR-Software-Solution",
        liveUrl: null,
        status: "built",
        badge: "Main Project"
      }
    ],

    // 🚀 CATEGORY 2 — CURRENT / BUILDING PROJECTS (Actively being developed)
    current: [
      {
        id: "anr-chatpdf-ai-assistant",
        title: "ANR ChatPDF AI Assistant",
        category: "AI / Document Assistant",
        description: "Intelligent document conversation assistant enabling semantic PDF search, context extraction, and multi-turn conversational Q&A.",
        currentStage: "Integrating multi-document ingestion and token-efficient chunking strategies.",
        tech: ["Next.js", "React", "Gemini API", "Pinecone", "LangChain"],
        githubUrl: "https://github.com/ji-avaneesh/pdf-ai-assistant",
        liveUrl: null,
        status: "in-development",
        badge: "Building"
      },
      {
        id: "ai-document-qa-system",
        title: "AI Document Q&A System",
        category: "RAG / Generative AI",
        description: "RAG-driven documents manager enabling PDF upload, vector embeddings via FAISS, semantic segment retrieval, and LLM-powered Q&A.",
        currentStage: "Developing FAISS vector similarity search and citation response generation.",
        tech: ["React", "Vite", "Node.js", "Express", "OpenAI", "LangChain", "FAISS"],
        githubUrl: "https://github.com/ji-avaneesh/AI-Document-Q-A-System",
        liveUrl: null,
        status: "in-development",
        badge: "Building"
      },
      {
        id: "aura-ai",
        title: "Aura AI",
        category: "Personal AI OS / Agentic AI",
        description: "Personal AI Life Engine designed as a local-first contextual operating layer coordinating tasks, episodic memory logs, and agentic workflows.",
        currentStage: "Architecting event-first Think/Act separation, plugin dispatcher, and episodic memory layers.",
        tech: ["Node.js", "PostgreSQL", "Redis", "Qdrant", "Ollama", "Gemini API"],
        githubUrl: "https://github.com/anrpvtltd/Aura-Ai",
        liveUrl: null,
        status: "in-development",
        badge: "Building"
      }
    ],

    // 📦 CATEGORY 3 — SIDE / PREVIOUS PROJECTS (College, learning, experimental)
    side: [
      {
        id: "cyber-kavach-web",
        title: "Cyber Kavach Web",
        category: "Cybersecurity / Web",
        description: "Cybersecurity web platform managing firewalls, open ports, and system vulnerability audits built during internship in a team of 4.",
        tech: ["React", "Node.js", "Express", "Security", "Linux"],
        githubUrl: "https://github.com/ji-avaneesh/cyber-kavach",
        liveUrl: null,
        status: "completed",
        badge: "Internship Project"
      },
      {
        id: "cyber-kavach-vpn",
        title: "Cyber Kavach VPN",
        category: "Networking / Security",
        description: "Virtual private network configuration suite mapping client tunnels to remote matrix networks securely.",
        tech: ["Bash", "OpenVPN", "Networking", "Security"],
        githubUrl: "https://github.com/ji-avaneesh/Cyber-Kavach-VPN",
        liveUrl: null,
        status: "completed",
        badge: "Security Script"
      },
      {
        id: "store-rating-fullstack",
        title: "Store Rating Fullstack",
        category: "Full Stack",
        description: "Retail analytics store dashboard capturing customer feedbacks, rating trends, and business metrics.",
        tech: ["React", "Express", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/ji-avaneesh/store-rating-fullstack",
        liveUrl: null,
        status: "completed",
        badge: "Full Stack"
      },
      {
        id: "tron-neon-snake",
        title: "TRON Neon Snake",
        category: "Game / Canvas",
        description: "Classic retro arcade Snake game styled with a futuristic TRON neon color theme, grid particle glows, and custom collision engines.",
        tech: ["HTML5 Canvas", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/ji-avaneesh/TRON-Neon-Snake",
        liveUrl: null,
        status: "completed",
        badge: "Game"
      },
      {
        id: "tictoe-game",
        title: "Tictoe Game",
        category: "Game / Logic",
        description: "Responsive browser-based Tic-Tac-Toe game featuring modular AI opponent logics and score trackers.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/ji-avaneesh/tictoe-game",
        liveUrl: null,
        status: "completed",
        badge: "Game"
      },
      {
        id: "phishing-url-detector",
        title: "Phishing URL Detector",
        category: "Machine Learning / Security",
        description: "Anti-phishing detection system utilizing heuristics and machine learning algorithms to verify security scores of web addresses.",
        tech: ["Python", "Scikit-Learn", "Flask", "HTML"],
        githubUrl: "https://github.com/vpndigitalservice/phishing_url_detector",
        liveUrl: null,
        status: "completed",
        badge: "ML Tool"
      },
      {
        id: "ds-practice-library",
        title: "DS Practice Library",
        category: "CS Foundations",
        description: "Data Structures code library containing structured implementations of trees, graphs, heaps, sorting algorithms, and complexity reviews.",
        tech: ["C++", "Algorithms", "DSA"],
        githubUrl: "https://github.com/ji-avaneesh/Data-Structure-Practice-Library",
        liveUrl: null,
        status: "completed",
        badge: "Algorithms"
      },
      {
        id: "file-management-system",
        title: "File Management System",
        category: "Full Stack",
        description: "Secure local file storage manager supporting metadata indexing, dynamic downloads, and access rights management.",
        tech: ["Node.js", "Express", "EJS", "Bootstrap"],
        githubUrl: "https://github.com/ji-avaneesh/File-Management-Ststem",
        liveUrl: null,
        status: "completed",
        badge: "Full Stack"
      },
      {
        id: "bio-data",
        title: "Bio-Data",
        category: "Web Platform",
        description: "Resume structure generator tool allowing users to build, format, and download structured professional bio-data sheets.",
        tech: ["React", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/ji-avaneesh/Bio-Data",
        liveUrl: null,
        status: "completed",
        badge: "Utility"
      },
      {
        id: "anr-insta",
        title: "ANR Insta",
        category: "Social Platform",
        description: "Full-stack social media prototype implementing user profiles, media feeds, follow graphs, and post interaction hooks.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        githubUrl: "https://github.com/anrpvtltd/ANR-Insta",
        liveUrl: null,
        status: "completed",
        badge: "Social Media"
      }
    ],

    // 🧠 CATEGORY 4 — VISION PROJECT (Distinct long-term future product)
    vision: {
      id: "orthia",
      title: "The Great Project of ORTHIA",
      projectType: "Vision / Future Product",
      tagline: "Autonomous Agentic Intelligence & Cognitive Mesh",
      status: "vision",
      badge: "Long-Term Vision",
      purpose: "An ambitious long-term exploration into sovereign multi-agent cognitive architectures where specialized autonomous agents collaborate on complex computational objectives.",
      coreVision: "Bridging the gap between reactive single-prompt LLMs and proactive agentic reasoning, memory synthesis, and self-directing workflow execution.",
      majorFeatures: [
        "Autonomous Multi-Agent Consensus Protocol",
        "Dynamic Cognitive Memory & Reflection Mesh",
        "Goal Decomposition & Self-Correcting Execution Loops",
        "Safe Sandboxed Tool & API Dispatch Environment"
      ],
      futureArchitecture: "Event-driven micro-kernel in Node.js/Python, vectorized semantic persistence with Qdrant/FAISS, and hybrid local/cloud model routing.",
      note: "Exploratory research and long-term architectural vision. Presented honestly as a future product direction, not a finished product.",
      githubUrl: null,
      liveUrl: null
    }
  },
  skills: {
    categories: [
      {
        num: "01",
        name: "Frontend",
        desc: "Building responsive layouts, interactive single page applications, and modern web browser viewports.",
        items: [
          { name: "HTML5", desc: "Semantic structural skeletons.", status: "CORE" },
          { name: "CSS3", desc: "Flexbox, grid system layouts, and styling transitions.", status: "CORE" },
          { name: "JavaScript", desc: "ES6 syntax logic, closures, and event loops.", status: "CORE" },
          { name: "React", desc: "Component hooks state bindings and rendering rules.", status: "CORE" },
          { name: "Next.js", desc: "Server-side rendering, API route structures, and file routers.", status: "CORE" },
          { name: "Vite", desc: "Modern frontend bundling and HMR dev server.", status: "CORE" },
          { name: "Tailwind CSS", desc: "Utility-first rapid styling and responsive grids.", status: "CORE" },
          { name: "Responsive Design", desc: "Structuring screens matching mobile up to 4K desktop layouts.", status: "CORE" },
          { name: "Web APIs", desc: "DOM interactions, Fetch protocols, and browser features.", status: "CORE" },
          { name: "Socket.IO Client", desc: "Connecting real-time sockets to backend feeds.", status: "WORKING" }
        ]
      },
      {
        num: "02",
        name: "Backend",
        desc: "Structuring APIs, secure endpoints, custom middlewares, and real-time event servers.",
        items: [
          { name: "Node.js", desc: "Asynchronous runtime environments for backend API servers.", status: "CORE" },
          { name: "Express.js", desc: "REST routing middleware framework pipelines.", status: "CORE" },
          { name: "REST APIs", desc: "Designing clean endpoint CRUD operations architectures.", status: "CORE" },
          { name: "Authentication", desc: "Securing routes utilizing token structures.", status: "CORE" },
          { name: "JWT", desc: "JSON Web Tokens encryption and key verification.", status: "CORE" },
          { name: "Socket.IO", desc: "Websocket servers handling client rooms and messages.", status: "WORKING" },
          { name: "NestJS", desc: "Modular, typed enterprise server architecture.", status: "EXPLORING" }
        ]
      },
      {
        num: "03",
        name: "Databases",
        desc: "Modeling schemas, table relations, indexes, caches, and query performance optimizations.",
        items: [
          { name: "MongoDB", desc: "Document database collections and aggregation query pipelines.", status: "CORE" },
          { name: "PostgreSQL", desc: "Relational database tables, primary keys, and index filters.", status: "WORKING" },
          { name: "MySQL", desc: "Structured data storage and custom querying scripts.", status: "WORKING" },
          { name: "Redis", desc: "In-memory key cache and rapid session lookup storage.", status: "WORKING" }
        ]
      },
      {
        num: "04",
        name: "AI / GenAI & Agentic AI",
        desc: "Integrating intelligent LLMs, autonomous agents, vector indices, and retrieval chains.",
        items: [
          { name: "Agentic AI", desc: "Autonomous agent execution loops and tool orchestration.", status: "WORKING" },
          { name: "Generative AI", desc: "Utilizing deep learning models to structure text workflows.", status: "CORE" },
          { name: "LLM APIs", desc: "Connecting OpenAI and Gemini endpoints for semantic inferences.", status: "CORE" },
          { name: "RAG", desc: "Retrieval-Augmented Generation linking documents to query models.", status: "WORKING" },
          { name: "Ollama", desc: "Prompt-tuning and running lightweight local models.", status: "WORKING" },
          { name: "Vector Databases", desc: "Semantic storage search matching context keys.", status: "WORKING" },
          { name: "Qdrant", desc: "High-performance vector engine database integration.", status: "WORKING" },
          { name: "LangChain", desc: "Composable prompt chains and document loaders.", status: "WORKING" },
          { name: "FAISS", desc: "Vector similarity search and indexing for local embeddings.", status: "EXPLORING" },
          { name: "AI Chatbots", desc: "Contextual conversation trees with persistent memories.", status: "CORE" }
        ]
      },
      {
        num: "05",
        name: "DevOps & Cloud",
        desc: "Orchestrating script environments, proxies, automated hosting, and container setups.",
        items: [
          { name: "Git", desc: "Managing branch merges, pull requests, and file conflicts.", status: "CORE" },
          { name: "GitHub", desc: "Source control, collaboration, and repository management.", status: "CORE" },
          { name: "Vercel", desc: "Deploying client pages with automated rewrites.", status: "CORE" },
          { name: "Docker", desc: "Containerizing services for dev and staging runs.", status: "WORKING" },
          { name: "Firebase", desc: "Using cloud stores, databases, and file hosting.", status: "WORKING" },
          { name: "Nginx", desc: "Reverse proxy server mapping traffic routes.", status: "WORKING" }
        ]
      },
      {
        num: "06",
        name: "Programming & CS Foundations",
        desc: "Core computational foundations, data configurations, and algorithm practices.",
        items: [
          { name: "JavaScript", desc: "ES6+ syntax logic, closures, and async event loops.", status: "CORE" },
          { name: "C++", desc: "Object-oriented structures, syntax logic, and algorithm tests.", status: "WORKING" },
          { name: "Python", desc: "Developing file automation, flask microservices, and AI scripts.", status: "WORKING" },
          { name: "C", desc: "Fundamental memory pointers and systems programming.", status: "WORKING" },
          { name: "SQL", desc: "Writing table joins, updates, and database indexing commands.", status: "CORE" },
          { name: "Data Structures", desc: "Linked lists, stacks, trees, and hash mappings.", status: "CORE" },
          { name: "Algorithms", desc: "Sorting, search algorithms, and time complexities.", status: "CORE" }
        ]
      },
      {
        num: "07",
        name: "Tools & Integrations",
        desc: "Developer platforms, workflow engines, and environment configurations.",
        items: [
          { name: "VS Code", desc: "Code editor setup and local debug triggers.", status: "CORE" },
          { name: "npm", desc: "Node package manager configurations.", status: "CORE" },
          { name: "Postman", desc: "Testing REST API endpoints and inspecting JSON payloads.", status: "CORE" },
          { name: "Cloudinary", desc: "Cloud media storage and image optimization CDN.", status: "WORKING" },
          { name: "Razorpay", desc: "Payment gateway integration schemas.", status: "WORKING" }
        ]
      }
    ]
  },
  experience: [
    {
      id: "vpn-digital",
      role: "Full Stack Developer Intern",
      company: "VPN Digital Services Pvt. Ltd.",
      period: "Aug 2025 – Mid Jan 2026",
      badge: "Internship",
      project: "Cyber Kavach Web",
      work: "VPN / Cybersecurity Platform",
      team: "Team of 4",
      location: "Noida, Uttar Pradesh",
      description: "Worked on building responsive web interfaces, RESTful API integrations, and database workflows in a cybersecurity and VPN platform.",
      responsibilities: [
        "Developed responsive web interfaces using React.js, JavaScript, HTML5, and CSS3.",
        "Built and integrated RESTful APIs using Node.js and Express.js.",
        "Implemented MongoDB-based CRUD operations and data schemas.",
        "Integrated security checks, data validation, and error-handling workflows.",
        "Collaborated in a team of 4 using Git and GitHub."
      ],
      workedOn: "Engineered responsive client dashboards, API validation pipelines, and secure state handling.",
      learned: [
        "Writing production-ready full-stack components with robust error boundaries.",
        "Collaborative Agile team workflows, PR reviews, and Git branch management.",
        "Optimizing REST API responses and database queries for low latency."
      ],
      skills: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub"],
      bannerTitle: "CYBER KAVACH",
      bannerSubtitle: "Safer Networks Stronger Tomorrows",
      bannerSideLabel: "SECURE DEVELOP DEPLOY PROTECT —",
      accentColor: "#38bdf8",
      accentDot: "#38bdf8"
    },
    {
      id: "cloud-kitchen",
      role: "Software Engineer Intern",
      company: "Cloud Kitchen Service",
      period: "Jan 2026 – July 2026",
      badge: "Internship",
      project: "Order Processing + Inventory Tracking",
      work: "Delivery Backend Channels",
      team: "Backend Team",
      location: "Noida, Uttar Pradesh",
      description: "Hands-on experience building delivery backend channels, order processing pipelines, and inventory tracking modules.",
      responsibilities: [
        "Developed real-time ordering pipelines and status tracker using WebSockets.",
        "Created a clean kitchen dispatch UI for active order logs.",
        "Configured Redis caching layers to reduce database read latencies."
      ],
      workedOn: "Engineered automatic inventory sync and real-time status propagation for kitchen dispatches.",
      learned: [
        "Scaling WebSocket connections for real-time status propagation under load.",
        "Building reliable inventory synchronization systems for high-volume environments."
      ],
      skills: ["JavaScript", "React", "Node.js", "WebSockets", "Redis"],
      bannerTitle: "From Orders to Smiles",
      bannerSubtitle: "Faster Kitchens Happier Customers",
      bannerSideLabel: "GOOD FOOD BETTER SYSTEMS —",
      accentColor: "#34d399",
      accentDot: "#34d399"
    },
    {
      id: "freelance-developer",
      role: "Freelance Developer",
      company: "Independent / Client Projects",
      period: "Mid July 2026 – Present",
      badge: "Freelance",
      project: "Web & AI Solutions",
      work: "Custom Web Apps & Automation",
      team: "Multiple Clients",
      location: "Remote / Noida, UP",
      description: "Working as a freelance developer, building custom web applications, automation tools, and AI-powered solutions for individual clients and small businesses.",
      responsibilities: [
        "Developing full-stack web applications and landing pages.",
        "Building AI/automation tools and chatbots for business use.",
        "Client requirement analysis, deployment, and ongoing support."
      ],
      workedOn: "Delivering practical, scalable, and user-friendly solutions.",
      learned: [
        "Working with modern web stacks and AI/LLM integrations.",
        "End-to-end development – from idea to deployment."
      ],
      skills: ["React", "Next.js", "Node.js", "Python", "OpenAI", "Docker", "Vercel", "Firebase"],
      bannerTitle: "Ideas to Impact",
      bannerSideLabel: "BUILD AUTOMATE SOLVE GROW —",
      bannerQuote: "Turning ideas into real-world solutions.",
      accentColor: "#a855f7",
      accentDot: "#a855f7"
    }
  ],
  education: [
    {
      year: "2014",
      degree: "High School / 10th",
      institution: "Shanti Niketan H.S. School",
      result: "80%",
      context: "Academic Foundation"
    },
    {
      year: "2016",
      degree: "Intermediate / 12th",
      institution: "SMY Inter College",
      result: "90%",
      context: "Mathematics-focused higher secondary education"
    },
    {
      year: "2016–2019",
      degree: "Graduation",
      field: "B.Sc. Mathematics",
      institution: "Allahabad State University",
      result: "1st Division",
      context: "Undergraduate mathematical foundation"
    },
    {
      year: "2023–2025",
      degree: "MCA",
      institution: "Harcourt Butler Technical University (HBTU) Kanpur",
      result: "7.5 CGPA",
      context: "Advanced computational structures and software development studies"
    }
  ],
  educationSummary: "My academic journey began with a strong concentration in mathematics during my B.Sc. studies (First Division), which transitioned naturally into computational methods, software engineering paradigms, and full-stack software development during my Master of Computer Applications (MCA) at Harcourt Butler Technical University, Kanpur (CGPA: 7.5)."
};
