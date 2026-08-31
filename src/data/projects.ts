/**
 * projects.ts
 * Central project data for the portfolio Projects section.
 * Keep all links, categories, images, and modal details here.
 */

import { projectImages } from "../assets/images/projects";

import foodBuddySrs from "../assets/documents/projects/food-buddy-srs.pdf";
import lendSystemSrs from "../assets/documents/projects/lend-system.pdf";
import shareExpenseFlowDiagram from "../assets/documents/projects/share-expense-flow-diagram.pdf";
import shareExpensesPresentation from "../assets/documents/projects/share-expenses-presentation.pdf";
import tekhubMobilePresentation from "../assets/documents/projects/tekhub-mobile-presentation.pdf";
import travelWithUsScreenFlow from "../assets/documents/projects/travel-with-us.pdf";

export type ProjectCategory = "web" | "mobile" | "design" | "other";

export type ArchiveCategory = "web" | "mobile" | "learning";

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
  archiveCategory?: ArchiveCategory;
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
    image: projectImages.topParentCms,
    images: [projectImages.topParentCms],
    role: "Full Stack Developer",
    metrics: [
      { value: "1M+", label: "App Downloads" },
      { value: "CMS", label: "Platform" },
      { value: "AWS", label: "Serverless" },
    ],
    overview:
      "An enterprise serverless content management platform developed for Top Parent, a parent-child education mobile app with 1M+ downloads. I worked across frontend, backend APIs, content workflows, cloud services, media handling, and production delivery.",
    highlights: [
      "Developed CMS features and reusable frontend modules using React, Redux Toolkit, RTK Query, and modern component patterns.",
      "Built and integrated Node.js APIs with AWS Lambda and designed MongoDB schemas for scalable content workflows.",
      "Configured AWS services including Amplify, Route 53, and S3 for deployment, domain routing, and secure media storage.",
      "Implemented authentication, documented APIs using Swagger, and contributed to performance optimization, testing, and CI/CD workflows.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "RTK Query",
      "Redux Toolkit",
      "AWS Lambda",
      "Amazon S3",
      "Amplify",
      "Route 53",
      "Swagger",
      "Jest",
    ],
    links: [],
  },
  {
    id: "brilcs-website",
    title: "BRILCS Website",
    subtitle: "Corporate website with CMS, SEO, and production infrastructure",
    category: "web",
    featured: false,
    badge: "Featured Project",
    image: projectImages.brilcsWebsite,
    images: [projectImages.brilcsWebsite],
    role: "Founder / Full Stack Developer",
    metrics: [
      { value: "Live", label: "Production" },
      { value: "SEO", label: "Optimized" },
      { value: "CMS", label: "Integrated" },
    ],
    overview:
      "A production corporate platform designed and developed for BRIL Consultancy Services, combining a modern React frontend with CMS-driven content, API integrations, technical SEO, and production infrastructure.",
    highlights: [
      "Designed and developed a responsive React and TypeScript interface across services, insights, careers, company, and other business sections.",
      "Integrated CMS-backed APIs for dynamic content including insights and career opportunities.",
      "Implemented technical SEO foundations including canonical URLs, structured data, sitemap, robots.txt, redirects, and search indexing improvements.",
      "Migrated and deployed the production website to an Ubuntu VPS using Nginx, Git-based deployment, Let's Encrypt SSL, and production domain configuration.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "RTK Query",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Nginx",
      "Ubuntu",
      "Let's Encrypt",
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
    subtitle: "Custom full-stack CMS for business content operations",
    category: "web",
    featured: false,
    badge: "Professional Project",
    image: projectImages.brilcsCms,
    images: [projectImages.brilcsCms],
    role: "Founder / Full Stack Developer",
    metrics: [
      { value: "CMS", label: "Platform" },
      { value: "Full", label: "Stack" },
      { value: "Live", label: "Production" },
    ],
    overview:
      "A custom full-stack CMS built to manage BRILCS website content and publishing workflows, including insights, careers, media uploads, authentication, rich-text content, and production content operations.",
    highlights: [
      "Built modular CMS workflows for insights and careers with create, edit, publish, unpublish, search, and content management capabilities.",
      "Developed the admin frontend and Node.js/Express APIs with PostgreSQL and Prisma for structured content management.",
      "Implemented authentication, protected routes, rich-text editing, media uploads, image optimization, and reusable content workflows.",
      "Deployed and managed the CMS frontend and backend in production using Nginx, PM2, PostgreSQL, SSL, and Git-based deployment workflows.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "RTK Query",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "TipTap",
      "Nginx",
      "PM2",
      "Ubuntu",
    ],
    links: [],
  },
  {
    id: "udaan-fc",
    title: "Udaan FC",
    subtitle: "Multi-page corporate website for facility services",
    category: "web",
    featured: false,
    badge: "Live Website",
    image: projectImages.udaanFc,
    images: [projectImages.udaanFc],
    role: "Full Stack Developer",
    metrics: [
      { value: "10+", label: "Pages" },
      { value: "Live", label: "Production" },
      { value: "Client", label: "Project" },
    ],
    overview:
      "A production corporate website developed for Udaan Facility Company to present its security, CCTV, facility management, and vehicle-related services through a structured and responsive digital presence.",
    highlights: [
      "Built a responsive multi-page corporate website with reusable components and service-focused content architecture.",
      "Structured dedicated sections for security, CCTV, facility management, vehicle services, company credentials, and contact information.",
      "Optimized the interface for desktop, tablet, and mobile while maintaining consistent branding and navigation.",
      "Deployed the production website to an Ubuntu VPS using Nginx, Git-based deployment, domain configuration, and SSL.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
      "Nginx",
      "Ubuntu",
    ],
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
      "Local grocery marketplace with merchant ordering and delivery workflows",
    category: "web",
    featured: true,
    badge: "Professional Project",
    image: projectImages.piknix,
    images: [projectImages.piknix],
    role: "Full Stack Developer",
    overview:
      "A mobile-first local grocery e-commerce marketplace that enabled merchants to manage products and customers to discover, order, and purchase groceries through an integrated online platform.",
    highlights: [
      "Developed responsive marketplace views and product workflows using JavaScript, EJS, Bootstrap, Node.js, and Express.",
      "Built REST APIs, MySQL database workflows, product listing, search, sorting, filtering, and role-based authentication.",
      "Integrated PayPal, Google APIs, Passport, SendGrid, Twilio, and localization services for payments, authentication, communication, and multilingual support.",
      "Used Docker for development environments and configured Nginx, SSL certificates, and DigitalOcean production deployment.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "EJS",
      "MySQL",
      "Sequelize",
      "Bootstrap",
      "Passport",
      "PayPal",
      "SendGrid",
      "Twilio",
      "Nginx",
      "Docker",
    ],
    links: [
      // {
      //   label: "Visit Website",
      //   url: "https://www.piknix.com",
      //   type: "live",
      // },
    ],
  },
  {
    id: "yelpcamp",
    title: "Yelp Camp",
    subtitle: "Full-stack campground discovery and management platform",
    category: "web",
    archiveCategory: "web",
    featured: false,
    image: projectImages.yelpcamp,
    images: [projectImages.yelpcamp],
    role: "Full Stack Developer",
    overview:
      "A full-stack web application providing a persistent platform where users can discover, create, edit, and manage campground listings and comments, with authentication, authorization, image uploads, and responsive user interactions.",
    highlights: [
      "Built complete campground and comment CRUD workflows using Node.js, Express, MongoDB, Mongoose, and EJS.",
      "Implemented user authentication with Passport and session-based authorization to protect profiles and management actions.",
      "Added ownership-based permissions so users can only edit or delete campgrounds and comments they created.",
      "Implemented campground photo uploads, editable campground images, flash messages, and responsive Bootstrap interfaces.",
      "Structured RESTful routes and persistent MongoDB data models for users, campgrounds, and associated comments.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport",
      "Passport Local",
      "Express Session",
      "Method Override",
      "Connect Flash",
      "Bootstrap",
    ],
    links: [
      {
        label: "View Code",
        url: "https://github.com/Gilpix/YelpCamp",
        type: "code",
      },
    ],
  },
  {
    id: "my-portfolio",
    title: "Developer Portfolio",
    subtitle: "Modern developer portfolio built with React and TypeScript",
    category: "web",
    archiveCategory: "web",
    featured: false,
    image: projectImages.myPortfolio,
    images: [projectImages.myPortfolio],
    role: "Frontend Developer",
    overview:
      "A modern personal portfolio designed and developed to present my experience, projects, technical skills, and professional journey through a polished, responsive web experience.",
    highlights: [
      "Built a responsive portfolio experience with reusable React and TypeScript components.",
      "Created interactive sections with responsive layouts, theme support, scroll-based animations, and mobile-specific interactions.",
      "Designed reusable UI patterns for experience, projects, skills, and other portfolio content with a focus on maintainability and consistent UX.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: [
      {
        label: "View Demo",
        url: "https://kulsinggh.vercel.app/",
        type: "live",
      },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/kuldeep-portfolio-v2",
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
    image: projectImages.saniamigo,
    images: [projectImages.saniamigo],
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
    id: "restful-blog",
    title: "RESTful Blog",
    subtitle: "Full-stack CRUD blog built around RESTful routing",
    category: "web",
    archiveCategory: "web",
    featured: false,
    image: projectImages.restfulBlog,
    images: [projectImages.restfulBlog],
    role: "Full Stack Developer",
    overview:
      "A full-stack blog application built to implement RESTful architecture, allowing users to create, browse, view, edit, and delete persistent blog content through structured server-side routes.",
    highlights: [
      "Implemented the complete seven-route RESTful pattern for index, new, create, show, edit, update, and delete operations.",
      "Built the server-side application using Node.js and Express with EJS templates for dynamic page rendering.",
      "Used MongoDB and Mongoose for persistent blog storage and database operations.",
      "Implemented Method Override for PUT and DELETE requests, request-body parsing, static asset serving, and HTML input sanitization.",
      "Structured the application into server routes, reusable EJS views, public assets, and database-backed content workflows.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Method Override",
      "Body Parser",
      "Sanitizer",
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
    id: "reactmania",
    title: "ReactMania",
    subtitle: "Collection of React mini projects",
    category: "web",
    archiveCategory: "web",
    featured: true,
    image: projectImages.reactMania,
    images: [projectImages.reactMania],
    role: "Frontend Developer",
    overview:
      "A responsive React application containing multiple small to medium projects built to explore component-based development, hooks, state, and frontend interactions.",
    highlights: [
      "Created reusable React components across multiple mini applications.",
      "Used React hooks for state and interaction handling.",
      "Built responsive layouts and interfaces with Bootstrap and CSS.",
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
    id: "search-engine",
    title: "Search Engine",
    subtitle: "Full-stack persistent text search application",
    category: "web",
    archiveCategory: "learning",
    featured: false,
    image: projectImages.searchEngine,
    images: [projectImages.searchEngine],
    role: "Full Stack Developer",
    overview:
      "A full-stack React and Node.js application built to search across stored text content and return persistent search results through a REST API.",
    highlights: [
      "Built the frontend search experience using React and Bootstrap.",
      "Developed a Node.js and Express backend with REST APIs for search operations.",
      "Implemented text-file search logic and persistent application data flow.",
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
    id: "tekhub-web",
    title: "TekHub Web",
    subtitle: "Product lending system frontend",
    category: "web",
    archiveCategory: "learning",
    featured: true,
    image: projectImages.tekhubWebsite,
    images: [projectImages.tekhubWebsite],
    role: "Frontend Developer",
    overview:
      "A responsive frontend for a college device lending system where students could browse and borrow devices such as laptops and networking equipment.",
    highlights: [
      "Built responsive screens for product listing and borrowing workflows.",
      "Implemented sign-in and sign-up forms with client-side validation.",
      "Created clear user flows for browsing and borrowing available devices.",
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
    subtitle: "Full-stack Android device lending and inventory system",
    category: "mobile",
    archiveCategory: "mobile",
    featured: true,
    image: projectImages.tekhubMobile,
    images: [projectImages.tekhubMobile],
    role: "Android / Full Stack Developer",
    overview:
      "A college device lending system developed for students of Cégep de la Gaspésie, combining an Android application, RESTful backend services, and a cloud-hosted MySQL database to manage device borrowing, availability, waiting lists, issues, and administrative workflows.",
    highlights: [
      "Built student workflows for registration, authentication, password reset, item browsing, borrowing, search, filtering, waiting lists, ratings, feedback, and issue reporting.",
      "Developed administrative workflows for adding, updating, and deleting inventory, managing students, resolving reported issues, and reviewing lending orders.",
      "Connected the Android application to RESTful Java web services backed by an Amazon RDS MySQL database.",
      "Implemented Firebase SMS verification and persistent application-state handling across Android lifecycle events.",
      "Worked on image upload and Base64 processing, device/server time-zone handling, item availability, borrowing deadlines, and waiting-list workflows.",
    ],
    technologies: [
      "Android",
      "Java",
      "REST API",
      "JAX-RS",
      "MySQL",
      "Amazon RDS",
      "JDBC",
      "JSON",
      "Firebase",
      "Android Studio",
      "NetBeans",
    ],
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
        url: lendSystemSrs,
        type: "document",
      },
      {
        label: "Presentation",
        url: tekhubMobilePresentation,
        type: "document",
      },
    ],
  },
  {
    id: "food-buddy",
    title: "Food Buddy",
    subtitle: "Android restaurant partner application",
    category: "mobile",
    archiveCategory: "mobile",
    featured: false,
    image: projectImages.foodBuddyMobile,
    images: [projectImages.foodBuddyMobile],
    role: "Android Developer",
    overview:
      "An Android application that helps users select a restaurant and find another user interested in joining them for a meal.",
    highlights: [
      "Built user registration, account workflows, and password reset functionality.",
      "Displayed available users through RecyclerView using data retrieved from a MySQL database.",
      "Implemented Firebase Cloud Messaging for application notifications.",
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
        url: foodBuddySrs,
        type: "document",
      },
    ],
  },
  // {
  //   id: "car-market",
  //   title: "Car Market",
  //   subtitle: "Car selling website frontend",
  //   category: "web",
  //   archiveCategory: "learning",
  //   featured: false,
  //   image: "carmarket.png",
  //   images: ["carmarket.png"],
  //   role: "Frontend Developer",
  //   overview: "A static frontend design for a car selling web application.",
  //   highlights: [
  //     "Designed home, contact, sign-in, sign-up, and car display pages.",
  //     "Built the interface with HTML and CSS.",
  //   ],
  //   technologies: ["HTML", "CSS"],
  //   links: [
  //     {
  //       label: "View Demo",
  //       url: "https://gilpix.github.io/CarMarket/index.html",
  //       type: "live",
  //     },
  //     {
  //       label: "View Code",
  //       url: "https://github.com/Gilpix/CarMarket",
  //       type: "code",
  //     },
  //   ],
  // },
  {
    id: "traffic-road-sign",
    title: "Traffic Road Signs Canada",
    subtitle: "Published Android guide to Canadian traffic and road signs",
    category: "mobile",
    archiveCategory: "mobile",
    featured: true,
    image: projectImages.trafficCanadaMobile,
    images: [projectImages.trafficCanadaMobile],
    role: "Android Developer",
    overview:
      "A published Android learning application designed to help new and learner drivers understand Canadian traffic signs, road signs, traffic lights, and driving-related visual rules.",
    highlights: [
      "Organized Canadian road-sign content into regulatory, warning, road-work, information and direction, other-sign, and traffic-light categories.",
      "Presented individual road signs with visual references and descriptions to help users understand their meaning while learning or driving.",
      "Designed the application for mobile learning and Canadian driving-license preparation.",
      "Published and managed the application through Google Play and maintained its source code as an independent Android project.",
    ],
    technologies: [
      "Android",
      "Java",
      "XML",
      "Android SDK",
      "Google Play Console",
    ],
    links: [
      // {
      //   label: "Play Store",
      //   url: "https://play.google.com/store/apps/details?id=com.vid_lancer.trafficroadsignscanada",
      //   type: "live",
      // },
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
    archiveCategory: "learning",
    featured: false,
    image: projectImages.colorguess,
    images: [projectImages.colorguess],
    role: "Frontend Developer",
    overview:
      "A browser-based game where users identify the correct color from multiple choices using a displayed RGB value.",
    highlights: [
      "Built easy and hard game modes.",
      "Used JavaScript DOM manipulation and event handling for game behavior.",
      "Created a responsive game interface.",
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
    subtitle: "jQuery task list application",
    category: "web",
    archiveCategory: "learning",
    featured: false,
    image: projectImages.todolist,
    images: [projectImages.todolist],
    role: "Frontend Developer",
    overview:
      "A responsive task-list application where users can add, remove, and mark tasks as completed.",
    highlights: [
      "Implemented add, delete, and complete task interactions.",
      "Used jQuery for DOM manipulation and application behavior.",
      "Created a simple responsive task management interface.",
    ],
    technologies: ["jQuery", "JavaScript", "CSS", "HTML"],
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
    subtitle: "Interactive bus booking mobile application prototype",
    category: "design",
    archiveCategory: "learning",
    featured: false,
    image: projectImages.travelMobile,
    images: [projectImages.travelMobile],
    role: "UI/UX Designer",
    overview:
      "A detailed mobile bus-booking prototype designed for both intercity and intracity travel, covering the complete journey from authentication and bus discovery through seat selection, payment, ticket management, and route tracking.",
    highlights: [
      "Designed end-to-end intercity and intracity bus-booking workflows with origin, destination, travel dates, passenger details, and bus discovery.",
      "Created bus sorting, seat selection, boarding and drop-off selection, traveller-information, and payment experiences.",
      "Designed booking-management flows for viewing routes, downloading e-tickets, reviewing previous bookings, and cancelling tickets.",
      "Included guest booking, user profiles, authentication, contact support, navigation drawer, and route-detail experiences.",
    ],
    technologies: [
      "Justinmind",
      "UI/UX Design",
      "Interactive Prototyping",
      "User Flow",
      "Wireframing",
      "Mobile Design",
    ],
    links: [
      {
        label: "Screen Flow",
        url: travelWithUsScreenFlow,
        type: "document",
      },
    ],
  },
  {
    id: "share-expenses",
    title: "Share Expenses",
    subtitle: "Expense splitting application prototype",
    category: "design",
    archiveCategory: "learning",
    featured: false,
    image: projectImages.shareExpenses,
    images: [projectImages.shareExpenses],
    role: "UI/UX Designer",
    overview:
      "A mobile application prototype for tracking personal expenses and splitting shared expenses between two or more users.",
    highlights: [
      "Designed personal expense tracking and group bill-splitting workflows.",
      "Created reminder, notification, and shared-expense interaction concepts.",
      "Prepared application screen-flow and presentation documentation.",
    ],
    technologies: ["Justinmind", "UI Design", "Prototype", "Documentation"],
    links: [
      {
        label: "Screen Flow",
        url: shareExpenseFlowDiagram,
        type: "document",
      },
      {
        label: "Presentation",
        url: shareExpensesPresentation,
        type: "document",
      },
    ],
  },
  {
    id: "pro-quiz",
    title: "Pro Quiz",
    subtitle:
      "Android multimedia quiz app with 22 categories and 3000+ questions",
    category: "mobile",
    archiveCategory: "mobile",
    featured: false,
    image: projectImages.proQuizMobile,
    images: [projectImages.proQuizMobile],
    role: "Android Developer",
    overview:
      "An Android quiz application combining general knowledge, picture-based, and audio-based questions across 22 categories, with thousands of questions and progressively challenging gameplay.",
    highlights: [
      "Built general, picture, logo, and audio-based quiz experiences within a single Android application.",
      "Organized quiz content across 22 categories with more than 3,000 questions.",
      "Implemented increasing difficulty levels, performance-based gameplay, and a dynamic soundtrack.",
      "Optimized the application for multiple Android phone and tablet screen sizes.",
      "Published the application on Google Play and maintained the Android source project.",
    ],
    technologies: [
      "Android",
      "Java",
      "XML",
      "Android SDK",
      "Android Support Library",
      "Google Play Store",
    ],
    links: [
      // {
      //   label: "Play Store",
      //   url: "https://play.google.com/store/apps/details?id=com.gilpix.test",
      //   type: "live",
      // },
      {
        label: "View Code",
        url: "https://github.com/Gilpix/ProQuiz",
        type: "code",
      },
    ],
  },
];
