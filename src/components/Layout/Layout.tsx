import React, { ReactNode } from "react";

import { Header } from "@components/Header/Header";
import { CookiesDashBoard } from "@components/CookiesDashBoard/CookiesDashBoard";
import { Footer } from "@components/Footer/Footer";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="min-h-screen pt-header md:pt-header-md pb-bottom md:pb-0 flex flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
      <CookiesDashBoard />
    </div>
  );
};
