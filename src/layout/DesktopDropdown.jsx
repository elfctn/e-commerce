import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const DesktopDropdown = ({ item }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center focus:outline-none hover:text-[#252B42]">
            <span>{item.text}</span>
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-32 mt-3 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {item.children.map((child) => (
                  <NavLink
                    key={child.text}
                    to={child.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    activeClassName="bg-gray-100 font-bold"
                  >
                    {child.text}
                  </NavLink>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DesktopDropdown;
