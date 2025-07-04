import { useRef, useState, useEffect, type ReactNode } from "react";
import { useScroll, useTransform, motion } from "motion/react";

// Components
import { ScrollDisplay } from "./ScrollDisplay";

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
  const translate = useTransform(scrollYProgress, [0, 1], [0, -92]);
  const translateKeyboard = useTransform(scrollYProgress, [0, 1], [25, 0]);

  return (
    <div
      className="h-[110vh] flex flex-col items-center justify-center relative md:p-16 lg:p-20 mx-auto max-w-sm sm:max-w-xl  md:max-w-4xl lg:max-w-7xl"
      ref={containerRef}
    >
      <div className="pt-32 px-6 sm:px-8 md:pt-40 md:w-[calc(100%-140px)] w-full relative" 
          style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <ScrollDisplay rotate={rotate} translate={translate} scale={scale} />
      </div>
      <motion.div
        style={{
          rotateX: rotate,
          translateY: translateKeyboard,

          scale: scaleKeyBoard,
        }}
        className="w-full relative xl:block hidden drop-shadow-2xl"
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
      className="max-w-6xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};
