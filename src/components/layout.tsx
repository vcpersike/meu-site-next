"use client";

import React from "react";
import { ThemeProvider } from "../../_shared/mods";

export function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
