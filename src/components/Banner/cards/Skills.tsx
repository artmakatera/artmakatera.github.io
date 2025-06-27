import { type MotionStyle } from "motion/react";
import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";
import { InfiniteMovingList } from "../../ui/InfiniteMovingList";
import { MAIN_SKILLS, OTHER_SKILLS, type Skill } from "../skills";
import { cn } from "../../../utils/cn";
import { useThemeMode } from "../../../hooks/useThemeMode";

const SKILLS = [
  {
    id: 1,
    name: "JavaScript (ES6+)",
    color: "bg-yellow-500",
    category: "Front end Technologies",
  },
  {
    id: 2,
    name: "TypeScript",
    color: "bg-blue-500",
    category: "Front end Technologies",
  },
  {
    id: 3,
    name: "React",
    color: "bg-cyan-500",
    category: "Front end Technologies",
  },
  {
    id: 4,
    name: "Node.js",
    color: "bg-green-500",
    category: "Back end Technologies",
  },
  {
    id: 5,
    name: "GraphQL",
    color: "bg-purple-500",
    category: "Back end Technologies",
  },
  {
    id: 6,
    name: "RESTful APIs",
    color: "bg-orange-500",
    category: "Back end Technologies",
  },
  {
    id: 7,
    name: "Emotion CSS",
    color: "bg-pink-500",
    category: "Front end Technologies",
  },
  { id: 8, name: "Jest", color: "bg-gray-500", category: "Testing Frameworks" },
];

export function SkillsCard({
  translate,
}: {
  translate?: MotionStyle["translate"];
}) {
  return (
    <>
      <AnimatedCard className="flex flex-col gap-3 " translate={translate}>
        <CardTitle>Expert in</CardTitle>
        <CardContent className="flex justify-around items-center gap-3 ">
          {MAIN_SKILLS.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </CardContent>
      </AnimatedCard>
      <AnimatedCard
        className="flex flex-col gap-3 col-span-2"
        translate={translate}
      >
        <CardTitle>Work with</CardTitle>
        <CardContent className="flex justify-between items-center gap-3">
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
    <div className="h-full flex flex-col items-center">
      <img
        className={cn("w-9 h-9", className)}
        src={theme === "dark" && srcDark ? srcDark : src}
        alt={name}
        width={36}
        height={36}
        loading="lazy"
      />
      <p className="mt-1 text-[11px]">{name}</p>
    </div>
  );
}
