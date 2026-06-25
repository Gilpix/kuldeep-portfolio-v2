/**
 * skills.ts
 * Central skill data for the Skills section.
 */

import {
  Bot,
  Cloud,
  Code2,
  Database,
  Rocket,
  Server,
  UsersRound,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  strength: string;
  accent: "yellow" | "blue" | "purple" | "green";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Interfaces users actually enjoy",
    description:
      "Building responsive, accessible, and maintainable interfaces with reusable components and clean UI architecture.",
    icon: Code2,
    strength: "95%",
    accent: "yellow",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "Ant Design",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Business logic that scales",
    description:
      "Designing APIs, authentication flows, backend services, and product workflows that support real applications.",
    icon: Server,
    strength: "90%",
    accent: "yellow",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Java",
      "Spring Boot",
      "Scala",
      "RabbitMQ",
      "Swagger",
    ],
  },
  {
    title: "Cloud, Database & DevOps",
    subtitle: "Production-ready ownership",
    description:
      "Working across databases, serverless cloud, deployments, storage, and infrastructure needed to ship reliable apps.",
    icon: Cloud,
    strength: "88%",
    accent: "blue",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "S3",
      "RDS",
      "Amplify",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Docker",
      "Nginx",
    ],
  },
  {
    title: "Product & Leadership",
    subtitle: "Thinking beyond tickets",
    description:
      "Connecting technical execution with product decisions, user experience, delivery planning, and business outcomes.",
    icon: UsersRound,
    strength: "85%",
    accent: "purple",
    skills: [
      "Product Thinking",
      "Architecture",
      "Team Collaboration",
      "Documentation",
      "Client Delivery",
      "CMS Strategy",
      "Agile",
      "Code Reviews",
    ],
  },
  {
    title: "AI & Automation",
    subtitle: "Building faster and smarter",
    description:
      "Using AI tools, automation workflows, and modern development systems to improve delivery speed and product quality.",
    icon: Bot,
    strength: "80%",
    accent: "green",
    skills: [
      "AI Tools",
      "Prompt Engineering",
      "Automation",
      "Workflow Design",
      "OpenAI API",
      "Content Systems",
      "Data Flows",
      "Developer Productivity",
    ],
  },
];

export const skillStats = [
  { value: "4+", label: "Years", icon: Rocket },
  { value: "20+", label: "Tech", icon: Database },
  { value: "15+", label: "Projects", icon: Cloud },
  { value: "100%", label: "Ownership", icon: Code2 },
];