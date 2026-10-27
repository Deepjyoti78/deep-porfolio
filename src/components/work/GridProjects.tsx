import { getPosts } from "@/utils/utils";
import { GridProjectCard } from "./GridProjectCard";
import styles from "./GridProjects.module.scss";

interface GridProjectsProps {
  limit?: number;
}

export function GridProjects({ limit }: GridProjectsProps = {}) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  // Sort by published date descending, just like the old Projects component
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = limit ? sortedProjects.slice(0, limit) : sortedProjects;

  return (
    <div className={styles.grid}>
      {displayedProjects.map((post) => (
        <GridProjectCard
          key={post.slug}
          href={`/work/${post.slug}`}
          image={post.metadata.images?.[0] || ""}
          title={post.metadata.title}
          description={post.metadata.summary}
          techs={post.metadata.techs}
          githubUrl={post.metadata.githubUrl}
          demoUrl={post.metadata.demoUrl}
        />
      ))}
    </div>
  );
}
