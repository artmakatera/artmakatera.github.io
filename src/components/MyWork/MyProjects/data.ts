import type { Project } from "./types";
import photographerImage from "../../../assets/photographer.png";
import algoBg from "../../../assets/algo-bg.png";
import artToolsImage from "../../../assets/art-tools-marketing.png";


export const projectsData: Project[] = [
  {
    id: 3,
    title: "React Gantt Library",
    description:
      "A composable React Gantt chart library built to make interactive project scheduling easier to add and customize. Use a ready-made chart or assemble your own layout, with flexible columns and CSS theming to match your application. Virtualized rows and columns keep large timelines responsive, while task hierarchies, dependency-aware rescheduling, drag-to-move and resize, and undo/redo support everyday planning workflows. Live examples and API documentation help developers get started.",
    image: artToolsImage,
    link: "https://art-tools-docs.vercel.app/",
    linkText: "Explore Docs & Examples",
    sourceLink: "https://github.com/artmakatera/art-tools",
    tags: ["React", "Gantt Charts", "Component Library", "Virtualization", "Project Scheduling"],
    imageClassName: "object-contain object-center",
  },
  {
    id: 1,
    title: "Photographer Portfolio Website",
    description:
      "A professional portfolio website showcasing photography work with a sleek, responsive design. Built with React and Next.js for fast performance, featuring a CMS for easy content management, PostgreSQL database, and Cloudinary for image hosting. Fully responsive with elegant UI/UX design using Tailwind CSS.",
    image:
      photographerImage,
    link: "https://www.hosteevaphotography.com/",
    linkText: "View Live Project",
    tags: ["React", "Next.js",  "Photography", "CMS", "PostgreSQL", "Cloudinary", "Responsive Design", "UI/UX", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Algo Circuit - Technical Articles",
    description:
      "An open-source algorithm visualization platform that helps developers understand algorithms and data structures through interactive visual representations. This ongoing project serves as a comprehensive learning resource for computer science students and enthusiasts. Contributions and collaborations are welcome!",
    image: algoBg,
    link: "https://algo-curcuit.vercel.app/articles",
    linkText: "Read Articles",
    tags: [ "Algorithms", "Data Structures", "Visualization", "D3.js", "Motion.js"],
    imageClassName: "object-contain object-center m-2", // Custom class for specific styling
  },
];
