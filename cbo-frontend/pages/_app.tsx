import React from "react";

import { LayoutProvider } from "~layouts";
import { StoreProvider } from "~store/provider";
import type { NextComponentType } from "~types/next";
import notistackRef from "~utils/notistackRef";
import { queryClient } from "~utils/queryClient";

import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { QueryClientProvider } from "react-query";

interface CustomAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          classes={{ containerRoot: "snackBarClassRoot" }}
          ref={notistackRef}
          maxSnack={2}
        >
          <LayoutProvider layout={Component.layout}>
            <Component {...pageProps} />
          </LayoutProvider>
        </SnackbarProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default MyApp;
