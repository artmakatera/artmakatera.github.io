import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { HoverCard } from "../HoverCard";


export const ExperienceCard = ({ translate }: any) => {
  return (
          

    <HoverCard translate={translate} className=" md:col-span-2 flex flex-col gap-3">
      <CardTitle>Experience</CardTitle>
      <CardContent>
        <ul className="space-y-2 text-pretty">
          <li>
            <strong>Senior Software Engineer</strong> at Grid Dynamics – <strong className="text-card-foreground">Now</strong>
          </li>
          <li>
            <strong>Front End Developer</strong> at Namecheap – <strong className="text-card-foreground">2019 - 2021</strong>
          </li>
          <li>
            <strong>Fullstack Developer</strong> at Shark Software – <strong className="text-card-foreground">2017 - 2019</strong>
          </li>
        </ul>
      </CardContent>
    </HoverCard>
  );
};
