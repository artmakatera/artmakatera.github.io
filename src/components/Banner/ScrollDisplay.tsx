import { motion, type MotionStyle } from "motion/react";
import { AnimatedCard } from "./AnimatedCard";

import avatarSrc from "../../assets/avatar.jpg"; // Adjust the path as necessary
import { CardTitle } from "../ui/Card/CardTitle";
import { CardContent } from "../ui/Card/CardContent";
import { ExperienceCard } from "./cards/Experience";
import { PulsatingDot } from "../ui/PulsatingDot";
import { cn } from "../../utils/cn";
import { AlgoCircuitCard, PhotographerCard } from "./cards/AlgoCurcuit";
import { LatestPostsCard } from "./cards/LatestPosts";
import { AboutCard } from "./cards/About";
import { ContactCard } from "./cards/Contact";
import { SkillsCard } from "./cards/Skills";
import { MobileHeader } from "./cards/MobileHeader";

export const ScrollDisplay = ({
  rotate,
  translate,
}: {
  rotate: any;
  scale: any;
  translate?: MotionStyle["translate"];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        // scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className=" -mt-12 mx-auto h-120 md:h-160 w-full border-1 sm:border-4 border-[#6C6C6C] p-4 sm:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div
        className={cn(
          "bg-secondary dark:bg-background h-full w-full rounded-2xl gap-2 sm:gap-3 overflow-hidden p-0 sm:p-3 ",
          "grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        )}
      >
        <MobileHeader translate={translate} />
        <motion.div
          className={cn(
            "hidden col-span-3 xl:col-span-4 md:grid md:grid-cols-[1fr_auto] items-center justify-between px-4 py-4",
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

        <AboutCard translate={translate} />
        <ContactCard translate={translate} />

        <ExperienceCard translate={translate} />
        <AnimatedCard
          className="hidden lg:flex flex-col gap-2"
          translate={translate}
        >
          <CardTitle>Now</CardTitle>
          <PulsatingDot className="absolute right-4 top-4 text-pretty" />
          <CardContent>
            Currently I am working fulltime at Grid Dynamics.
          </CardContent>
        </AnimatedCard>
        <AlgoCircuitCard translate={translate} />
        <PhotographerCard translate={translate} />
        <SkillsCard translate={translate} />
        <LatestPostsCard translate={translate} />
      </div>
    </motion.div>
  );
};
