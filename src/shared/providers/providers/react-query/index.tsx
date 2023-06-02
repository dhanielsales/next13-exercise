"use client";

import { cache, useState } from "react";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

export const getQueryClient = cache(() => new QueryClient());

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
