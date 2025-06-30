import type { MotionStyle } from "motion/react";
import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";
import { Button } from "../../ui/Button";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowRight } from "lucide-react";

export const AboutCard = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <AnimatedCard
      className=" md:col-span-2 hidden md:flex flex-col gap-2"
      translate={translate}
    >
      <CardTitle>About</CardTitle>
      <CardContent>
        I'm Artem — a Senior JavaScript Developer with 8+ years of
        experience building scalable, high-performance web applications. 
      </CardContent>
    </AnimatedCard>
  );
};
