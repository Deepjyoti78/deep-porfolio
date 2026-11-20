import { getPosts } from "@/utils/utils";
import { ExpandableGridProjects, SerializedProject } from "./ExpandableGridProjects";

interface GridProjectsProps {
  limit?: number;
  expandable?: boolean;
  initialRows?: number;
}

// User-specified priority order for project cards:
// 1. RelayForge ("Relief Foods")
// 2. ScamAI ("Scam AI")
// 3. Rehearse ("Rephrase")
// 4. ConcurrencyLab ("Concurrency Lab")
// 5. Vellora Healthcare ("Velora Healthcare")
// 6. ATHENÆUM ("Athem")
// 7. Detour ("Detour")
// 8. Lunelle ("Lunil")
// 9. MediHealth ("MediHealth")
const CUSTOM_PROJECT_ORDER = [
  "relay-forge",
  "scam-ai",
  "rehearse",
  "concurrency-lab",
  "vellora-healthcare",
  "athenaeum",
  "detour",
  "lunelle",
  "healthcare-system",
  "drivio",
  "library-system",
  "mastery-loop",
  "purani-delhi",
  "what-i-have-done-today",
];

export function GridProjects({
  limit,
  expandable = true,
  initialRows = 3,
}: GridProjectsProps = {}) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  // Sort by custom order, falling back to published date
  const sortedProjects = allProjects.sort((a, b) => {
    const indexA = CUSTOM_PROJECT_ORDER.indexOf(a.slug);
    const indexB = CUSTOM_PROJECT_ORDER.indexOf(b.slug);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

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
