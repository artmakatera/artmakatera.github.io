import { useEffect, useRef, useState, type LiHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface InfiniteMovingListProps {
  children: React.ReactElement<LiHTMLAttributes<HTMLLIElement>>[];
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingList({
  children,
  pauseOnHover = true,
  className,
}: InfiniteMovingListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    // Duplicate children only once
    if (scrollerRef.current.children.length === children.length) {
      Array.from(scrollerRef.current.children).forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
    setStart(true);
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </ul>
    </div>
  );
}
