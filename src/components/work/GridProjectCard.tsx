"use client";

import React from "react";
import Link from "next/link";
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
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiVite,
  SiSqlite,
  SiGoogle,
} from "react-icons/si";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const techIconMap: Record<string, React.FC<any>> = {
  "React": SiReact,
  "Django": SiDjango,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Python": SiPython,
  "FastAPI": SiFastapi,
  "Next.js": SiNextdotjs,
  "Vite": SiVite,
  "SQLite": SiSqlite,
  "Gemini AI": SiGoogle,
  "AI": SiGoogle,
};

const techColorMap: Record<string, string> = {
  "React": "#61DAFB",
  "Django": "#092E20",
  "PostgreSQL": "#4169E1",
  "Docker": "#2496ED",
  "Node.js": "#339933",
  "Express.js": "#E6EDF3",
  "MongoDB": "#47A248",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Python": "#3776AB",
  "FastAPI": "#009688",
  "Next.js": "#FFFFFF",
  "Vite": "#646CFF",
  "SQLite": "#003B57",
  "Gemini AI": "#4285F4",
  "AI": "#4285F4",
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
        <Link href={href} className={styles.imageLink} aria-label={`View ${title} case study`}>
          <img src={image} alt={title} loading="lazy" />
        </Link>
        {demoUrl && (
          <a
            href={demoUrl}
            className={styles.liveBadge}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} live demo`}
          >
            <span className={styles.liveDot} />
            Live Demo
          </a>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <Link href={href} className={styles.titleLink}>
            <h3 className={styles.titleText}>{title}</h3>
          </Link>
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
          {githubUrl && (
            <a
              href={githubUrl}
              className={styles.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code on GitHub for ${title}`}
            >
              <FiGithub className={styles.btnIcon} />
              <span>GitHub</span>
              <FiArrowUpRight className={styles.arrowIcon} />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              className={styles.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${title}`}
            >
              <FiExternalLink className={styles.btnIcon} />
              <span>Live Demo</span>
              <FiArrowUpRight className={styles.arrowIcon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
