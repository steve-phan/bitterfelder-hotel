import React, { ReactNode } from "react";
import { Cookies, CookiesProvider } from "react-cookie";

interface IGlobalProvidersProps {
  children: JSX.Element;

  cookies: string;
}

export const GlobalProviders = ({
  children,
  cookies,
}: IGlobalProvidersProps) => {
  const isBrowser = typeof window !== "undefined";

  return (
    <CookiesProvider cookies={isBrowser ? undefined : new Cookies(cookies)}>
      {children}
    </CookiesProvider>
  );
};
