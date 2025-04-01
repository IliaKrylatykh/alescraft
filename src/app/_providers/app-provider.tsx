"use client";

// import { AppSessionProvider } from "@/entities/user/session";
import { queryClient } from "@/shared/lib/query-client";
import { ComposeChildren } from "@/shared/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      {/* <AppSessionProvider /> */}
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
