import { ContainerScroll } from "./ContainerScrollAnimation";
import { FlipWords } from "./FlipWords";
import { cn } from "../../utils/cn";

// "Coding Your Dreams into Reality"
// "Coding Your Vision into Reality"
// "Coding Your Concepts into Reality"
// "Coding Your Innovations into Reality"
// "Coding Your Designs into Reality"
// "Coding Your Projects into Reality"
// "Coding Your Plans into Reality"
// "Coding Your Solutions into Reality"
// "Coding Your Aspirations into Reality"
// "Coding Your Imagination into Reality
const words = [
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

export default function Banner() {
  return (
    <div>
      <ContainerScroll
        users={[]}
        titleComponent={
          <div
            className={cn(
              "text-xl sm:text-4xl md:text-6xl font-normal text-neutral-600 dark:text-neutral-400 mb-4 text-left",
              "ml-8 md:ml-16 lg:ml-24 xl:ml-32 2xl:ml-40",
              "relative -inset-2"
            )}
          >
            Codding Your
            <FlipWords words={words} /> <br />
            into Reality.
            <br />
          </div>
        }
      />
    </div>
  );
}

