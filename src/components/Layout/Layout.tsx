import React, { ReactNode } from "react";

import { Header } from "@components/Header/Header";
import { CookiesDashBoard } from "@components/CookiesDashBoard/CookiesDashBoard";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <CookiesDashBoard />
    </div>
  );
};
