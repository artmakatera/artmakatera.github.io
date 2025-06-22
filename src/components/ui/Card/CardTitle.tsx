import React from "react";

type CardTitleProps = {
  children: React.ReactNode;
};

export const CardTitle = ({ children }: CardTitleProps) => {
  return <h2 className="font-bold text-sm text-card-foreground uppercase">{children}</h2>;
};
