import React from "react";
import RelayProvider from "./relay-provider";
import NotifyProvider from "./notify-provider";
import ThemeProvider from "./theme";
import { IdentityProvider } from "./IdentityProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <IdentityProvider>
        <RelayProvider>
          <NotifyProvider>{children}</NotifyProvider>
        </RelayProvider>
      </IdentityProvider>
    </ThemeProvider>
  );
};
