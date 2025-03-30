"use client";

// import { AppSessionProvider } from "@/entities/user/session";
import { ThemeProvider } from "@/features/theme";
// import { queryClient } from "@/shared/api/query-client";
import { ComposeChildren } from "@/shared/lib/react";
// import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem />
      {/* <AppSessionProvider /> */}
      {/* <QueryClientProvider client={queryClient} /> */}
      {children}
    </ComposeChildren>
  );
}
