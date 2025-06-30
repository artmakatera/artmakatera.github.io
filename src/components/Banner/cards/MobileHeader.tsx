import type { MotionStyle } from "motion/react";
import { AnimatedCard } from "../AnimatedCard";
import avatarSrc from "../../../assets/avatar.jpg"; // Adjust the path as necessary
import { SocialLinks } from "../SocialLinks";


export const MobileHeader = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <AnimatedCard
      className="flex md:hidden justify-between items-center gap-2 p-2 sm:col-span-2"
      translate={translate}
    >
      <div
      style={{
            background: `url(${avatarSrc.src})`,
            backgroundSize: "cover",
            backgroundPosition: "0 -2px",
          }}
      className="h-14 w-14 rounded-full bg-cover bg-center"
      />
      <SocialLinks className="gap-2" />
    </AnimatedCard>
  );
};
