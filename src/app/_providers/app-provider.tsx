"use client";

import { queryClient } from "@/shared/lib/query-client";
import { ComposeChildren } from "@/shared/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
