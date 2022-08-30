import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/config/styles/global";
import theme from "@/config/styles/theme";
import { wrapper } from "@/features/Redux/store";
import { Navbar } from "@/src/components";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NextNProgress
        color={theme.colors.lightBlue}
        options={{ showSpinner: false }}
      />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
