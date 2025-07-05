import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";
import { Linkedin, Github, Mail } from "lucide-react";

export const SocialLinks = ({ className }: { className?: string }) => {
  const LINKS = [
    {
      key: "gmail",
      icon: <Mail size={32} aria-hidden="true" />,
      url: "mailto:artmakatera@gmail.com",
      label: "Send email to Artem Makatera",
      ariaLabel: "Email Artem Makatera",
    },
    {
      key: "github",
      icon: <Github size={32} aria-hidden="true" />,
      url: "https://github.com/artmakatera",
      label: "View GitHub profile",
      ariaLabel: "Visit Artem Makatera's GitHub profile",
    },
    {
      key: "linkedin",
      icon: <Linkedin size={32} aria-hidden="true" />,
      url: "https://www.linkedin.com/in/artem-makatera-a19769a0/",
      label: "View LinkedIn profile", 
      ariaLabel: "Visit Artem Makatera's LinkedIn profile",
    },
  ];

  return (
    <div className={cn("grid grid-flow-col justify-center gap-1", className)} role="list" aria-label="Social media links">
      {LINKS.map(({ key, url, icon, ariaLabel }) => (
        <div key={key} role="listitem">
          <Button 
            variant="outline" 
            size="icon" 
            className="size-9 md:size-11"
            asChild
          >
            <a 
              href={url}
              aria-label={ariaLabel}
              target={url.startsWith('mailto:') ? undefined : '_blank'}
              rel={url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              {icon}
            </a>
          </Button>
        </div>
      ))}
    </div>
  );
};
