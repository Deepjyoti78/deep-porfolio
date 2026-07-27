import React from 'react';
import styles from './ExperienceCard.module.scss';
import { FiCalendar, FiMapPin, FiUsers, FiEdit2, FiBriefcase, FiCpu } from 'react-icons/fi';

export function ExperienceCard() {
  return (
    <div className={`${styles.card} premium-shadow`}>
      <div className={styles.header}>
        <div className={styles.roleInfo}>
          <div className={styles.meta}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--neutral-on-background-strong)' }}>UI/UX Lead</h3>
            <div style={{ color: 'var(--neutral-on-background-weak)', fontSize: '14px', marginBottom: '8px' }}>
              RoboGyan Robotics Society
            </div>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <FiCalendar size={14} />
                <span>June 2024 – Jan 2025</span>
              </div>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--neutral-border-strong)' }} />
              <div className={styles.detailItem}>
                <FiMapPin size={14} />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.badge}>
          Leadership Role
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>What I did</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Led the UI/UX design for technical workshops, hackathons, and society events, collaborating with cross-functional teams to deliver consistent digital experiences.
            </li>
            <li className={styles.listItem}>
              Designed posters, social media creatives, certificates, and promotional assets using Figma and Canva to strengthen the society's branding and outreach.
            </li>
            <li className={styles.listItem}>
              Coordinated with technical and event teams to ensure visually consistent designs across workshops, competitions, and community initiatives.
            </li>
          </ul>
        </div>

        <div className={styles.bottomSplit}>
          <div className={styles.skillsContainer}>
            <div className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Key Skills</div>
            <div className={styles.techs}>
              {['UI/UX Design', 'Figma', 'Canva', 'Leadership', 'Team Collaboration', 'Communication'].map((skill) => (
                <div key={skill} className={styles.techPill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.impactContainer}>
            <div className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Impact</div>
            <div className={styles.metrics}>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  <FiUsers color="#d1a8ff" /> 10+
                </div>
                <div className={styles.metricLabel}>Workshops<br/>Collaborated</div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  <FiEdit2 color="#d1a8ff" /> 25+
                </div>
                <div className={styles.metricLabel}>Design Assets<br/>Created</div>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  <FiUsers color="#d1a8ff" /> 5+
                </div>
                <div className={styles.metricLabel}>Teams<br/>Coordinated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
