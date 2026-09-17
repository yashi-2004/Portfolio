export const profile = {
  name: "Yashi Srivastava",
  tagline: "Backend Developer | Python, Cloud & Applied AI",
  email: "yashisrivastava2510@gmail.com",
  altEmail: "23ucc620@lnmiit.ac.in",
  phone: "+91-88406-57829",
  links: {
    github: "https://github.com/yashi-2004",
    linkedin: "https://www.linkedin.com/in/yashi-srivastava-596021281/",
    leetcode: "https://leetcode.com/u/qoMuemwQpw/",
  },
  location: "Jaipur, India",
  rotatingRoles: [
    "coffee's ready...",
    "editor's open...",
    "the bug appeared...",
    "the bug disappeared...",
    "nobody knows why.",
    "calling it progress...",
  ],
  bio: `Backend Software Engineer and Computer Engineering undergraduate at LNMIIT Jaipur, experienced in building scalable REST APIs and Agentic AI workflows using Python, FastAPI, and LangGraph. Strong background in relational/vector database design, query optimization, and containerized deployments across AWS and Kubernetes.`,
  currentlyLearning: [
    "Agentic AI Workflows",
    "LangGraph & Vector Search",
    "Kubernetes & Cloud Infrastructure",
  ],
  researchInterests: [
    "Agentic AI & Multi-Agent Orchestration",
    "Vector Search & Retrieval-Augmented Generation (RAG)",
    "Privacy-Preserving Distributed Machine Learning (FedAvg)",
  ],
  goals:
    "To build scalable, dependable backend architectures and Agentic AI systems that solve real-world problems through clean code, robust database engineering, and high-performance cloud infrastructure.",
  outsideInterests: [
    "Writing, editing, and telling stories",
    "Typography, design, and visual aesthetics",
    "Reading beyond computer science",
  ],
};

export const education = {
  institution: "The LNM Institute of Information Technology, Jaipur",
  degree: "B.Tech in Communication & Computer Engineering",
  specialisation: "",
  duration: "2023 – 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming (OOP)",
    "Distributed Systems",
    "Cloud Computing",
  ],
};


export const experience = [
  {
    role: "Data Science Intern",
    org: "Trigyn Technologies Ltd. — DOITC, Government of Rajasthan",
    supervisor: "Jaipur, Rajasthan",
    duration: "Jun – Aug 2026",
    hasCertificate: false,
    points: [
      "Built automated data ingestion and validation pipelines in Python to process and normalize 100K+ monthly public service records.",
      "Architected a high-performance star-schema relational model in MySQL, optimizing analytical query execution times by 40% for executive reporting.",
      "Developed ETL workflows converting unstructured Excel datasets into structured relational tables, cutting manual preprocessing time by 35%.",
      "Collaborated in an Agile/Scrum cadence to deliver 5+ automated Tableau dashboards, ensuring data accuracy and automated metric tracking across departments.",
    ],
  },
  {
    role: "Research Intern (Deep Learning)",
    org: "MNNIT Allahabad",
    supervisor: "Supervisor: Dr. Joohi Chauhan · Prayagraj, India",
    duration: "Jun – Jul 2025",
    hasCertificate: true,
    points: [
      "Engineered and benchmarked PyTorch neural network architectures across class-imbalanced healthcare datasets, achieving 86.5% accuracy and 0.89 ROC-AUC.",
      "Implemented training pipelines with weighted cross-entropy loss and cosine LR scheduling across SGD, Adam, and RMSProp optimizers.",
      "Optimized CNN inference pipelines over 60,000 images using data augmentation and batch normalization, reaching 74.2% test accuracy.",
      "Explored Federated Learning (FedAvg) for privacy-preserving distributed model updates, analyzing communication and compute bottlenecks.",
    ],
  },
];

export const projects = [
  {
    slug: "enterprise-multi-agent-knowledge-platform",
    title: "Enterprise Multi-Agent Knowledge Platform",
    problem:
      "Enterprise knowledge bases struggle with disparate unstructured documentation and transactional records, requiring intelligent query routing and low-latency retrieval.",
    solution:
      "Built an autonomous Agentic AI backend using FastAPI and LangGraph, orchestrating query routing between Qdrant vector search and an automated SQL retrieval agent. Implemented asynchronous request handling and modular provider adapters for hot-swappable LLMs without altering downstream API contracts.",
    stack: ["FastAPI", "LangGraph", "PostgreSQL", "Qdrant", "Docker", "Kubernetes", "AWS"],
    results: [
      "Autonomous query routing between Qdrant vector search and SQL retrieval agent",
      "Hot-swappable LLM and embedding adapters without altering downstream API contracts",
      "Secured endpoints with JWT authentication, bcrypt hashing & strict SQL parameterization",
      "Packaged backend into Docker containers with Kubernetes manifests & GitHub Actions CI/CD",
    ],
    github: "https://github.com/yashi-2004/enterprise-ai-platform",
    demo: "https://enterprise-ai-platform-5zcj-2z5vcpsto.vercel.app/login",
  },
  {
    slug: "responsive-developer-platform",
    title: "Responsive Developer Platform & Web Services",
    problem:
      "Engineering portfolios and modern web platforms require high rendering performance, minimal client latency, and resilient transactional messaging without cumbersome backend overhead.",
    solution:
      "Developed a component-driven web platform with optimized routing, lazy loading, and dynamic chunk splitting for minimal client latency. Integrated transactional email microservices via Resend API with strict server-side schema validation.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Resend API", "Vercel"],
    results: [
      "Component-driven web platform with optimized routing, lazy loading, and dynamic chunk splitting",
      "Integrated transactional email microservices via Resend API with server-side validation",
      "Automated continuous deployment pipeline linking Git triggers directly to edge servers",
    ],
    github: "https://github.com/yashi-2004/Portfolio",
    demo: "https://portfolio-six-iota-73.vercel.app/",
  },
  {
    slug: "symbolic-execution",
    title: "AI-Assisted Symbolic Execution & Bug Detection Framework",
    problem:
      "Random test generation misses deep program paths, letting bugs like null dereferences, buffer overflows, and divide-by-zero errors slip through.",
    solution:
      "Built a symbolic execution pipeline on KLEE (LLVM-based) with the Z3 SMT solver to systematically explore program paths and auto-detect bug classes, then integrated an AI-based patch suggestion module.",
    stack: ["C/C++", "KLEE", "Z3", "LLVM", "Python"],
    results: [
      "Significantly higher branch coverage than random test generation",
      "Automated detection across multiple bug classes",
      "AI-assisted patch suggestions",
    ],
    github: "https://github.com/yashi-2004",
    demo: null,
  },
  {
    slug: "barbell-classification",
    title: "Barbell Exercise Classification & Rep Counter",
    problem:
      "Wearable IMU sensors generate noisy, high-dimensional time-series data that's hard to translate into a reliable exercise classifier or rep counter.",
    solution:
      "Engineered temporal and frequency-domain features from 6-axis IMU data, applied PCA to retain 95% variance while cutting dimensionality, then compared Random Forest, SVM, and KNN classifiers with 5-fold grid search. Built an automated rep counter using peak detection.",
    stack: ["Python", "Scikit-learn", "PCA", "Pandas"],
    results: ["~12% accuracy improvement over baseline", "95% variance retained post-PCA", "5-fold cross-validated model selection"],
    github: "https://github.com/yashi-2004",
    demo: null,
  },
  {
    slug: "cardiac-risk-ann",
    title: "Cardiac Risk Prediction using ANN",
    problem:
      "10-year cardiovascular disease risk is hard to estimate from structured health data, especially with imbalanced outcome classes.",
    solution:
      "Built a multi-layer ANN in PyTorch on the NHANES dataset, handling class imbalance with weighted cross-entropy loss and evaluating across multiple clinical metrics.",
    stack: ["PyTorch", "Scikit-learn", "Pandas", "Matplotlib"],
    results: ["86.5% accuracy", "85.0% precision", "72.3% recall", "0.89 ROC-AUC"],
    github: "https://github.com/yashi-2004",
    demo: null,
  },
  {
    slug: "cifar10-cnn",
    title: "CIFAR-10 Image Classification using CNN",
    problem:
      "Classifying 60,000 low-resolution images across 10 categories requires a model that generalises well without overfitting.",
    solution:
      "Designed a CNN with Conv-Pool blocks, dropout, and batch normalisation, applying data augmentation and a cosine learning-rate schedule over 50 training epochs.",
    stack: ["PyTorch", "NumPy", "Matplotlib"],
    results: ["74.2% test accuracy", "60,000-image dataset", "Cosine LR scheduling across SGD/Adam"],
    github: "https://github.com/yashi-2004",
    demo: null,
  },
];

export const skills = {
  Languages: ["Python (Async/OOP)", "SQL", "C++", "Java", "JavaScript", "TypeScript"],
  "Backend & APIs": ["FastAPI", "Node.js", "Express.js", "RESTful APIs", "Microservices Architecture", "JWT Auth"],
  "AI & Agentic Systems": ["Agentic AI Workflows", "LangGraph", "RAG Pipelines", "Vector Search", "PyTorch", "Scikit-learn"],
  "Databases & Storage": ["PostgreSQL", "MySQL", "Qdrant", "Supabase", "Redis", "Star-Schema Design", "Query Optimization"],
  "Cloud & DevOps": ["AWS (EC2, S3)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", "Render"],
  "Tools & Methodologies": ["Clean Architecture", "Git", "Linux", "Tableau", "Unit Testing", "Agile/Scrum", "KLEE", "Z3"],
};

export const leadership = [
  {
    title: "Chairperson, ACM Student Chapter (LNMIIT)",
    duration: "Current",
    description:
      "Lead technical workshops, hackathons, and development tracks for 200+ members.",
  },
];

export const achievements = [
  {
    title: "Selected Participant, ACM-W India Grad Cohort 2025",
    org: "IIT Kanpur",
    description: "Selected among top nationwide undergraduate women in computing.",
    year: "2025",
  },
  {
    title: "INSPIRE Scholarship, DST",
    org: "Govt. of India",
    description: "Awarded for ranking in top 1% in Class XII board examinations.",
    year: "",
  },
  {
    title: "Stage 1 Qualifier, NTSE",
    org: "National Talent Search Examination",
    description: "Cleared Stage 1 of the National Talent Search Examination.",
    year: "",
  },
];

export const certifications = [
  {
    title: "Deep Learning Research Certificate",
    org: "MNNIT Allahabad",
    description: "Awarded for completion of the deep learning research internship under Dr. Joohi Chauhan.",
  },
];
