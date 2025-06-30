import { cn } from "../../../utils/cn";
type CardSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardSubtitle = ({ children, className }: CardSubtitleProps) => {
  return <h3 className={cn("text-muted-foreground text-xs uppercase font-semibold", className)}>{children}</h3>;
};
