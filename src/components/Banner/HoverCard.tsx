import React from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

type HoverCardProps = {
  children: React.ReactNode;
  translate?: any;
  className?: string;
};

export const HoverCard = ({
  children,
  translate,
  className,
}: HoverCardProps) => {
  return (
    <motion.div
      className={cn("bg-white rounded-md cursor-pointer relative", className)}
      style={{ translateY: translate }}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
    >
      {children}
    </motion.div>
  );
};
