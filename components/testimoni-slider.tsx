/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

"use client";

import * as React from "react";
import Slider from "react-slick";
import { Testimoni } from "./icons";
// import Image from "next/image";
// import { DataProps } from "~/pages";

export type DataProps = {
  data: {
    readonly created_at?: string;
    readonly id?: number;
    readonly image: string;
    readonly link?: null;
    readonly mobile_image: string;
    readonly sequence?: string;
    readonly status?: string;
    readonly updated_at?: string;
  }[];
};

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function SliderComponents() {
  // console.log(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    autoplay: true,
    cssEase: "linear",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SamplePrevArrow />,
  };
  return (
    <section className="relative">
      <div className="block w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl my-8 md:my-10">
        <Slider {...settings}>
          {/* {data?.map((val) => {
            return (
              <div className="relative " key={`${val.id}`}>
                <div className="banner relative aspect-w-16 aspect-h-6">
                  <Image
                    className="rounded-xl"
                    src={`${val.image}`}
                    alt={val.image}
                    layout="fill"
                  />
                </div>
              </div>
            );
          })} */}

          <div className="bg-white shadow-xl rounded-xl p-8 w-full min-w-[640px]">
            {React.createElement(Testimoni, {
              width: "25px",
              height: "20px",
            })}
            <p className="paragraph text-bd-grey my-11">
              Customer service Belidomain.co.id sangat bisa diandalkan. Sangat
              responsif, informatif, dan membantu. Masalah saya bisa diatasi
              dengan cepat dan tuntas.
            </p>
            <div className="flex item center gap-x-5 my-5">
              {/*  */}
              <div className="bg-bd-blue rounded-full w-11 h-11"></div>
              <div className="">
                <p className="paragraph">Padaz Store</p>
                <p className="paragraph">Toko Online</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-8 w-full min-w-[640px]">
            {React.createElement(Testimoni, {
              width: "25px",
              height: "20px",
            })}
            <p className="paragraph text-bd-grey my-11">
              Customer service Belidomain.co.id sangat bisa diandalkan. Sangat
              responsif, informatif, dan membantu. Masalah saya bisa diatasi
              dengan cepat dan tuntas.
            </p>
            <div className="flex item center gap-x-5 my-5">
              {/*  */}
              <div className="bg-bd-blue rounded-full w-11 h-11"></div>
              <div className="">
                <p className="paragraph">Padaz Store</p>
                <p className="paragraph">Toko Online</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl w-full p-8 min-w-[640px]">
            {React.createElement(Testimoni, {
              width: "25px",
              height: "20px",
            })}
            <p className="paragraph text-bd-grey my-11">
              Customer service Belidomain.co.id sangat bisa diandalkan. Sangat
              responsif, informatif, dan membantu. Masalah saya bisa diatasi
              dengan cepat dan tuntas.
            </p>
            <div className="flex item center gap-x-5 my-5">
              {/*  */}
              <div className="bg-bd-blue rounded-full w-11 h-11"></div>
              <div className="">
                <p className="paragraph">Padaz Store</p>
                <p className="paragraph">Toko Online</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
