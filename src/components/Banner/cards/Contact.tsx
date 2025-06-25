import type { MotionStyle } from "motion/react";
import { Button } from "../../ui/Button";
import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";
import { SocialLinks } from "../SocialLinks";

export const ContactCard = ({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
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
  );
};
