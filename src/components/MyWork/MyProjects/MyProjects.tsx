
import { projectsData } from "./data";
import { ProjectCard } from "./ProjectCard";


// Main Component
export default function MyProjects() {
  return (
    <section className="space-y-24" aria-label="Featured Projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
