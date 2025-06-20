import React from "react";

type CardTitleProps = {
  children: React.ReactNode;
};

export const CardTitle = ({ children }: CardTitleProps) => {
  return <h2 className="font-semibold text-sm ">{children}</h2>;
};
