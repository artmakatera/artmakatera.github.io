import type { MotionStyle } from "motion/react";
import { CardContent } from "../../ui/Card/CardContent";
import { CardTitle } from "../../ui/Card/CardTitle";
import { AnimatedCard } from "../AnimatedCard";



export const LatestPostsCard = ({
  translate
}: {
  translate?: MotionStyle["translate"];
}) => {
  return (
     <AnimatedCard
             className="hidden md:flex flex-col md:col-span-1 gap-2"
             translate={translate}
           >
             <CardTitle>Latest Posts</CardTitle>
             <CardContent className="text-xs">
               <ul className="list-disc pl-2 text-pretty [&>li]:underline [&>li]:hover:text-muted-foreground [&>li]:leading-relaxed">
                <li>
                  <a href="https://algo-curcuit.vercel.app/articles/binary-tree">Binary Tree Visualization</a>
                </li>
                <li>
                  <a href="https://algo-curcuit.vercel.app/articles/graph">Unweighted Graph</a>
                </li>
                 <li>
                   <a href="https://algo-curcuit.vercel.app/articles/binary-search">Binary Search Algorithm</a>
                 </li>
               </ul>
             </CardContent>
           </AnimatedCard>
  );
}