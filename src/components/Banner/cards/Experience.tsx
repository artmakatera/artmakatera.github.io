import { Download } from "lucide-react";

import { Button } from "../../ui/Button";
import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";
import type { MotionStyle } from "motion/react";

const EXPERIENCE = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Grid Dynamics",
    duration: "2021 - Now",
  },
  {
    id: 2,
    title: "Front End Developer",
    company: "Namecheap",
    duration: "2019 - 2021",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "Shark Software",
    duration: "2017 - 2019",
  },
];

export const ExperienceCard = ({ translate }: {
  translate?: MotionStyle["translate"];
}) => {
  return (
    <AnimatedCard
      translate={translate}
      className="sm:col-span-2 md:col-span-3 lg:col-span-2 sm:row-span-2 flex flex-col gap-2"
    >
      <CardTitle>Experience</CardTitle>
      <CardContent>
        <div className="space-y-2 divide-y text-pretty">
          {EXPERIENCE.map((item) => (
            <ExperienceItem key={item.id} {...item} />
          ))}
        </div>
        <div className="hidden sm:block">
          <Button variant="outline" className="mt-2" elementType="a" href="/Artem Makatera Resume.pdf" download>
            <span>Download Resume</span>
            <Download className="inline mr-1" />
          </Button>
        </div>
      </CardContent>
    </AnimatedCard>
  );
};

function ExperienceItem({
  title,
  duration,
  company,
}: (typeof EXPERIENCE)[number]) {
  return (
    <div className="flex items-center justify-between gap-2 pb-2">
      <div>
        <h3 className="text-pretty">{title}</h3>
        <p className="text-xs text-muted-foreground">{company}</p>
      </div>

      <time className="text-muted-foreground">{duration}</time>
    </div>
  );
}
