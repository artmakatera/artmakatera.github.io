import React from "react";

type CardSubtitleProps = {
  children: React.ReactNode;
};

export const CardSubtitle = ({ children }: CardSubtitleProps) => {
  return <h3 className="text-muted-foreground text-xs ">{children}</h3>;
};
