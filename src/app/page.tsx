import {
  Heading,
  Text,
  Button,
  Avatar,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
} from "@once-ui-system/core";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });
import { home, about, person, baseURL, routes, work } from "@/resources";
import { Mailchimp, TechMarquee } from "@/components";
import { Projects } from "@/components/work/Projects";
import { GridProjects } from "@/components/work/GridProjects";
import { ExperienceCard } from "@/components/work/ExperienceCard";
import { EducationCard } from "@/components/work/EducationCard";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const PlusIcon = ({ style }: { style?: React.CSSProperties }) => (
  <div style={{ position: "absolute", width: "15px", height: "15px", zIndex: 10, ...style }}>
    <div style={{ position: "absolute", left: "7px", top: "1px", bottom: "1px", width: "1px", borderLeft: "1px solid var(--neutral-border-medium)", borderRadius: "1px" }} />
    <div style={{ position: "absolute", top: "7px", left: "1px", right: "1px", height: "1px", borderTop: "1px solid var(--neutral-border-medium)", borderRadius: "1px" }} />
  </div>
);

const GridSection = ({ children, hideBottomBorder = false, isFirst = false, style, ...rest }: any) => (
  <Column fillWidth position="relative" style={style} {...rest}>
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

const TerminalWindow = () => (
  <div className={`terminal-wrapper terminal-bg ${jetbrainsMono.className}`} style={{
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #30363d",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.2)",
    overflow: "hidden",
    fontSize: "13px",
    color: "#E6EDF3",
    marginTop: "16px",
    textAlign: "left",
    fontWeight: 500,
    letterSpacing: "-0.2px"
  }}>
    <style dangerouslySetInnerHTML={{ __html: `
      .terminal-wrapper, .terminal-wrapper * {
        font-family: ${jetbrainsMono.style.fontFamily} !important;
      }
      .terminal-bg {
        background-color: #0d1117;
      }
      [data-theme="dark"] .terminal-bg {
        background-color: #17171B !important;
      }
      @media (max-width: 768px) {
        .terminal-wrapper {
          font-size: 11px !important;
        }
        .terminal-wrapper .terminal-header {
          padding: 6px 12px !important;
        }
        .terminal-wrapper .terminal-header-text {
          font-size: 11px !important;
        }
        .terminal-wrapper .terminal-body {
          padding: 2px 12px !important;
        }
        .terminal-wrapper .terminal-row {
          padding: 3px 0 !important;
        }
        .terminal-wrapper .terminal-icon {
          width: 14px !important;
        }
        .terminal-wrapper .terminal-label-col {
          width: 100px !important;
        }
        .mobile-tight-section {
          padding-left: 8px !important;
          padding-right: 8px !important;
          padding-bottom: 16px !important;
        }
        .mobile-tight-card {
          padding-left: 12px !important;
          padding-right: 12px !important;
          padding-top: 24px !important;
          padding-bottom: 24px !important;
        }
        .mobile-h2-match {
          font-size: clamp(2rem, 3vw + 1rem, 3rem) !important;
          line-height: 1.05 !important;
          letter-spacing: -0.04em !important;
          font-weight: 700 !important;
        }
      }
    `}} />
    <div className="terminal-bg terminal-header" style={{
      display: "flex",
      alignItems: "center",
      padding: "10px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f" }} />
      </div>
      <div className="terminal-header-text" style={{ flex: 1, textAlign: "center", color: "rgba(255,255,255,0.55)", fontSize: "13px", fontWeight: 500, marginRight: "44px" }}>
        deepjyoti@portfolio:~
      </div>
    </div>
    <div className="terminal-body" style={{ padding: "2px 16px" }}>
      {[
        { icon: "briefcase", key: "Experience", value: "2+ Years" },
        { icon: "folder", key: "Projects", value: "15+ Completed" },
        { icon: "book", key: "Education", value: "B.Tech CSE, GGSIPU" },
        { icon: "code", key: "Specialization", value: "Full Stack Web, UI/UX, REST APIs", isMultiline: true },
        { icon: "github", key: "GitHub Repos", value: "40+" },
        { icon: "mapPin", key: "Location", value: "Delhi, India" },
        { icon: "globe", key: "Languages", value: "English, Hindi, Bengali, Assamese", isMultiline: true },
      ].map((item, i, arr) => (
        <div key={item.key} className="terminal-row" style={{ 
          display: "flex", 
          padding: "6px 0",
          borderBottom: i === arr.length - 1 ? "none" : "1px dashed rgba(255,255,255,0.08)",
          alignItems: item.isMultiline ? "flex-start" : "center"
        }}>
          <div className="terminal-icon" style={{ width: "18px", display: "flex", justifyContent: "center", marginRight: "10px", opacity: 0.8, paddingTop: item.isMultiline ? "2px" : "0" }}>
            <Icon name={item.icon} size="s" />
          </div>
          <div style={{ display: "flex", flex: 1, flexDirection: "row", flexWrap: "nowrap", gap: "0" }}>
            <div className="terminal-label-col" style={{ display: "flex", alignItems: "flex-start", width: "135px", flexShrink: 0 }}>
              <span style={{ color: "#67E480", marginRight: "10px" }}>{">"}</span>
              <span style={{ color: "#67E480" }}>{item.key}</span>
            </div>
            <div style={{ display: "flex", flex: 1, minWidth: 0 }}>
              <span style={{ marginRight: "12px", color: "rgba(255,255,255,0.55)" }}>:</span>
              <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.45", wordBreak: "break-word" }}>{item.value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <Column
      maxWidth="m"
      paddingBottom="12"
      horizontal="center"
      style={{}}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <GridSection isFirst style={{ paddingTop: "24px" }}>
        <Row fillWidth paddingX="s" paddingBottom="48" horizontal="center" className="mobile-tight-section">
          <Row 
            fillWidth 
            background="surface" 
            paddingX="32"
            paddingY="48" 
            radius="l" 
            border="neutral-medium" 
            gap="24"
            vertical="center"
            className="premium-shadow mobile-tight-card"
            s={{ direction: "column" }}
          >
            {/* Left Column (Text & Buttons) */}
            <Column style={{ flex: 1.2 }} gap="20" position="relative" horizontal="start" align="start">
              <div style={{
                position: "absolute",
                top: "50%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                width: "150%",
                height: "150%",
                background: "radial-gradient(circle, rgba(128, 90, 213, 0.2) 0%, rgba(128, 90, 213, 0.05) 40%, rgba(128, 90, 213, 0) 70%)",
                zIndex: 0,
                pointerEvents: "none"
              }} />
              
              <div style={{ zIndex: 1 }}>
                {home.featured.display && (
                  <div className="animate-fade-up animate-delay-1" style={{ width: '100%' }}>
                    <a
                      href={home.featured.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        backgroundColor: "var(--neutral-alpha-weak)",
                        color: "var(--neutral-on-background-strong)",
                        fontSize: "11px",
                        fontWeight: "400",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        marginBottom: "16px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
                      }}
                      className="hover-badge"
                    >
                      {home.featured.title} <span style={{ color: "var(--neutral-on-background-weak)" }}>›</span>
                    </a>
                  </div>
                )}
                <div className="animate-fade-up animate-delay-2" style={{ width: '100%' }}>
                  <Heading
                    align="start"
                    variant="display-strong-xl"
                    className="mobile-h2-match"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                      lineHeight: "1.05",
                      letterSpacing: "-0.04em",
                      fontWeight: "700",
                      textAlign: "left"
                    }}
                  >
                    {home.headline}
                  </Heading>
                </div>

                {/* Mobile Terminal */}
                <div className="hide-on-desktop" style={{ width: "100%", marginTop: "12px", marginBottom: "12px" }}>
                  <div className="animate-fade-up animate-delay-3" style={{ width: '100%' }}>
                    <TerminalWindow />
                  </div>
                </div>

                <div className="animate-fade-up animate-delay-3" style={{ width: '100%' }}>
                  <Text
                    wrap="balance"
                    onBackground="neutral-weak"
                    className="hero-description"
                    style={{
                      fontSize: "clamp(0.8rem, 0.9vw, 0.875rem)",
                      lineHeight: "1.6",
                      fontWeight: "400",
                      marginTop: "0.5rem",
                      maxWidth: "800px",
                      textAlign: "left",
                    }}
                  >
                    {home.subline}
                  </Text>
                </div>
                <div className="animate-fade-up animate-delay-4" style={{ paddingTop: '24px', width: '100%' }}>
                  <Row gap="16" horizontal="start" fillWidth s={{ gap: "8" }}>
                    <Button
                      id="about"
                      className="hover-btn hero-about-btn"
                      href={about.path}
                      variant="secondary"
                      size="s"
                      style={{
                        borderRadius: "9999px",
                        fontWeight: "500",
                        padding: "0 14px",
                        fontSize: "13px"
                      }}
                    >
                      <span className="mobile-btn-text">About {person.firstName}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon" style={{ marginLeft: "4px", position: "relative", top: "1px" }}><path d="m9 18 6-6-6-6" /></svg>
                    </Button>
                    <Button
                      id="work"
                      className="hover-btn cal-btn-secondary"
                      href="/work"
                      variant="secondary"
                      size="s"
                      style={{
                        borderRadius: "9999px",
                        fontWeight: "500",
                        padding: "0 14px",
                        fontSize: "13px"
                      }}
                    >
                      View Projects
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon" style={{ marginLeft: "4px", position: "relative", top: "1px" }}><path d="m9 18 6-6-6-6" /></svg>
                    </Button>
                  </Row>
                </div>
              </div>
            </Column>

            {/* Right Column (Terminal) */}
            <Column className="hide-on-mobile" style={{ flex: 1.1 }} fillWidth position="relative" horizontal="end" align="end" s={{ align: "center" }}>
              <div className="animate-fade-up animate-delay-3" style={{ width: '100%' }}>
                <div style={{ width: "100%", maxWidth: "480px", marginLeft: "auto" }}>
                  <TerminalWindow />
                </div>
              </div>
            </Column>
          </Row>
        </Row>
      </GridSection>

      <GridSection paddingY="16" s={{ paddingY: "8" }}>
        <Row 
          fillWidth 
          vertical="center" 
          paddingX="l" 
          s={{ direction: "column", gap: "12", alignItems: "center", paddingX: "16" }}
        >
          {/* Desktop Text */}
          <Text className="hide-on-mobile" wrap="balance" onBackground="neutral-weak" style={{ fontSize: "14px", fontWeight: 400, minWidth: "180px", flexShrink: 0 }}>
            My tech stack for building <br /> scalable applications
          </Text>

          {/* Mobile Text */}
          <Heading as="h3" variant="heading-strong-xl" className="hide-on-desktop mobile-h2-match" style={{ alignSelf: "flex-start", marginBottom: "16px" }}>
            Tech Stack
          </Heading>

          <Row flex={1} fillWidth overflow="hidden" style={{ marginLeft: "16px" }} s={{ marginLeft: "0", width: "100%" }}>
            <TechMarquee />
          </Row>
        </Row>
      </GridSection>

      <GridSection paddingY="48" s={{ paddingY: "12" }}>
        <Column gap="16" fillWidth>
          <Column fillWidth paddingX="l" gap="8" s={{ paddingX: "16" }}>
            <Row fillWidth vertical="center" horizontal="between" style={{ width: "100%" }}>
              <Heading as="h2" variant="heading-strong-xl">
                Projects
              </Heading>
              {/* Desktop Button */}
              <Button
                className="hover-btn section-primary-btn hide-on-mobile"
                href={work.path}
                variant="primary"
                size="s"
                arrowIcon
                style={{ borderRadius: '9999px', fontSize: '12px', fontWeight: '500', padding: '0 12px', marginLeft: 'auto' }}
              >
                View All Projects
              </Button>

              {/* Mobile Button */}
              <a
                href={work.path}
                className="hide-on-desktop"
                style={{ borderRadius: '9999px', fontSize: '12px', fontWeight: '500', padding: '6px 12px', flexShrink: 0, marginLeft: 'auto', background: 'linear-gradient(to bottom, #2a2a2a 0%, #1f1f1f 100%)', color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", position: "relative", top: "1px" }}><path d="m9 18 6-6-6-6" /></svg>
              </a>
            </Row>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              className="mobile-subtitle"
            >
              A selection of my most recent and impactful work.
            </Text>
          </Column>
          <div className="animate-fade-up animate-delay-5" style={{ width: '100%' }}>
            <Row paddingX="s" fillWidth>
              <GridProjects />
            </Row>
          </div>
        </Column>
      </GridSection>
      <GridSection paddingY="48" s={{ paddingTop: "12", paddingBottom: "0" }}>
        <Column gap="16" s={{ gap: "8" }} fillWidth>
          <Column fillWidth paddingX="l" gap="8" s={{ paddingX: "16" }}>
            <Row fillWidth vertical="center" horizontal="between" style={{ width: "100%" }}>
              <Heading as="h2" variant="heading-strong-xl">
                Experience
              </Heading>
              {/* Desktop Button */}
              <Button
                className="hover-btn section-primary-btn hide-on-mobile"
                href={about.path}
                variant="primary"
                size="s"
                arrowIcon
                style={{ borderRadius: '9999px', fontSize: '12px', fontWeight: '500', padding: '0 12px', marginLeft: 'auto' }}
              >
                View full experience
              </Button>
              {/* Mobile Button */}
              <a
                href={about.path}
                className="hide-on-desktop"
                style={{ borderRadius: '9999px', fontSize: '12px', fontWeight: '500', padding: '6px 12px', flexShrink: 0, marginLeft: 'auto', background: 'linear-gradient(to bottom, #2a2a2a 0%, #1f1f1f 100%)', color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                View full experience
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", position: "relative", top: "1px" }}><path d="m9 18 6-6-6-6" /></svg>
              </a>
            </Row>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              className="mobile-subtitle"
            >
              My leadership experience collaborating with teams and designing user experiences.
            </Text>
          </Column>
          <div className="animate-fade-up animate-delay-5" style={{ width: '100%' }}>
            <Row paddingX="s" fillWidth>
              <ExperienceCard />
            </Row>
          </div>
        </Column>
      </GridSection>
      <GridSection paddingY="48" s={{ paddingTop: "0", paddingBottom: "12" }}>
        <Column gap="16" s={{ gap: "8" }} fillWidth>
          <Column fillWidth paddingX="l" gap="8" s={{ paddingX: "16" }}>
            <Heading as="h2" variant="heading-strong-xl">
              Education
            </Heading>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              className="mobile-subtitle"
            >
              My academic background and the foundation of my software engineering journey.
            </Text>
          </Column>
          <div className="animate-fade-up animate-delay-5" style={{ width: '100%' }}>
            <Row paddingX="s" fillWidth>
              <EducationCard />
            </Row>
          </div>
        </Column>
      </GridSection>
      <GridSection hideBottomBorder paddingY="48" s={{ paddingTop: "0", paddingBottom: "12" }}>
        <Column fillWidth>
          <div className="animate-fade-up animate-delay-6" style={{ width: '100%' }}>
            <Row paddingX="s" fillWidth>
              <Mailchimp />
            </Row>
          </div>
        </Column>
      </GridSection>
    </Column>
  );
}
