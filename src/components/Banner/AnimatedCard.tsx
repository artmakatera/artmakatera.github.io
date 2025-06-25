import React from "react";
import { motion, type MotionStyle } from "motion/react";
import { cn } from "../../utils/cn";
import type { HTMLAttributes } from "astro/types";

type AnimatedCardProps = {
  children?: React.ReactNode;
  translate?: MotionStyle["translate"];
  className?: string;
  style?: MotionStyle;
};

export const AnimatedCard = ({
  children,
  translate,
  className,
  style,
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
