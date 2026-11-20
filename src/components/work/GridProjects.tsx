import { getPosts } from "@/utils/utils";
import { ExpandableGridProjects, SerializedProject } from "./ExpandableGridProjects";

interface GridProjectsProps {
  limit?: number;
  expandable?: boolean;
  initialRows?: number;
}

export function GridProjects({
  limit,
  expandable = true,
  initialRows = 3,
}: GridProjectsProps = {}) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  // Sort by published date descending
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = limit ? sortedProjects.slice(0, limit) : sortedProjects;

  const serialized: SerializedProject[] = displayedProjects.map((post) => ({
    slug: post.slug,
    image: post.metadata.images?.[0] || "",
    title: post.metadata.title,
    description: post.metadata.summary,
    techs: post.metadata.techs,
    githubUrl: post.metadata.githubUrl,
    demoUrl: post.metadata.demoUrl,
  }));

  return (
    <ExpandableGridProjects
      projects={serialized}
      initialRows={initialRows}
      expandable={limit ? false : expandable}
    />
  );
}
