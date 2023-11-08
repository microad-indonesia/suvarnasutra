"use client";

// import Image from "next/image";
import React from "react";
import { PhoneIcon } from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { PrinterIcon } from "@heroicons/react/outline";

export default function Footer() {
  const [, setValues] = React.useState<string>("");
  const [, setWasSubmitted] = React.useState<boolean>(false);

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldsValue = Object.fromEntries(formData.entries());

    console.log("form-footer", fieldsValue);
    setWasSubmitted(true);
    event.currentTarget.reset();
  };
  return (
    <section className="bg-bd-blue w-fit px-4 md:px-[100px] py-4 md:py-[80px]">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-10">
          <div className="col-1">
            <div className="">
              {/* logo */}
              <figure className="w-[169px]">
                {/* <Image
                  src={`/assets/bd-logo-white.png`}
                  width={400}
                  height={80}
                  alt="logo-belidomain"
                /> */}
              </figure>
              <p className="paragraph text-slate-200 mt-2">
                Dipercaya oleh Ribuan pengguna di seluruh dunia,
                Belidomain.co.id komitmen untuk meningkatkan kualitas layanan
                dan teknologi terbaik. Bergabunglah sekarang dan raih sukses
                Anda.
              </p>
            </div>

            {/* address */}
            <div className="mt-8">
              <h5 className="font-medium text-xl leading-6 text-slate-200">
                Kontak Kami
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 ">
                <div className="flex gap-2 mt-2">
                  <PhoneIcon className="w-5 h-5 text-slate-50" />
                  <div className="text-slate-50">
                    <p>Phone</p>
                    <p>+62 293 88 500</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <MailIcon className="w-5 h-5 text-slate-50" />
                  <div className="text-slate-50">
                    <p>Email</p>
                    <p>info@belidomain.co.id</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <LocationMarkerIcon className="w-10 h-6 text-slate-50" />
                  <div className="text-slate-50">
                    <p>Alamat</p>
                    <p>
                      Plaza Galeon Lt. 8, Jl. MH Thamrin No. 8-9 Jakarta 10230
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <PrinterIcon className="w-5 h-5 text-slate-50" />
                  <div className="text-slate-50">
                    <p>Fax</p>
                    <p>+62 293 88 501</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="col-1">
            <div className="mb-4 w-full">
              <h5 className="font-medium text-xl leading-6 text-slate-200">
                Hubungi Kami
              </h5>
              <p className="paragraph text-slate-200 mt-2">
                Buat kamu yang masih penasaran sama produk dari Belidomain.co.id
                Anda.
              </p>
            </div>
            <form onSubmit={handleForm} action="">
              <div className="space-y-2 md:space-y-5">
                <div className="flex rounded-2xl shadow-sm ring-1 ring-inset ring-bd-blue bg-slate-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-bd-blue sm:max-w-2xl">
                  <input
                    className="block rounded-2xl flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    type="text"
                    name="name"
                    placeholder="your name"
                    onChange={(event) => setValues(event.currentTarget.value)}
                    required
                  />
                </div>

                <div className="flex rounded-2xl shadow-sm ring-1 ring-inset ring-bd-blue bg-slate-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-bd-blue sm:max-w-2xl">
                  <input
                    className="block rounded-2xl flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    type="email"
                    name="email"
                    placeholder="your email"
                    onChange={(event) => setValues(event.currentTarget.value)}
                    required
                  />
                </div>

                <textarea
                  className="block w-full border-0 py-4 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bd-blue sm:text-sm sm:leading-6 rounded-2xl"
                  name="message"
                  placeholder="your message"
                  cols={3}
                  onChange={(event) => setValues(event.currentTarget.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-bd-red px-6 py-2 rounded-2xl text-slate-50"
                >
                  Hubungi Kami
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
