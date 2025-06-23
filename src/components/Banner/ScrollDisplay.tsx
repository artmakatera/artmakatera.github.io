import { motion } from "motion/react";
import { AnimatedCard } from "./AnimatedCard";
import { SocialLinks } from "./SocialLinks";

import avatarSrc from "../../assets/avatar.jpg"; // Adjust the path as necessary
import { CardTitle } from "../ui/Card/CardTitle";
import { CardContent } from "../ui/Card/CardContent";
import { ExperienceCard } from "./cards/Experience";
import { PulsatingDot } from "../ui/PulsatingDot";
import { CardSubtitle } from "../ui/Card/CardSubtitle";
import { cn } from "../../utils/cn";
import { SkillsCard } from "./cards/Skills";
import { Button } from "../ui/Button";
import { AlgoCircuitCard, PhotographerCard } from "./cards/AlgoCurcuit";

export const ScrollDisplay = ({
  rotate,
  translate,
}: {
  rotate: any;
  scale: any;
  translate: any;
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
      <div className="bg-secondary dark:bg-background h-full w-full rounded-2xl gap-3 overflow-hidden p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  ">
        <motion.div
          className={cn(
            "md:col-span-3 xl:col-span-4 grid md:grid-cols-[1fr_auto] items-center justify-between px-4 py-4",
            "text-4xl  text-primary text-center"
          )}
          style={{
            translateY: translate,
          }}
        >
          <span>My Profile</span>
        </motion.div>

        <AnimatedCard
          className="hidden md:block p-0 bg-none"
          translate={translate}
          style={{
            background: `url(${avatarSrc.src})`,
            backgroundSize: "cover",
            backgroundPosition: "0 -2px",
          }}
        />

        <AnimatedCard
          className=" md:col-span-2 flex flex-col gap-2"
          translate={translate}
        >
          <CardTitle>About</CardTitle>
          <CardContent>
            Hi there! I'm Artem, a Senior JavaScript Developer.
            I specialize in crafting high-performance, scalable, and
            maintainable web applications. I thrive in dynamic, collaborative
            environments that foster innovation, problem-solving, and continuous
            learning.
          </CardContent>
        </AnimatedCard>
        <AnimatedCard
          className="hidden md:flex flex-col gap-2 row-span-[0.5]"
          translate={translate}
        >
          <CardTitle>Contact</CardTitle>
          <CardContent className="flex flex-col gap-4 grow justify-center">
            <SocialLinks />
            <Button variant="callToAction" className="m-0 text-xs w-full">
              Let's Build Together!
            </Button>
          </CardContent>
        </AnimatedCard>
        <ExperienceCard translate={translate} />
        <AnimatedCard
          className="hidden md:flex flex-col gap-2"
          translate={translate}
        >
          <CardTitle>Now</CardTitle>
          <PulsatingDot className="absolute right-4 top-4 text-pretty" />
          <CardContent>
            Currently I am working fulltime at Grid Dynamics.
          </CardContent>
        </AnimatedCard>
        {/* <AnimatedCard
          className="hidden md:flex flex-col gap-2"
          translate={translate}
        >
          <CardTitle>Now</CardTitle>
          <PulsatingDot className="absolute right-4 top-4 text-pretty" />
          <CardContent>
            Currently I am working fulltime at Grid Dynamics.
          </CardContent>
        </AnimatedCard> */}
        <AlgoCircuitCard translate={translate} />
        <PhotographerCard translate={translate} />

        <AnimatedCard
          className="hidden md:flex flex-col gap-2"
          translate={translate}
        >
          <CardTitle>Now</CardTitle>
          <CardContent>
            Currently I am working fulltime at Grid Dynamics.
          </CardContent>
        </AnimatedCard>
        <AnimatedCard
          className="hidden md:flex flex-col gap-2"
          translate={translate}
        >
          <CardTitle>Now</CardTitle>
          <CardContent>
            Currently I am working fulltime at Grid Dynamics.
          </CardContent>
        </AnimatedCard>
        <AnimatedCard
          className="hidden md:flex flex-col md:col-span-2 gap-2"
          translate={translate}
        >
          <CardTitle>Latest Posts</CardTitle>
          <CardContent>
            <ul className="list-disc pl-4 text-pretty [&>li]:underline [&>li]:hover:text-muted-foreground">
              <li> Unweighted Graph (BFS, DFS)</li>
              <li>Binary Tree</li>
              <li>Binary Search Visualization</li>
            </ul>
          </CardContent>
        </AnimatedCard>
        {/* <AnimatedCard
          className="hidden md:flex flex-col gap-2"
          translate={translate}
        >
          <CardTitle>Now</CardTitle>
          <PulsatingDot className="absolute right-4 top-4 text-pretty" />
          <CardContent>
            Currently I am working fulltime at Grid Dynamics.
          </CardContent>
        </AnimatedCard> */}
      </div>
    </motion.div>
  );
};
