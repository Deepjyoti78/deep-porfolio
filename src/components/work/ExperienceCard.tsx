import React from 'react';
import styles from './ExperienceCard.module.scss';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: "Frontend Engineer (Client Project)",
    company: "Vellora Healthcare",
    duration: "2026",
    location: "Frontend Web App (Backend in Progress)",
    badge: "HealthTech (Frontend Prototype)",
    description: "Engineered an in-home clinical care frontend web application for patient specialist consultations and 3-step appointment booking, with backend API integration in active development.",
    highlights: [
      "Built responsive client portals for Patients and Clinicians with modern component design.",
      "Implemented instant specialist discovery with faceted department filtering and simulated availability.",
      "Engineered high-performance Next.js 15 & React 19 interface with interactive booking flows.",
      "Full-stack backend architecture (database schema, auth & clinical APIs) currently in active development."
    ],
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "UI/UX", "REST APIs (In Progress)"],
    impact: ["Interactive Client UI", "Faceted Doctor Filter", "Backend In Progress"]
  },
  {
    title: "Distributed Systems Engineer",
    company: "RelayForge",
    duration: "2026",
    location: "Distributed Cloud",
    badge: "Distributed Systems",
    description: "Architected a high-throughput webhook delivery and distributed workflow engine with at-least-once delivery guarantees and anti-SSRF protections.",
    highlights: [
      "Decoupled high-frequency ingestion APIs from asynchronous BullMQ workers backed by Redis.",
      "Implemented optimistic worker concurrency via PostgreSQL row locks (SKIP LOCKED) and monotonic leases.",
      "Hardened HTTP transport against DNS rebinding and SSRF via socket pinning and multi-IP validation."
    ],
    skills: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "TypeScript", "Docker"],
    impact: ["At-Least-Once Delivery", "Anti-SSRF Protection", "Monotonic Lease Claims"]
  },
  {
    title: "Systems & Simulation Engineer",
    company: "ConcurrencyLab",
    duration: "2026",
    location: "Systems & Simulation",
    badge: "C++20 / OS Core",
    description: "Developed an interactive operating systems simulator coupling an authoritative C++20 instruction engine to a React 19 time-travel debugger with O(1) state restoration.",
    highlights: [
      "Engineered native C++20 simulation core executing 10 concurrency & deadlock experiments.",
      "Built deterministic time-travel debugger with cycle-by-cycle reverse/forward stepping without drift.",
      "Created interactive visualizers for Thread Lanes, Resource Allocation Graphs (RAG), and Dining Philosophers."
    ],
    skills: ["C++20", "React 19", "TypeScript", "Node.js IPC", "Zustand", "Tailwind CSS"],
    impact: ["O(1) Snapshot Restoration", "Native C++20 Core", "Formal Deadlock Detection"]
  },
  {
    title: "Creative Frontend Engineer",
    company: "The Detour",
    duration: "2026",
    location: "Self-Drive Platform",
    badge: "Creative Frontend",
    description: "Developed a tactile editorial self-drive road trip portal featuring curated scenic route schematics, waypoint elevation profiles, and responsive fleet reservations.",
    highlights: [
      "Crafted custom tactile UI physics featuring responsive button press animations and warm typography.",
      "Built interactive scenic route atlas with elevation profiles, waypoint markers, and packing checklists.",
      "Engineered multi-hub fleet reservation across major metropolitan transit collection depots."
    ],
    skills: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    impact: ["Tactile UI Physics", "Curated Route Atlas", "3-Step Fleet Reservation"]
  },
  {
    title: "UI/UX Lead",
    company: "RoboGyan Robotics Society",
    duration: "June 2024 – Jan 2025",
    location: "Delhi, India",
    badge: "Leadership",
    description: "Led the UI/UX team for RoboGyan, directing design systems, event assets, and digital experiences across workshops and hackathons.",
    highlights: [
      "Directed creative visual identity and branding across university technical workshops and events.",
      "Designed promotional creatives, certificates, and presentation decks using Figma and Canva.",
      "Collaborated with engineering teams to ensure consistent design implementation."
    ],
    skills: ["Figma", "UI/UX Design", "Branding", "Creative Direction", "Leadership"],
    impact: ["Creative Direction", "Cross-Functional Leadership", "Brand Identity"]
  },
  {
    title: "Hackathon Participant",
    company: "Multiple National Hackathons",
    duration: "2024 – Present",
    location: "Delhi NCR",
    badge: "Hackathons",
    description: "Competed in high-intensity national hackathons, rapidly prototyping full-stack solutions and delivering working MVPs under strict 24–48 hour deadlines.",
    highlights: [
      "Collaborated in multidisciplinary teams to ideate, architect, and deploy end-to-end prototypes.",
      "Designed intuitive user interfaces and built responsive frontends using React and modern tooling.",
      "Delivered technical pitches and product demonstrations to industry juries and developer panels."
    ],
    skills: ["React", "Rapid Prototyping", "Full-Stack Dev", "Teamwork", "Product Strategy"],
    impact: ["Rapid Prototyping", "Competitive Sprints", "Product Architecture"]
  }
];

export function ExperienceCard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '16px', width: '100%' }}>
      {experiences.map((exp, index) => (
        <div key={index} className={`${styles.card} premium-shadow`}>
          <div className={styles.header}>
            <div className={styles.roleInfo}>
              <div className={styles.meta}>
                <h3 style={{ margin: 0, fontSize: '19px', fontWeight: 600, color: 'var(--neutral-on-background-strong)', letterSpacing: '-0.01em' }}>
                  {exp.title}
                </h3>
                <div style={{ color: 'var(--neutral-on-background-weak)', fontSize: '14px', marginBottom: '6px', fontWeight: 400 }}>
                  {exp.company}
                </div>
                <div className={styles.details}>
                  <div className={styles.detailItem} style={{ color: 'var(--neutral-on-background-weak)', opacity: 0.7 }}>
                    <FiCalendar size={13} />
                    <span>{exp.duration}</span>
                  </div>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--neutral-border-strong)' }} />
                  <div className={styles.detailItem} style={{ color: 'var(--neutral-on-background-weak)', opacity: 0.7 }}>
                    <FiMapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.badge}>
              {exp.badge}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Overview</div>
              <p style={{ color: 'var(--neutral-on-background-medium)', fontSize: '14px', lineHeight: '1.55', marginBottom: '12px' }}>
                {exp.description}
              </p>
              <ul className={styles.list}>
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className={styles.listItem}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.bottomSplit}>
              <div className={styles.skillsContainer}>
                <div className={styles.sectionTitle} style={{ marginBottom: '12px' }}>Key Skills</div>
                <div className={styles.techs}>
                  {exp.skills.map((skill) => (
                    <div key={skill} className={styles.techPill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.impactContainer}>
                <div className={styles.sectionTitle} style={{ marginBottom: '12px' }}>Impact</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {exp.impact.map((item, i) => (
                    <div key={i} style={{ color: 'var(--neutral-on-background-strong)', fontSize: '13px', fontWeight: 500 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
