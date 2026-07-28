import React from 'react';
import styles from './ExperienceCard.module.scss';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: "UI/UX Lead",
    company: "RoboGyan Robotics Society",
    duration: "June 2024 – Jan 2025",
    location: "Delhi, India",
    badge: "Leadership",
    description: "Led the UI/UX team for RoboGyan, creating branding, event assets, and digital experiences across workshops, hackathons, and technical initiatives while collaborating with cross-functional teams.",
    highlights: [
      "Led UI/UX for multiple technical workshops and community events.",
      "Designed posters, certificates, social media creatives, and branding assets using Figma and Canva.",
      "Collaborated with technical and event teams to maintain a consistent visual identity.",
      "Improved the society's digital presence through modern and user-focused design."
    ],
    skills: ["Figma", "Canva", "UI Design", "UX Design", "Branding", "Leadership", "Team Collaboration"],
    impact: ["Leadership Experience", "Cross-functional Collaboration", "Creative Direction", "Community Building"]
  },
  {
    title: "Hackathon Participant",
    company: "Multiple National Hackathons",
    duration: "2024 – Present",
    location: "Delhi NCR",
    badge: "Hackathons",
    description: "Participated in multiple hackathons, collaborating with developers to rapidly design and build full-stack solutions under tight deadlines while focusing on usability, teamwork, and product thinking.",
    highlights: [
      "Worked with cross-functional teams to build end-to-end project prototypes.",
      "Designed intuitive user interfaces and user flows using Figma.",
      "Contributed to frontend implementation using React and modern web technologies.",
      "Presented solutions and collaborated effectively during competitive development sprints."
    ],
    skills: ["React", "Figma", "Problem Solving", "Rapid Prototyping", "Teamwork", "Presentation", "Frontend Development"],
    impact: ["Fast-paced Collaboration", "Product Thinking", "UI/UX Design", "Prototype Development"]
  }
];

export function ExperienceCard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', width: '100%' }}>
      {experiences.map((exp, index) => (
        <div key={index} className={`${styles.card} premium-shadow`}>
          <div className={styles.header}>
            <div className={styles.roleInfo}>
              <div className={styles.meta}>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: 'var(--neutral-on-background-strong)', letterSpacing: '-0.01em' }}>
                  {exp.title}
                </h3>
                <div style={{ color: 'var(--neutral-on-background-weak)', fontSize: '15px', marginBottom: '8px', fontWeight: 400 }}>
                  {exp.company}
                </div>
                <div className={styles.details}>
                  <div className={styles.detailItem} style={{ color: 'var(--neutral-on-background-weak)', opacity: 0.7 }}>
                    <FiCalendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--neutral-border-strong)' }} />
                  <div className={styles.detailItem} style={{ color: 'var(--neutral-on-background-weak)', opacity: 0.7 }}>
                    <FiMapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.badge}>
              {exp.badge}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Overview</div>
              <p style={{ color: 'var(--neutral-on-background-medium)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
                {exp.description}
              </p>
              <ul className={styles.list}>
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className={styles.listItem}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.bottomSplit}>
              <div className={styles.skillsContainer}>
                <div className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Key Skills</div>
                <div className={styles.techs}>
                  {exp.skills.map((skill) => (
                    <div key={skill} className={styles.techPill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.impactContainer}>
                <div className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Impact</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.impact.map((item, i) => (
                    <div key={i} style={{ color: 'var(--neutral-on-background-strong)', fontSize: '14px', fontWeight: 500 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
