import '../styles/globals.styl'
import LayoutWrapper from '../layout/layoutwrapper';
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
      <LayoutWrapper {...pageProps}>
      <Component { ...pageProps } />
      </LayoutWrapper>
  )
}

export default MyApp
