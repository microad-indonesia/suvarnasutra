/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { menuitems, MenuItemProps } from "./navigation";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

type BtnLinkProps = {
  onClick?: () => void;
  href?: string;
  name: string;
  current?: boolean;
};

interface NavigationMenuPopoverProps {
  open?: boolean;
  close?: (ref?: React.RefObject<HTMLButtonElement>) => void;
  popoverButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const MobileMenu = ({
  open,
  popoverButtonRef,
}: NavigationMenuPopoverProps) => {
  const router: any = useRouter();

  React.useEffect(() => {
    const handleRouteChange = () => {
      if (open && popoverButtonRef?.current) {
        popoverButtonRef.current.click();
      }
    };

    router.events?.on("routeChangeStart", handleRouteChange);

    return () => router.events?.off("routeChangeStart", handleRouteChange);
  }, [router, open, popoverButtonRef]);

  const BtnLink = React.forwardRef<HTMLAnchorElement, BtnLinkProps>(
    ({ onClick, href, name, current }, ref) => {
      return (
        <a
          key={name}
          className="space-y-2"
          onClick={onClick}
          href={href}
          ref={ref}
          aria-current={current ? "page" : undefined}
        >
          <p className="text-2xl text-slate-50 text-center">{name}</p>
        </a>
      );
    },
  );
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden"
      >
        <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-bd-blue divide-y-2 divide-gray-50 min-h-screen ">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-full max-w-xs">
                  <span className="text-red-500 sr-only">BeliDomain</span>
                  {/* <Link href={`/`} passHref> */}
                  <figure className="relative">
                    <Image
                      src={`/assets/bd-logo-white.png`}
                      height="40"
                      width="163"
                      alt="belidomain-logo"
                    />
                  </figure>
                  {/* </Link> */}
                </div>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-transparant rounded-md p-2 inline-flex items-center justify-center text-bsd-grey hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bd-blue">
                  <span className="sr-only">Close menu</span>
                  <XIcon
                    className="h-6 w-6 text-slate-50 hover:text-black"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6 bg-transparant text-slate-100">
              <nav className="flex flex-col justify-center items-center gap-y-8">
                <ul className="my-14">
                  {menuitems.map(({ name, href, current }: MenuItemProps) => {
                    // const isActive = exact
                    // ? href === router.asPath
                    // : router.asPath.startsWith(href);
                    return (
                      <BtnLink
                        key={`${name}`}
                        name={name}
                        href={`${href}`}
                        // onClick={() => router.push(`${href}`)}
                        current={current}
                      />
                      // <li key={name}>
                      //   <Link
                      //     href={`${href}`}
                      //     aria-label="nav-list"
                      //     className="-m-3 p-3 flex justify-center text-center"
                      //     passHref
                      //   >
                      //     <span className="ml-3 text-xl font-medium text-lm-light">
                      //       {name}
                      //     </span>
                      //   </Link>
                      // </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="text-center">
              <a
                href={`https://reg.belidomain.co.id/`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-bd-red rounded-full shadow-sm text-base font-medium text-slate-50  bg-bd-red hover:bg-bd-red/70"
              >
                Masuk
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
