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
    subtitle: "Modern interfaces and product UI",
    description:
      "Building responsive, accessible, and maintainable interfaces with strong component architecture, clean state management, and polished user experiences.",
    icon: Code2,
    strength: "Core",
    accent: "yellow",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "Ant Design",
      "Framer Motion",
      "Responsive UI",
      "Component Architecture",
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Application logic and integrations",
    description:
      "Designing backend services, REST APIs, authentication flows, business workflows, background jobs, and integrations for real-world applications.",
    icon: Server,
    strength: "Strong",
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
      "API Design",
    ],
  },
  {
    title: "Cloud, Database & DevOps",
    subtitle: "Reliable production systems",
    description:
      "Working across cloud services, databases, deployment workflows, server configuration, storage, and infrastructure needed to ship stable applications.",
    icon: Cloud,
    strength: "Strong",
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
      "DigitalOcean",
      "CI/CD",
    ],
  },
  {
    title: "Product & Ownership",
    subtitle: "Beyond writing code",
    description:
      "Connecting engineering decisions with product goals, client needs, usability, documentation, delivery planning, and long-term business value.",
    icon: UsersRound,
    strength: "Applied",
    accent: "purple",
    skills: [
      "Product Thinking",
      "Technical Ownership",
      "CMS Strategy",
      "Client Delivery",
      "Documentation",
      "Architecture Planning",
      "Agile",
      "Code Reviews",
      "Business Workflows",
    ],
  },
  {
    title: "AI & Automation",
    subtitle: "Smarter workflows and systems",
    description:
      "Using AI tools, automation, workflow design, and modern development practices to improve delivery speed, content systems, and product quality.",
    icon: Bot,
    strength: "Growing",
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
  { value: "7+", label: "Years", icon: Rocket },
  { value: "20+", label: "Projects", icon: Cloud },
  { value: "30+", label: "Tech", icon: Database },
  { value: "Full", label: "Stack", icon: Code2 },
];
