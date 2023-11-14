/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import { useState } from "react";
import { Tab } from "@headlessui/react";
import { validCurrency } from "~/utils/currency";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export interface TabsProps {
  categories?: string[];
  values?: number[];
}

export default function Tabs({ categories, values }: TabsProps) {
  return (
    <div className="w-full max-w-md px-2 py-3 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-bd-grey/20 p-1">
          {categories?.map((category) => (
            <Tab
              key={`${category}`}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-50",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-bd-red focus:outline-none focus:ring-2",
                  selected
                    ? "bg-bd-red shadow"
                    : "text-black hover:bg-white/[0.12] hover:text-white",
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {values?.map((value) => (
            <Tab.Panel
              key={`${value}`}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              )}
            >
              <ul>
                <li
                  // key={post.id}
                  className="relative rounded-md p-3 hover:bg-gray-100"
                >
                  <h3 className="text-lg font-medium leading-5 text-center">
                    Rp. {validCurrency(value)} /tahun
                  </h3>

                  {/* <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul> */}

                  {/* <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2",
                      )}
                    /> */}
                </li>
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
