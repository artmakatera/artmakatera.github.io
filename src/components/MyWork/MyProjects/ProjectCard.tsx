
import type { Project } from "./types";
import { ProjectImage } from "./ProjectImage";
import { ProjectContent } from "./ProjectContent";

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const layoutClass = isEven ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <article
      className={`flex flex-col ${layoutClass} gap-8 lg:gap-12 items-center`}
    >
      <ProjectImage project={project} />
      <ProjectContent project={project} />
    </article>
  );
};
