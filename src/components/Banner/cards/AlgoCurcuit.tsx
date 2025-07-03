import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";

import imgAlgo from "../../../assets/algo.jpeg";
import photographerImage from "../../../assets/photographer.png";
import { cn } from "../../../utils/cn";
import type { MotionStyle } from "motion/react";
import { ExternalLink } from "lucide-react";

const ImageCard = ({
  className,
  backgroundPosition = "center",
  imageUrl,
  title,
  link,
  translate,
}: {
  imageUrl: string;
  title: string;
  link: string;
  translate?: MotionStyle["translate"];
  className?: string;
  backgroundPosition?: string
}) => {
  return (
    <AnimatedCard
      className={cn(
        "p-0 overflow-hidden hidden xl:block",
        "hover:[&>.display-card-img]:scale-105 hover:[&>.display-card-overlay]:bg-black/50 hover:[&_.display-card-text]:translate-y-0",
        className
      )}
      translate={translate}
      hoverEffect
    >
      <div
        className="display-card-img relative h-full w-full rounded-md bg-cover transition-transform duration-300 ease-in-out"
        style={{
          backgroundPosition,
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <a href={link} className="display-card-overlay absolute h-full w-full bottom-0 flex flex-col justify-end p-5 transition-colors duration-200 ease-in-out bg-transparent hover:bg-black/50 rounded-md">
        <span className="display-card-text flex items-end justify-between gap-2 text-white relative translate-y-12 transition-transform duration-600 ease-in-out">
          <CardTitle className="text-white align-bottom">
           {title}
          </CardTitle>
          <ExternalLink />
        </span>
      </a>
    </AnimatedCard>
  );
};

export const AlgoCircuitCard = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <ImageCard
      className="row-span-2"
      imageUrl={imgAlgo.src}
      title="Algo Circuit"
      link="https://algo-curcuit.vercel.app/articles"
      translate={translate}
      backgroundPosition="0px -25px"
    />
  );
};

export const PhotographerCard = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <ImageCard
      className="min-h-25"
      imageUrl={photographerImage.src}
      backgroundPosition=" center 0px"
      title="Photographer"
      link="https://photographer.vercel.app/articles"
      translate={translate}
    />
  );
};

