/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

"use client";

import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";
import BenefitImage1 from "~/public/assets/basanta/MENGAPA.png";
import BenefitImage2 from "~/public/assets/basanta/MENGAPA-1.png";
import BenefitImage3 from "~/public/assets/basanta/MENGAPA-2.png";
import BenefitImage4 from "~/public/assets/basanta/denah-lengkap.png";
import BenefitImage5 from "~/public/assets/basanta/green-development.png";
import BenefitImage6 from "~/public/assets/basanta/fasilitas-cluster.png";
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
        display: "block",
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
        display: "block",
        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        borderLeft: "20px solid #D1AA67",
      }}
      onClick={onClick}
    />
  );
}

export default function BenefitSlider() {
  // console.log(data);

  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    cssEase: "linear",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <section className="relative">
      <div className="block max-w-sm md:max-w-2xl xl:max-w-5xl x3l:max-w-7xl my-8 md:my-10 x3l:my-14">
        <Slider {...settings}>
          <div className="p-4">
            <div className="flex flex-wrap justify-center lg:justify-start items-center md:items-end gap-x-4 min-h-[90px]">
              <figure>
                <Image src={BenefitImage1} alt="img-1" width={88} height={88} />
              </figure>
              <p className="dm-sans font-bold text-[25px] leading-[33px] text-sakura-brown max-w-[200px]">
                Desain Modern Minimalis
              </p>
            </div>
            <p className="dm-sans paragraph text-center my-[14px]">
              Rumah 2 lantai dengan paras lengkungan bertekstur yang
              dikombinasikan dengan material dinding motif kayu memberikan
              nuansa modern pada fasad rumah cluster Basanta.
            </p>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap justify-center lg:justify-start items-center md:items-end gap-x-4 min-h-[90px]">
              <figure>
                <Image src={BenefitImage2} alt="img-1" width={88} height={88} />
              </figure>
              <p className="dm-sans font-bold text-[25px] leading-[33px] text-sakura-brown max-w-[200px]">
                Lokasi Berkembang
              </p>
            </div>
            <p className="dm-sans paragraph text-center my-[14px]">
              Cluster Basanta Suvarna Sutera berada di dekat area komersial dan
              akses dekat dengan tol Jakarta-Tangerang.
            </p>
          </div>

          <div className="p-4">
            <div className="flex fle-wrap justify-center lg:justify-start items-center md:items-end gap-x-4 min-h-[90px]">
              <figure>
                <Image src={BenefitImage3} alt="img-1" width={88} height={88} />
              </figure>
              <p className="dm-sans font-bold text-[25px] leading-[33px] text-sakura-brown max-w-[200px]">
                Spesifikasi Terbaik
              </p>
            </div>
            <p className="dm-sans paragraph text-center my-[14px]">
              Spesifikasi Cluster Basanta dilengkapi dengan smart door lock,
              roof water tank, instalasi water heater, pergola dengan plafon,
              taman kering dan juga sudah termasuk kompor tanam 2 tungku di
              setiap tipe rumahnya.
            </p>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap justify-center lg:justify-start items-center md:items-end gap-x-4 min-h-[90px]">
              <figure className="w-fit h-fit">
                <Image src={BenefitImage4} alt="img-4" width={88} height={88} />
              </figure>
              <p className="dm-sans font-bold text-[25px] leading-[33px] text-sakura-brown max-w-[200px]">
                Denah Minimalis
              </p>
            </div>
            <p className="dm-sans paragraph text-center my-[14px]">
              Cluster Basanta dilengkapi tata ruang ideal 3 hingga 4 kamar
              tidur, walk-in closet di tipe 6 dan 8, area bekerja, serta carport
              di setiap rumahnya.
            </p>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap justify-center lg:justify-start items-center md:items-end gap-x-4 min-h-[90px]">
              <figure className="w-fit h-fit">
                <Image src={BenefitImage5} alt="img-5" width={88} height={88} />
              </figure>
              <p className="dm-sans font-bold text-[25px] leading-[33px] text-sakura-brown max-w-[200px]">
                Green Development
              </p>
            </div>
            <p className="dm-sans paragraph text-center my-[14px]">
              Rumah Cluster Basanta Suvarna Sutera dibuat menghadap utara dan
              selatan untuk memaksimalkan cahaya matahari serta dilengkapi
              tanaman hijau di sepanjang jalan utama dan cluster hunian.
            </p>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap justify-center lg:justify-start items-center md:items-end gap-x-4 min-h-[90px]">
              <figure className="w-fit h-fit">
                <Image src={BenefitImage6} alt="img-6" width={88} height={88} />
              </figure>
              <p className="dm-sans font-bold text-[25px] leading-[33px] text-sakura-brown  max-w-[200px]">
                Fasilitas Cluster Lengkap
              </p>
            </div>
            <p className="dm-sans paragraph text-center my-[14px]">
              Cluster Basanta dilengkapi akses dekat dengan tol
              Jakarta-Tangerang, taman bermain anak, lapangan basket, kolam
              renang, dan ruang serbaguna.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}
