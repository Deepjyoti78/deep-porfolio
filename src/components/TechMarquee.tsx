"use client";

import React from "react";
import styles from "./TechMarquee.module.scss";
import { Text } from "@once-ui-system/core";

// Import all requested icons from react-icons/si
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiOpenjdk, // For Java
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiRailway,
  SiFigma
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; // from react-icons/fa for generic SQL
import { TbBrandVscode } from "react-icons/tb"; // from react-icons/tb for VS Code

const techList = [
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: SiOpenjdk, color: "#007396" },
  { name: "SQL", icon: FaDatabase, color: "#CC2927" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Railway", icon: SiRailway, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
];

export const TechMarquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {[...techList, ...techList].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div key={`${tech.name}-${index}`} className={styles.badge}>
              <Icon color={tech.color} size={16} />
              <Text variant="body-default-s" onBackground="neutral-strong">
                {tech.name}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};
