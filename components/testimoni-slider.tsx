/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

"use client";

import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";

// unit rumah bloom
import HomeImage from "~/public/assets/Unit-Rumah/The-bloom/image-unit.webp";
import Denah1 from "~/public/assets/Unit-Rumah/The-bloom/Denah-1.png";
import Denah2 from "~/public/assets/Unit-Rumah/The-bloom/Denah-2.png";
import LogoBloom from "~/public/assets/Unit-Rumah/The-bloom/logo-1.svg";

// unit rumah bellflower
import HomeImageBellflower from "~/public/assets/Unit-Rumah/The-Bellflower/image-unit.webp";
import Denah1Bellflower from "~/public/assets/Unit-Rumah/The-Bellflower/Denah-1.png";
import Denah2Bellflower from "~/public/assets/Unit-Rumah/The-Bellflower/Denah-2.png";
import LogoBellflower from "~/public/assets/Unit-Rumah/The-Bellflower/logo-2.svg";

// unit rumah burnet
import HomeImageBurnet from "~/public/assets/Unit-Rumah/The-burnet/image-unit.webp";
import Denah1Burnet from "~/public/assets/Unit-Rumah/The-burnet/Denah-1.png";
import Denah2Burnet from "~/public/assets/Unit-Rumah/The-burnet/Denah-2.png";
import LogoBurnet from "~/public/assets/Unit-Rumah/The-burnet/logo-3.svg";
import { Unit1, Unit2, Unit3, Unit4, Unit5 } from "./icons";

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
  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    row: 3,
    autoplay: false,
    cssEase: "linear",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          // autoplay: true,
        },
      },
    ],
  };
  return (
    <section className="relative">
      <div className="block max-w-sm md:max-w-2xl lg:max-w-5xl xl:max-w-7xl my-1 sm:my-2 xl:my-10">
        <Slider {...settings}>
          {/* Bloom done */}
          <div className="bg-transparant rounded-xl p-0 md:p-8 w-full h-fit">
            <div className="flex flex-row flex-wrap px-4 md:px-0 justify-evenly items-center">
              <div className="w-full xl:w-5/12 mb-4 xl:mb-0">
                <div className="flex-initial">
                  <figure className="w-full h-fit">
                    <Image
                      src={HomeImage}
                      alt="denah-rumah-bloom"
                      // className="w-full xl:w-auto"
                      // width={457}
                      // height={524}
                    />
                  </figure>
                </div>
              </div>
              <div className="w-full xl:w-2/12 mb-1 md:mb-0">
                <div className="flex flex-wrap md:hidden items-center px-2 mt-3">
                  <div className="w-6/12">
                    <figure className="w-fit h-fit mb-4">
                      <Image
                        src={LogoBloom}
                        alt="logo-bloom"
                        width={130}
                        height={44}
                      />
                    </figure>
                  </div>
                  <div className="w-6/12">
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LT : 72 m² (6x12)
                    </p>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LB : 87 m²
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap mt-2">
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit1, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          3 KT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit2, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          3 KM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit3, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          1 WALK IN CLOSET
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          1 MOBIL
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit5, {
                          width: "48px",
                          height: "35px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          1 MOTOR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden xl:flex flex-col flex-initial space-y-6 max-w-[200px] md:max-w-[170px] mt-3 md:mt-0 pl-5">
                  <div className="space-y-2">
                    <figure className="w-fit h-fit -ml-4 mb-4">
                      <Image
                        src={LogoBloom}
                        alt="logo-bloom"
                        width={130}
                        height={44}
                      />
                    </figure>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LT : 72 m² (6x12)
                    </p>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LB : 87 m²
                    </p>
                  </div>

                  {/* list facilities */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit1, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          3 KT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit2, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          3 KM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit3, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          1 WALK IN CLOSET
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          1 MOBIL
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit5, {
                          width: "48px",
                          height: "35px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          1 MOTOR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-5/12">
                <div className="flex mt-3 md:mt-0">
                  <div className="flex-1 text-center">
                    <figure className="w-full h-fit">
                      <Image
                        src={Denah1}
                        alt="denah-rumah-bloom-1"
                        height={350}
                      />
                    </figure>
                    <p>Lantai Dasar</p>
                  </div>
                  <div className="flex-1 text-center">
                    <figure className="w-full h-fit">
                      <Image
                        src={Denah2}
                        alt="denah-rumah-bloom-2"
                        height={350}
                      />
                    </figure>
                    <p>Lantai Atas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Burnet */}
          <div className="bg-transparant rounded-xl p-0 md:p-8 w-full h-fit">
            <div className="flex flex-row flex-wrap px-4 md:px-0 justify-start items-center">
              <div className="w-full xl:w-5/12 mb-8 xl:mb-0">
                <div className="flex-initial">
                  <figure className="w-full h-fit">
                    <Image
                      src={HomeImageBurnet}
                      alt="denah-rumah-burnet"
                      // className="w-full xl:w-auto"
                      // width={457}
                      // height={524}
                    />
                  </figure>
                </div>
              </div>
              <div className="w-full xl:w-2/12 mb-1 md:mb-0">
                <div className="flex flex-wrap md:hidden items-center px-2 mt-3">
                  <div className="w-6/12">
                    <figure className="w-fit h-fit mb-4">
                      <Image
                        src={LogoBurnet}
                        alt="logo-burnet"
                        width={130}
                        height={44}
                      />
                    </figure>
                  </div>
                  <div className="w-6/12">
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LT : 84 m² (7x12)
                    </p>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LB : 101 m²
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap mt-2">
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit1, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          3 KT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit2, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          3 KM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit3, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          1 WALK IN CLOSET
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          1 MOBIL
                        </p>
                      </div>
                    </div> */}
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          2 MOBIL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden xl:flex flex-col flex-initial space-y-6 max-w-[200px] md:max-w-[170px] mt-3 md:mt-0 pl-5">
                  <div className="space-y-2">
                    <figure className="w-fit h-fit -ml-4 mb-4">
                      <Image
                        src={LogoBurnet}
                        alt="logo-burnet"
                        width={130}
                        height={44}
                      />
                    </figure>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LT : 84 m² (7x12)
                    </p>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LB : 101 m²
                    </p>
                  </div>

                  {/* list facilities */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit1, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          3 KT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit2, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          3 KM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit3, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          1 WALK IN CLOSET
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          1 MOBIL
                        </p>
                      </div>
                    </div> */}
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          2 MOBIL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-5/12">
                <div className="flex mt-3 md:mt-0">
                  <div className="flex-1 text-center">
                    <figure className="w-full h-fit">
                      <Image
                        src={Denah1Burnet}
                        alt="denah-rumah-burnet-1"
                        height={640}
                      />
                    </figure>
                    <p>Lantai Dasar</p>
                  </div>
                  <div className="flex-1 text-center">
                    <figure className="w-full h-fit">
                      <Image
                        src={Denah2Burnet}
                        alt="denah-rumah-burnet-2"
                        height={640}
                      />
                    </figure>
                    <p>Lantai Atas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bellflower */}
          <div className="bg-transparant  rounded-xl p-0 md:p-8 w-full h-fit">
            <div className="flex flex-row flex-wrap px-4 md:px-0 justify-evenly items-center">
              <div className="w-full xl:w-5/12 mb-8 xl:mb-0">
                <div className="flex-initial">
                  <figure className="w-full h-fit">
                    <Image
                      src={HomeImageBellflower}
                      alt="denah-rumah-bellflower"
                      // className="w-full xl:w-auto"
                      // width={457}
                      // height={524}
                    />
                  </figure>
                </div>
              </div>
              <div className="w-full xl:w-2/12 mb-1 md:mb-0">
                <div className="flex flex-wrap md:hidden items-center px-2 mt-3">
                  <div className="w-6/12">
                    <figure className="w-fit h-fit mb-4">
                      <Image
                        src={LogoBellflower}
                        alt="logo-bellflower"
                        className="w-36 xl:w-auto"
                      />
                    </figure>
                  </div>
                  <div className="w-6/12">
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LT : 96 m² (8x12)
                    </p>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LB : 122 m²
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap mt-2">
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit1, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          4+1 KT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit2, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          3+1 KM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit3, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[12px] md:text-base text-sakura-brown">
                          1 WALK IN CLOSET
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center w-6/12 mb-4">
                      <div className="w-4/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-8/12 pl-2">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          2 MOBIL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden xl:flex flex-col flex-initial space-y-6 max-w-[200px] md:max-w-[170px] mt-3 md:mt-0 pl-5">
                  <div className="space-y-2">
                    <figure className="w-fit h-fit -ml-4 mb-4">
                      <Image
                        src={LogoBellflower}
                        alt="logo-bellflower"
                        className="w-full xl:w-auto"
                        // width={130}
                        // height={44}
                      />
                    </figure>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LT : 96 m² (8x12)
                    </p>
                    <p className="dm-sans font-medium text-[14px] md:text-base text-sakura-brown">
                      LB : 122 m²
                    </p>
                  </div>

                  {/* list facilities */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit1, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          4+1 KT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit2, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          3+1 KM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit3, {
                          width: "46px",
                          height: "37px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          1 WALK IN CLOSET
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                      <div className="w-5/12">
                        {React.createElement(Unit4, {
                          width: "50px",
                          height: "20px",
                        })}
                      </div>
                      <div className="w-7/12">
                        <p className="dm-sans text[14px] md:text-base text-sakura-brown">
                          2 MOBIL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-5/12">
                <div className="flex mt-3 md:mt-0">
                  <div className="flex-1 text-center">
                    <figure className="w-full h-fit">
                      <Image
                        src={Denah1Bellflower}
                        alt="denah-rumah-bellflower-1"
                        height={350}
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
          </div>
        </Slider>
      </div>
    </section>
  );
}
