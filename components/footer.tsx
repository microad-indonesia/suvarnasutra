"use client";

import Image from "next/image";
// import Image from "next/image";
import React from "react";
import LogoWhite from "~/public/assets/suvarna-sutera-logo-white.svg";

const Footer: React.FC = () => {
  return (
    <>
      <section className="bg-sakura-100 w-full px-4 md:px-[100px] py-4 md:py-[80px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-center gap-4">
          {/* logo */}
          <div className="flex-1">
            <Image src={LogoWhite} width={130} height={114} alt="logo-white" />
          </div>

          <div className="flex-1">
            <p className="paragraph font-medium text-white">
              MARKETING OFFICE SUVARNA SUTERA
            </p>
            <p className="text-slate-50">
              Jl. Suvarna Sutera Boulevard No. 10 Pasar Kemis, Tangerang, 15560
            </p>
          </div>
          <div className="flex-1">
            <p className="paragraph font-medium text-white">
              MARKETING OFFICE SUVARNA RESPATI
            </p>
            <p className="text-slate-50">
              Jl. Raya Rajeg - Pasar Kemis, Sindang Panon, Sindang Jaya,
              Tangerang, 15560
            </p>
          </div>

          <div className="flex-1">
            <p className="text-slate-50">(021) 31103838</p>
            <p className="text-slate-50"> www.suvarnasutera.com</p>
          </div>
        </div>
      </section>
      <div className="bg-sakura-10 py-4">
        <p className="text-center paragraph text-white">
          © 2023 Suvarna Sutera. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
