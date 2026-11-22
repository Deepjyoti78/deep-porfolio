"use client";

import React, { useState } from "react";
import styles from "./ProjectDetail.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProjectMediaGalleryProps {
  images: string[];
  title: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectMediaGallery({
  images,
  title,
  demoUrl,
  githubUrl,
}: ProjectMediaGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const total = images.length;
  if (total === 0) return null;

  const currentImage = images[activeIdx] || images[0];

  const changeImage = (newIdx: number) => {
    if (newIdx === activeIdx) return;
    setIsLoading(true);
    setActiveIdx(newIdx);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    changeImage((activeIdx + 1) % total);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    changeImage((activeIdx - 1 + total) % total);
  };

  const handleDotClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    changeImage(idx);
  };

  return (
    <div
      className={styles.singleImageCard}
      onClick={() => total > 1 && handleNext()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNext();
        } else if (e.key === "ArrowRight") {
          handleNext();
        } else if (e.key === "ArrowLeft") {
          handlePrev(e as any);
        }
      }}
      aria-label={`Project screenshot ${activeIdx + 1} of ${total}. Click to view next.`}
      title={total > 1 ? "Click to view next screenshot" : title}
    >
      {/* SCREENSHOT CONTAINER (GUARANTEED STABLE ASPECT RATIO) */}
      <div className={styles.imageDisplayWrapper}>
        <img
          key={currentImage}
          src={currentImage}
          alt={`${title} screenshot ${activeIdx + 1}`}
          className={`${styles.projectScreenshot} ${isLoading ? styles.imgLoading : ""}`}
          loading="eager"
          onLoad={() => setIsLoading(false)}
        />

        {/* LOADING OVERLAY CONFINED EXCLUSIVELY TO LEFT IMAGE */}
        {isLoading && (
          <div className={styles.imageLoadingOverlay}>
            <div className={styles.loadingSpinner} />
            <span className={styles.loadingLabel}>Loading screenshot...</span>
          </div>
        )}

        {/* CHEVRON NAVIGATION (IF MULTIPLE IMAGES) */}
        {total > 1 && (
          <>
            <button
              type="button"
              className={`${styles.galleryNavBtn} ${styles.galleryNavPrev}`}
              onClick={handlePrev}
              aria-label="Previous screenshot"
              title="Previous screenshot"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              className={`${styles.galleryNavBtn} ${styles.galleryNavNext}`}
              onClick={handleNext}
              aria-label="Next screenshot"
              title="Next screenshot"
            >
              <FiChevronRight />
            </button>
          </>
        )}
      </div>

      {/* BOTTOM PAGINATION & INDICATORS */}
      {total > 1 && (
        <div className={styles.galleryFooter}>
          <div className={styles.dotIndicators}>
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.indicatorDot} ${idx === activeIdx ? styles.indicatorActive : ""}`}
                onClick={(e) => handleDotClick(idx, e)}
                aria-label={`Jump to screenshot ${idx + 1}`}
              />
            ))}
          </div>

          <div className={styles.counterBadge}>
            <span className={styles.counterText}>
              {activeIdx + 1} / {total}
            </span>
            <span className={styles.clickHint}>• Click image for next</span>
          </div>
        </div>
      )}
    </div>
  );
}
