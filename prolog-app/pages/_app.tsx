import type { AppProps } from "next/app";
import { NavigationProvider } from "@contexts/Navigation";
import { GlobalStyle } from "@styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <GlobalStyle />
          <Component {...pageProps} />;
        </NavigationProvider>
      </ThemeProvider>
    </>
  );
}
