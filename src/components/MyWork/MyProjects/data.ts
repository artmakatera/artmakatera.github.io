import type { Project } from "./types";
import photographerImage from "../../../assets/photographer.png";
import algoBg from "../../../assets/algo-bg.png";


export const projectsData: Project[] = [
  {
    id: 1,
    title: "Photographer Portfolio Website",
    description:
      "A professional portfolio website showcasing photography work with a sleek, responsive design. Built with React and Next.js for fast performance, featuring a CMS for easy content management, PostgreSQL database, and Cloudinary for image hosting. Fully responsive with elegant UI/UX design using Tailwind CSS.",
    image:
      photographerImage.src ||
      "https://placehold.co/800x500/E0F2F7/4A235A?text=Photographer+Portfolio",
    link: "https://hosteevaalina.vercel.app/",
    linkText: "View Live Project",
    tags: ["React", "Next.js",  "Photography", "CMS", "PostgreSQL", "Cloudinary", "Responsive Design", "UI/UX", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Algo Circuit - Technical Articles",
    description:
      "An open-source algorithm visualization platform that helps developers understand algorithms and data structures through interactive visual representations. This ongoing project serves as a comprehensive learning resource for computer science students and enthusiasts. Contributions and collaborations are welcome!",
    image: algoBg.src ||
      "https://placehold.co/800x500/F0F8FF/36454F?text=Algo+Circuit+Articles",
    link: "https://algo-curcuit.vercel.app/articles",
    linkText: "Read Articles",
    tags: [ "Algorithms", "Data Structures", "Visualization", "D3.js", "Motion.js"],
    imageClassName: "object-contain object-center m-2", // Custom class for specific styling
  },
];
