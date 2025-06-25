import { useEffect, useRef, useState, useCallback, type LiHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const ITEMS = [
  {
    quote: "This is a fantastic product! It has changed the way I work.",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote: "I love using this tool. It's incredibly intuitive and efficient.",
    name: "Jane Smith",
    title: "Product Manager",
  },
  {
    quote: "A game changer in the industry. Highly recommend it to everyone.",
    name: "Alice Johnson",
    title: "UX Designer",
  },
];

export function InfiniteMovingList({
  children,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  children: React.ReactElement<LiHTMLAttributes<HTMLLIElement>>[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const setAnimationProperties = useCallback(() => {
    if (!containerRef.current) return;
    // Direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
    // Speed
    let duration = "40s";
    if (speed === "fast") duration = "20s";
    else if (speed === "slow") duration = "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  }, [direction, speed]);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    // Duplicate children only once
    if (scrollerRef.current.children.length === children.length) {
      Array.from(scrollerRef.current.children).forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
    setAnimationProperties();
    setStart(true);
  }, [children, setAnimationProperties, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </ul>
    </div>
  );
}
