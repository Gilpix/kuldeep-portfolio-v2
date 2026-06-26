/**
 * projects.ts
 * Central project data for the portfolio Projects section.
 * Keep all links, categories, images, and modal details here.
 */

import { projectImages } from "../assets/images/projects";

export type ProjectCategory = "web" | "mobile" | "design" | "other";

export interface ProjectLink {
  label: string;
  url: string;
  type: "live" | "code" | "document";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  badge?: string;
  metrics?: { value: string; label: string }[];
  featured: boolean;

  // Used on main project cards
  image: string;

  // Used inside project modal gallery
  images?: string[];

  role: string;
  overview: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
}

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Design", value: "design" },
  { label: "Other", value: "other" },
] as const;

export const projects: Project[] = [
  {
    id: "tp3-cms",
    title: "Top Parent CMS",
    subtitle: "Enterprise CMS for a 1M+ downloads education mobile app",
    category: "web",
    featured: true,
    badge: "Featured Project",
    image: projectImages.brilcsCms,
    images: [
      projectImages.brilcsCms,
      projectImages.brilcsWebsite,
      projectImages.brilcsCms,
      projectImages.brilcsWebsite,
      projectImages.brilcsCms,
      projectImages.brilcsWebsite,
      projectImages.brilcsCms,
      projectImages.brilcsWebsite,
    ],
    role: "Full Stack Developer",
    metrics: [
      { value: "1M+", label: "App Downloads" },
      { value: "CMS", label: "Platform" },
      { value: "Team", label: "Product" },
    ],
    overview:
      "An enterprise content management system built for Top Parent, a parent-child education mobile app with 1M+ downloads. The CMS supported content workflows, backend APIs, reusable frontend modules, and production deployment processes.",
    highlights: [
      "Developed CMS features using React, Node.js, Express, and MongoDB.",
      "Implemented reusable React components and RTK Query based data flow.",
      "Worked with AWS Lambda, Route53, Amplify, Swagger, Docker, and deployment workflows.",
      "Improved maintainability through structured code, API documentation, and modular frontend patterns.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "RTK Query",
      "Redux Toolkit",
      "AWS Lambda",
      "Amplify",
      "Swagger",
      "Docker",
    ],
    links: [],
  },
  {
    id: "brilcs-website",
    title: "BRILCS Website",
    subtitle: "Premium corporate website for BRILCS",
    category: "web",
    featured: false,
    badge: "Featured Project",
    image: projectImages.brilcsWebsite,
    images: [projectImages.brilcsWebsite],
    role: "Founder / Full Stack Developer",
    metrics: [
      { value: "Live", label: "Website" },
      { value: "SEO", label: "Ready" },
      { value: "CMS", label: "Integrated" },
    ],
    overview:
      "A modern corporate website built for BRILCS with responsive layouts, polished UI, CMS-ready content sections, and production deployment planning.",
    highlights: [
      "Built a premium responsive interface for desktop, tablet, and mobile.",
      "Integrated content-ready sections for insights, careers, reports, and services.",
      "Focused on performance, SEO structure, reusable components, and brand consistency.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "RTK Query",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://brilcs.com",
        type: "live",
      },
    ],
  },
  {
    id: "brilcs-cms",
    title: "BRILCS CMS",
    subtitle: "Custom CMS platform for BRILCS content operations",
    category: "web",
    featured: false,
    badge: "Professional Project",
    image: projectImages.brilcsCms,
    images: [projectImages.brilcsCms],
    role: "Founder / Full Stack Developer",
    metrics: [
      { value: "CMS", label: "Platform" },
      { value: "AWS", label: "Cloud" },
      { value: "Full", label: "Ownership" },
    ],
    overview:
      "A custom CMS platform built to manage BRILCS website content, including insights, reports, careers, media uploads, authentication, and structured content workflows.",
    highlights: [
      "Built modular CMS flows for insights, reports, careers, and media management.",
      "Implemented authentication, protected routes, and backend API integration.",
      "Created a generic image upload system with WebP optimization and cleanup handling.",
      "Designed the system to support production content workflows and future modules.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "RTK Query",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS",
      "Nginx",
    ],
    links: [],
  },
  {
    id: "udaan-fc",
    title: "Udaan FC",
    subtitle: "Multi-page corporate website for a facility company",
    category: "web",
    featured: false,
    badge: "Live Website",
    image: projectImages.udaanFc,
    images: [projectImages.udaanFc],
    role: "Web Developer",
    metrics: [
      { value: "10+", label: "Pages" },
      { value: "Live", label: "Website" },
      { value: "Client", label: "Project" },
    ],
    overview:
      "A professional static website for Udaan Facility Company, designed across multiple pages to present services, company information, and contact details clearly.",
    highlights: [
      "Built a multi-page business website with responsive layouts.",
      "Created service-focused pages for a professional company presence.",
      "Delivered a clean, easy-to-navigate website suitable for real business use.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    links: [
      {
        label: "Visit Website",
        url: "https://udaanfc.com",
        type: "live",
      },
    ],
  },
  {
    id: "piknix",
    title: "Piknix",
    subtitle:
      "Local grocery marketplace with merchant ordering and delivery workflows.",
    category: "web",
    featured: true,
    badge: "Professional Project",
    image: projectImages.piknix,
    images: [projectImages.piknix],
    role: "Software Developer",
    overview:
      "Piknix was a local grocery e-commerce marketplace that allowed merchants to register, manage products, and sell groceries online.",
    highlights: [
      "Developed responsive views and templates using JavaScript and EJS.",
      "Worked on REST APIs, database schema design, authentication, and payment integration.",
      "Integrated PayPal, Google APIs, Passport authentication, SendGrid, Twilio, and localization workflows.",
      "Configured Docker, Nginx, SSL certificates, SEO improvements, and deployment setup.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Bootstrap",
      "Passport",
      "Nginx",
      "Docker",
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://www.piknix.com",
        type: "live",
      },
    ],
  },
  {
    id: "reactmania",
    title: "ReactMania",
    subtitle: "Collection of React mini projects",
    category: "web",
    featured: true,
    image: "react_mania.png",
    images: ["react_mania.png"],
    role: "Frontend Developer",
    overview:
      "A responsive React application containing multiple small to medium projects built with React hooks and Bootstrap.",
    highlights: [
      "Created reusable React components.",
      "Used React hooks for state and interaction handling.",
      "Built responsive layouts with Bootstrap.",
    ],
    technologies: ["React", "JavaScript", "React Hooks", "Bootstrap", "CSS"],
    links: [
      {
        label: "View Demo",
        url: "https://optimistic-wing-69cbaa.netlify.app/",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/ReactMania",
        type: "code",
      },
    ],
  },
  {
    id: "sani-amigo",
    title: "Sani Amigo",
    subtitle: "Promotional website for smart sanitizer device",
    category: "web",
    featured: true,
    image: "saniamigo.png",
    images: ["saniamigo.png"],
    role: "Freelance Web Developer",
    overview:
      "A responsive promotional website for Sani-Amigo, a smart personal sanitizer dispensing device by 4S Innovative Solutions Inc.",
    highlights: [
      "Designed and developed a responsive marketing website using a mobile-first approach.",
      "Created HTML email templates and newsletters for marketing campaigns.",
      "Configured Nginx and Let's Encrypt SSL certificates.",
      "Handled web page development from design to testing and production deployment.",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "Bootstrap",
      "Node.js",
      "Express",
      "Nginx",
      "Docker",
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://saniamigo.com/",
        type: "live",
      },
    ],
  },
  {
    id: "yelpcamp",
    title: "Yelp Camp",
    subtitle: "Campground listing web application",
    category: "web",
    featured: false,
    image: "yelpcamp.png",
    images: ["yelpcamp.png"],
    role: "Full Stack Developer",
    overview:
      "A responsive web application for listing, viewing, and managing campground information.",
    highlights: [
      "Implemented authentication and authorization with Passport.",
      "Built RESTful routes for campground and comment management.",
      "Used MongoDB and Mongoose for data storage.",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Passport"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/Gilpix/YelpCamp",
        type: "code",
      },
    ],
  },
  {
    id: "search-engine",
    title: "Search Engine",
    subtitle: "Full stack persistent text search app",
    category: "web",
    featured: false,
    image: "search_engine.png",
    images: ["search_engine.png"],
    role: "Full Stack Developer",
    overview:
      "A full-stack React and Node.js application that provides persistent search functionality across uploaded text files.",
    highlights: [
      "Built React frontend and Node.js backend.",
      "Created REST APIs for returning search results.",
      "Handled text file search logic and persistent data flow.",
    ],
    technologies: ["React", "Node.js", "Express", "REST API", "Bootstrap"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/Gilpix/FullStackWebDeveloperChallenge",
        type: "code",
      },
    ],
  },
  {
    id: "restful-blog",
    title: "RESTful Blog",
    subtitle: "CRUD blog using RESTful routes",
    category: "web",
    featured: false,
    image: "RestFul Blog.png",
    images: ["RestFul Blog.png"],
    role: "Full Stack Developer",
    overview:
      "A blog application for creating, reading, updating, and deleting blog posts using RESTful routing.",
    highlights: [
      "Implemented CRUD operations.",
      "Used Semantic UI for responsive design.",
      "Used MongoDB for development data storage.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Semantic UI",
    ],
    links: [
      {
        label: "View Code",
        url: "https://github.com/Gilpix/RESTFulBlog",
        type: "code",
      },
    ],
  },
  {
    id: "my-portfolio",
    title: "My Portfolio",
    subtitle: "Original Kuldeep Singh portfolio website",
    category: "web",
    featured: false,
    image: "myportfolio.png",
    images: ["myportfolio.png"],
    role: "Frontend Developer",
    overview:
      "The original portfolio website built with HTML, CSS, JavaScript, Bootstrap, and jQuery.",
    highlights: [
      "Designed a single-page portfolio experience.",
      "Added project filtering, modal details, and scroll animations.",
      "Used Bootstrap, jQuery, AOS, and Typed.js.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    links: [
      {
        label: "View Demo",
        url: "https://gilpix.github.io/My-Portfolio/",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/My-Portfolio",
        type: "code",
      },
    ],
  },
  {
    id: "tekhub-web",
    title: "TekHub Web",
    subtitle: "Product lending system frontend",
    category: "web",
    featured: true,
    image: "tekhubweb.png",
    images: ["tekhubweb.png"],
    role: "Frontend Developer",
    overview:
      "A frontend design for a college device lending system where students could browse and borrow devices such as laptops and LAN cables.",
    highlights: [
      "Built responsive screens for product listing and borrowing.",
      "Implemented sign-in and sign-up form validation.",
      "Created user-friendly web flows for students.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    links: [
      {
        label: "View Demo",
        url: "https://gilpix.github.io/TekHub-Lending-Web-Application/",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/TekHub-Lending-Web-Application",
        type: "code",
      },
    ],
  },
  {
    id: "tekhub-android",
    title: "TekHub Android",
    subtitle: "Android lending application",
    category: "mobile",
    featured: true,
    image: projectImages.tekhubMobile,
    images: [projectImages.tekhubMobile],
    role: "Android Developer",
    overview:
      "An Android application used by students to borrow devices from college inventory.",
    highlights: [
      "Implemented login, registration, borrowing, waiting list, filtering, feedback, and rating features.",
      "Connected Android app with Amazon RDS MySQL through web calls.",
      "Worked with Agile Scrum methodology and created SRS documentation.",
    ],
    technologies: ["Android", "Java", "MySQL", "Amazon RDS", "Firebase"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/Gilpix/TekHub",
        type: "code",
      },
      {
        label: "Web API",
        url: "https://github.com/Gilpix/TekHub-WebCalls",
        type: "code",
      },
      {
        label: "SRS Document",
        url: "/assets/res/LendSystemIteration3.pdf",
        type: "document",
      },
      {
        label: "Presentation",
        url: "/assets/res/TekhubFinalPresentation.pdf",
        type: "document",
      },
    ],
  },
  {
    id: "food-buddy",
    title: "Food Buddy",
    subtitle: "Android restaurant partner app",
    category: "mobile",
    featured: false,
    image: projectImages.foodBuddyMobile,
    images: [projectImages.foodBuddyMobile],
    role: "Android Developer",
    overview:
      "An Android app that allows users to select a restaurant and find a buddy or partner to join them for food.",
    highlights: [
      "Built user registration and password reset functionality.",
      "Displayed available users with RecyclerView from a MySQL database.",
      "Implemented Firebase Cloud Messaging notifications.",
    ],
    technologies: ["Android", "Java", "Firebase", "MySQL", "XAMPP"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/Gilpix/Food-Buddy",
        type: "code",
      },
      {
        label: "SRS Document",
        url: "/assets/res/foodbuddySrs.pdf",
        type: "document",
      },
    ],
  },
  {
    id: "car-market",
    title: "Car Market",
    subtitle: "Car selling website frontend",
    category: "web",
    featured: false,
    image: "carmarket.png",
    images: ["carmarket.png"],
    role: "Frontend Developer",
    overview: "A static frontend design for a car selling web application.",
    highlights: [
      "Designed home, contact, sign-in, sign-up, and car display pages.",
      "Built the interface with HTML and CSS.",
    ],
    technologies: ["HTML", "CSS"],
    links: [
      {
        label: "View Demo",
        url: "https://gilpix.github.io/CarMarket/index.html",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/CarMarket",
        type: "code",
      },
    ],
  },
  {
    id: "traffic-road-sign",
    title: "Traffic Road Sign Canada",
    subtitle: "Android driving test preparation app",
    category: "mobile",
    featured: true,
    image: projectImages.trafficCanadaMobile,
    images: [projectImages.trafficCanadaMobile],
    role: "Android Developer",
    overview:
      "A theory and quiz-based Android app for users preparing for the Canadian driving test.",
    highlights: [
      "Built theory and quiz flows.",
      "Published the app on Google Play Store.",
      "Used Google Play Console insights to understand users.",
    ],
    technologies: ["Android", "Java", "XML", "Google Play Console"],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.vid_lancer.trafficroadsignscanada",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/TrafficRoadSignsCanada",
        type: "code",
      },
    ],
  },
  {
    id: "color-guess",
    title: "Color Guessing Game",
    subtitle: "RGB color guessing web game",
    category: "web",
    featured: false,
    image: "colorguess.png",
    images: ["colorguess.png"],
    role: "Frontend Developer",
    overview:
      "A browser game where users guess the correct color square based on an RGB value.",
    highlights: [
      "Built easy and hard game modes.",
      "Used JavaScript DOM logic for game behavior.",
      "Created responsive game UI.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    links: [
      {
        label: "View Demo",
        url: "https://gilpix.github.io/ColorGuessingGame/",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/ColorGuessingGame",
        type: "code",
      },
    ],
  },
  {
    id: "todo-list",
    title: "To Do List",
    subtitle: "jQuery task list app",
    category: "web",
    featured: false,
    image: "todolist.png",
    images: ["todolist.png"],
    role: "Frontend Developer",
    overview:
      "A responsive to-do list app where users can add, remove, and mark tasks as completed.",
    highlights: [
      "Implemented add, delete, and complete task interactions.",
      "Used jQuery for DOM behavior.",
      "Created clean responsive UI.",
    ],
    technologies: ["jQuery", "CSS", "HTML"],
    links: [
      {
        label: "View Demo",
        url: "https://gilpix.github.io/ToDoList/",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/ToDoList",
        type: "code",
      },
    ],
  },
  {
    id: "travel-with-us",
    title: "Travel With Us",
    subtitle: "Android bus booking prototype",
    category: "design",
    featured: false,
    image: "travel.png",
    images: ["travel.png"],
    role: "UI/UX Designer",
    overview:
      "A mobile app prototype for an intercity and intracity bus booking system.",
    highlights: [
      "Designed app screens and navigation flow.",
      "Created prototype using Justinmind.",
      "Prepared screen-flow documentation.",
    ],
    technologies: ["Justinmind", "UI Design", "Prototype", "Screen Flow"],
    links: [
      {
        label: "Screen Flow",
        url: "/assets/res/travelWithUs.docx",
        type: "document",
      },
    ],
  },
  {
    id: "share-expenses",
    title: "Share Expenses",
    subtitle: "Expense splitting app prototype",
    category: "design",
    featured: false,
    image: "shareexpenses.png",
    images: ["shareexpenses.png"],
    role: "UI/UX Designer",
    overview:
      "An Android app design for calculating personal expenses and splitting expenses between two or more users.",
    highlights: [
      "Designed expense tracking and group bill splitting flows.",
      "Created reminder and notification concepts.",
      "Prepared screen-flow and presentation documents.",
    ],
    technologies: ["Justinmind", "UI Design", "Prototype", "Documentation"],
    links: [
      {
        label: "Screen Flow",
        url: "/assets/res/Share Expense ScreenFlowDiagram.pdf",
        type: "document",
      },
      {
        label: "Presentation",
        url: "/assets/res/ShareExpensesPresentation.pdf",
        type: "document",
      },
    ],
  },
  {
    id: "pro-quiz",
    title: "Pro Quiz",
    subtitle: "Android quiz game",
    category: "mobile",
    featured: false,
    image: projectImages.proQuizMobile,
    images: [projectImages.proQuizMobile],
    role: "Android Developer",
    overview:
      "A quiz game with categories such as sports, logos, music, nature, and monuments.",
    highlights: [
      "Built Android quiz flows and category-based questions.",
      "Published the app on Google Play Store.",
      "Classified users based on performance level.",
    ],
    technologies: ["Android", "Java", "XML", "Google Play Store"],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.gilpix.test",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/ProQuiz",
        type: "code",
      },
    ],
  },
];
