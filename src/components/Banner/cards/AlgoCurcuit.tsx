import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";

import imgAlgo from "../../../assets/algo.jpeg";
import photographerImage from "../../../assets/photographer.png";
import { CardContent } from "../../ui/Card/CardContent";
import { cn } from "../../../utils/cn";
import type { MotionStyle } from "motion/react";

export const AlgoCircuitCard = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <AnimatedCard className={cn("p-0 row-span-2")} translate={translate}>
      <div
        className="relative h-full w-full rounded-md"
        style={{
          backgroundImage: `url(${imgAlgo.src})`,
          backgroundSize: "cover",
          backgroundPosition: "0px -25px",
        }}
      ></div>
    </AnimatedCard>
  );
};

export const PhotographerCard = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <AnimatedCard className="p-0" translate={translate}>
      <div
        className="relative h-full w-full rounded-md min-h-32"
        style={{
          backgroundImage: `url(${photographerImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </AnimatedCard>
  );
};
