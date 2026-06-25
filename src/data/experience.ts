/**
 * experience.ts
 * Professional work history shown on the portfolio.
 * Current leadership role appears first, followed by development roles.
 */

import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    company: "BRILCS",
    role: "CEO / Founder",
    period: "Present",
    location: "Canada",
    description:
      "Leading BRILCS as a technology-focused company while driving product direction, web platforms, client delivery, and technical execution.",
    highlights: [
      "Overseeing product strategy, website architecture, branding, and digital service delivery.",
      "Working across frontend, backend, deployment, CMS flows, and production infrastructure decisions.",
      "Managing technical planning with a focus on scalable, maintainable, and business-ready solutions.",
    ],
    technologies: [
      "Leadership",
      "Product Strategy",
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "CMS",
    ],
  },
  {
    company: "JDSA Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "Nov 2024 - Present",
    location: "Remote, Canada",
    description:
      "Building modern full-stack applications with React, TypeScript, Node.js, AWS, PostgreSQL, and secure API integrations.",
    highlights: [
      "Developed scalable frontend features using React, TypeScript, Tailwind CSS, and RTK Query.",
      "Built backend APIs using Node.js, Express, AWS Lambda, API Gateway, and PostgreSQL.",
      "Worked on authentication, CMS workflows, upload systems, and production deployment flows.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "AWS Lambda",
      "API Gateway",
      "RDS",
      "PostgreSQL",
      "S3",
      "RTK Query",
      "Tailwind CSS",
    ],
  },
  {
    company: "Tezooo Innovations",
    role: "Senior Full Stack Developer",
    period: "Jan 2023 - Oct 2024",
    location: "Canada",
    description:
      "Delivered full-stack applications including CMS and e-commerce systems with strong frontend architecture and backend APIs.",
    highlights: [
      "Built reusable React components and data fetching flows using Redux Toolkit and RTK Query.",
      "Developed backend services with Node.js, Express, MongoDB, and AWS serverless services.",
      "Contributed to architecture, documentation, deployment, testing, and performance improvements.",
    ],
    technologies: [
      "React",
      "Ant Design",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS Lambda",
      "Amplify",
      "Swagger",
      "Docker",
    ],
  },
  {
    company: "Nojumi Solutions Inc.",
    role: "Software Developer",
    period: "May 2021 - Dec 2022",
    location: "Toronto, Ontario, Canada",
    description:
      "Worked on legal-tech automation tools, internal systems, document workflows, search improvements, and cloud services.",
    highlights: [
      "Built automation tools that reduced manual workload across legal processes.",
      "Worked with AWS S3, DynamoDB, Google Apps Script, RabbitMQ, and backend services.",
      "Improved search, scheduling, document handling, and internal system reliability.",
    ],
    technologies: [
      "Scala",
      "AngularJS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS S3",
      "DynamoDB",
      "RabbitMQ",
      "Google Apps Script",
      "Docker",
    ],
  },
  {
    company: "Piknix",
    role: "Software Developer",
    period: "Jun 2020 - May 2021",
    location: "Montreal, Quebec, Canada",
    description:
      "Developed e-commerce marketplace features for local grocery shopping, including frontend templates, backend APIs, payments, and deployment support.",
    highlights: [
      "Built responsive pages using JavaScript, EJS, Bootstrap, and custom CSS.",
      "Developed REST APIs with Node.js, Express, MySQL, and Sequelize.",
      "Worked on PayPal integration, authentication, email templates, Nginx, SSL, and Docker setup.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "EJS",
      "MySQL",
      "Sequelize",
      "Bootstrap",
      "Docker",
      "Nginx",
    ],
  },
];