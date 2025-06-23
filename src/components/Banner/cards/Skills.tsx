import { color } from "motion/react";
import { Badge } from "../../ui/Badge";
import { CardContent } from "../../ui/Card/CardContent";
import { CardSubtitle } from "../../ui/Card/CardSubtitle";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";

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


export const SkillsCard = ({ translate }: { translate: any }) => {
  return (
    <AnimatedCard
      className="flex flex-col gap-3 row-span-2"
      translate={translate}
    >
      <CardTitle>My stack</CardTitle>
      <CardContent className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <Badge
            key={skill.id}
            className={`text-xs font-semibold ${skill.color} text-white`}
          >
            {skill.name}
          </Badge>
        ))}
      </CardContent>
    </AnimatedCard>
  );
};
