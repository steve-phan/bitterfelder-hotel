import React, { ReactNode } from "react";

import { Header } from "@components/Header/Header";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
