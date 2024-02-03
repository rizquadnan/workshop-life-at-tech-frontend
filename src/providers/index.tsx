import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { theme } from "./mantine";
import { queryClient } from "./reactQuery";
import RootWrapper, { Children } from "./reactRouterDom";
export const Provider = ({ children }: { children: Children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider theme={theme}>
        {/* children must be a react router root */}
        <RootWrapper>{children}</RootWrapper>
      </MantineProvider>
    </QueryClientProvider>
  );
};
