import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
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
        <Row fillWidth paddingX="s" paddingBottom="48" horizontal="center">
          <Row 
            fillWidth 
            background="surface" 
            paddingX="32"
            paddingY="48" 
            radius="l" 
            border="neutral-medium" 
            gap="24"
            vertical="center"
            className="premium-shadow"
            s={{ direction: "column", paddingX: "16", paddingTop: "8", paddingBottom: "16" }}
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
                  <RevealFx translateY="4" fillWidth>
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
                  </RevealFx>
                )}
                <RevealFx translateY="4" fillWidth>
                  <Heading
                    align="start"
                    variant="display-strong-xl"
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
                </RevealFx>

                {/* Mobile Photo */}
                <div className="hide-on-desktop" style={{ width: "100%", marginTop: "16px", marginBottom: "8px" }}>
                  <RevealFx translateY="12" delay={0.1} fillWidth>
                    <div className="hero-avatar" style={{ 
                      position: "relative", 
                      borderRadius: "20px", 
                      border: "1px solid var(--neutral-border-medium)",
                      padding: "4px",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                      backgroundColor: "var(--surface-background)"
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
                  </RevealFx>
                </div>

                <RevealFx translateY="8" delay={0.2} fillWidth>
                  <Text
                    wrap="balance"
                    onBackground="neutral-weak"
                    style={{
                      fontSize: "clamp(0.8rem, 0.9vw, 0.875rem)",
                      lineHeight: "1.6",
                      fontWeight: "400",
                      marginTop: "1.25rem",
                      maxWidth: "800px",
                      textAlign: "left",
                    }}
                  >
                    {home.subline}
                  </Text>
                </RevealFx>
                <RevealFx paddingTop="24" delay={0.4} fillWidth>
                  <Row gap="16" horizontal="start" fillWidth s={{ gap: "8" }}>
                    <Button
                      id="about"
                      className="hover-btn cal-btn-primary"
                      href={about.path}
                      variant="primary"
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
                </RevealFx>
              </div>
            </Column>

            {/* Right Column (Photo) */}
            <Column className="hide-on-mobile" style={{ flex: 0.8 }} fillWidth position="relative" horizontal="end" align="end" s={{ align: "center" }}>
              <RevealFx translateY="12" delay={0.3} fillWidth>
                <div className="hero-avatar" style={{ 
                  position: "relative",
                  marginLeft: "auto", 
                  marginTop: "24px",
                  borderRadius: "20px", 
                  border: "1px solid var(--neutral-border-medium)",
                  padding: "4px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                  backgroundColor: "var(--surface-background)"
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
              </RevealFx>
            </Column>
          </Row>
        </Row>
      </GridSection>

      <GridSection paddingY="16">
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
          <Heading as="h3" variant="heading-strong-l" className="hide-on-desktop" style={{ alignSelf: "flex-start", marginBottom: "16px" }}>
            Tech Stack
          </Heading>

          <Row flex={1} fillWidth overflow="hidden" style={{ marginLeft: "16px" }} s={{ marginLeft: "0", width: "100%" }}>
            <TechMarquee />
          </Row>
        </Row>
      </GridSection>

      <GridSection paddingY="48">
        <Column gap="16" fillWidth>
          <Column fillWidth paddingX="l" gap="8" s={{ paddingX: "16" }}>
            <Row fillWidth vertical="center" horizontal="between" style={{ width: "100%" }}>
              <Heading as="h2" variant="heading-strong-xl">
                Projects
              </Heading>
              {/* Desktop Button */}
              <Button
                className="hover-btn cal-btn-primary hide-on-mobile"
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
                style={{ borderRadius: '9999px', fontSize: '9px', fontWeight: '600', padding: '4px 8px', flexShrink: 0, marginLeft: 'auto', backgroundColor: '#1a1a1a', color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', lineHeight: 1, border: '1px solid rgba(255,255,255,0.15)' }}
              >
                View All Projects
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
          <RevealFx translateY="16" delay={0.6} fillWidth>
            <Row paddingX="s" fillWidth>
              <GridProjects />
            </Row>
          </RevealFx>
        </Column>
      </GridSection>
      <GridSection paddingY="48" s={{ paddingY: "24" }}>
        <Column gap="16" fillWidth>
          <Column fillWidth paddingX="l" gap="8" s={{ paddingX: "16" }}>
            <Row fillWidth vertical="center" horizontal="between" style={{ width: "100%" }}>
              <Heading as="h2" variant="heading-strong-xl">
                Experience
              </Heading>
              {/* Desktop Button */}
              <Button
                className="hover-btn cal-btn-primary hide-on-mobile"
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
                style={{ borderRadius: '9999px', fontSize: '9px', fontWeight: '600', padding: '4px 8px', flexShrink: 0, marginLeft: 'auto', backgroundColor: '#1a1a1a', color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', lineHeight: 1, border: '1px solid rgba(255,255,255,0.15)' }}
              >
                View full experience
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
          <RevealFx translateY="16" delay={0.6} fillWidth>
            <Row paddingX="s" fillWidth>
              <ExperienceCard />
            </Row>
          </RevealFx>
        </Column>
      </GridSection>
      <GridSection paddingY="48" s={{ paddingY: "24" }}>
        <Column gap="16" fillWidth>
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
          <RevealFx translateY="16" delay={0.6} fillWidth>
            <Row paddingX="s" fillWidth>
              <EducationCard />
            </Row>
          </RevealFx>
        </Column>
      </GridSection>
      <GridSection hideBottomBorder paddingY="48">
        <Column fillWidth style={{ width: "calc(100% - 32px)", margin: "0 auto" }} s={{ style: { width: "calc(100% - 16px)" } }}>
          <Mailchimp s={{ paddingY: "24", paddingX: "16" }} />
        </Column>
      </GridSection>
    </Column>
  );
}
