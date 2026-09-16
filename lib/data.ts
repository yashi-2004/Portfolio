export const profile = {
  name: "Yashi Srivastava",
  tagline: "Always learning.",
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
  bio: `I am a Computer Engineering undergraduate at LNMIIT, Jaipur, specialising in Artificial Intelligence and Data Science. My academic interests lie in intelligent systems, machine learning, and software engineering, particularly where rigorous research informs practical implementation. Through projects in healthcare, computer vision, and privacy-preserving learning, I have developed a lasting interest in building systems that are not only effective, but dependable.`,
  currentlyLearning: [
    "Agentic AI Workflows",
    "LLM Application Development",
    "Production AI Systems",
  ],
  researchInterests: [
    "Trustworthy & privacy-preserving ML",
    "AI for healthcare and biosignals",
    "Program analysis meets machine learning",
  ],
  goals:
    "To build AI systems that are dependable, thoughtfully engineered, and grounded in research. I hope to contribute to work that advances both the science and the practical use of artificial intelligence.",
  outsideInterests: [
    "Writing, editing, and telling stories",
    "Typography, design, and visual aesthetics",
    "Reading beyond computer science",
  ],
};

export const education = {
  institution: "LNM Institute of Information Technology (LNMIIT), Jaipur",
  degree: "B.Tech, Communication & Computer Engineering",
  specialisation: "Specialisation: AI & Data Science",
  duration: "2023 – 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "AI & Machine Learning",
    "Software Engineering",
  ],
};

export const experience = [
  {
    role: "Data Science Intern",
    org: "DoIT&C, Government of Rajasthan",
    supervisor: "via Trigyn Technologies",
    duration: "June 2026 – Present",
    hasCertificate: false,
    points: [
      "Working on data analytics and business intelligence solutions using Tableau to support public sector decision-making.",
      "Building interactive dashboards to translate complex operational data into clear, actionable visual insights.",
      "Analysing large-scale public sector datasets to extract trends and support operational efficiency.",
    ],
  },
  {
    role: "Research Intern | Deep Learning",
    org: "NIT Allahabad",
    supervisor: "Supervisor: Dr. Joohi Chauhan",
    duration: "June 2025 – July 2025",
    hasCertificate: true,
    points: [
      "Trained ANN and CNN models in PyTorch on structured (NHANES) and image (CIFAR-10) datasets, reaching 86.5% accuracy and a 0.89 ROC-AUC on cardiac risk prediction, plus 74.2% accuracy on CIFAR-10 classification.",
      "Applied regularisation (dropout), batch normalisation, and class-weighted loss to handle imbalanced data, benchmarking Adam, RMSProp, and SGD optimisers.",
      "Investigated federated learning (FedAvg) for privacy-preserving distributed ML, analysing gradient aggregation algorithms and communication-efficiency tradeoffs.",
      "Documented research findings on trustworthy machine learning, evaluating model performance to ensure both predictive robustness and fairness.",
    ],
  },
];

export const projects = [
  {
    slug: "barbell-classification",
    title: "Barbell Exercise Classification & Rep Counter",
    problem:
      "Wearable IMU sensors generate noisy, high-dimensional time-series data that's hard to translate into a reliable exercise classifier or rep counter.",
    solution:
      "Engineered temporal and frequency-domain features from 6-axis IMU data, applied PCA to retain 95% variance while cutting dimensionality, then compared Random Forest, SVM, and KNN classifiers with 5-fold grid search. Built an automated rep counter using peak detection.",
    stack: ["Python", "Scikit-learn", "PCA", "Pandas"],
    results: ["~12% accuracy improvement over baseline", "95% variance retained post-PCA", "5-fold cross-validated model selection"],
    github: "https://github.com",
    demo: null,
  },
  {
    slug: "symbolic-execution",
    title: "AI-Assisted Symbolic Execution & Bug Detection Framework",
    problem:
      "Random test generation misses deep program paths, letting bugs like null dereferences, buffer overflows, and divide-by-zero errors slip through.",
    solution:
      "Built a symbolic execution pipeline on KLEE (LLVM-based) with the Z3 SMT solver to systematically explore program paths and auto-detect bug classes, then integrated an AI-based patch suggestion module.",
    stack: ["C/C++", "KLEE", "Z3", "LLVM", "Python"],
    results: ["Significantly higher branch coverage than random test generation", "Automated detection across multiple bug classes", "AI-assisted patch suggestions"],
    github: "https://github.com",
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
    results: ["86.5% accuracy", "85.0% precision", "72.3% recall", "0.89 AUC"],
    github: "https://github.com",
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
    results: ["74.2% test accuracy", "60,000-image dataset", "50 training epochs"],
    github: "https://github.com",
    demo: null,
  },
];

export const skills = {
  Languages: ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "SQL", "PyTorch", "Keras"],
  Tools: ["Git/GitHub", "KLEE", "Z3", "LLVM", "LaTeX"],
};

export const leadership = [
  {
    title: "Chairperson, ACM Student Chapter, LNMIIT",
    duration: "Current",
    description:
  "Guiding the chapter's technical vision through events, workshops, collaborations, and student-led initiatives.",
  },
];

export const achievements = [
  {
    title: "Selected Participant, ACM-W India Grad Cohort 2025",
    org: "IIT Kanpur",
    description: "Competitive program for undergraduate women in computing.",
    year: "2025",
  },
  {
    title: "INSPIRE Scholarship",
    org: "Govt. of India",
    description: "Awarded to the top 1% of national 12th Board scorers for excellence in Science & Technology.",
    year: "",
  },
  {
    title: "Qualified Stage 1, NTSE",
    org: "National Talent Search Examination",
    description: "Cleared the first stage of India's national talent search examination.",
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
