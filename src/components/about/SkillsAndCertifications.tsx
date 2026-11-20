"use client";

import React, { useState, useEffect } from "react";
import styles from "./SkillsAndCertifications.module.scss";
import {
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";
import {
  FiCalendar,
  FiAward,
  FiExternalLink,
  FiEye,
  FiDownload,
  FiX,
  FiFileText,
} from "react-icons/fi";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  badgeColor: string;
  image: string;
  pdfUrl?: string;
  externalUrl?: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: "hack-defence",
    title: "Hack Defense Summit 2026",
    issuer: "Sohang Education",
    date: "15 Feb 2026",
    badge: "Cybersecurity",
    badgeColor: "#a855f7",
    image: "/images/certificates/hack-defence-certificate.png",
    pdfUrl: "/images/certificates/hack-defence-certificate.png",
    description: "Certificate of Participation presented for outstanding contribution and participation in the national-level Hack Defense Summit 2026.",
  },
  {
    id: "hackveda",
    title: "Hackveda'26 — IBM & AWS",
    issuer: "IILM University × IBM-AWS",
    date: "29–30 Jan 2026",
    badge: "Cloud & Systems",
    badgeColor: "#3b82f6",
    image: "/images/certificates/hackveda-certificate.jpg",
    pdfUrl: "/images/certificates/hackveda-certificate.pdf",
    description: "Awarded for exceptional performance at Hackveda'26, conducted by School of Computer Science & Engineering at IILM University in collaboration with IBM-AWS.",
  },
  {
    id: "ideathon",
    title: "Ideathon 2024",
    issuer: "KCC-IMT × Unstop",
    date: "16 Dec 2024",
    badge: "Ideation & Innovation",
    badgeColor: "#10b981",
    image: "/images/certificates/ideathon-certificate.png",
    pdfUrl: "/images/certificates/ideathon-certificate.pdf",
    description: "Certificate of Participation representing GGSIPU Delhi (Team deepjyoti478) in the competitive Ideathon organized by KCC Institute of Management and Technology.",
  },
  {
    id: "pixel-flow",
    title: "Pixel Flow 2.0 (Synergy'24)",
    issuer: "IIIT Bangalore × Unstop",
    date: "23 Nov 2024",
    badge: "UI/UX & Frontend",
    badgeColor: "#ec4899",
    image: "/images/certificates/pixel-flow-certificate.png",
    pdfUrl: "/images/certificates/pixel-flow-certificate.pdf",
    externalUrl: "https://unstop.com/certificate-preview/e8d5f46d-f824-4c32-820f-1410ed1786ff",
    description: "Certificate of Participation in Pixel Flow 2.0 of Synergy'24 organized by International Institute of Information Technology (IIIT), Bangalore.",
  },
];

const skillIconMap: Record<string, { icon: React.FC<any>; color: string }> = {
  "C++20": { icon: SiCplusplus, color: "#00599C" },
  "C": { icon: SiCplusplus, color: "#A8B9CC" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "React 19": { icon: SiReact, color: "#61DAFB" },
  "Next.js 15": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#E6EDF3" },
  "Django": { icon: SiDjango, color: "#092E20" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Redis": { icon: SiRedis, color: "#FF4438" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "Linux": { icon: SiLinux, color: "#FCC624" },
};

const skillCategories = [
  {
    category: "Languages & Core",
    skills: ["C++20", "C", "TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frontend Engineering",
    skills: ["React 19", "Next.js 15", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "Django", "Redis"],
  },
  {
    category: "Databases & DevOps",
    skills: ["PostgreSQL", "Prisma", "Docker", "Git", "Linux"],
  },
];

export function SkillsAndCertifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <div className={styles.container}>
      {/* ================= TECHNICAL SKILLS ================= */}
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsHeader}>
          <div className={styles.sectionTitle}>Technical Expertise</div>
          <p className={styles.sectionSubtitle}>
            Languages, frameworks, systems architectures, and development toolchains.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((group) => (
            <div key={group.category} className={`${styles.skillCategoryCard} premium-shadow`}>
              <div className={styles.categoryTitle}>{group.category}</div>
              <div className={styles.pillsWrap}>
                {group.skills.map((skillName) => {
                  const meta = skillIconMap[skillName];
                  const Icon = meta?.icon;
                  const color = meta?.color || "#ffffff";
                  return (
                    <div key={skillName} className={styles.techPill}>
                      {Icon && <Icon className={styles.techIcon} style={{ color }} />}
                      <span>{skillName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CERTIFICATIONS GRID ================= */}
      <div className={styles.certificationsWrapper}>
        <div className={styles.skillsHeader}>
          <div className={styles.sectionTitle}>Verified Certifications</div>
          <p className={styles.sectionSubtitle}>
            National hackathons, competitive summits, and institutional accreditations.
          </p>
        </div>

        <div className={styles.certGrid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={`${styles.certCard} premium-shadow`}>
              {/* IMAGE FRAME WITH PREVIEW OVERLAY */}
              <div
                className={styles.imageFrame}
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.title} certificate`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={styles.certImage}
                  loading="lazy"
                />
                <div className={styles.topPillBadge}>
                  <span
                    className={styles.pillDot}
                    style={{ backgroundColor: cert.badgeColor }}
                  />
                  <span>{cert.badge}</span>
                </div>
                <div className={styles.previewOverlay}>
                  <div className={styles.previewBadge}>
                    <FiEye size={14} />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className={styles.certContent}>
                <div className={styles.certMeta}>
                  <span className={styles.issuerText}>{cert.issuer}</span>
                  <span className={styles.dateRow}>
                    <FiCalendar size={12} />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certDescription}>{cert.description}</p>

                {/* CARD ACTIONS */}
                <div className={styles.cardActions}>
                  <button
                    type="button"
                    className={`${styles.actionBtn} ${styles.previewBtn}`}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <FiEye size={13} />
                    <span>Unlock Certificate</span>
                  </button>

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.externalBtn}`}
                      title="Open full resolution certificate"
                    >
                      <FiFileText size={13} />
                      <span>Original Document</span>
                      <FiExternalLink size={12} />
                    </a>
                  )}

                  {cert.externalUrl && !cert.pdfUrl && (
                    <a
                      href={cert.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.externalBtn}`}
                    >
                      <span>Verify Credential</span>
                      <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CERTIFICATE POPUP MODAL (MINIMAL BOUNDARY) ================= */}
      {selectedCert && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimal Floating Close Button */}
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
            >
              <FiX size={16} />
            </button>

            {/* Certificate Image Body - Zero / Minimal Boundary */}
            <div className={styles.modalBody}>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className={styles.modalImg}
              />
            </div>

            {/* Minimal Floating Action Bar (Download & Verify) */}
            <div className={styles.floatingActionBar}>
              {selectedCert.pdfUrl && (
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={styles.modalDownloadBtn}
                >
                  <FiDownload size={14} />
                  <span>Download Certificate</span>
                </a>
              )}
              {selectedCert.externalUrl && (
                <a
                  href={selectedCert.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalVerifyBtn}
                >
                  <FiExternalLink size={13} />
                  <span>Verify</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}