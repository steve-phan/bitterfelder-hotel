import type { AppProps, AppContext } from "next/app";
import App from "next/app";

import { Layout } from "@components/Layout/Layout";
import { GlobalProviders } from "src/GlobalProviders";

import "../../styles/globals.css";

export default function CustomApp({
  Component,
  pageProps,
  cookies,
}: AppProps & { cookies: string }) {
  return (
    <GlobalProviders cookies={cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProviders>
  );
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, cookies: appContext.ctx.req?.headers?.cookie };
};
