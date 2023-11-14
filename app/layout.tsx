"use client";

import React from "react";
// import Link from "next/link";
// import { Navigation } from "~/components/navigation";
import Template from "./template";
import "./globals.css";
import { DM_Sans } from "next/font/google";
// import Footer from "~/components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "~/components/footer";

// import Sampling from "~/components/sampling";

const inter = DM_Sans({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-DM_Sans",
});

type layoutProps = { children: React.ReactNode };

const RootLayout = ({ children }: layoutProps) => {
  return (
    <html>
      <head />
      <body>
        <main className={`${inter.variable} font-sans`}>
          {/* <nav>
            <Navigation />
          </nav> */}
          <Template>{children}</Template>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
