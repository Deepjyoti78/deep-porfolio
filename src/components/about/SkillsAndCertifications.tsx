"use client";

import React, { useState, useEffect } from "react";
import styles from "./SkillsAndCertifications.module.scss";
import {
  FiCalendar,
  FiExternalLink,
  FiEye,
  FiDownload,
  FiX,
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
    description: "Certificate of Participation representing GGSIPU Delhi in the competitive Ideathon organized by KCC Institute of Management and Technology.",
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
      <div className={styles.certGrid}>
        {certificates.map((cert) => (
          <div key={cert.id} className={`${styles.certCard} premium-shadow`}>
            {/* THUMBNAIL FRAME WITH HOVER PREVIEW */}
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
                  <FiEye size={13} />
                  <span>Click to Enlarge</span>
                </div>
              </div>
            </div>

            {/* CARD DETAILS */}
            <div className={styles.certContent}>
              <div className={styles.certMeta}>
                <span className={styles.issuerText}>{cert.issuer}</span>
                <span className={styles.dateRow}>
                  <FiCalendar size={11} />
                  <span>{cert.date}</span>
                </span>
              </div>

              <h3 className={styles.certTitle}>{cert.title}</h3>

              <p className={styles.certDescription}>{cert.description}</p>

              {/* CARD ACTIONS */}
              <div className={styles.cardActions}>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className={styles.viewBtn}
                  aria-label={`View ${cert.title}`}
                >
                  <FiEye size={13} />
                  <span>View Certificate</span>
                </button>

                <div className={styles.actionsRight}>
                  {cert.externalUrl && (
                    <a
                      href={cert.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconActionBtn}
                      title="Verify on Unstop"
                      aria-label="Verify on Unstop"
                    >
                      <FiExternalLink size={13} />
                    </a>
                  )}

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      download={`${cert.id}-certificate.pdf`}
                      className={styles.iconActionBtn}
                      title="Download Certificate"
                      aria-label="Download Certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiDownload size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CENTERED LIGHTBOX MODAL ================= */}
      {selectedCert && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className={styles.modalBox}
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
                    download={`${selectedCert.id}-certificate.pdf`}
                    className={styles.modalDownloadBtn}
                    title="Download Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiDownload size={13} />
                    <span>Download</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className={styles.modalCloseBtn}
                  aria-label="Close modal"
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>

            {/* Modal Image Body (Centered) */}
            <div className={styles.modalBody}>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className={styles.modalImg}
              />
            </div>

            {/* Modal Footer */}
            <div className={styles.modalFooter}>
              <p className={styles.modalDesc}>{selectedCert.description}</p>
              {selectedCert.externalUrl && (
                <a
                  href={selectedCert.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalVerifyLink}
                >
                  <FiExternalLink size={12} />
                  <span>Verify Credential</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
