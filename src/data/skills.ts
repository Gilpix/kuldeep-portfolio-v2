/**
 * skills.ts
 * Skill groups for the portfolio. Keeping skills here makes updates
 * easier without touching the UI components.
 */

import { Cloud, Code2, Database, Settings } from "lucide-react";

import type { SkillGroup } from "../types/skills";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern, responsive interfaces with clean component structure.",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "RTK Query", "Redux Toolkit", "Ant Design", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    description: "APIs, authentication, business logic, and scalable services.",
    icon: Settings,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Java", "Spring Boot", "Scala", "Play Framework", "RabbitMQ"],
  },
  {
    title: "Database",
    description: "Relational and NoSQL data design for real applications.",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Cassandra", "Redis", "Firebase", "Sequelize", "Mongoose"],
  },
  {
    title: "Cloud & Tools",
    description: "Deployment, documentation, testing, and production workflows.",
    icon: Cloud,
    skills: ["AWS Lambda", "API Gateway", "S3", "RDS", "Amplify", "Docker", "Nginx", "Git", "Swagger", "Postman"],
  },
];