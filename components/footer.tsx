"use client";

import Image from "next/image";
// import Image from "next/image";
import React from "react";
import LogoWhite from "~/public/assets/suvarna-sutera-logo-white.svg";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-sakura-10 w-full px-4 md:px-[80px] py-10 md:py-10 mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center text-center xl:text-left gap-8 md:gap-10 x5l:gap-16">
          {/* logo */}
          <div className="flex-1">
            <Image src={LogoWhite} width={130} height={114} alt="logo-white" />
          </div>

          <div className="flex-1 space-y-1 xl:space-y-4">
            <p className="dm-sans font-bold text-base text-white">
              MARKETING OFFICE SUVARNA SUTERA
            </p>
            <p className="dm-sans text-base text-white">
              Jl. Suvarna Sutera Boulevard No. 10 Pasar Kemis, Tangerang, 15560
            </p>
          </div>
          <div className="flex-1 space-y-1 xl:space-y-4">
            <p className="dm-sans font-bold text-base text-white">
              MARKETING OFFICE SUVARNA RESPATI
            </p>
            <p className="dm-sans text-base text-white">
              Jl. Raya Rajeg - Pasar Kemis, Sindang Panon, Sindang Jaya,
              Tangerang, 15560
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-end h-auto xl:h-[115px]">
            <p className="dm-sans text-base text-white">(021) 31103838</p>
            <p className="dm-sans text-base text-white">
              {" "}
              www.suvarnasutera.com
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-sakura-100 py-4">
        <p className="dm-sans text-center text-[12px] md:text-[14px] text-white">
          © 2023 Suvarna Sutera. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
