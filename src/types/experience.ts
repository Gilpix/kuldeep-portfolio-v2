/**
 * experience.ts
 * Type definitions for work experience data used by the Experience section.
 */

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}