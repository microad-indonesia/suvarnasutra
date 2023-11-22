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
import Script from "next/script";

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TMN5SGDD');`}
        </Script>
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
