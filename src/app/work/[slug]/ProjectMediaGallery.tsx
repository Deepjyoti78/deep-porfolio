"use client";

import React, { useState } from "react";
import styles from "./ProjectDetail.module.scss";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectMediaGalleryProps {
  images: string[];
  title: string;
  demoUrl?: string;
}

export function ProjectMediaGallery({ images, title, demoUrl }: ProjectMediaGalleryProps) {
  // If 3 images: [0: top, 1: center, 2: bottom]
  const hasMultiple = images.length >= 2;
  const defaultCenter = images.length >= 3 ? 1 : 0;
  const [activeIdx, setActiveIdx] = useState(defaultCenter);

  // Top image index is 0 unless 0 is active (then show 1)
  const topIdx = images.length >= 3 ? (activeIdx === 0 ? 1 : 0) : (images.length === 2 && activeIdx !== 0 ? 0 : null);
  // Bottom image index is 2 unless 2 is active (then show 1)
  const bottomIdx = images.length >= 3 ? (activeIdx === 2 ? 1 : 2) : (images.length === 2 && activeIdx !== 1 ? 1 : null);

  const topImg = topIdx !== null ? images[topIdx] : null;
  const centerImg = images[activeIdx] || images[0] || "";
  const bottomImg = bottomIdx !== null ? images[bottomIdx] : null;

  return (
    <div className={styles.verticalGallery}>
      {/* TOP IMAGE (ABOVE CENTER) */}
      {topImg && (
        <div
          className={styles.secondaryImageWrapper}
          onClick={() => topIdx !== null && setActiveIdx(topIdx)}
          title="Click to view in center"
          role="button"
          tabIndex={0}
        >
          <img src={topImg} alt={`${title} preview top`} loading="eager" />
          <div className={styles.imageOverlayHint}>
            <span>View Preview</span>
          </div>
        </div>
      )}

      {/* CENTER IMAGE (MAIN THUMBNAIL) */}
      <div className={styles.centerImageWrapper}>
        <img src={centerImg} alt={title} loading="eager" />

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveBadge}
            aria-label={`Open ${title} live demo`}
          >
            <span className={styles.liveDot} />
            Live Demo
          </a>
        )}

        <div className={styles.imageCaptionBar}>
          <span className={styles.imageCaptionTitle}>{title}</span>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageCaptionLink}
            >
              Visit Site <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>

      {/* BOTTOM IMAGE (BELOW CENTER) */}
      {bottomImg && (
        <div
          className={styles.secondaryImageWrapper}
          onClick={() => bottomIdx !== null && setActiveIdx(bottomIdx)}
          title="Click to view in center"
          role="button"
          tabIndex={0}
        >
          <img src={bottomImg} alt={`${title} preview bottom`} loading="lazy" />
          <div className={styles.imageOverlayHint}>
            <span>View Preview</span>
          </div>
        </div>
      )}
    </div>
  );
}

