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
      <GridSection isFirst paddingTop="8" paddingBottom="32">
        <Row 
          fillWidth 
          s={{ direction: "column", padding: "16", gap: "16" }} 
          horizontal="center" 
          padding="24"
          style={{
            backgroundColor: "var(--surface-background)",
            border: "1px solid var(--neutral-border-strong)",
            borderRadius: "24px",
            width: "calc(100% - 32px)",
            margin: "0 auto"
          }}
        >
          {/* --- DESKTOP VIEW --- */}
          <Column className={`${styles.blockAlign} hide-on-mobile`} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight={120}
            vertical="center"
            marginBottom="24"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-s">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="heading-default-m"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            className="hover-btn cal-btn-secondary"
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-m"
              fillWidth
              gap="m"
              marginBottom="m"
            >
              {about.intro.description}
            </Column>
          )}
        </Column>
        {about.avatar.display && (
          <Column
            className={`${styles.avatar} hide-on-mobile`}
            top="64"
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="m"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              Delhi, India
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag 
                    key={index} 
                    size="l" 
                    style={{ 
                      background: 'var(--page-background)', 
                      border: '1px solid var(--neutral-border-strong)' 
                    }}
                  >
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        {/* --- MOBILE VIEW --- */}
        <Column className="hide-on-desktop" fillWidth gap="16">
          <Column fillWidth gap="16">
            {about.calendar.display && (
              <Row
                fitWidth border="brand-alpha-medium" background="brand-alpha-weak" radius="full" padding="2" gap="4" vertical="center"
                style={{ backdropFilter: "blur(var(--static-space-1))" }}
              >
                <Icon paddingLeft="8" name="calendar" onBackground="brand-weak" />
                <Row paddingX="4" style={{ whiteSpace: "nowrap", fontSize: "12px" }}>Schedule a call</Row>
                <IconButton href={about.calendar.link} data-border="rounded" variant="secondary" icon="chevronRight" size="s" />
              </Row>
            )}
            <Row fillWidth horizontal="between" vertical="center">
              <Column gap="4">
                <Heading variant="display-strong-s" style={{ whiteSpace: "nowrap", fontSize: "28px" }}>{person.name}</Heading>
                <Text variant="heading-default-s" onBackground="neutral-weak">{person.role}</Text>
              </Column>
              {about.avatar.display && (
                <Avatar src={person.avatar} size="l" style={{ width: "80px", height: "80px", marginLeft: "16px", flexShrink: 0 }} />
              )}
            </Row>
          </Column>

          <Column gap="12">
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              <Text variant="body-default-s">Delhi, India</Text>
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row gap="8" style={{ flexWrap: "nowrap", overflowX: "auto", width: "100%" }}>
                {person.languages.map((language, index) => (
                  <Tag key={index} size="m" style={{ background: 'var(--page-background)', border: '1px solid var(--neutral-border-strong)', padding: '2px 8px', fontSize: '11px', flexShrink: 0 }}>
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>

          <div style={{ height: "1px", backgroundColor: "var(--neutral-border-medium)", width: "100%" }} />

          {about.intro.display && (
            <Column fillWidth gap="m" style={{ fontSize: '14px', lineHeight: '1.6', color: "var(--neutral-weak)" }}>
              {about.intro.description}
            </Column>
          )}

          {social.length > 0 && (
            <Row gap="16" wrap horizontal="center" fitWidth data-border="rounded" style={{ alignSelf: "center", marginBottom: "0" }}>
              {social.filter((item) => item.essential).map((item) => item.link && (
                <IconButton size="m" key={`${item.name}-icon-mobile`} href={item.link} icon={item.icon} variant="secondary" />
              ))}
            </Row>
          )}
        </Column>
        </Row>
      </GridSection>

      <GridSection paddingY="32" className="mobile-tight-section">
        <Column className={styles.blockAlign} fillWidth style={{ width: "calc(100% - 32px)", margin: "0 auto" }}>
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
        <Column className={styles.blockAlign} fillWidth style={{ width: "calc(100% - 32px)", margin: "0 auto" }}>
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
        <Column className={styles.blockAlign} fillWidth style={{ width: "calc(100% - 32px)", margin: "0 auto" }}>
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
        <Column className={styles.blockAlign} fillWidth style={{ width: "calc(100% - 32px)", margin: "0 auto" }}>
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
        <Column className={styles.blockAlign} fillWidth style={{ width: "calc(100% - 32px)", margin: "0 auto" }}>
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
