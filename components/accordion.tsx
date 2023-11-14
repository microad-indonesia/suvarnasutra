/* eslint-disable @typescript-eslint/no-explicit-any */
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import cn from "classnames";

interface DisclosureProps {
  title?: string;
  description?: any;
  defaultOpen?: boolean;
  className?: string;
  myKey?: string | undefined;
}

export function Accordion({
  title,
  description,
  defaultOpen,
  className,
  myKey,
}: DisclosureProps) {
  return (
    <div key={myKey} className="">
      <div className={cn(className, "max-w-3xl rounded-2xl  shadow-xl")}>
        <Disclosure defaultOpen={defaultOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 text-left font-medium bg-transparant focus:outline-none focus-visible:ring focus-visible:ring-slate-50 focus-visible:ring-opacity-75">
                <h2 className="text-xl text-bd-blue">{title}</h2>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : "text-bd-blue"
                  } h-5 w-5 text-bd-blue`}
                />
              </Disclosure.Button>
              {open && (
                <Disclosure.Panel
                  className="p-4 text-sm text-gray-500 whitespace-pre-line"
                  static
                >
                  <p className="paragraph pb-5">{description}</p>
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
