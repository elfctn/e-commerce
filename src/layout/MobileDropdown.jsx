import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const MobileDropdown = ({ item, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <a
        href="#"
        onClick={handleToggle}
        className="w-full flex justify-center items-center py-3 text-lg text-[#737373]"
      >
        <span>{item.text}</span>
        <ChevronDown
          size={20}
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </a>
      {isOpen && (
        <div className="pl-4 pb-2 flex flex-col items-center bg-gray-50/50">
          {item.children.map((child) => (
            <NavLink
              key={child.text}
              to={child.path}
              className="py-2 text-gray-600 hover:text-[#252B42] text-base"
              activeClassName="text-[#252B42] font-bold"
              onClick={closeMenu}
            >
              {child.text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
