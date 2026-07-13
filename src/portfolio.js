import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Muhammad Khurram",
  title: "Hi all, I'm Muhammad Khurram",
  subTitle: emoji(
    "Backend-focused Python Developer 🚀 with hands-on experience building production-grade Flask applications, RESTful APIs, and MySQL databases. Delivered a full-stack e-commerce platform and LMS from scratch."
  ),
  resumeLink: "/Muhammad_Khurram_CV_updated.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Khurram315048",
  linkedin: "https://www.linkedin.com/in/muhammad-khurram-developer/",
  gmail: "saleemkhurram420@gmail.com",
  companywebsite: "https://robustosolutions.com/",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Backend-focused Python Developer building scalable web services, secure APIs, and full-stack applications",
  skills: [
    emoji(
      "⚡ Build RESTful APIs and full-stack apps using Flask, FastAPI, and Django"
    ),
    emoji(
      "⚡ Design and optimize MySQL schemas with 14+ table normalized structures"
    ),
    emoji(
      "⚡ Implement secure authentication systems with bcrypt, session management & brute-force protection"
    ),
    emoji(
      "⚡ Integrate AI models via Python APIs for NLP and data analysis tasks"
    ),
    emoji(
      "⚡ Architect Blueprint-based modular Flask applications with role-based access control"
    ),
    emoji(
      "⚡ Integrate caching and real-time features using Redis and WebSocket"
    )
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Flask", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt"},
    {skillName: "Django", fontAwesomeClassname: "fab fa-python"},
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "MySQL / SQLite", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-server"},
    {skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "HTML/CSS", fontAwesomeClassname: "fab fa-html5"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Institute of Southern Punjab",
      logo: require("./assets/images/uspLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2022 – July 2027 (Expected)",
      desc: "Relevant coursework: Data Structures, Algorithms, Database Systems, Object-Oriented Programming, Web Development, and Parallel & Distributed Computing.",
      descBullets: [
        "Built production-grade projects: e-commerce platform, LMS, secure auth system, and AI integration scripts",
        "Strengthened skills in Python, MySQL, REST APIs, Flask Blueprint architecture, and system design"
      ]
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/pgcLogo.png"),
      subHeader: "F.Sc Pre-Medical",
      duration: "2019 – 2021",
      desc: "Completed F.Sc Pre-Medical from Punjab Group of Colleges.",
      descBullets: [
        "Built foundational concepts in biology, chemistry, and mathematics",
        "Actively participated in academic and co-curricular activities"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development (Python, Flask, FastAPI, PHP)",
      progressPercentage: "85%"
    },
    {
      Stack: "Database & SQL (MySQL, Schema Design, Query Optimization)",
      progressPercentage: "82%"
    },
    {
      Stack: "API Development (REST APIs, Auth, RBAC, Validation)",
      progressPercentage: "80%"
    },
    {
      Stack: "Security (Bcrypt, Session Mgmt, Brute-force Protection)",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend Basics (HTML, CSS, JS, Jinja2)",
      progressPercentage: "55%"
    },
    {
      Stack: "AI/ML Integration (Python APIs, Data Pipelines)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Python Developer",
      company: "Robusto Solutions Pakistan",
      companylogo: require("./assets/images/robustologo.png"),
      date: "September 2024 – Present",
      desc: "Backend development focused on secure authentication systems, AI model integration, and database optimization using Python, Flask, and SQLAlchemy.",
      descBullets: [
        "Architected and implemented a secure Python-based authentication system with JSON file storage, featuring bcrypt password hashing and brute-force protection through login attempt tracking",
        "Reduced potential security vulnerabilities by 95% through implementation of industry-standard password hashing algorithms and secure session management",
        "Integrated multiple AI models via Python APIs, developing custom scripts for natural language processing and data analysis tasks",
        "Designed and optimized database schemas using SQLAlchemy ORM for efficient data retrieval, improving query performance by implementing proper indexing strategies",
        "Developed RESTful API endpoints for seamless frontend-backend communication with proper error handling and validation"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Production-grade backend and full-stack projects",
  projects: [
    {
      image: require("./assets/images/heroStyleProject.png"),
      projectName: "Hero Style — Full-Stack E-Commerce Platform",
      projectDesc:
        "Full-stack e-commerce platform for a watch and earbuds store, built with Flask's Blueprint architecture across modular admin, products, orders, users, and categories modules. Includes an Admin Dashboard with role-based access control, product CRUD with image upload, category management, order tracking, revenue analytics, and support form handling. The public site features hero sections, product pages, category filters, a cart system, promo code checkout, and order confirmation flow — backed by a normalized 14-table MySQL schema with foreign key constraints, JOIN-heavy analytics queries, and soft-delete patterns.",
      footerLink: [
        {name: "Source Code", url: "https://github.com/Khurram315048"}
      ]
    },
    {
      image: require("./assets/images/lmsProject.png"),
      projectName: "Learning Management System (LMS)",
      projectDesc:
        "A full-featured LMS platform built with Python, Flask, and MySQL, featuring student enrollment, course management, and assignment submission modules. Includes RESTful APIs for student and instructor dashboards with role-based access control (RBAC).",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Khurram315048/LMS-PythonDevelopment"
        }
      ]
    },
    {
  image: require("./assets/images/djangoBlogProject2.png"),
  projectName: "Django Blog Platform",
  projectDesc:
    "Full-featured blog platform built with Django, featuring dynamic post creation with slug generation, category-based navigation (Sports, Politics, Technology, Business, Health), search functionality, and an admin dashboard with authenticated session management. Includes a responsive homepage with featured/recent post sections and a clean editorial-style layout.",
  footerLink: [
    {
      name: "Source Code",
      url: "https://github.com/Khurram315048/Django-Blog"
    }
  ]
},
    {
      image: require("./assets/images/dbmsProject.png"),
      projectName: "Database Management System",
      projectDesc:
        "Normalized database schemas designed for academic projects using MySQL, Python, and SQLAlchemy, with CRUD operations built on prepared statements to prevent SQL injection. Query optimization improved data retrieval speed by 40%.",
      footerLink: [
        {name: "Source Code", url: "https://github.com/Khurram315048"}
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Selected certifications and self-directed milestones",
  achievementsCards: [
    {
      title: "Crash Course on Python — Google (Coursera)",
      subtitle:
        "Completed June 8, 2026. Strengthened Python OOP and scripting foundations.",
      image: require("./assets/images/pythonCertificate.PNG"),
      imageAlt: "Google Python Crash Course Certificate",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://coursera.org/verify/52KVT79YWDKY"
        }
      ]
    },
    {
      title: "Google AI Professional Certificate",
      subtitle:
        "Completed June 9, 2026 — 7 courses covering AI for Brainstorming, Research, Writing, Content Creation, Data Analysis, and App Building. Built a portfolio of 20+ AI-assisted artifacts and vibe-coded a custom AI solution.",
      image: require("./assets/images/googleAiCertificate.png"),
      imageAlt: "Google AI Professional Certificate",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://coursera.org/verify/professional-cert/22JBNJ40O6BL"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write about backend engineering and Python.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I love to share knowledge and present on backend topics."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I don't currently publish a podcast.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open for all.",
  number: "+92-315-0484043",
  email_address: "saleemkhurram420@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
