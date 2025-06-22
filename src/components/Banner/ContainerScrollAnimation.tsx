import { useRef, useState, useEffect, type ReactNode } from "react";
import { useScroll, useTransform, motion } from "motion/react";

// Components
import { ScrollCard } from "./ScrollCard";

import keyboardImg from "../../assets/keyboard.png";

export const ContainerScroll = ({
  titleComponent,
}: {
  titleComponent?: string | ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center center"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const scaleDimensionsKeyBoard = () => {
    return isMobile ? [0.7, 0.9] : [1.2, 1.08];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const scaleKeyBoard = useTransform(
    scrollYProgress,
    [0, 1],
    scaleDimensionsKeyBoard()
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const translateKeyboard = useTransform(scrollYProgress, [0, 1], [25, 0]);

  return (
    <div
      className="h-[110vh] flex flex-col items-center justify-center relative sm:p-20 mx-auto max-w-6xl"
      ref={containerRef}
    >
      <div
        className="pt-40 w-full relative"
        style={{
          width: "calc(100% - 140px)",
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <ScrollCard rotate={rotate} translate={translate} scale={scale} />
      </div>
      <motion.div
        style={{
          rotateX: rotate,
          translateY: translateKeyboard,

          scale: scaleKeyBoard,
        }}
        className="w-full relative lg:block hidden drop-shadow-2xl"
      >
        <img
          src={keyboardImg.src}
          alt="Banner Laptop"
          className="dark:brightness-60"
        />
      </motion.div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-6xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};
