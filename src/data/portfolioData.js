export const portfolioData = {
  personal: {
    name: "Sheik Mubashir Hussen",
    title: "Computer Science Engineer",
    subtitle: "Software Developer | Full Stack Development",
    pitch: "Building scalable web systems, secure API layers, and intelligent full-stack applications with Python, React, SQL, and AI technologies.",
    email: "mubashirhussensk786@gmail.com",
    phone: "+91-7869298181",
    github: "https://github.com/mubashirhussen",
    linkedin: "https://www.linkedin.com/in/mubashir-hussen-sk-7b3453294/",
    leetcode: "https://leetcode.com/mubashirhussen/",
    cvLink: "/Muba_resume.png",
    location: "Hyderabad, Telangana, India",
    summary: "Computer Science and Engineering graduate with specialized expertise in designing secure full-stack software architectures, responsive web systems, and intelligent machine learning integrations. Hands-on experience building production-ready applications with Python, React, and Node.js, combined with robust database design and secure deployment workflows."
  },
  education: [
    {
      period: "2022 - 2026",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sasi Institute of Technology and Engineering",
      cgpa: "7.9 CGPA",
      details: "Focused on core software development, algorithms, databases, cloud architecture, and modern data engineering workflows."
    }
  ],
  aboutNarrative: "I am a CSE graduate with a deep interest in scalability, web engineering, and artificial intelligence. Strong in Python and SQL, I specialize in architecting responsive full-stack applications, secure API layers, and database schemas. I have hands-on experience using modern technologies (React, Node.js, FastAPI) to design secure architectures and build Generative AI applications with advanced natural language processing. I focus on developing clean, readable code and robust pipelines to secure and process data at scale.",
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "SQL", "C"],
      icon: "Terminal"
    },
    {
      category: "Python Technologies",
      items: ["FastAPI", "Flask", "REST APIs", "Pandas", "NumPy"],
      icon: "Cpu"
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL"],
      icon: "Database"
    },
    {
      category: "Data Analysis & Viz",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning"],
      icon: "BarChart3"
    },
    {
      category: "ML & NLP",
      items: ["Sentence Transformers", "all-mpnet-base-v2", "TF-IDF", "Cosine Similarity", "NER"],
      icon: "Brain"
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook", "Docker"],
      icon: "Wrench"
    },
    {
      category: "Cloud & Data Engineering",
      items: ["Apache Spark", "Azure Data Factory", "Azure Databricks", "AWS Serverless (Lambda, API Gateway)"],
      icon: "Cloud"
    }
  ],
  projects: {
    featured: {
      title: "GuardianMail AI",
      subtitle: "AI-Powered Email Security & Threat Intelligence Platform",
      problem: "Protect Gmail users from phishing scams, fraudulent emails, malicious URLs, and attachments before they compromise credentials or sensitive information.",
      tech: ["Google OAuth 2.0", "Gmail API", "Python", "FastAPI", "React", "MongoDB", "OpenAI GPT-4o", "Celery", "Redis", "Docker", "OCR", "Threat Intel"],
      description: "A comprehensive, enterprise-ready security intelligence suite that acts as an autonomous SOC analyst for personal and enterprise Gmail accounts. It runs a multi-layered detection pipeline to score and report suspicious emails.",
      details: [
        "Real-time Risk Scoring Engine: Evaluates account safety from 0 to 100 based on metadata, header parsing, and body vectors.",
        "Privacy-Respecting Metadata Analysis: Inspects headers, return-paths, SPF/DKIM records, and attachment hashes without compromising body privacy.",
        "Explainable Security Reports: Generates NLP-based risk breakdown reports using GPT-4o with actionable mitigations.",
        "Evidence Pack & Complaint Generation: Drafts standard complaint templates and packages data pointers for legal/administrative reporting.",
        "SOC-Style Monitoring Dashboard: Rich visual panels monitoring inbox health, spam ratios, login activity, and suspicious attachment profiles.",
        "Zero Trust Access Control: Restricts access dynamically, featuring secure session management and enterprise-grade observability logs."
      ],
      githubLink: "https://github.com/mubashirhussen",
      liveLink: "#"
    },
    others: [
      {
        title: "AI Resume Screening System",
        problem: "Automate manual resume screening and improve candidate ranking accuracy dynamically against shifting job specifications.",
        tech: ["Python", "NLP", "Machine Learning", "Sentence Transformers", "all-mpnet-base-v2", "TF-IDF", "Cosine Similarity", "NER", "MySQL"],
        description: "An intelligent resume processing pipeline that parses documents, extracts candidate information, and ranks them against job requirements using semantic vector spaces.",
        details: [
          "Semantic Matching: Employs all-mpnet-base-v2 sentence embeddings and Cosine Similarity to compute highly accurate compatibility scores.",
          "Named Entity Recognition (NER): Automatically extracts candidate contact information, skills, educational history, and work history.",
          "Testing & Validation Pipeline: Runs strict schema validation on extracted data to guarantee high pipeline data quality.",
          "Missing Skills Gap Analysis: Analyzes resumes against Job Descriptions and highlights missing keywords or credentials."
        ],
        githubLink: "https://github.com/mubashirhussen",
        liveLink: "#"
      },
      {
        title: "E-Commerce Web Application (MERN)",
        problem: "Provide a scalable full-stack merchant solution with safe transactions and responsive media processing.",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "Cloudinary", "JWT Authentication"],
        description: "A premium shopping platform offering dynamic inventory management, secure payments, and role-based permissions.",
        details: [
          "Role-Based Routing: Dedicated dashboards and management routes for Admins vs. Users.",
          "Payment Processing: Integrates Stripe API with custom secure webhooks to handle payments and order state updates.",
          "Media CDN Integration: Employs Cloudinary for high-performance image uploads, optimizations, and delivery."
        ],
        githubLink: "",
        liveLink: "#"
      }
    ]
  },
  experience: [
    {
      period: "May 2026 - Jul 2026",
      role: "AI Annotation Specialist Intern",
      company: "TAO Digital Solutions",
      details: [
        "Worked on structured data validation, semantic labeling, and preparation of training datasets for machine learning models.",
        "Collaborated with data science and machine learning engineering teams to refine training pipelines and evaluate model alignment.",
        "Contributed to data quality checks, ensuring accurate annotations for high-performance supervised learning models."
      ]
    },
    {
      period: "May 2025 - Jun 2025",
      role: "Data Science Intern",
      company: "CITD (Central Institute of Tool Design)",
      details: [
        "Built semantic similarity and matching models using TF-IDF, Sentence Transformers (all-mpnet-base-v2), and Cosine Similarity.",
        "Conducted end-to-end data cleaning, transformation, and validation on messy relational data with Pandas and NumPy.",
        "Visualized and analyzed correlation patterns, trends, and outliers using Matplotlib and Seaborn."
      ]
    },
    {
      period: "Nov 2024 - Apr 2025",
      role: "Generative AI & ML Intern",
      company: "Huebits",
      details: [
        "Developed custom document parsing workflows to convert unstructured PDFs and Word files into structured JSON objects.",
        "Built LLM-driven pipelines with prompt templates and evaluation frameworks to parse complex resumes.",
        "Implemented metrics to measure text overlaps and semantic distance to automate profile scoring."
      ]
    },
    {
      period: "May 2025 - Jul 2025",
      role: "Serverless Computing (AWS) Intern",
      company: "NIT Tiruchirappalli",
      details: [
        "Gained hands-on experience deploying lightweight microservices using AWS Lambda, API Gateway, and DynamoDB.",
        "Configured serverless infrastructure using CloudFormation and analyzed processing latency profile reports.",
        "Engineered RESTful endpoints to process telemetry and transactional payloads concurrently."
      ]
    }
  ],
  certifications: [
    {
      name: "Java Full Stack Development",
      issuer: "Industry Certified",
      details: "Comprehensive training in enterprise Java backend, Spring Boot, REST APIs, database integrations, and React frontend workflows."
    },
    {
      name: "Microsoft Azure Essentials Professional",
      issuer: "Microsoft & LinkedIn Learning",
      details: "Covers Azure fundamentals, cloud computing concepts, core services & architecture, cloud security, and compliance best practices."
    },
    {
      name: "Machine Learning on Microsoft Azure",
      issuer: "Microsoft",
      details: "Building, training, and deploying machine learning models using Azure Machine Learning Workspace and automated ML tools."
    },
    {
      name: "Data Science Internship – CITD",
      issuer: "CITD",
      details: "Applying statistical models, building semantic search similarities, and data cleaning/preprocessing pipelines on industrial tool design specs."
    },
    {
      name: "Serverless Computing",
      issuer: "NIT Andhra Pradesh",
      details: "Hands-on implementation of serverless functions, stateful integrations, API gateways, and cloud triggers."
    },
    {
      name: "Google Cloud: Agentic Applications",
      issuer: "Google Cloud Partner Network",
      details: "Architecting agentic AI systems, integrating LLMs, and constructing search-grounded enterprise workflows."
    },
    {
      name: "DevOps: CI/CD, Docker, Jenkins",
      issuer: "Industry Certified",
      details: "Automating software delivery with Jenkins pipelines, containerizing applications, and orchestrating deployment cycles."
    },
    {
      name: "AI Skills Program",
      issuer: "EY, Microsoft & IBM",
      details: "Multi-disciplinary program covering ML concepts, prompt engineering, predictive modeling, and ethics in AI."
    }
  ],
  achievements: [
    {
      title: "Google Cloud Swag Winner",
      subtitle: "Legend Tier (S2) & Novice Tier (S1)",
      description: "Ranked among top performers globally in cloud arcade challenges, demonstrating speed and depth in cloud configuration."
    },
    {
      title: "National Hackathon Finalist",
      subtitle: "DevOps & AWS Deployment",
      description: "Advanced to final selection in a competitive national-level hackathon for developing automated CI/CD and serverless hosting stacks."
    },
    {
      title: "300+ DSA Problems Solved",
      subtitle: "LeetCode & Coding Platforms",
      description: "Active coder solving complex data structures and algorithms challenges focusing on optimization, recursion, and search strategies."
    }
  ]
};
