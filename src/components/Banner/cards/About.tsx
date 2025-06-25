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
        Hi there! I'm Artem, a Senior JavaScript Developer. I specialize in
        crafting high-performance, scalable, and maintainable web applications.
        I thrive in dynamic, collaborative environments that foster innovation,
        problem-solving, and continuous learning.
      </CardContent>
    </AnimatedCard>
  );
};
