import { Code, ExternalLink } from "lucide-react";
import { ProjectTag } from "./ProjectTag";
import type { Project } from "./types";
import { Button } from "../../ui/Button";

export const ProjectContent = ({ project }: { project: Project }) => (
  <div className="w-full lg:w-1/2 space-y-6">
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Code className="w-4 h-4" />
        <span>Featured Project</span>
      </div>

      <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
        {project.title}
      </h4>

      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.description}
      </p>
    </div>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <ProjectTag key={tag} tag={tag} />
      ))}
    </div>

    <div className="pt-4">
      <Button
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 transition-all duration-200 py-3 px-6 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        aria-label={`${project.linkText} for ${project.title}`}
        elementType="a"
        variant="callToAction"
        size="custom"

      >
        {project.linkText}
        <ExternalLink className="w-4 h-4" />
      </Button>
    </div>
  </div>
);