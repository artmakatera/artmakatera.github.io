import reactImg from "../../assets/tools-logo/react.svg";
import tailwindImg from "../../assets/tools-logo/tailwind.svg";
import typeScriptImg from "../../assets/tools-logo/typescript.svg";
import gatsbyImg from "../../assets/tools-logo/gatsby.svg";
import nextImg from "../../assets/tools-logo/nextJs.svg"; //\
import nodeJSImg from "../../assets/tools-logo/nodeJs.svg"; //\
import viteImg from "../../assets/tools-logo/vite.svg";
import astroImg from "../../assets/tools-logo/astro.svg";
import muiImg from "../../assets/tools-logo/mui.svg";
import webpackImg from "../../assets/tools-logo/webpack.svg";
import expressImg from "../../assets/tools-logo/express.svg";
import postgresImg from "../../assets/tools-logo/postgres.svg";
import dockerImg from "../../assets/tools-logo/docker.svg";
import awsImg from "../../assets/tools-logo/aws.svg";
import awsDarkImg from "../../assets/tools-logo/aws-dark.svg";

export type Skill = {
  id: number;
  name: string;
  src: string;
  srcDark?: string;
  className?: string;

};


export const MAIN_SKILLS: Skill[] = [
  {
    id: 1,
    name: "Typescript",
    src: typeScriptImg.src,

  },
  {
    id: 2,
    name: "React",
    src: reactImg.src,

  },
  {
    id: 3,
    name: "Next.js",
    src: nextImg.src,
    className: "dark:invert",
  },
];


export const OTHER_SKILLS: Skill[] = [
  {
    id: 1,
    name: "Tailwind CSS",
    src: tailwindImg.src,

  },
  {
    id: 2,
    name: "Node.js",
    src: nodeJSImg.src,

  },
  {
    id: 3,
    name: "Gatsby",
    src: gatsbyImg.src,
    className: "dark:bg-foreground rounded-full",
  },
  {
    id: 4,
    name: "Vite",
    src: viteImg.src,

  },
  {
    id: 5,
    name: "Astro",
    src: astroImg.src,
    className: "dark:invert",
  },
  {
    id: 6,
    name: "Material UI",
    src: muiImg.src,

  },
  {
    id: 7,
    name: "Webpack",
    src: webpackImg.src,

  },
  {
    id: 8,
    name: "Express.js",
    src: expressImg.src,
    className: "dark:invert",
  },
  {
    id: 9,
    name: "PostgreSQL",
    src: postgresImg.src,

  }
  ,
  {
    id: 10,
    name: "Docker",
    src: dockerImg.src,

  },
  {
    id: 11,
    name: "AWS",
    src: awsImg.src,
    srcDark: awsDarkImg.src,
  },
];