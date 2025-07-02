import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";
import { Linkedin, Github, Mail } from "lucide-react";

export const SocialLinks = ({ className }: { className?: string }) => {
  const LINKS = [
    {
      key: "gmail",
      icon: <Mail size={32}  />,
      url: "mailto:artmakatera@gmail.com",
    },
    {
      key: "github",
      icon: <Github size={32}  />,
      url: "https://github.com/Artmac100",
      color: null,
    },
    {
      key: "linkedin",
      icon: <Linkedin size={32}  />,
      url: "https://www.linkedin.com/in/artem-makatera-a19769a0/",
      color: null,
    },
  ];

  return (
    <div className={cn("grid grid-flow-col justify-center gap-1", className)}>
      {LINKS.map(({ key, url, icon }) => (
        <Button key={key} variant="outline" size="icon" className="size-9 md:size-11">
          <a href={url}>{icon}</a>
        </Button>
      ))}
    </div>
  );
};
