/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import BasantaClusterPromo from "~/public/assets/Basanta_Cluster_Promo.png";
import BasantaHeadBanner from "~/public/assets/Basanta_Head_Banner.jpg";
// import CloudLong from "~/public/assets/cloud-long.png";
import BasanthaImage from "~/public/assets/basanta/Logo-Basantha-Color-1.png";
import LogoColor from "~/public/logo-ss.png";
import TitleImage from "~/public/assets/title.png";
import SubtitleImage from "~/public/assets/subtitle.png";
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

export default function HomePage() {
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/campaign`,
        URLEncode,
      );
      const resp = await response.status;
      console.log("resp", resp);

      setWasSubmitted(true);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
      <NextSeo title="suvarnasutra.co.id" titleTemplate="%s" description="" />

      {/* homebanner  */}
      <section className="relative h-fit md:h-[760px] w-[360px] md:w-full pb-0 md:pb-40">
        <div className="absolute -left-8 md:-left-0 h-fit inset-0 flex justify-between items-center mx-0 md:mx-10 gap-1 md:gap-4">
          {/* logo */}
          <div className="flex-1">
            <div className="flex items-center">
              <figure className="w-fit h-fit">
                <Image src={LogoColor} alt="Logo" />
              </figure>
            </div>
          </div>

          {/* title */}
          <div className="flex-1">
            <div className="flex flex-col items-center justify-center">
              <figure className="w-fit h-fit">
                <Image src={TitleImage} alt="title" />
              </figure>
              <figure className="w-fit h-fit">
                <Image src={SubtitleImage} alt="subtitle" />
              </figure>
            </div>
          </div>

          {/* phone */}
          <div className="flex-1">
            <a className="flex items-end justify-end" href="tel:02131103838">
              <button className="bg-gradient-to-b from-sakura-10 to-sakura-100 px-2 md:px-6 py-2 rounded-full text-slate-50 inline-flex items-center gap-2 text-[8px] md:text-base">
                <figure className="w-[19px] h-[18px]">
                  <PhoneIcon />
                </figure>
                (021) 31103838
              </button>
            </a>
          </div>
        </div>

        <figure className="absolute bottom-0 inset-x-0 flex justify-center z-20">
          <Image src={GiftCard} alt="promo" />
        </figure>

        <figure className="w-full h-full">
          <Image
            className="object-cover bg-center bg-no-repeat"
            src={HomeBanner}
            alt="banner"
          />
        </figure>
      </section>

      {/* form */}
      <section className="relative h-auto md:h-[760px] w-[320px] md:w-full my-6 md:my-0">
        <div className="bg-sakura-5 absolute inset-0 blur-md"></div>

        <div className="relative mx-8 md:mx-0 flex justify-center items-center mt-0 md:mt-10">
          {/* form */}
          <div className="flex-initial z-10 bg-sakura-10 p-8 md:p-16 rounded-2xl min-w-[360px]">
            <div className="mb-4 w-full text-center">
              <h5 className="font-medium text-xl leading-6">
                Silahkan Mengisi Form
              </h5>
              <p className="paragraph mt-2">
                Untuk mendapatkan informasi mengenai produk
              </p>
            </div>

            <form
              onSubmit={handleForm}
              encType={"application/x-www-form-urlencoded"}
              method="post"
            >
              <div className="space-y-3 md:space-y-5">
                {/* name and lastname */}
                <div className="flex flex-wrap justify-between items-center">
                  <div className="space-y-1">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-semibold leading-6 text-slate-50"
                    >
                      First name
                    </label>

                    <div className="flex rounded-2xl shadow-sm ring-1 ring-inset ring-bd-blue bg-slate-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-bd-blue sm:max-w-2xl">
                      <input
                        className="block rounded-2xl flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        type="text"
                        name="FirstName"
                        placeholder="your firstname"
                        onChange={(event) =>
                          setValues(event.currentTarget.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-semibold leading-6 text-slate-50"
                    >
                      Last name
                    </label>

                    <div className="flex rounded-2xl shadow-sm ring-1 ring-inset ring-bd-blue bg-slate-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-bd-blue sm:max-w-2xl">
                      <input
                        className="block rounded-2xl flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        type="text"
                        name="LastName"
                        placeholder="your lastname"
                        onChange={(event) =>
                          setValues(event.currentTarget.value)
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* email */}
                <div className="space-y-1">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-semibold leading-6 text-slate-50"
                  >
                    Email
                  </label>

                  <div className="flex rounded-2xl shadow-sm ring-1 ring-inset ring-bd-blue bg-slate-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-bd-blue sm:max-w-2xl">
                    <input
                      className="block rounded-2xl flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      type="email"
                      name="Email"
                      placeholder="your email"
                      onChange={(event) => setValues(event.currentTarget.value)}
                    />
                  </div>
                </div>

                {/* phone & age-range */}
                <div className="flex flex-wrap justify-between items-center">
                  <div className="space-y-1">
                    <label
                      htmlFor="PhoneNumber"
                      className="block text-sm font-semibold leading-6 text-slate-50"
                    >
                      Phone Number
                    </label>
                    <div className="flex items-center rounded-2xl shadow-sm ring-1 ring-inset ring-sakura-5 bg-slate-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sakura-5 sm:max-w-2xl">
                      <span className="ml-2 text-grey-400 sm:text-sm sm:leading-6">
                        +62
                      </span>
                      <input
                        className="block rounded-2xl flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
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

                  <div className="relative">
                    <label
                      htmlFor="AgeRange"
                      className="block text-sm font-semibold leading-6 text-slate-50"
                    >
                      Age Range
                    </label>
                    <Listbox value={selected} onChange={setSelected}>
                      <div className="relative mt-1 w-fit">
                        <Listbox.Button className="relative w-full cursor-default rounded-2xl bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">
                            {selected.AgeRange}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400"
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
                          <Listbox.Options className="absolute mt-1 max-h-60 w-sm overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {rangeAge.map((value, index) => (
                              <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-sakura-5 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={value}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
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

                <div className="space-y-1">
                  <label
                    htmlFor="Message"
                    className="block text-sm font-semibold leading-6 text-slate-50"
                  >
                    Message
                  </label>

                  <textarea
                    className="block w-full border-0 py-4 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bd-blue sm:text-sm sm:leading-6 rounded-2xl"
                    name="Message"
                    placeholder="your message"
                    cols={3}
                    onChange={(event) => setValues(event.currentTarget.value)}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-b from-sakura-10 to-sakura-100 px-6 py-2 rounded-2xl text-slate-50 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <figure className="sr-only md:not-sr-only flex-initial w-full h-full z-10">
            <Image
              src={`/assets/BellflowerDeret_1.png`}
              alt="form-image"
              width={479}
              height={549}
            />
          </figure>
        </div>
      </section>

      <section className="relative h-auto w-[360px] md:w-full mt-10">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="heading font-medium text-sakura-brown text-center">
              Yang kamu Dapatkan dari
            </h1>
            <figure>
              <Image
                src={BasanthaImage}
                alt="banner"
                width={357}
                height={105}
              />
            </figure>
          </div>

          <div className="flex items-center justify-center">
            <BenefitSlider />
          </div>
        </div>

        {/* slider for unit rumah */}
        <div className="space-y-10">
          <figure className="w-full h-fit">
            <Image src={BasantaHeadBanner} alt="banner" />
          </figure>

          <div className="flex flex-col items-center justify-center">
            <h1 className="heading font-medium text-sakura-brown text-center">
              Unit Rumah
            </h1>
            <SliderComponents />
          </div>
        </div>

        {/* fitur rumah */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="heading font-medium text-sakura-brown text-center">
            Fitur Rumah
          </h1>

          {/* fitur komplek */}
          <div className="grid grid-cols-3 md:grid-cols-6 place-items-center grid-flow-row gap-4">
            <figure className="w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl p-4">
              <Image src={Bene1} alt="benefit1" />
            </figure>
            <figure className="w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl p-4">
              <Image src={Bene2} alt="benefit2" />
            </figure>
            <figure className="w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl p-4">
              <Image src={Bene3} alt="benefit3" />
            </figure>
            <figure className="w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl p-4">
              <Image src={Bene4} alt="benefit4" />
            </figure>
            <figure className="w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl p-4">
              <Image src={Bene5} alt="benefit5" />
            </figure>
            <figure className="w-[103] h-[124px] ring-2 ring-sakura-brown bg-white rounded-xl p-4">
              <Image src={Bene6} alt="benefit6" />
            </figure>
          </div>

          <div className="space-y-4">
            <figure className="w-full h-fit rounded-2xl">
              <Image src={BfDeret} alt="bellflower-deret" />
            </figure>

            <div className="grid grid-cols-2 place-items-stretch grid-flow-row gap-4">
              <div className="flex items-center gap-4">
                <figure className="w-fit h-fit">
                  <Image src={Feat1} alt="benefit-1" />
                </figure>
                <p className="paragraph text-sakura-brown">
                  Dekat Dengan Tol Jakarta-Tangerang
                </p>
              </div>

              <div className="flex items-center gap-4">
                <figure className="w-fit h-fit">
                  <Image src={Feat2} alt="benefit-2" />
                </figure>
                <p className="paragraph text-sakura-brown">Ruang Serbaguna</p>
              </div>

              <div className="flex items-center gap-4">
                <figure className="w-fit h-fit">
                  <Image src={Feat3} alt="benefit-3" />
                </figure>
                <p className="paragraph text-sakura-brown">
                  Taman Bermain Anak
                </p>
              </div>

              <div className="flex items-center gap-4">
                <figure className="w-fit h-fit">
                  <Image src={Feat4} alt="benefit-4" />
                </figure>
                <p className="paragraph text-sakura-brown">
                  Kolam Renang Anak & Dewasa
                </p>
              </div>

              <div className="flex items-center gap-4">
                <figure className="w-fit h-fit">
                  <Image src={Feat5} alt="benefit-5" />
                </figure>
                <p className="paragraph text-sakura-brown">
                  Lapangan Basket 3 on 3
                </p>
              </div>

              <div className="flex items-center gap-4">
                <figure className="w-fit h-fit">
                  <Image src={Feat6} alt="benefit-6" />
                </figure>
                <p className="paragraph text-sakura-brown">Area Komersil</p>
              </div>
            </div>
          </div>
        </div>

        {/* <figure className="w-full h-full aspect-square md:aspect-video">
          <Image
            className="object-cover bg-center bg-repeat-y"
            src={CloudLong}
            alt="banner-cloud"
          />
        </figure> */}
      </section>

      {/* end promo */}
      <section className="relative block bg-sakura-10/60 mt-10 h-auto md:h-fit w-[360px] md:w-full">
        <figure className="w-full h-fit">
          <Image
            className="mix-blend-overlay object-cover bg-center bg-no-repeat"
            src={BasantaClusterPromo}
            alt="promo_image"
            width={1440}
            height={341}
          />
        </figure>
        <div className="absolute bottom-4 translate-x-0 md:translate-x-1/3 flex justify-between items-center gap-x-10">
          <figure className="w-full h-fit">
            <Image src={GiftCard} alt="form-image" />
          </figure>

          <button className="bg-gradient-to-b from-sakura-10 to-sakura-100 px-2 md:px-6 py-2 rounded-2xl text-xs md:text-base text-slate-50">
            info lebih lanjut
          </button>
        </div>
      </section>
    </>
  );
}
