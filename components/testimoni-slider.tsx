/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

"use client";

import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";

// unit rumah bloom
import HomeImage from "~/public/assets/Unit-Rumah/The-bloom/Denah-Rumah.png";
import Denah1 from "~/public/assets/Unit-Rumah/The-bloom/Denah-1.png";
import Denah2 from "~/public/assets/Unit-Rumah/The-bloom/Denah-2.png";
import LogoBloom from "~/public/assets/Unit-Rumah/The-bloom/logo-1.svg";

// unit rumah bellflower
import HomeImageBellflower from "~/public/assets/Unit-Rumah/The-Bellflower/Image-Rumah.png";
import Denah1Bellflower from "~/public/assets/Unit-Rumah/The-Bellflower/Denah-1.png";
import Denah2Bellflower from "~/public/assets/Unit-Rumah/The-Bellflower/Denah-2.png";
import LogoBellflower from "~/public/assets/Unit-Rumah/The-Bellflower/Logo-2.svg";

// unit rumah burnet
import HomeImageBurnet from "~/public/assets/Unit-Rumah/The-burnet/Image-Rumah.png";
import Denah1Burnet from "~/public/assets/Unit-Rumah/The-burnet/Denah-1.png";
import Denah2Burnet from "~/public/assets/Unit-Rumah/The-burnet/Denah-2.png";
import LogoBurnet from "~/public/assets/Unit-Rumah/The-burnet/Logo-3.svg";
import { Unit1, Unit2, Unit3, Unit4, Unit5 } from "./icons";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

// import { DataProps } from "~/pages";

// export type DataProps = {
//   data: {
//     readonly created_at?: string;
//     readonly id?: number;
//     readonly image: string;
//     readonly link?: null;
//     readonly mobile_image: string;
//     readonly sequence?: string;
//     readonly status?: string;
//     readonly updated_at?: string;
//   }[];
// };

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        borderLeft: "20px solid #D1AA67",
        transform: "rotate(180deg)",
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        borderLeft: "20px solid #D1AA67",
      }}
      onClick={onClick}
    />
  );
}

export default function SliderComponents() {
  // console.log(data);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    row: 3,
    autoplay: false,
    cssEase: "linear",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <section className="relative">
      <div className="block max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl my-8 md:my-10">
        <Slider {...settings}>
          {/* Bloom done */}
          <div className="bg-transparant  rounded-xl p-8 w-[320px] h-fit">
            <div className="flex flex-wrap justify-evenly">
              <div className="flex-initial">
                <figure className="w-full h-fit">
                  <Image
                    src={HomeImage}
                    alt="denah-rumah-bloom"
                    width={457}
                    height={524}
                  />
                </figure>
              </div>

              <div className="flex-initial space-y-6 max-w-[186px] mt-3 md:mt-0">
                <div className="space-y-4">
                  <figure className="w-fit h-fit">
                    <Image
                      src={LogoBloom}
                      alt="logo-bloom"
                      width={185}
                      height={64}
                    />
                  </figure>
                  <p className="paragraph text-sakura-brown">
                    LT : 72 m² (6x12)
                  </p>
                  <p className="paragraph text-sakura-brown">LB : 87 m²</p>
                </div>

                {/* list facilities */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit1, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>3 KT</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit2, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>3 KM</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit3, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>1 WALK IN CLOSET</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit4, {
                      width: "50px",
                      height: "20px",
                    })}
                    <p>1 MOBIL</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit5, {
                      width: "48px",
                      height: "35px",
                    })}
                    <p>1 MOTOR</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 md:mt-0">
                <div className="flex-1 text-center">
                  <figure className="w-full h-fit">
                    <Image src={Denah1} alt="denah-rumah-bloom-1" />
                  </figure>
                  <p>Lantai Dasar</p>
                </div>
                <div className="flex-1 text-center">
                  <figure className="w-full h-fit">
                    <Image src={Denah2} alt="denah-rumah-bloom-2" />
                  </figure>
                  <p>Lantai Atas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Burnet */}
          <div className="bg-transparant  rounded-xl p-8 w-[320px] h-fit">
            <div className="flex flex-wrap justify-evenly">
              <div className="flex-initial">
                <figure className="w-full h-fit">
                  <Image
                    src={HomeImageBurnet}
                    alt="denah-rumah-burnet"
                    width={457}
                    height={524}
                  />
                </figure>
              </div>

              <div className="flex-initial space-y-6 max-w-[186px] mt-3 md:mt-0">
                <div className="space-y-4">
                  <figure className="w-fit h-fit">
                    <Image
                      src={LogoBurnet}
                      alt="logo-burnet"
                      width={185}
                      height={64}
                    />
                  </figure>
                  <p className="paragraph text-sakura-brown">
                    LT : 84 m² (7x12)
                  </p>
                  <p className="paragraph text-sakura-brown">LB : 101 m²</p>
                </div>

                {/* list facilities */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit1, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>3 KT</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit2, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>3 KM</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit3, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>1 WALK IN CLOSET</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit4, {
                      width: "50px",
                      height: "20px",
                    })}
                    <p>2 MOBIL</p>
                  </div>
                  {/* <div className="flex items-center gap-x-2">
                    {React.createElement(Unit5, {
                      width: "48px",
                      height: "35px",
                    })}
                    <p>1 MOTOR</p>
                  </div> */}
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 md:mt-0">
                <div className="flex-1 text-center">
                  <figure className="w-full h-fit">
                    <Image src={Denah1Burnet} alt="denah-rumah-burnet-1" />
                  </figure>
                  <p>Lantai Dasar</p>
                </div>
                <div className="flex-1 text-center">
                  <figure className="w-full h-fit">
                    <Image src={Denah2Burnet} alt="denah-rumah-burnet-2" />
                  </figure>
                  <p>Lantai Atas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bellflower */}
          <div className="bg-transparant  rounded-xl p-8 w-[320px] h-fit">
            <div className="flex flex-wrap justify-evenly">
              <div className="flex-initial">
                <figure className="w-full h-fit">
                  <Image
                    src={HomeImageBellflower}
                    alt="denah-rumah-bellflower"
                    width={457}
                    height={524}
                  />
                </figure>
              </div>

              <div className="flex-initial space-y-6 max-w-[186px] mt-3 md:mt-0">
                <div className="space-y-4">
                  <figure className="w-fit h-fit">
                    <Image
                      src={LogoBellflower}
                      alt="logo-bellflower"
                      width={185}
                      height={64}
                    />
                  </figure>
                  <p className="paragraph text-sakura-brown">
                    LT : 96 m² (8x12)
                  </p>
                  <p className="paragraph text-sakura-brown">LB : 122 m²</p>
                </div>

                {/* list facilities */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit1, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>4+1 KT</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit2, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>3+1 KM</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit3, {
                      width: "46px",
                      height: "37px",
                    })}
                    <p>1 WALK IN CLOSET</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {React.createElement(Unit4, {
                      width: "50px",
                      height: "20px",
                    })}
                    <p>2 MOBIL</p>
                  </div>
                  {/* <div className="flex items-center gap-x-2">
                    {React.createElement(Unit5, {
                      width: "48px",
                      height: "35px",
                    })}
                    <p>1 MOTOR</p>
                  </div> */}
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 md:mt-0">
                <div className="flex-1 text-center">
                  <figure className="w-full h-fit">
                    <Image
                      src={Denah1Bellflower}
                      alt="denah-rumah-bellflower-1"
                    />
                  </figure>
                  <p>Lantai Dasar</p>
                </div>
                <div className="flex-1 text-center">
                  <figure className="w-full h-fit">
                    <Image
                      src={Denah2Bellflower}
                      alt="denah-rumah-bellflower-2"
                    />
                  </figure>
                  <p>Lantai Atas</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
