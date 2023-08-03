import { isApiError } from "./apiHelper";
import notistackRef from "./notistackRef";

import { QueryClient } from "react-query";

const enqueueMessageOnSnacks = (error: unknown) => {
  if (isApiError(error)) {
    notistackRef.current?.enqueueSnackbar(error.code, { variant: "error" });
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      onError: (error) => {
        enqueueMessageOnSnacks(error);
      },
    },
    mutations: {
      retry: 0,
      onError: (error) => {
        enqueueMessageOnSnacks(error);
      },
    },
  },
});
