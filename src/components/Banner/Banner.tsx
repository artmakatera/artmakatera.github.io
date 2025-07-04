import { ContainerScroll } from "./ContainerScrollAnimation";
import { FlipWords } from "./FlipWords";
import { cn } from "../../utils/cn";

export default function Banner() {
  return (
    <div className="pb-16 md:mb-24 ">
      <ContainerScroll
        titleComponent={
          <div
            className={cn(
              "text-2xl sm:text-4xl md:text-6xl font-normal text-neutral-600 dark:text-neutral-400 mb-4 text-left",
              "ml-8 md:ml-16 lg:ml-24 xl:ml-32 2xl:ml-40",
              "relative -inset-2"
            )}
          >
            Codding Your
            <FlipWords /> <br />
            into Reality.
            <br />
          </div>
        }
      />
    </div>
  );
}
