import React from 'react';
import styles from './ExperienceCard.module.scss';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: "Frontend Engineer (Client Project)",
    company: "Vellora Healthcare",
    duration: "2026",
    location: "Frontend Web App",
    badge: "HealthTech",
    description: "Built responsive patient and clinician portals with specialist discovery, faceted filtering, and interactive appointment flows.",
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "REST APIs"]
  },
  {
    title: "Distributed Systems Engineer",
    company: "RelayForge",
    duration: "2026",
    location: "Distributed Cloud",
    badge: "Distributed Systems",
    description: "Architected a high-throughput webhook delivery engine with BullMQ, Redis, PostgreSQL row locking, and anti-SSRF protection.",
    skills: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "Docker"]
  },
  {
    title: "Systems & Simulation Engineer",
    company: "ConcurrencyLab",
    duration: "2026",
    location: "Systems & Simulation",
    badge: "C++20 / OS Core",
    description: "Engineered a native C++20 simulation core with deterministic time-travel debugging and interactive concurrency visualizers.",
    skills: ["C++20", "React 19", "TypeScript", "Node.js IPC", "Zustand"]
  },
  {
    title: "Creative Frontend Engineer",
    company: "The Detour",
    duration: "2026",
    location: "Self-Drive Platform",
    badge: "Creative Frontend",
    description: "Developed a tactile road trip portal with interactive scenic route atlas, elevation profiles, and responsive fleet reservations.",
    skills: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "UI/UX Lead",
    company: "RoboGyan Robotics Society",
    duration: "June 2024 – Jan 2025",
    location: "Delhi, India",
    badge: "Leadership",
    description: "Directed creative visual identity, UI/UX design systems, and digital assets across university technical workshops and events.",
    skills: ["Figma", "UI/UX Design", "Branding", "Creative Direction"]
  },
  {
    title: "Hackathon Participant",
    company: "Multiple National Hackathons",
    duration: "2024 – Present",
    location: "Delhi NCR",
    badge: "Hackathons",
    description: "Rapidly prototyped full-stack MVPs under strict 24–48 hour deadlines, building intuitive interfaces and collaborating in multidisciplinary teams.",
    skills: ["React", "Rapid Prototyping", "Full-Stack Dev", "Teamwork"]
  }
];

export function ExperienceCard() {
  return (
    <div className={styles.grid}>
      {experiences.map((exp, index) => (
        <div key={index} className={`${styles.card} premium-shadow`}>
          <div className={styles.cardTop}>
            <div className={styles.header}>
              <div className={styles.roleInfo}>
                <h3 className={styles.title}>
                  {exp.title}
                </h3>
                <div className={styles.company}>
                  {exp.company}
                </div>
                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <FiCalendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className={styles.dot} />
                  <div className={styles.detailItem}>
                    <FiMapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className={styles.badge}>
                {exp.badge}
              </div>
            </div>

            <p className={styles.description}>
              {exp.description}
            </p>
          </div>

          <div className={styles.techs}>
            {exp.skills.map((skill) => (
              <span key={skill} className={styles.techPill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
