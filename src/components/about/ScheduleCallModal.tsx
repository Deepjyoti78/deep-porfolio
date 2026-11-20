"use client";

import React, { useState, useEffect } from "react";
import styles from "./ScheduleCallModal.module.scss";
import { FiCalendar, FiX, FiMail, FiUser, FiClock, FiMessageSquare, FiSend, FiCheckCircle } from "react-icons/fi";
import { person } from "@/resources";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Project Collaboration");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[Call Request] ${topic} - from ${name}`);
    const bodyContent = `Hi ${person.firstName},

I would like to schedule a call with you.

Here are my details:
• Name: ${name}
• Email: ${email}
• Topic: ${topic}
• Preferred Date/Time: ${preferredDate || "Flexible"}

Message / Agenda:
${message || "Looking forward to speaking with you!"}

Best regards,
${name} (${email})`;

    const mailtoUrl = `mailto:${person.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Open user's email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPreferredDate("");
    setMessage("");
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleWrap}>
            <div className={styles.iconBadge}>
              <FiCalendar size={18} />
            </div>
            <div>
              <h3 className={styles.title}>Schedule a Call</h3>
              <p className={styles.subtitle}>Directly reach {person.name} for projects or inquiries</p>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close schedule modal"
          >
            <FiX size={16} />
          </button>
        </div>

        {submitted ? (
          /* Success View */
          <div className={styles.successView}>
            <div className={styles.successIcon}>
              <FiCheckCircle size={36} />
            </div>
            <h4 className={styles.successTitle}>Request Formatted!</h4>
            <p className={styles.successDesc}>
              Your default email app has been opened with all your details prefilled for <strong>{person.name}</strong>.
            </p>
            <div className={styles.emailFallbackCard}>
              <span>Recipient Email:</span>
              <a href={`mailto:${person.email}`} className={styles.emailLink}>
                {person.email}
              </a>
            </div>
            <button
              type="button"
              className={styles.doneBtn}
              onClick={handleReset}
            >
              Done
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Name Field */}
            <div className={styles.fieldGroup}>
              <label htmlFor="sched-name" className={styles.label}>
                <FiUser size={13} />
                <span>Your Name</span>
              </label>
              <input
                id="sched-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson"
                className={styles.input}
              />
            </div>

            {/* Email Field */}
            <div className={styles.fieldGroup}>
              <label htmlFor="sched-email" className={styles.label}>
                <FiMail size={13} />
                <span>Your Email Address</span>
              </label>
              <input
                id="sched-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. alex@example.com"
                className={styles.input}
              />
            </div>

            {/* Topic & Date Row */}
            <div className={styles.twoCol}>
              <div className={styles.fieldGroup}>
                <label htmlFor="sched-topic" className={styles.label}>
                  <FiMessageSquare size={13} />
                  <span>Discussion Topic</span>
                </label>
                <select
                  id="sched-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className={styles.select}
                >
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Full-Time / Hiring">Full-Time / Hiring</option>
                  <option value="Freelance / Contract">Freelance / Contract</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="sched-date" className={styles.label}>
                  <FiClock size={13} />
                  <span>Preferred Date / Time</span>
                </label>
                <input
                  id="sched-date"
                  type="text"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  placeholder="e.g. Tomorrow at 4 PM"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className={styles.fieldGroup}>
              <label htmlFor="sched-message" className={styles.label}>
                <span>Brief Agenda / Notes (Optional)</span>
              </label>
              <textarea
                id="sched-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a brief note about what you'd like to discuss..."
                className={styles.textarea}
              />
            </div>

            {/* Footer / Submit */}
            <div className={styles.footer}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.submitBtn}
              >
                <FiSend size={13} />
                <span>Send to My Email</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
