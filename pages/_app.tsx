import "../styles/globals.css";
import "@fontsource/abeezee/400.css";
import "@fontsource/kameron/700.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
