
import { cn } from "../../../utils/cn";

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("text-card-foreground text-xs lg:text-base", className)}>{children}</div>;
};
