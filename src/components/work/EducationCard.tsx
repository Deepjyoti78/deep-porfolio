import React from 'react';
import styles from './EducationCard.module.scss';
import { FiMapPin } from 'react-icons/fi';

export function EducationCard() {
  return (
    <div className={`${styles.card} premium-shadow`}>
      <div className={styles.timeline}>
        
        {/* Item 1 */}
        <div className={`${styles.timelineItem} ${styles.timelineItemActive}`}>
          <div className={styles.contentRow}>
            <div className={styles.leftContent}>
              <h3 className={styles.institution}>Guru Gobind Singh Indraprastha University, Delhi</h3>
              <div className={styles.degree}>Bachelor of Technology in Computer Science and Engineering</div>
              <div className={styles.locationRow}>
                <FiMapPin size={12} />
                <span>Delhi, India</span>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.highlightText}>CGPA - 8.0</div>
              <div className={styles.year}>July 2023 – Present</div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className={styles.timelineItem}>
          <div className={styles.contentRow}>
            <div className={styles.leftContent}>
              <h3 className={styles.institution}>Kendriya Vidyalaya No.1, Tezpur</h3>
              <div className={styles.degree}>
                Class XII <span className={styles.separator}>|</span> Percentage - 72%
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.year}>2022</div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className={styles.timelineItem}>
          <div className={styles.contentRow}>
            <div className={styles.leftContent}>
              <h3 className={styles.institution}>Kendriya Vidyalaya No.1, Tezpur</h3>
              <div className={styles.degree}>
                Class X <span className={styles.separator}>|</span> Percentage - 80%
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.year}>2020</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
