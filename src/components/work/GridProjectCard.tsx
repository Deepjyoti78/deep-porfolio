"use client";

import React from "react";
import styles from "./GridProjectCard.module.scss";
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

const techIconMap: Record<string, React.FC<any>> = {
  "React": SiReact,
  "Django": SiDjango,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
};

const techColorMap: Record<string, string> = {
  "React": "#61DAFB",
  "Django": "#092E20",
  "PostgreSQL": "#4169E1",
  "Docker": "#2496ED",
  "Node.js": "#339933",
  "Express.js": "#FFFFFF",
  "MongoDB": "#47A248",
  "TypeScript": "#3178C6",
  "Tailwind CSS": "#06B6D4",
};

interface GridProjectCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  techs?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const GridProjectCard: React.FC<GridProjectCardProps> = ({
  href,
  image,
  title,
  description,
  techs = [],
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className={`${styles.card} premium-shadow`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        {(demoUrl || githubUrl) && (
          <a
            href={demoUrl || githubUrl || "#"}
            className={styles.mobileDemoBadge}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#000000', textDecoration: 'none' }}
          >
            Live Demo
          </a>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <h3 className={styles.titleText}>{title}</h3>
        </div>

        {description && (
          <div className={styles.description}>
            <p className={styles.descriptionText}>{description}</p>
          </div>
        )}

        {techs.length > 0 && (
          <div className={styles.techs}>
            {techs.map((tech) => {
              const Icon = techIconMap[tech];
              const color = techColorMap[tech] || "#FFFFFF";
              return (
                <div key={tech} className={styles.techPill}>
                  {Icon && <Icon color={color} className={styles.techIcon} />}
                  <span className={styles.techLabel}>{tech}</span>
                </div>
              );
            })}
          </div>
        )}

        <div className={styles.actions}>
          <a href={href} className={styles.caseStudyLink}>
            GitHub →
          </a>
          {(githubUrl || demoUrl) && (
            <a
              href={demoUrl || githubUrl || "#"}
              className={styles.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {demoUrl ? "Live Demo ↗" : "GitHub ↗"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
