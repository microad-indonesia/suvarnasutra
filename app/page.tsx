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
import CloudLong from "~/public/assets/cloud-long.png";

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
      // const URLEncode = new URLSearchParams(mergingResult).toString();
      const URLEncode: string = new URLSearchParams(mergingResult).toString();
      console.log("form", URLEncode);

      // const response = await fetch(`${process.env.NEXT_PUBLIC_SUBMIT}`, {
      //   method: "POST",
      //   // body: JSON.stringify(mergingResult),
      //   body: URLEncode,
      //   headers: {
      //     Authorization: `Basic ${process.env.NEXT_PUBLIC_TOKEN}`,
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      // });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/campaign`,
        {
          method: "POST",
          body: JSON.stringify(mergingResult),
        },
      );
      const resp = await response.statusText;
      console.log("resp", resp);
      setWasSubmitted(true);

      // event.currentTarget.reset();
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
      <NextSeo title="suvarnasutra.co.id" titleTemplate="%s" description="" />

      {/* homebanner  */}
      <section className="relative h-[760px] w-full">
        <figure className="absolute bottom-4 inset-x-0 flex justify-center z-20">
          <Image src={GiftCard} alt="form-image" width={674} height={209} />
        </figure>
        <figure className="absolute inset-0 object-cover bg-center bg-no-repeat w-full h-full aspect-video">
          <Image src={HomeBanner} alt="banner" />
        </figure>
      </section>

      {/* form */}
      <section className="relative bg-sakura-5 w-full h-[760px]">
        <div className="bg-sakura-5 absolute inset-0 w-full h-full blur-md"></div>

        <div className="relative flex justify-center items-center mx-[76px]">
          {/* form */}
          <div className="flex-inital z-10 bg-sakura-10 p-16 rounded-2xl">
            <div className="mb-4 w-full">
              <h5 className="font-medium text-xl leading-6 text-slate-200">
                Silahkan Mengisi Form
              </h5>
              <p className="paragraph text-slate-200 mt-2">
                Untuk mendapatkan informasi mengenai produk
              </p>
            </div>

            <form
              onSubmit={handleForm}
              encType={"application/x-www-form-urlencoded"}
              method="post"
            >
              <div className="space-y-1 md:space-y-5">
                {/* name and lastname */}
                <div className="flex justify-between items-center">
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
                <div className="flex justify-between items-center">
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
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-b from-sakura-10 to-sakura-100 px-6 py-2 rounded-2xl text-slate-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <figure className="hidden md:block flex-1 z-10">
            <Image
              src={`/assets/BellflowerDeret_1.png`}
              alt="form-image"
              width={479}
              height={549}
            />
          </figure>
        </div>
      </section>

      <section className="relative w-full h-full py-10">
        <Image
          className="absolute inset-0 object-cover bg-no-repeat"
          src={CloudLong}
          alt="banner"
          width={1440}
          height={420}
        />

        <div className="relative">
          <h1 className="heading font-medium text-sakura-brown text-center">
            Yang kamu Dapatkan dari
          </h1>
          <div className="flex items-center justify-center">
            <SliderComponents />
          </div>
        </div>

        <div className="relative">
          <figure>
            <Image
              src={BasantaHeadBanner}
              alt="banner"
              width={1440}
              height={420}
            />
          </figure>

          <div className="flex items-center justify-center">
            <SliderComponents />
          </div>
        </div>
      </section>

      {/* end promo */}
      <section className="relative bg-sakura-10/60 mt-20">
        <figure className="w-full h-full">
          <Image
            className="mix-blend-overlay object-cover"
            src={BasantaClusterPromo}
            alt="promo_image"
            width={1440}
            height={341}
          />
        </figure>
        <div className="absolute bottom-4 translate-x-1/3 flex justify-between items-center gap-x-10">
          <figure>
            <Image src={GiftCard} alt="form-image" width={674} height={209} />
          </figure>

          <button className="bg-gradient-to-b from-sakura-10 to-sakura-100 px-6 py-2 rounded-2xl text-slate-50">
            info lebih lanjut
          </button>
        </div>
      </section>
    </>
  );
}
