"use client";

import React, { useState, useEffect } from "react";
import styles from "./SkillsAndCertifications.module.scss";
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
    title: "National Hackathon 2026",
    issuer: "Hackveda VMDD Technologies",
    date: "15 Feb 2026",
    badge: "Full-Stack MVP",
    badgeColor: "#3b82f6",
    image: "/images/certificates/hackveda-certificate.png",
    pdfUrl: "/images/certificates/hackveda-certificate.png",
    description: "Certificate of Recognition awarded for building and presenting high-impact full-stack solutions during competitive sprint rounds.",
  },
  {
    id: "hpe-software",
    title: "Software Engineering Simulation",
    issuer: "Hewlett Packard Enterprise (Forage)",
    date: "Sep 2024",
    badge: "Architecture & Systems",
    badgeColor: "#10b981",
    image: "/images/certificates/hpe-software-engineering-certificate.png",
    pdfUrl: "/images/certificates/hpe-software-engineering-certificate.png",
    description: "Completed comprehensive software engineering job simulation covering REST APIs, architecture design, and enterprise engineering practices.",
  },
  {
    id: "tcs-ion",
    title: "TCS iON Career Edge - Young Professional",
    issuer: "Tata Consultancy Services",
    date: "Jul 2024",
    badge: "Professional Skills",
    badgeColor: "#f59e0b",
    image: "/images/certificates/tcs-ion-certificate.png",
    pdfUrl: "/images/certificates/tcs-ion-certificate.png",
    description: "Comprehensive industry readiness program covering business communication, presentation mastery, IT foundational skills, and modern agile workflows.",
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

                <p className={styles.certDesc}>{cert.description}</p>

                {/* ACTION BUTTONS */}
                <div className={styles.actionsRow}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className={styles.viewBtn}
                    aria-label={`Inspect ${cert.title}`}
                  >
                    <FiEye size={13} />
                    <span>View Certificate</span>
                  </button>

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      download={`${cert.id}-certificate.png`}
                      className={styles.downloadIconBtn}
                      title="Download Certificate"
                      aria-label="Download Certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiDownload size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL LIGHTBOX ================= */}
      {selectedCert && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderInfo}>
                <div className={styles.modalBadgeRow}>
                  <span
                    className={styles.pillDot}
                    style={{ backgroundColor: selectedCert.badgeColor }}
                  />
                  <span className={styles.modalBadgeText}>
                    {selectedCert.badge}
                  </span>
                </div>
                <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
                <span className={styles.modalSubtitle}>
                  Issued by {selectedCert.issuer} • {selectedCert.date}
                </span>
              </div>
              <div className={styles.modalHeaderActions}>
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    download={`${selectedCert.id}-certificate.png`}
                    className={styles.modalActionBtn}
                    title="Download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiDownload size={15} />
                    <span>Download</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className={styles.modalCloseBtn}
                  aria-label="Close modal"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className={styles.modalImageContainer}>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className={styles.modalImg}
              />
            </div>

            {/* Modal Footer Description */}
            <div className={styles.modalFooter}>
              <p>{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
