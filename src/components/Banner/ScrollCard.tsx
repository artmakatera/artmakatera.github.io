import { motion } from "motion/react";
import { HoverCard } from "./HoverCard";
import { ProfileCard } from "./ProfileCard";
import { CardTitle } from "../ui/Card/CardTitle";
import { CardSubtitle } from "../ui/Card/CardSubtitle";

export const ScrollCard = ({
  rotate,
  scale,
  translate,
  users,
}: {
  rotate: any;
  scale: any;
  translate: any;
  users: {
    name: string;
    designation: string;
    image: string;
    badge?: string;
  }[];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        // scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className=" -mt-12 mx-auto h-120 md:h-160 w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 py-28 h-full w-full rounded-2xl gap-4 overflow-hidden p-4 grid grid-cols-1 md:grid-cols-[250px_auto]">
        <HoverCard className="bg-transparent" translate={translate}>
          <ProfileCard />
        </HoverCard>
        <div className=" grid grid-cols-1  lg:grid-cols-2 gap-4 w-full h-full">
          {users.map((user, idx: number) => (
            <HoverCard key={`user-${idx}`} translate={translate}>
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                {user.badge}
              </div>
              <img
                src={user.image}
                className="rounded-tr-md rounded-tl-md text-sm "
                alt="thumbnail"
              />
              <div className="p-4">
                <CardTitle>{user.name}</CardTitle>
                <CardSubtitle>{user.designation}</CardSubtitle>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
