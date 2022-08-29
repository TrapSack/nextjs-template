import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/features/Redux/store";
import theme from "@/config/styles/theme";
import GlobalStyles from "@/config/styles/global";
import NextNProgress from 'nextjs-progressbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NextNProgress color={theme.colors.lightBlue} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
