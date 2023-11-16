/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
"use client";

import React, { Fragment } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useSearchParams } from "next/navigation";
import SliderComponents from "~/components/testimoni-slider";
import HomeBanner from "~/public/assets/page-banner.png";
import GiftCard from "~/public/assets/special-gift.png";
import FormImage from "~/public/assets/BellflowerDeret_1.png";
import BasantaClusterPromo from "~/public/assets/Basanta_Cluster_Promo.png";
import BasantaHeadBanner from "~/public/assets/perumahan-2.png";
// import CloudLong from "~/public/assets/cloud-long.png";
import BasanthaImage from "~/public/assets/basanta/Logo-Basantha-Color-1.png";
import LogoColor from "~/public/assets/suvarna-sutera-logo-color.svg";
import TitleImage from "~/public/assets/title.png";
import SubtitleImage from "~/public/assets/a-new.png";
import { PhoneIcon } from "@heroicons/react/outline";
import axios from "axios";
import BenefitSlider from "~/components/page-component/benefit-slider";

// benefit
import Bene1 from "~/public/assets/benefit/Group-5.png";
import Bene2 from "~/public/assets/benefit/Group-1.png";
import Bene3 from "~/public/assets/benefit/Group-6.png";
import Bene4 from "~/public/assets/benefit/Group-4.png";
import Bene5 from "~/public/assets/benefit/Group-3.png";
import Bene6 from "~/public/assets/benefit/Group-2.png";
import BfDeret from "~/public/assets/Unit-Rumah/BellflowerDeret.png";

// fitur
import Feat1 from "~/public/assets/facilities/Group-6.png";
import Feat2 from "~/public/assets/facilities/Group-3.png";
import Feat3 from "~/public/assets/facilities/Group-1.png";
import Feat4 from "~/public/assets/facilities/Group-4.png";
import Feat5 from "~/public/assets/facilities/Group-2.png";
import Feat6 from "~/public/assets/facilities/Group-5.png";
import { Ornament, Ornament1 } from "~/components/icons";
// import { DM_Sans } from "next/font/google";

// const DMSans = DM_Sans({
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });

// age-range
const rangeAge = [
  { AgeRange: "--select--" },
  { AgeRange: "18-24" },
  { AgeRange: "25-34" },
  { AgeRange: "35-44" },
  { AgeRange: "45-44" },
  { AgeRange: "55-65" },
  { AgeRange: ">65" },
];
/*
UTMSource : meta
UTMMedium : reels
UTMCampaign : fairytale
UTMContent : basanta

*/

export default function Revamp() {
  const searchParams = useSearchParams();
  const [, setValues] = React.useState<string>("");
  const [, setWasSubmitted] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState(rangeAge[0]);
  const [queryUrl, setQueryUrl] = React.useState([]);

  React.useEffect(() => {
    if (typeof searchParams === "undefined" || searchParams === null) return;

    const temp: any = [];
    const searchEntries: any = searchParams.entries();
    for (const [key, value] of searchEntries) {
      temp.push({ [key]: value });
    }
    // const transform = temp?.map((item: any) => ({
    //   [item.key]: item.value,
    // }));

    setQueryUrl(temp);
  }, []);

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const fieldsValue = Object.fromEntries(formData.entries());
      const mergedObject = queryUrl?.reduce((result, currentObject: any) => {
        return { ...result, ...currentObject };
      }, {});
      const mergingResult = {
        ...fieldsValue,
        ...selected,
        ...mergedObject,
        PageFrom: "basanta-external",
      };
      const URLEncode: string = new URLSearchParams(mergingResult).toString();
      event.currentTarget.reset();
      const response = await axios.post(`/api/campaign`, URLEncode);
      await response.status;
      setTimeout(() => {
        setWasSubmitted(false);
        window.location.href = "/thankyou";
      }, 500);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
      <NextSeo title="suvarnasutra.co.id" titleTemplate="%s" description="" />

      {/* Section Banner  */}
      <section className="relative h-fit md:h-[760px] w-[360px] md:w-full pb-0 md:pb-40 mt-4 md:mt-0">
        <div className="absolute mt-0 md:mt-10 -left-0 md:-left-0 h-fit inset-0 flex justify-between items-center mx-4 md:mx-10 gap-1 md:gap-4">
          {/* logo */}
          <div className="flex-1">
            <div className="flex items-center">
              <figure className="w-14 h-auto md:w-fit md:h-fit">
                <Image src={LogoColor} alt="Logo" width={83} height={92} />
              </figure>
            </div>
          </div>

          {/* phone */}
          <div className="flex-1">
            <a className="flex items-end justify-end" href="tel:02131103838">
              <button className="bg-gradient-to-b from-sakura-10 to-pink-600 px-2 md:px-6 py-2 rounded-full text-slate-50 inline-flex items-center gap-2 text-[8px] md:text-base">
                <figure className="w-[19px] h-[18px]">
                  <PhoneIcon />
                </figure>
                (021) 31103838
              </button>
            </a>
          </div>
        </div>

        {/* title */}
        <div className="absolute top-20 inset-x-0 flex justify-center z-20">
          <div className="flex-1">
            <div className="flex flex-col items-center justify-center space-y-3">
              <figure className="w-fit h-fit">
                <Image src={TitleImage} alt="title" />
              </figure>
              <figure className="w-fit h-fit">
                <Image src={SubtitleImage} alt="subtitle" />
              </figure>
            </div>
          </div>
        </div>

        <figure className="absolute bottom-10 inset-x-0 flex justify-center z-20">
          <Image src={GiftCard} alt="promo" />
        </figure>

        <figure className="w-full h-full">
          <Image
            className="w-full object-cover bg-center bg-no-repeat"
            src={HomeBanner}
            alt="banner"
          />
        </figure>
      </section>

      {/* Section Form */}
      <section className="relative h-auto xl:h-[700px] x3l:h-[800px] x4l:h-[840px] w-[320px] md:w-full my-6 md:my-0">
        <div className="bg-sakura-5 absolute inset-0 blur-md"></div>
        <div className="container-sm">
          <div className="relative flex flex-wrap items-center px-10 md:px-20">
            <div className="w-7/12 relative z-20">
              {/* form */}
              <div className="box-form flex flex-col justify-center py-10 md:py-16 px-20 md:px-16 x3l:px-32 h-auto md:h-[80vh] x3l:h-[99vh] x4l:h-[80vh] x5l:h-[99vh]">
                <div className="mb-5 md:mb-8 w-full text-center">
                  <p className="dm-sans font-bold text-[2rem] leading-[2.25rem] text-sakura-blue">
                    Silahkan Mengisi Form
                  </p>

                  <p className="dm-sans font-medium text-lg text-[#6F6C90] mt-1">
                    Untuk mendapatkan informasi mengenai produk
                  </p>
                </div>

                <form
                  onSubmit={handleForm}
                  encType={"application/x-www-form-urlencoded"}
                  method="post"
                >
                  <div className="flex flex-wrap flex-col space-y-1 md:space-y-5">
                    {/* name and lastname */}
                    <div className="flex flex-row flex-wrap">
                      <div className="w-full md:w-6/12 pr-0 md:pr-4">
                        <div className="w-full space-y-1">
                          <label
                            htmlFor="FirstName"
                            className="dm-sans text-sm font-semibold leading-6 text-sakura-blue"
                          >
                            First name
                          </label>
                          <div className="flex rounded-3xl shadow-md ring-0 ring-inset ring-white bg-white focus-within:ring-0 focus-within:ring-inset focus-within:ring-white sm:max-w-2xl">
                            <input
                              className="dm-sans block rounded-3xl flex-1 border-0 py-3 pl-4 text-gray-900 placeholder:text-[#6F6C90] focus:ring-0 text-sm md:text-base focus:outline-none focus-visible:border-white focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-offset-white"
                              type="text"
                              name="FirstName"
                              placeholder="Your First Name"
                              onChange={(event) =>
                                setValues(event.currentTarget.value)
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 pl-0 md:pl-4">
                        <div className="w-full space-y-1">
                          <label
                            htmlFor="LastName"
                            className="dm-sans text-sm font-semibold leading-6 text-sakura-blue"
                          >
                            Last name
                          </label>
                          <div className="flex rounded-3xl shadow-md ring-1 ring-inset ring-white bg-white focus-within:ring-0 focus-within:ring-inset focus-within:ring-white sm:max-w-2xl">
                            <input
                              className="dm-sans block rounded-3xl flex-1 border-0 py-3 pl-4 text-gray-900 placeholder:text-[#6F6C90] focus:ring-0 text-sm md:text-base focus:outline-none focus-visible:border-white focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-offset-white"
                              type="text"
                              name="LastName"
                              placeholder="Your Last Name"
                              onChange={(event) =>
                                setValues(event.currentTarget.value)
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* email */}
                    <div className="space-y-1">
                      <label
                        htmlFor="Email"
                        className="dm-sans text-sm font-semibold leading-6 text-sakura-blue"
                      >
                        Email
                      </label>
                      <div className="flex rounded-3xl shadow-md ring-0 ring-inset ring-white bg-white focus-within:ring-0 focus-within:ring-inset focus-within:ring-white sm:max-w-2xl">
                        <input
                          className="dm-sans block rounded-3xl flex-1 border-0 py-3 pl-4 text-gray-900 placeholder:text-[#6F6C90] focus:ring-0 text-sm md:text-base focus:outline-none focus-visible:border-white focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-offset-white"
                          type="email"
                          name="Email"
                          placeholder="Your Email"
                          onChange={(event) =>
                            setValues(event.currentTarget.value)
                          }
                        />
                      </div>
                    </div>

                    {/* phone & age-range */}
                    <div className="flex flex-wrap flex-row">
                      <div className="w-full md:w-6/12 pr-0 md:pr-4">
                        <div className="w-full space-y-1">
                          <label
                            htmlFor="PhoneNumber"
                            className="dm-sans text-sm font-semibold leading-6 text-sakura-blue"
                          >
                            Phone Number
                          </label>
                          <div className="flex items-center bg-white rounded-3xl shadow-md ring-0 ring-inset ring-white focus-within:ring-0 focus-within:ring-inset focus-within:ring-white text-sm md:text-basse focus:outline-none focus-visible:border-white focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-offset-white">
                            <span className="dm-sans ml-2 text-grey-400 text-sm md:text-base text-[#6F6C90]">
                              +62
                            </span>
                            <input
                              className="dm-sans block rounded-3xl flex-1 border-0 py-3 pl-4 text-gray-900 placeholder:text-[#6F6C90] focus:ring-0 text-sm md:text-base focus:outline-none focus-visible:border-white focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-offset-white"
                              type="tel"
                              name="PhoneNumber"
                              placeholder="your phone number"
                              onChange={(event) =>
                                setValues(`+62${event.currentTarget.value}`)
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 pl-0 md:pl-4">
                        <div className="relative w-full space-y-1">
                          <label
                            htmlFor="AgeRange"
                            className="dm-sans text-sm font-semibold leading-6 text-sakura-blue"
                          >
                            Age Range
                          </label>
                          <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1 w-full">
                              <Listbox.Button className="relative w-full cursor-default rounded-3xl bg-white py-3 pl-2 pr-10 text-left shadow-md focus:outline-none focus-visible:border-white focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-offset-white sm:text-sm">
                                <span className="dm-sans block truncate text-[#6F6C90]">
                                  {selected.AgeRange}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronDownIcon
                                    className="h-5 w-5 text-[#6F6C90] "
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="dm-sans absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-0 ring-black/5 focus:outline-none text-s md:text-base text-[#6F6C90]">
                                  {rangeAge.map((value, index) => (
                                    <Listbox.Option
                                      key={index}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                          active
                                            ? "bg-sakura-5 text-amber-900"
                                            : "text-[#6F6C90]"
                                        }`
                                      }
                                      value={value}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? "font-medium"
                                                : "font-normal"
                                            }`}
                                          >
                                            {value.AgeRange}
                                          </span>
                                          {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label
                        htmlFor="Message"
                        className="dm-sans text-sm font-semibold leading-6 text-sakura-blue"
                      >
                        Message
                      </label>

                      <textarea
                        className="block w-full border-0 py-4 pl-4 text-[#6F6C90] shadow-md ring-0 ring-inset ring-white placeholder:text-[#6F6C90] focus:ring-0 focus:ring-inset focus:ring-white text-sm md:text-base rounded-3xl focus:outline-none focus-visible:border-white focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-offset-white"
                        name="Message"
                        placeholder="Your Message"
                        cols={3}
                        onChange={(event) =>
                          setValues(event.currentTarget.value)
                        }
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-6 md:mt-8 x3l:mt-10">
                    <button
                      type="submit"
                      className="dm-sans font-bold bg-gradient-to-b from-sakura-10 to-pink-600 px-9 py-3 rounded-3xl text-slate-50 text-xl md:text-2xl"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-5/12 relative z-10">
              <figure className="sr-only md:not-sr-only py-10">
                <Image
                  src={FormImage}
                  alt="form-image"
                  className="w-full -ml-2"
                  // width={500}
                  // height={549}
                />
              </figure>
            </div>
          </div>
          {/* <div className="relative w-full mx-8 md:mx-auto flex items-center mt-0 md:mt-10">
            
          </div> */}
        </div>
      </section>

      {/* unit rumah */}
      <section className="cloud-section relative h-fit w-[360px] md:w-full mt-10">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-y-[30px]">
            <div className="flex items-center justify-center">
              <p className="dm-sans font-bold text-[34px] leading-5 text-sakura-brown text-center">
                Yang kamu Dapatkan dari
              </p>
            </div>
            <figure>
              <Image
                src={BasanthaImage}
                alt="banner"
                className="w-full h-auto"
              />
            </figure>
          </div>

          {/* desktop */}
          <div className="hidden relative md:flex flex-col items-center justify-center pb-0 md:pb-72">
            <figure className="absolute left-0 top-0 w-full h-fit">
              <Image
                className="w-full object-cover bg-no-repeat bg-center"
                src={BasantaHeadBanner}
                alt="banner"
              />
            </figure>
            <BenefitSlider />
          </div>
        </div>

        <div className="not-sr-only md:sr-only relative flex flex-col items-center justify-center pb-0 md:pb-80">
          <BenefitSlider />
        </div>

        {/* slider for unit rumah */}
        <div className="space-y-10 mt-8 md:mt-80 x3l:mt-72 x4l:mt-96">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-baseline justify-center">
              <figure className="scale-80">
                {React.createElement(Ornament, {
                  width: "88px",
                  height: "42px",
                })}
              </figure>
              <h1 className="dm-serif font-bold text-2xl md:text-5xl text-sakura-brown text-center">
                Unit Rumah
              </h1>
              <figure className="scale-80">
                {React.createElement(Ornament1, {
                  width: "88px",
                  height: "42px",
                })}
              </figure>
            </div>

            <SliderComponents />
          </div>
        </div>

        {/* fitur rumah */}
        <div className="flex flex-col items-center justify-center gap-y-[30px]">
          <div className="flex items-baseline justify-center">
            <figure className="scale-80">
              {React.createElement(Ornament, {
                width: "88px",
                height: "42px",
              })}
            </figure>
            <h1 className="heading font-bold text-sakura-brown text-center">
              Fitur Rumah
            </h1>
            <figure className="scale-80">
              {React.createElement(Ornament1, {
                width: "88px",
                height: "42px",
              })}
            </figure>
          </div>

          {/* fitur komplek */}
          <div className="grid grid-cols-3 md:grid-cols-6 grid-flow-row gap-4">
            <div className="flex flex-col items-center justify-center w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl ">
              <figure className="w-fit h-fit">
                <Image src={Bene1} alt="benefit1" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-center w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl ">
              <figure className="h-fit w-fit">
                <Image src={Bene2} alt="benefit2" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-center w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl ">
              <figure className="h-fit w-fit">
                <Image src={Bene3} alt="benefit3" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-center w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl p-4">
              <figure className="w-fit h-fit">
                <Image src={Bene4} alt="benefit4" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-center w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl ">
              <figure className="w-fit h-fit">
                <Image src={Bene5} alt="benefit5" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-center w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl ">
              <figure className="w-fit hfit">
                <Image src={Bene6} alt="benefit6" />
              </figure>
            </div>
          </div>

          <div className="">
            <figure className="w-full h-fit rounded-2xl">
              <Image src={BfDeret} alt="bellflower-deret" />
            </figure>

            <div className="bg-[#FAF8F8]/50 w-11/12 py-10 md:py-10 mx-auto mb-8 md:mb-20 shadow-lg rounded-b-3xl">
              <p className="dm-sans text-[34px] leading-5 font-bold text-sakura-brown text-center mb-6">
                Fasilitas Yang Kamu Dapatkan
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 place-items-baseline grid-flow-row gap-6 mx-0 md:mx-20 p-2 md:p-4">
                <div className="flex items-center gap-5">
                  <figure className="w-fit h-fit">
                    <Image src={Feat1} alt="benefit-1" />
                  </figure>
                  <p className="dm-sans text-[14px] md:text-base text-black">
                    Dekat Dengan Tol Jakarta-Tangerang
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <figure className="w-fit h-fit">
                    <Image src={Feat2} alt="benefit-2" />
                  </figure>
                  <p className="dm-sans text-[14px] md:text-base text-black">
                    Ruang Serbaguna
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <figure className="w-fit h-fit">
                    <Image src={Feat3} alt="benefit-3" />
                  </figure>
                  <p className="dm-sans text-[14px] md:text-base text-black">
                    Taman Bermain Anak
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <figure className="w-fit h-fit">
                    <Image src={Feat4} alt="benefit-4" />
                  </figure>
                  <p className="dm-sans text-[14px] md:text-base text-black">
                    Kolam Renang Anak & Dewasa
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <figure className="w-fit h-fit">
                    <Image src={Feat5} alt="benefit-5" />
                  </figure>
                  <p className="dm-sans text-[14px] md:text-base text-black">
                    Lapangan Basket 3 on 3
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <figure className="w-fit h-fit">
                    <Image src={Feat6} alt="benefit-6" />
                  </figure>
                  <p className="dm-sans text-[14px] md:text-base text-black">
                    Area Komersil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end promo */}
      <section className="relative bg-[#F296AC]/60 block h-auto md:h-fit w-[360px] md:w-full">
        <figure className="w-full h-fit">
          <Image
            className="w-full mix-blend-multiply object-cover bg-center bg-no-repeat"
            src={BasantaClusterPromo}
            alt="promo_image"
            width={1440}
            height={341}
          />
        </figure>
        <div className="w-full absolute bottom-0 top-0 flex flex-col md:flex-row flex-wrap justify-center items-center px-8 md:px-14 x3l:px-24">
          <div className="w-9/12">
            <figure className="w-full h-fit">
              <Image src={GiftCard} alt="form-image" className="md:w-[840px] x3l:w-[920px]" />
            </figure>
          </div>
          <div className="w-full md:w-3/12 x3l:w-2/12 mt-4 md:mt-8">
            <a href="tel:02131103838">
              <button className="dm-sans font-bold bg-gradient-to-b from-sakura-10 to-pink-600 px-2 md:px-5 py-4 rounded-full text-[12px] md:text-base xl:text-xl text-slate-50 w-full capitalize">
                info lebih lanjut
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}