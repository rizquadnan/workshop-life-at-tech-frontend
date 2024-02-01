import { MantineProvider } from "@mantine/core";
import { theme } from "./mantine";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./reactRouterDom";
export const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};
