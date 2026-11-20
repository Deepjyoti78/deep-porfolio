"use client";

import React, { useState } from "react";
import { ScheduleCallModal } from "./ScheduleCallModal";

interface ScheduleCallButtonProps {
  isMobile?: boolean;
}

export const ScheduleCallButton: React.FC<ScheduleCallButtonProps> = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const desktopStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 16px",
    borderRadius: "9999px",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    background: "linear-gradient(180deg, #2D2F34 0%, #222428 100%)",
    border: "1px solid rgba(255, 255, 255, 0.13)",
    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.25)",
    color: "#ffffff",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const mobileStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    padding: "7px 14px",
    borderRadius: "9999px",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    background: "linear-gradient(180deg, #2D2F34 0%, #222428 100%)",
    border: "1px solid rgba(255, 255, 255, 0.13)",
    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)",
    color: "#ffffff",
    whiteSpace: "nowrap",
    flexShrink: 0,
    marginLeft: "12px",
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        style={isMobile ? mobileStyle : desktopStyle}
        className="hover-badge"
        aria-label="Schedule a call with Deepjyoti"
      >
        <svg
          width={isMobile ? 11 : 12}
          height={isMobile ? 11 : 12}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.85 }}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Schedule a call</span>
      </button>

      <ScheduleCallModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
