import { Button } from "../ui/Button";
import { Linkedin, Github, Mail } from "lucide-react";

export const SocialLinks = () => {
  const LINKS = [
    {
      key: "gmail",
      icon: <Mail size={18} />,
      url: "mailto:artmakatera@gmail.com",
    },
    {
      key: "github",
      icon: <Github size={18} />,
      url: "https://github.com/Artmac100",
      color: null,
    },
    {
      key: "linkedin",
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/artem-makatera-a19769a0/",
      color: null,
    },
  ];

  return (
    <div className="mt-4 grid grid-flow-col gap-2 justify-center">
      {LINKS.map(({ key, url, icon, color }) => (
        <Button key={key} variant="outline">
          <a href={url}>{icon}</a>
        </Button>
      ))}
    </div>
  );
};
