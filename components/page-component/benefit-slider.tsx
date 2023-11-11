/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

"use client";

import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";
import BenefitImage1 from "~/public/assets/basanta/MENGAPA.png";
import BenefitImage2 from "~/public/assets/basanta/MENGAPA-1.png";
import BenefitImage3 from "~/public/assets/basanta/MENGAPA-2.png";
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

export default function BenefitSlider() {
  // console.log(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    row: 3,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
      <div className="block max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl my-8 md:my-10">
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

          <div className="bg-white shadow-xl rounded-xl p-8 w-[320px] h-[350px]">
            {/* {React.createElement(Testimoni, {
              width: "25px",
              height: "20px",
            })} */}
            <div className="flex items-center md:items-baseline gap-x-4">
              <figure>
                <Image src={BenefitImage1} alt="img-1" width={88} height={88} />
              </figure>
              <p className="paragraph font-semibold text-sakura-brown">
                Desain Modern Minimalis
              </p>
            </div>
            <p className="paragraph my-11">
              Rumah 2 lantai dengan paras lengkungan bertekstur yang
              dikombinasikan dengan material dinding motif kayu memberikan
              nuansa modern pada fasad rumah cluster Basanta.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 w-[320px] h-[350px]">
            {/* {React.createElement(Testimoni, {
              width: "25px",
              height: "20px",
            })} */}
            <div className="flex items-center md:items-baseline gap-x-4">
              <figure>
                <Image src={BenefitImage2} alt="img-1" width={88} height={88} />
              </figure>
              <p className="paragraph font-semibold text-sakura-brown">
                Lokasi Berkembang
              </p>
            </div>
            <p className="paragraph my-11">
              Cluster Basanta Suvarna Sutera berada di dekat area komersial dan
              akses dekat dengan tol Jakarta-Tangerang.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-8 w-[320px] h-[350px]">
            {/* {React.createElement(Testimoni, {
              width: "25px",
              height: "20px",
            })} */}
            <div className="flex items-center md:items-baseline gap-x-4">
              <figure>
                <Image src={BenefitImage3} alt="img-1" width={88} height={88} />
              </figure>
              <p className="paragraph font-semibold text-sakura-brown">
                Spesifikasi Terbaik
              </p>
            </div>
            <p className="paragraph my-11">
              Spesifikasi Cluster Basanta dilengkapi dengan smart door lock,
              roof water tank, instalasi water heater, pergola dengan plafon,
              taman kering dan juga sudah termasuk kompor tanam 2 tungku di
              setiap tipe rumahnya.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}
