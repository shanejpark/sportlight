"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, createContext } from "react";

export const PageContext = createContext<any>(null);

export interface searchParams {
  selectedCountry: String;
  setSelectedCountry: Function;
  selectedLeague: String;
  setSelectedLeague: Function;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const providerValue = React.useMemo(
    () => ({
      selectedCountry,
      setSelectedCountry,
      selectedLeague,
      setSelectedLeague,
    }),
    [selectedCountry, selectedLeague]
  );
  return (
    <html lang="en">
      <body>
        <PageContext.Provider value={providerValue}>
          {children}
        </PageContext.Provider>
      </body>
    </html>
  );
}
