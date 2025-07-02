import { ExternalLink } from "lucide-react";
import type { Project } from "./types";
import { cn } from "../../../utils/cn";

export const ProjectImage = ({ project }: { project: Project }) => (
  <div className="w-full lg:w-1/2">
    <div className="relative group overflow-hidden rounded-2xl shadow-xl bg-muted">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className={cn("w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110",
          project.imageClassName
        )}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
          <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </div>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`${project.linkText} for ${project.title}`}
      />
    </div>
  </div>
);