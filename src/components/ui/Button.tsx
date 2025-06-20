import React from "react";
import { cn } from "../../utils/cn";

const BUTTON_CLASSES = {
  outlined:
    "p-1 rounded-full text-black bg-white hover:bg-gray-100 transition duration-200",
  callToAction:
    "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof BUTTON_CLASSES;
};

export const Button = ({
  children,
  className,
  variant = "outlined",
}: ButtonProps) => {
  return (
    <button className={cn(BUTTON_CLASSES[variant], className)}>
      {children}
    </button>
  );
};

{
  /* <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
  Next.js Blue
</button>; */
}
