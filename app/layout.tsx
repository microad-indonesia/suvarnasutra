"use client";

import React from "react";
// import Link from "next/link";
// import { Navigation } from "~/components/navigation";
import Template from "./template";
import "./globals.css";
import { DM_Sans, DM_Serif_Text } from "next/font/google";
// import Footer from "~/components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "~/components/footer";

// import Sampling from "~/components/sampling";

const DMSans = DM_Sans({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-DM_Sans",
  display: "swap",
});

const DMSerifText = DM_Serif_Text({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-DM_Serif_Text",
  display: "swap",
});

type layoutProps = { children: React.ReactNode };

const RootLayout = ({ children }: layoutProps) => {
  return (
    <html>
      <head />
      <body>
        <main
          className={`${DMSerifText.variable} font-sans, ${DMSans.variable} font-serif`}
        >
          <Template>{children}</Template>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
