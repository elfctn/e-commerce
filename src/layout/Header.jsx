import React, { useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  ChevronDown,
} from "lucide-react";
import { Popover, Transition } from "@headlessui/react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // linkleri ana ve açılır menü olarak ayırıyoruz
  const mainNavLinks = [
    { text: "Home", path: "/" },
    { text: "Shop", path: "/shop" },
    { text: "About", path: "/about" },
    { text: "Team", path: "/team" },
    { text: "Contact", path: "/contact" },
  ];

  const dropdownLinks = [
    { text: "Blog", path: "/blog" },
    { text: "Stats", path: "/stats" },
    { text: "Testimonials", path: "/testimonials" },
    { text: "Pricing", path: "/pricing" },
  ];

  // mobil menü için tüm linkleri birleştirdim
  const allNavLinks = [...mainNavLinks, ...dropdownLinks];

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      {/* Üst Bar (Masaüstü) */}
      <div className="hidden md:flex justify-between items-center bg-[#252B42] text-white px-8 py-2 text-sm">
        <div className="flex items-center gap-4">
          <span>+90 (530) 478-0487</span>
          <span>elifcetin.dev@gmail.com</span>
        </div>
        <div>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-bold">Follow Us :</span>
          <div className="flex items-center space-x-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            ELFCTN
          </Link>

          {/* navlink (Masaüstü)*/}
          <nav className="hidden md:flex items-center space-x-6 text-[#737373] font-medium">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.text}
                to={link.path}
                className="hover:text-[#252B42]"
                activeClassName="text-[#252B42]"
                exact={link.path === "/"}
              >
                {link.text}
              </NavLink>
            ))}

            {/* açılır meenü ekledim */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center focus:outline-none hover:text-[#252B42]">
                    <span>Other</span>
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
                        {dropdownLinks.map((link) => (
                          <NavLink
                            key={link.text}
                            to={link.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            activeClassName="bg-gray-100 font-bold"
                          >
                            {link.text}
                          </NavLink>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </nav>

          {/* Sağ Taraftaki İkonlar */}
          <div className="hidden md:flex items-center space-x-6 text-[#23A6F0]">
            <Link to="/login" className="flex items-center gap-1">
              <User size={20} />
              <span className="font-bold">Login / Register</span>
            </Link>
            <button className="hover:text-blue-700">
              <Search size={20} />
            </button>
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-blue-700"
            >
              <ShoppingCart size={20} />
              <span></span>
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-center text-lg text-[#737373]">
            {allNavLinks.map((link) => (
              <NavLink
                key={link.text}
                to={link.path}
                className="hover:text-[#252B42]"
                activeClassName="text-[#252B42]"
                exact={link.path === "/"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
          <div className="border-t pt-4 flex flex-col items-center space-y-4 text-[#23A6F0]">
            <Link to="/login" className="flex items-center gap-2 text-xl">
              <User size={24} />
              <span className="font-bold">Login / Register</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
