import type { MotionStyle } from "motion/react";
import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";

export const AboutCard = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <AnimatedCard
      className=" md:col-span-2 flex flex-col gap-2"
      translate={translate}
    >
      <CardTitle>About</CardTitle>
      <CardContent>
        I am a Senior JavaScript Developer with over 8 years experience building
        and optimizing high-performance, scalable web applications. My focus is
        on architecting robust front-end solutions that deliver seamless user
        experiences and meet business objectives.
      </CardContent>
    </AnimatedCard>
  );
};
