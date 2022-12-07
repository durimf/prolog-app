import type { AppProps } from "next/app";
import { NavigationProvider } from "@contexts/Navigation";
import { GlobalStyle } from "@styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationProvider>
        <GlobalStyle />
        <Component {...pageProps} />;
      </NavigationProvider>
    </>
  );
}
