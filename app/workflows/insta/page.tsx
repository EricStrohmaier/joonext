"use client";
import InstaPost from "@/app/components/InstaPost";
import FocusCard from "@/app/components/FocusCard";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LuChevronDown } from "react-icons/lu";

export default function Insta() {
  return (
    <div className="flex flex-col items-end text-sm w-full font-semibold">
      <div className="flex items-center justify-center w-full h-full mt-6">
        <div className="flex flex-col items-center justify-center w-[90%] leading-9 h-fit text-xl font-semibold text-center">
          <FocusCard>
            Save time on social media posting! <br /> Our tool lets you create
            cross-platform posts without distractions. <br /> No need to
            navigate each platform individually—focus on what matters. 🚀
          </FocusCard>
        </div>
      </div>
      <div className="flex flex-col mt-12 mx-auto items-center justify-center w-[90%] h-full">
        <FocusCard>
          <div className="flex flex-row">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  What do you want to do? <LuChevronDown className="-mr-1 ml-2 h-5 w-5" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-300 text-gray-900"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Export Instagram Content
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-300 text-gray-900"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Post to Instagram & Nostr
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-300 text-gray-900"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Find Insta friends on Nostr
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="mx-5 flex justify-center items-center">
              same line?
            </div>
          </div>
        </FocusCard>
      </div>
    </div>
  );
}
