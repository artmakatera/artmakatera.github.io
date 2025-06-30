import { cn } from "../../utils/cn";

interface PulsatingDotProps {
  className?: string;
}

export function PulsatingDot({ className }: PulsatingDotProps) {
  return (
      <div className={cn("relative w-2 h-2", className)}>
        <div className="animate-ping absolute inset-1/2 h-2 w-2 rounded-full bg-green-400 opacity-75"></div>
        <div className=" absolute inset-1/2 rounded-full h-2 w-2 bg-green-500"></div>
      </div>
     
  );
}