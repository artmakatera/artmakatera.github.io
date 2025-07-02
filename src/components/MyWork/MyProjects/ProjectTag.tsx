import { Badge } from "../../ui/Badge";


export const ProjectTag = ({ tag }: { tag: string }) => (
  <Badge
  variant="outline"
   className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
   >
    {tag}
  </Badge>
);