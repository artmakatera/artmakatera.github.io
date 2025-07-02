import { motion } from "motion/react";

import type { Page } from "./types";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MenuNavigation = ({ pages }: { pages: Page[] }) => (
  <motion.ul className="p-8 fixed top-12 left-0" variants={navVariants}>
    {pages.map((page, i) => (
      <MenuItem key={i} page={page} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ page }: { page: Page }) => {
  return (
    <motion.li
      className="flex items-center justify-start mb-5 cursor-pointer"
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={page.href}
        className="text-foreground text-2xl transition-colors"
      >
        {page.label}
      </a>
    </motion.li>
  );
};
