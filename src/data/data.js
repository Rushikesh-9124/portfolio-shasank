export const personal = {
  name: "Shasank Reddy Lakkireddy",
  email: "slakkireddy0205@gmail.com",
  phone: "+1 314-791-1275",
  portfolioUrl: "#",
  linkedinUrl: "#",
  githubUrl: "#",
  tagline: "Machine Learning Engineer",
  about:
    "Master’s graduate in Applied Computer Science and Machine Learning Engineer with over 4 years of professional experience deploying high-throughput, low-latency AI applications. Proven expertise in optimizing LLMs, building custom NLP/RAG systems, and orchestrating scalable microservices within cloud environments. Adept at leveraging advanced Python frameworks, vector databases, and MLOps workflows to cut operational costs and maximize data processing efficiency.",
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Southeast Missouri State University",
    location: "USA",
    year: "2024 – 2026",
    gpa: "3.9 / 4.0",
    icon: "🎓",
  },
  {
    degree: "B.Tech (ECM)",
    institution: "J.B. Institute of Engineering and Technology",
    location: "India",
    year: "2020 – 2024",
    gpa: "3.3 / 4.0",
    icon: "🏛️",
  },
];

export const projects = [
  {
    title: "Hate Speech Detection on Twitter",
    period: "Dec 2023 – Jan 2024",
    description:
      "Developed an NLP-based model to classify tweets as hate speech or non-hate speech. Performed text preprocessing, stemming, and TF-IDF feature extraction for text classification. Trained Random Forest models and improved performance through feature engineering and tuning.",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "Scikit-learn",
      "NLTK",
      "Pandas",
    ],
    category: "NLP",
    color: "#e63946",
  },
  {
    title: "Adaptive Predictive Modeling for Breast Cancer Detection",
    period: "Aug 2025 – Dec 2025",
    description:
      "Developed a deep learning-based breast cancer detection system using mammogram image classification. Applied preprocessing and augmentation techniques on the CBIS-DDSM dataset. Compared ML and deep learning models including SVM, Random Forest, CNN, and ResNet50. Used SHAP and Grad-CAM for explainable AI and model interpretability.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "ResNet50",
      "OpenCV",
      "SHAP",
    ],
    category: "Deep Learning",
    color: "#f77f00",
  },
];

export const skills = {
  "Programming Languages": ["Python"],

  "Machine Learning": [
    "Scikit-learn",
    "NER",
    "Transformers",
    "Model Training",
    "Predictive Modeling",
  ],

  "Deep Learning": [
    "PyTorch",
    "TensorFlow",
    "CNNs",
    "ResNet50",
    "Hugging Face",
  ],

  "Data Science": [
    "Data Analysis",
    "EDA",
    "ETL Pipelines",
    "Distributed Computing",
    "Data Drift Monitoring",
  ],

  NLP: [
    "RAG Architecture",
    "LLM Optimization",
    "Text Embedding",
    "TF-IDF",
    "NLTK",
  ],

  "Libraries & Frameworks": [
    "FastAPI",
    "Docker",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "OpenCV",
  ],

  "Explainable AI": ["SHAP", "Grad-CAM"],

  Visualization: ["Matplotlib", "Seaborn"],

  "Soft Skills": [
    "Problem Solving",
    "Analytical Thinking",
    "Communication",
    "Team Collaboration",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
