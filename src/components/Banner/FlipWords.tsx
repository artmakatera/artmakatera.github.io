import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "../../utils/cn";

const WORDS = [
  "Ideas",
  "Dreams",
  "Vision",
  "Concepts",
  "Innovations",
  "Designs",
  "Projects",
  "Plans",
  "Solutions",
];

export const FlipWords = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = WORDS[currentWordIndex];

  useEffect(() => {
    let timeoutId = null;

    if (isAnimating) {
      timeoutId = setTimeout(() => {
        const nextIndex = (currentWordIndex + 1) % WORDS.length;
        setCurrentWordIndex(nextIndex);
        setIsAnimating(true);
      }, 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentWordIndex]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <div
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 mx-2"
        )}
      >
        {/* This invisible div is used to reserve space for the text while it animates */}
        <div className="invisible">Innovations</div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className={cn("absolute inset-0 whitespace-nowrap pl-2")}
          key={currentWord}
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
