import React from "react";
/** Hook */
import useHeader from "@/hook/useHeader";
/** Components */
import MobileHeaderLink from "@components/header/MobileHeaderLink";
import { Dialog, Tab, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';



const MobileHeader: React.FC = () => {
  const {open, setOpen} = useHeader();

  return (
    <Transition.Root show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={React.Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">

                  <Tab.Panels as="div">
                    <Tab.Panel className="space-y-10 px-4 pb-8 pt-10">
                      <div>
                        <MobileHeaderLink path="/" pathName="Home"/>

                        <MobileHeaderLink path="/query" pathName="query"/>

                        <MobileHeaderLink path="/brand" pathName="brand list"/>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>

                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
  )
};

export default MobileHeader;