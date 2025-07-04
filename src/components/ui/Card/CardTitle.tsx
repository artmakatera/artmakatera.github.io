import { cn } from "../../../utils/cn";

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return <h2 className={cn("font-bold text-xs sm:text-sm text-muted-foreground uppercase", className)}>{children}</h2>;
};
