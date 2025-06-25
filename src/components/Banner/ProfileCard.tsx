import { AnimatedCard } from "./AnimatedCard";
import { cn } from "../../utils/cn";
import { CardTitle } from "../ui/Card/CardTitle";
import { CardSubtitle } from "../ui/Card/CardSubtitle";
import { SocialLinks } from "./SocialLinks";
import { Button } from "../ui/Button";
import avatarSrc from "../../assets/avatar.jpg"; // Adjust the path as necessary

export const ProfileCard = ({ translate }: { translate?: string | number; }) => {
  return (
    <AnimatedCard className="relative h-fit" translate={translate}>
      <div className="h-24 cardGradient relative grid place-items-center">
        <div className="pb-2 font-extrabold text-xl">{"</>"} </div>
        <img
          height={100}
          width={100}
          src={avatarSrc.src}
          alt={"profile"}
          className={cn(
            "object-cover m-0! p-0! object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white   transition duration-500",
            "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          )}
        />
      </div>
      <div className="p-4 pt-8 text-center">
        <CardTitle>Artem Makatera</CardTitle>
        <CardSubtitle>Senior Javascript Developer</CardSubtitle>
        <SocialLinks />
      </div>
      <div className="text-center pb-4">
        <Button variant="callToAction" className="m-0">
          Let's Build Together!
        </Button>
      </div>
    </AnimatedCard>
  );
};
