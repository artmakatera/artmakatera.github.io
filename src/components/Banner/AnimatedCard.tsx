import React from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

type AnimatedCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  translate?: any;
  className?: string;
  
};

export const AnimatedCard = ({
  children,
  translate,
  className,
  style
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={cn(
        "bg-background dark:bg-secondary rounded-md cursor-pointer relative p-4 box-border shadow-lg",
        className
      )}
      style={{
        translateY: translate,
        ...style,
          // boxShadow:
          //   "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",

      }}
     
    >
      {children}
    </motion.div>
  );
};
