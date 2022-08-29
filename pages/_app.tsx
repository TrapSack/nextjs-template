import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/config/styles/global";
import theme from "@/config/styles/theme";
import { store, wrapper } from "@/features/Redux/store";

function App({ Component, pageProps }: AppProps) {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NextNProgress
          color={theme.colors.lightBlue}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
