"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-w-7xl min-h-screen bg-white">
      {children}
    </div>
  );
}
