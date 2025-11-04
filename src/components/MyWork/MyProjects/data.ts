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
