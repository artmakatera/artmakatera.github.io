import { motion } from "motion/react";
import { HoverCard } from "./HoverCard";
import { cn } from "../../utils/cn";
import { SocialLinks } from "./SocialLinks";

import avatarSrc from "../../assets/avatar.jpg"; // Adjust the path as necessary
import { CardTitle } from "../ui/Card/CardTitle";
import { CardContent } from "../ui/Card/CardContent";
import { ExperienceCard } from "./cards/Experience";
import { PulsatingDot } from "../ui/PulsatingDot";

export const ScrollCard = ({
  rotate,
  translate,
  users,
}: {
  rotate: any;
  scale: any;
  translate: any;
  users: {
    name: string;
    designation: string;
    image: string;
    badge?: string;
  }[];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        // scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className=" -mt-12 mx-auto h-120 md:h-160 w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-secondary dark:bg-background h-full w-full rounded-2xl gap-4 overflow-hidden p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  ">
        <HoverCard
          className="md:col-span-3 xl:col-span-4 grid md:grid-cols-[1fr_auto] items-center justify-between p-4"
          translate={translate}
        >
          <div>
            <span className="text-lg font-semibold text-primary text-center">
              Hi, I&apos;m Artem
            </span>
            <p className="text-sm text-muted-foreground hidden md:block">
              Senior Javascript Developer
            </p>
          </div>
          <SocialLinks  className="hidden md:grid" />
        </HoverCard>

        <HoverCard className="hidden md:block md:row-span-2 p-0" translate={translate}>
          <img
            height={300}
            width={300}
            src={avatarSrc.src}
            alt={"profile"}
            className="rounded-md object-cover object-top w-full h-full"
          />
        </HoverCard>
        <HoverCard
          className="row-span-2 md:col-span-2 flex flex-col gap-3"
          translate={translate}
        >
          <CardTitle>About</CardTitle>
          <CardContent>
            With over 8 years of experience as a JavaScript Developer, I
            specialize in crafting high-performance, scalable, and maintainable
            web applications. I thrive
            in dynamic, collaborative environments that foster innovation,
            problem-solving, and continuous learning.
          </CardContent>
        </HoverCard>
        <HoverCard
          className="md:row-span-3 flex flex-col gap-3"
          translate={translate}
        >
          <CardTitle>My skills</CardTitle>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>GraphQL</li>
              <li>RESTful APIs</li>
              <li>CSS-in-JS (Styled Components, Emotion)</li>
              <li>Testing Frameworks (Jest, React Testing Library)</li>
            </ul>
          </CardContent>
        </HoverCard>
       <ExperienceCard translate={translate} />
       <HoverCard className="hidden md:flex flex-col gap-3" translate={translate}>
          <CardTitle>Now</CardTitle>
          <PulsatingDot className="absolute right-4 top-4 text-pretty" />
          <CardContent>
            Currently I am working fulltime at Grid Dynamics.
          </CardContent>
        </HoverCard>

        {/* {users.map((user, idx: number) => (
          <HoverCard key={`user-${idx}`} translate={translate}>
            <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-card text-card-foreground px-2 py-1">
              {user.badge}
            </div>
            <img
              src={user.image}
              className="rounded-tr-md rounded-tl-md text-sm "
              alt="thumbnail"
            />
            <div className="p-4">
              <CardTitle>{user.name}</CardTitle>
              <CardSubtitle>{user.designation}</CardSubtitle>
            </div>
          </HoverCard>
        ))} */}
      </div>
    </motion.div>
  );
};
