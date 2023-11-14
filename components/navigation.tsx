"use client";

import * as React from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";
import { Bubble, Whatsapp } from "./icons";

// import { ChevronDownIcon } from "@heroicons/react/solid";
// export interface NavigationItem {
//   name: string;
//   icon: React.ComponentType<React.ComponentProps<"svg">>;
//   href: string;
//   exact?: boolean;
//   external?: boolean;
// }

export type MenuItemProps = {
  name: string;
  href?: string;
  exact?: boolean;
  current?: boolean;
};

// type BtnLinkProps = {
//   onClick?: () => void;
//   href?: string;
//   name: string;
//   current?: boolean;
// };

export const menuitems: MenuItemProps[] = [
  {
    name: "Beranda",
    href: "/",
    exact: true,
    current: true,
  },
  {
    name: "Domain",
    href: "/domain",
    exact: true,
    current: false,
  },
  {
    name: "Hosting",
    href: "/hosting",
    exact: true,
    current: false,
  },
  {
    name: "SSL",
    href: "/ssl",
    exact: true,
    current: false,
  },
  {
    name: "Tentang Kami",
    href: "/about",
    exact: true,
    current: false,
  },
  {
    name: "Hubungi kami",
    href: "/contact",
    exact: true,
    current: false,
  },
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export const Navigation: React.FC = () => {
  const popoverButtonRef = React.useRef<HTMLButtonElement>(null);

  //   ({ onClick, href, name }, ref) => {
  //     return (
  //       <a
  //         rel=" noopener noreferrer"
  //         target="_blank"
  //         onClick={onClick}
  //         href={href}
  //         ref={ref}
  //         aria-hidden
  //       >
  //         {name}
  //       </a>
  //     );
  //   },
  // );
  return (
    <Popover className="relative z-20 min-w-full bg-[#ffff]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* headline */}
            <div className="hidden md:grid grid-cols-2 justify-between md:py-4 w-full">
              <div className="">
                <span className="text-bd-blue font-semibold text-sm landing-[18px]">
                  Jual beli domain terbaik, hanya di belidomain.co.id
                </span>
              </div>

              <div className="flex justify-end gap-5">
                <div className="flex items-center space-x-1">
                  {React.createElement(Bubble, {
                    width: "18px",
                    height: "18px",
                    fill: "#164895",
                  })}
                  <p className="text-bd-blue font-semibold text-sm landing-[18px]">
                    Bantuan
                  </p>
                </div>

                <div className="flex items-center space-x-1">
                  {React.createElement(Whatsapp, {
                    width: "18px",
                    height: "18px",
                    fill: "#164895",
                  })}
                  <p className="text-bd-blue font-semibold text-sm landing-[18px]">
                    WhatsApp 24/7
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" aria-hidden>
                  <div className="w-full max-w-xs">
                    <span className="text-blue-300 sr-only">BeliDomain</span>
                    <figure className="relative ">
                      <Image
                        src={`/assets/belidomain_logo.png`}
                        height="32"
                        width="163"
                        alt="belidomain_logo"
                      />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className="-mr-2 -my-2 lg:hidden">
                <Popover.Button
                  ref={popoverButtonRef}
                  className="bg-bsd-light rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lm-blue"
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group
                as="nav"
                className="hidden cursor-pointer lg:flex space-x-10"
              >
                <ul className="flex justify-center items-center gap-x-5">
                  {menuitems.map(({ name, href }: MenuItemProps) => {
                    // const isActive = exact
                    // ? href === router.asPath
                    // : router.asPath.startsWith(href);
                    return (
                      <li key={name}>
                        <Link
                          href={`${href}`}
                          aria-label="nav-list"
                          className="-m-3 p-3 flex justify-center text-center "
                        >
                          <span className="ml-3 text-xl font-medium text-lm-light">
                            {name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Popover.Group>
              <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href={`https://reg.belidomain.co.id/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-bd-red rounded-full shadow-sm text-base font-medium text-slate-50  bg-bd-red hover:bg-bd-red/70"
                >
                  Masuk
                </a>
              </div>
            </div>
          </div>
          <MobileMenu open={open} popoverButtonRef={popoverButtonRef} />
        </>
      )}
    </Popover>
  );
};
