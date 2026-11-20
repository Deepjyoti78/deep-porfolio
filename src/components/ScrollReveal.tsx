"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./ScrollReveal.module.scss";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
