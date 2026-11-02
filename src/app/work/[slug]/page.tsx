import { notFound } from "next/navigation";
import Link from "next/link";
import { getPosts } from "@/utils/utils";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Metadata } from "next";
import styles from "./ProjectDetail.module.scss";
import {
  FiArrowLeft,
  FiGithub,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiPlayCircle,
  FiMic,
  FiVolume2,
  FiDatabase,
  FiCode,
} from "react-icons/fi";
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiVite,
  SiSqlite,
  SiGoogle,
} from "react-icons/si";

const techIconMap: Record<string, React.FC<any>> = {
  "React": SiReact,
  "React 18": SiReact,
  "React 19": SiReact,
  "Django": SiDjango,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Python": SiPython,
  "FastAPI": SiFastapi,
  "Next.js": SiNextdotjs,
  "Vite": SiVite,
  "SQLite": SiSqlite,
  "Gemini AI": SiGoogle,
  "AI": SiGoogle,
  "Web Speech API": FiMic,
  "Web Audio API": FiVolume2,
  "IndexedDB": FiDatabase,
  "Lucide React": FiCode,
};

const techColorMap: Record<string, string> = {
  "React": "#61DAFB",
  "React 18": "#61DAFB",
  "React 19": "#61DAFB",
  "Django": "#092E20",
  "PostgreSQL": "#4169E1",
  "Docker": "#2496ED",
  "Node.js": "#339933",
  "Express.js": "#E6EDF3",
  "MongoDB": "#47A248",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Python": "#3776AB",
  "FastAPI": "#009688",
  "Next.js": "#FFFFFF",
  "Vite": "#646CFF",
  "SQLite": "#003B57",
  "Gemini AI": "#4285F4",
  "AI": "#4285F4",
  "Web Speech API": "#A78BFA",
  "Web Audio API": "#F59E0B",
  "IndexedDB": "#38BDF8",
  "Lucide React": "#F472B6",
};

function formatDisplayDate(dateStr?: string) {
  if (!dateStr) return "Nov 2025";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function parseProjectContent(rawContent: string, defaultSummary: string) {
  const overviewMatch = rawContent.match(/## Overview\s*\n\n([\s\S]*?)(?=\n## |$)/);
  let overview = defaultSummary;
  if (overviewMatch) {
    const paragraphs = overviewMatch[1].trim().split("\n\n");
    overview = paragraphs[0].replace(/\*\*/g, "").trim();
  }

  const featuresMatch = rawContent.match(/## Key Features\s*\n\n([\s\S]*?)(?=\n## |$)/);
  const features: { title: string; desc: string }[] = [];
  if (featuresMatch) {
    const lines = featuresMatch[1].split("\n").filter((l) => l.trim().startsWith("- "));
    for (const l of lines) {
      const cleanLine = l.trim().replace(/^- /, "");
      const match = cleanLine.match(/^\*\*([^*]+)\*\*[:—–-]\s*(.*)$/);
      if (match) {
        features.push({ title: match[1], desc: match[2] });
      } else {
        features.push({ title: cleanLine, desc: "" });
      }
    }
  }

  return { overview, features };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: `${post.metadata.title} – ${person.name}`,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const allProjects = getPosts(["src", "app", "work", "projects"]).sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const post = allProjects.find((p) => p.slug === slugPath);

  if (!post) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slugPath);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const { overview, features } = parseProjectContent(post.content, post.metadata.summary);
  const thumbnail = post.metadata.images?.[0] || "";

  return (
    <div className={styles.container}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={thumbnail}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div className={styles.splitGrid}>
        {/* LEFT COLUMN: BIG THUMBNAIL PIC */}
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <img src={thumbnail} alt={post.metadata.title} loading="eager" />
            {post.metadata.demoUrl && (
              <a
                href={post.metadata.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveBadge}
                aria-label={`Open ${post.metadata.title} live demo`}
              >
                <span className={styles.liveDot} />
                Live Demo
              </a>
            )}
            <div className={styles.imageCaptionBar}>
              <span className={styles.imageCaptionTitle}>{post.metadata.title}</span>
              {post.metadata.demoUrl && (
                <a
                  href={post.metadata.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageCaptionLink}
                >
                  Visit Site <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ALL INFORMATION & OVERVIEW */}
        <div className={styles.rightColumn}>
          {/* Top navigation */}
          <div className={styles.navHeader}>
            <Link href="/work" className={styles.backButton}>
              <FiArrowLeft />
              <span>Back to Projects</span>
            </Link>
            <div className={styles.navArrows}>
              <Link
                href={`/work/${prevProject.slug}`}
                className={styles.navArrowBtn}
                title={`Previous: ${prevProject.metadata.title}`}
                aria-label={`Previous project: ${prevProject.metadata.title}`}
              >
                <FiChevronLeft />
              </Link>
              <Link
                href={`/work/${nextProject.slug}`}
                className={styles.navArrowBtn}
                title={`Next: ${nextProject.metadata.title}`}
                aria-label={`Next project: ${nextProject.metadata.title}`}
              >
                <FiChevronRight />
              </Link>
            </div>
          </div>

          {/* Project Header */}
          <div className={styles.projectHeader}>
            <div className={styles.metaRow}>
              <span className={styles.tagBadge}>Featured Work</span>
              <span className={styles.dateBadge}>{formatDisplayDate(post.metadata.publishedAt)}</span>
            </div>
            <h1 className={styles.title}>{post.metadata.title}</h1>
            {post.metadata.subtitle && (
              <p className={styles.subtitle}>{post.metadata.subtitle}</p>
            )}
          </div>

          {/* Overview */}
          <div className={styles.overviewBlock}>
            <div className={styles.sectionHeading}>Overview</div>
            <p className={styles.overviewText}>{overview}</p>
          </div>

          {/* Key Capabilities */}
          {features.length > 0 && (
            <div className={styles.featuresBlock}>
              <div className={styles.sectionHeading}>Key Capabilities</div>
              <div className={styles.featuresList}>
                {features.slice(0, 3).map((f, i) => (
                  <div key={i} className={styles.featureItem}>
                    <FiCheckCircle className={styles.checkIcon} />
                    <div>
                      <span className={styles.featureTitle}>{f.title}</span>
                      {f.desc && <span className={styles.featureDesc}> — {f.desc}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {post.metadata.techs && post.metadata.techs.length > 0 && (
            <div className={styles.techsBlock}>
              <div className={styles.sectionHeading}>Technologies Used</div>
              <div className={styles.techsList}>
                {post.metadata.techs.map((tech) => {
                  const Icon = techIconMap[tech];
                  const color = techColorMap[tech] || "#FFFFFF";
                  return (
                    <div key={tech} className={styles.techPill}>
                      {Icon && <Icon color={color} className={styles.techIcon} />}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Actions Bar */}
          <div className={styles.actionsBar}>
            {post.metadata.demoUrl && (
              <a
                href={post.metadata.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                <FiPlayCircle className={styles.btnLeadingIcon} />
                <span>Live Demo</span>
                <FiArrowUpRight className={styles.btnArrow} />
              </a>
            )}
            {post.metadata.githubUrl && (
              <a
                href={post.metadata.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <FiGithub className={styles.btnLeadingIcon} />
                <span>GitHub Repo</span>
                <FiArrowUpRight className={styles.btnArrow} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
