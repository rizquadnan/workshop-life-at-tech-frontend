import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";

import { theme } from "./mantine";
import { queryClient } from "./reactQuery";
import { router } from "./reactRouterDom";
export const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
};
