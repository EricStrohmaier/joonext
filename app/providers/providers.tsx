"use client"
import React from "react";
import RelayProvider from "./relay-provider";
import NotifyProvider from "./notify-provider";
import ThemeProvider from "./theme";
import { IdentityProvider } from "./IdentityProvider";
import TimeProvider from "./time";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <TimeProvider>
        <IdentityProvider>
          <RelayProvider>
            <NotifyProvider>{children}</NotifyProvider>
          </RelayProvider>
        </IdentityProvider>
      </TimeProvider>
    </ThemeProvider>
  );
};
