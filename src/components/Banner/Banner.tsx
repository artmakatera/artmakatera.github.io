import { ContainerScroll } from "./ContainerScrollAnimation";
import { FlipWords } from "./FlipWords";
import { cn } from "../../utils/cn";

export default function Banner() {
  return (
    <div className="pt-16 sm:pt-0 sm:pb-16 md:mb-24">
      <ContainerScroll
        titleComponent={
          <div
            className={cn(
              "text-2xl sm:text-4xl md:text-6xl font-normal text-neutral-600 dark:text-neutral-400 -mb-4 sm:mb-4 text-left",
              "w-[85%] mx-auto sm:w-auto ml-12 md:ml-16 lg:ml-24 xl:ml-32 2xl:ml-40",
              "relative sm:-inset-2"
            )}
          >
            Coding Your
            <FlipWords /> <br />
            into Reality.
            <br />
          </div>
        }
      />
    </div>
  );
}
