import { type MotionStyle } from "motion/react";
import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";
import { InfiniteMovingList } from "../../ui/InfiniteMovingList";
import { MAIN_SKILLS, OTHER_SKILLS, type Skill } from "../skills";
import { cn } from "../../../utils/cn";
import { useThemeMode } from "../../../hooks/useThemeMode";


export function SkillsCard({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) {
  return (
    <>
      <AnimatedCard className="flex flex-col gap-3" translate={translate}>
        <CardTitle>Expert in</CardTitle>
        <CardContent >
          <ul className="flex justify-around items-center gap-3">
            {MAIN_SKILLS.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard
        className="flex flex-col gap-3 md:col-span-2 max-w-full h-max overflow-x-hidden"
        translate={translate}
      >
        <CardTitle>Work with</CardTitle>
        <CardContent className=" justify-between items-center gap-3">
          <InfiniteMovingList>
            {OTHER_SKILLS.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </InfiniteMovingList>
        </CardContent>
      </AnimatedCard>
    </>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  const { name, src, srcDark, className } = skill;
  const [theme] = useThemeMode();

  return (
    <li className="h-full flex flex-col items-center">
      <img
        className={cn("w-9 h-9", className)}
        src={theme === "dark" && srcDark ? srcDark : src}
        alt={`${name} logo`}
        width={36}
        height={36}
        loading="lazy"
        
      />
      <p className="mt-1 text-[11px]">{name}</p>
    </li>
  );
}
