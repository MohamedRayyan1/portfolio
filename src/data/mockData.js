// Mock data for portfolio
export const personalInfo = {
  name: "Mohammed Noor Rayyan",
  title: "Backend Developer",
  location: "Damascus, Syria",
  email: "rayyany831@gmail.com",
  phone: "+963 957 571 802",
  github: "https://github.com/MohamedRayyan1",
  linkedin: "https://www.linkedin.com/in/m-n-rayyan",
  profileImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
  bio: "Motivated backend developer with hands-on experience in building and optimizing server-side applications using technologies like Laravel and SQL. Strong understanding of APIs, databases, and version control (Git). Currently pursuing a Bachelor's degree in Computer Science, with a focus on backend development."
};

export const skills = {
  backend: [
    { name: "Laravel", level: 90 },
    { name: "PHP", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "SQL", level: 80 }
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Postman", level: 90 },
    { name: "MVC Architecture", level: 85 },
    { name: "Agile Methodology", level: 75 }
  ],
  other: [
    { name: "Java", level: 70 },
    { name: "HTML & CSS", level: 75 },
    { name: "Clean Code", level: 80 },
    { name: "HTTP Protocol", level: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Law Company Management System",
    description: "A comprehensive legal management system built with Laravel & MySQL. Features include roles/permissions, case & session tracking, financial management with payroll system, PDF reports generation, and an AI-powered Legal Assistant using RAG technology.",
    technologies: ["Laravel", "MySQL", "JWT", "DomPDF", "AI/ML", "FAISS", "Mistral"],
    features: [
      "Multi-role authentication system (Admin, HR, Accountant, Lawyer, Client)",
      "Complete case management with multi-level categorization",
      "Session tracking with lawyer evaluation and points system",
      "Financial management: invoices, payments, payroll reports",
      "AI Legal Assistant with hybrid retrieval (BM25 + FAISS)",
      "Automated PDF report generation for cases, sessions, and finances",
      "Job posting and recruitment management system",
      "Legal library with PDF book management"
    ],
    duration: "Apr 2025 - Aug 2025",
    github: "https://github.com/MohamedRayyan1",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Bader App - Charity Management System",
    description: "A digital platform for managing charity operations, built with Laravel and JWT authentication. The system digitizes charity activities including events, donations, articles, training courses, help requests, volunteers and beneficiaries management.",
    technologies: ["Laravel", "JWT", "MySQL", "Laravel Notifications", "Broadcast"],
    features: [
      "Multi-role user management (Super Admin, Admin, User)",
      "Event management with user notifications system",
      "Donation tracking and management linked to users",
      "Article publishing with save-for-later functionality",
      "Training course creation and enrollment system",
      "Help request management for beneficiaries",
      "Volunteer registration and data management",
      "Real-time notifications using Database & Broadcast",
      "Suggestion submission system from users"
    ],
    duration: "Apr 2024 - Jul 2024",
    github: "https://github.com/MohamedRayyan1",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Tourist Travel Management Application",
    description: "An application for organizing and managing tourist trips with features for itinerary viewing, booking management, and feedback collection. Focus on backend performance optimization and secure data handling.",
    technologies: ["Laravel", "MySQL", "RESTful APIs", "PHP"],
    features: [
      "Trip itinerary viewing and management",
      "Booking system with user management",
      "Feedback collection and review system",
      "Optimized backend performance",
      "Secure data handling and validation",
      "RESTful API architecture"
    ],
    duration: "Mar 2024 - Jun 2024",
    github: "https://github.com/MohamedRayyan1",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
  }
];

export const education = {
  degree: "Bachelor's Degree in Software Engineering",
  institution: "Damascus University",
  duration: "2021 - 2025",
  location: "Damascus, Syria"
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" }
];

export const softSkills = [
  "Communication Skills",
  "Teamwork",
  "Work Under Pressure",
  "Problem Solving",
  "Time Management",
  "Quick Learning"
];