"use client";

import React from "react";

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return (
    <div className="flex flex-col min-w-7xl min-h-screen bg-slate-50">
      {children}
    </div>
  );
};

export default Template;
