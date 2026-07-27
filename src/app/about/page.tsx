import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { ExperienceCard } from "@/components/work/ExperienceCard";
import { EducationCard } from "@/components/work/EducationCard";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

const PlusIcon = ({ style }: { style?: React.CSSProperties }) => (
  <div style={{ position: "absolute", width: "15px", height: "15px", zIndex: 10, ...style }}>
    <div style={{ position: "absolute", left: "7px", top: "1px", bottom: "1px", width: "1px", borderLeft: "1px solid var(--neutral-border-medium)", borderRadius: "1px" }} />
    <div style={{ position: "absolute", top: "7px", left: "1px", right: "1px", height: "1px", borderTop: "1px solid var(--neutral-border-medium)", borderRadius: "1px" }} />
  </div>
);

const GridSection = ({ children, hideBottomBorder = false, isFirst = false, style, ...rest }: any) => (
  <Column 
    fillWidth 
    position="relative" 
    style={style}
    {...rest}
  >
    <div style={{ position: "absolute", left: "-1px", top: isFirst ? "-120px" : "10px", bottom: hideBottomBorder ? 0 : "10px", width: "1px", borderLeft: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
    <div style={{ position: "absolute", right: "-1px", top: isFirst ? "-120px" : "10px", bottom: hideBottomBorder ? 0 : "10px", width: "1px", borderRight: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
    {children}
    {!hideBottomBorder && (
      <>
        <div style={{ position: "absolute", bottom: 0, left: "10px", right: "10px", height: "1px", borderBottom: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: "calc(100% + 10px)", width: "calc(50vw - 50%)", height: "1px", borderBottom: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "calc(100% + 10px)", width: "calc(50vw - 50%)", height: "1px", borderBottom: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
        <PlusIcon style={{ bottom: "-7px", left: "-8px" }} />
        <PlusIcon style={{ bottom: "-7px", right: "-8px" }} />
      </>
    )}
  </Column>
);

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column
      maxWidth="m"
      style={{}}
    >
      <style>{`
        .mobile-about-card {
          width: calc(100% - 32px);
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .mobile-about-card {
            width: calc(100% - 16px) !important;
          }
          .mobile-about-card-padding {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
      `}</style>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <GridSection isFirst paddingTop="32" paddingBottom="32">
        <Row 
          fillWidth 
          s={{ direction: "column", padding: "16", gap: "16" }} 
          horizontal="center" 
          padding="24"
          className="mobile-about-card mobile-about-card-padding"
          style={{
            backgroundColor: "var(--surface-background)",
            border: "1px solid var(--neutral-border-strong)",
            borderRadius: "24px",
            position: "relative"
          }}
        >
          {/* Desktop absolute button removed */}
          {/* --- DESKTOP VIEW --- */}
          <Row className="hide-on-mobile" fillWidth gap="24" vertical="center" paddingX="16" paddingY="16">
            {/* Left Column */}
            <Column flex={6} gap="24" horizontal="start">
              <Column gap="12" horizontal="start">
                {about.calendar.display && (
                  <a
                    href={about.calendar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "9999px",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      textDecoration: "none",
                      background: "linear-gradient(to bottom, #2f2f2f 0%, #1e1e1e 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.15)",
                      color: "#ffffff",
                      whiteSpace: "nowrap"
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Schedule a call
                  </a>
                )}
                <Column gap="4">
                  <Heading variant="display-strong-s" style={{ whiteSpace: "nowrap", fontSize: "40px", lineHeight: "1.1" }}>{person.name}</Heading>
                  <Text variant="heading-default-m" onBackground="neutral-weak">{person.role}</Text>
                </Column>
              </Column>
              {about.intro.display && (
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ lineHeight: '1.6', textAlign: 'left', fontSize: '15px' }}>
                  {about.intro.description}
                </Text>
              )}
              {social.length > 0 && (
                <Row gap="16" wrap horizontal="start" fitWidth data-border="rounded">
                  {social.filter((item) => item.essential).map((item) => item.link && (
                    <IconButton size="m" key={`${item.name}-icon-desktop`} href={item.link} icon={item.icon} variant="secondary" />
                  ))}
                </Row>
              )}
            </Column>

            {/* Right Column */}
            <Column flex={5} gap="16" horizontal="center" align="center">
              {about.avatar.display && (
                <div style={{ 
                  position: "relative",
                  borderRadius: "20px", 
                  border: "1px solid var(--neutral-border-medium)",
                  padding: "4px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                  backgroundColor: "var(--surface-background)",
                  width: "100%",
                  maxWidth: "320px",
                  aspectRatio: "1/1"
                }}>
                  <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "16px", overflow: "hidden" }}>
                    <Image
                      src={person.avatar}
                      alt={person.name}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                </div>
              )}
            </Column>
          </Row>

          {/* --- MOBILE VIEW --- */}
          <Column className="hide-on-desktop" fillWidth gap="20">
            {/* Name and Button column */}
            <Column gap="12" align="start">
              {about.calendar.display && (
                <a
                  href={about.calendar.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "7px 14px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                    background: "linear-gradient(to bottom, #2f2f2f 0%, #1e1e1e 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.12)",
                    color: "#ffffff",
                    whiteSpace: "nowrap"
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Schedule a call
                </a>
              )}
              <Column gap="4">
                <Heading variant="display-strong-s" style={{ whiteSpace: "nowrap", fontSize: "clamp(26px, 4vw, 32px)", lineHeight: "1.1" }}>{person.name}</Heading>
                <Text variant="heading-default-s" onBackground="neutral-weak" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>{person.role}</Text>
              </Column>
            </Column>


            {about.avatar.display && (
              <div style={{ 
                position: "relative",
                borderRadius: "20px", 
                border: "1px solid var(--neutral-border-medium)",
                padding: "4px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                backgroundColor: "var(--surface-background)",
                width: "100%",
                maxWidth: "100%",
                aspectRatio: "16/9",
                margin: "0 auto"
              }}>
                <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "16px", overflow: "hidden" }}>
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                    priority
                  />
                </div>
              </div>
            )}

            {about.intro.display && (
              <Column fillWidth gap="m" style={{ fontSize: 'clamp(14px, 2vw, 15px)', lineHeight: '1.6', color: "var(--neutral-weak)" }}>
                {about.intro.description}
              </Column>
            )}

            {social.length > 0 && (
              <Row gap="16" wrap horizontal="center" fitWidth data-border="rounded" style={{ alignSelf: "center", marginBottom: "0" }}>
                {social.filter((item) => item.essential).map((item) => item.link && (
                  <IconButton size="m" key={`${item.name}-icon`} href={item.link} icon={item.icon} variant="secondary" />
                ))}
              </Row>
            )}
          </Column>
        </Row>
      </GridSection>

      <GridSection paddingY="32" className="mobile-tight-section">
        <Column className={`${styles.blockAlign} mobile-about-card`} fillWidth>
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="s">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="m" marginBottom="24">
                <ExperienceCard />
              </Column>
            </>
          )}
        </Column>
      </GridSection>

      <GridSection paddingY="32" className="mobile-tight-section">
        <Column className={`${styles.blockAlign} mobile-about-card`} fillWidth>
          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="s">
                Education
              </Heading>
              <Column fillWidth gap="m" marginBottom="24">
                <EducationCard />
              </Column>
            </>
          )}
        </Column>
      </GridSection>

      <GridSection paddingY="32" className="mobile-tight-section">
        <Column className={`${styles.blockAlign} mobile-about-card`} fillWidth>
          <Heading as="h2" id="hackathons" variant="display-strong-s" marginBottom="m">
            Hackathons
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            <Text variant="body-default-m" onBackground="neutral-weak">
              Hackathons I have participated in and projects I have built.
            </Text>
            {/* TODO: Add HackathonCard component here when content is provided */}
          </Column>
        </Column>
      </GridSection>

      <GridSection paddingY="32" className="mobile-tight-section">
        <Column className={`${styles.blockAlign} mobile-about-card`} fillWidth>
          <Heading as="h2" id="skills-certifications" variant="display-strong-s" marginBottom="m">
            Skills & Certifications
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            <Text variant="body-default-m" onBackground="neutral-weak">
              My technical skills and professional certifications.
            </Text>
            {/* TODO: Add Skills component here when content is provided */}
          </Column>
        </Column>
      </GridSection>

      <GridSection paddingY="48" hideBottomBorder>
        <Column className={`${styles.blockAlign} mobile-about-card`} fillWidth>
          {about.technical.display && (
            <>
            <Heading
              as="h2"
              id={about.technical.title}
              variant="display-strong-s"
              marginBottom="40"
            >
              {about.technical.title}
            </Heading>
            <Column fillWidth gap="l">
              {about.technical.skills.map((skill, index) => (
                <Column key={`${skill}-${index}`} fillWidth gap="4">
                  <Text id={skill.title} variant="heading-strong-l">
                    {skill.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                  {skill.images && skill.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map((image, index) => (
                        <Row
                          key={index}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
            </>
          )}
        </Column>
      </GridSection>
    </Column>
  );
}
