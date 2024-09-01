'use client'
import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
