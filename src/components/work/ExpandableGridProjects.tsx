"use client";

import React, { useState } from "react";
import { GridProjectCard } from "./GridProjectCard";
import styles from "./GridProjects.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export interface SerializedProject {
  slug: string;
  image: string;
  title: string;
  description: string;
  techs?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ExpandableGridProjectsProps {
  projects: SerializedProject[];
  initialRows?: number; // default 3 rows = 9 cards
  expandable?: boolean;
}

export function ExpandableGridProjects({
  projects,
  initialRows = 3,
  expandable = true,
}: ExpandableGridProjectsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 3 columns x initialRows (default 3 rows = 9 items)
  const initialLimit = initialRows * 3;
  const hasMore = expandable && projects.length > initialLimit;
  const visibleProjects = isExpanded || !expandable ? projects : projects.slice(0, initialLimit);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {visibleProjects.map((project, idx) => (
          <div
            key={project.slug}
            className={idx >= initialLimit ? "animate-fade-up" : ""}
            style={{ width: "100%", height: "100%" }}
          >
            <GridProjectCard
              href={`/work/${project.slug}`}
              image={project.image}
              title={project.title}
              description={project.description}
              techs={project.techs}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={styles.viewMoreContainer}>
          <button
            type="button"
            onClick={toggleExpand}
            className={styles.viewMoreBtn}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Show Less" : `View More Projects (${projects.length - initialLimit} more)`}</span>
            {isExpanded ? (
              <FiChevronUp className={styles.viewMoreIcon} />
            ) : (
              <FiChevronDown className={styles.viewMoreIcon} />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
