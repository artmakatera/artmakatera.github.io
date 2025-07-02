import { motion } from "motion/react";
import { useRef, useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { MenuNavigation } from "./MenuNavigation";
import type { Page } from "./types";

export type { Page };
interface MobileMenuProps { pages: Page[] }

export const MobileMenu = ({ pages }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="h-fit sm:hidden"
    >
      <motion.div className="bg-muted absolute top-0 left-0 bottom-0 w-screen h-screen" variants={sidebarVariants} />
      <MenuNavigation pages={pages} onPageChange={() => setIsOpen(false)} />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </motion.nav>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at right top)`,
    transition: {
      type: "spring" as const,
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0 at right top)",
    transition: {
      delay: 0.2,
      type: "spring" as const,
      stiffness: 400,
      damping: 40,
    },
  },
};



