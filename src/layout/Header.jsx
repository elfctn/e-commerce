import React, { useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
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
import DesktopDropdown from "../layout/DesktopDropdown";
import MobileDropdown from "../layout/MobileDropdown";

const navItems = [
  { text: "Home", path: "/" },
  { text: "Shop", path: "/shop" },
  { text: "About", path: "/about" },
  { text: "Team", path: "/team" },
  { text: "Contact", path: "/contact" },
  {
    text: "Other",
    children: [
      { text: "Blog", path: "/blog" },
      { text: "Stats", path: "/stats" },
      { text: "Testimonials", path: "/testimonials" },
      { text: "Pricing", path: "/pricing" },
    ],
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      {/* Üst Bar */}
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
              href="https://www.youtube.com"
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

      {/* BAŞLIK */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            ELFCTN
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <nav className="hidden md:flex items-center space-x-6 text-[#737373] font-medium">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.text} item={item} />
              ) : (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className="hover:text-[#252B42]"
                  activeClassName="text-[#252B42]"
                  exact={item.path === "/"}
                >
                  {item.text}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-6 text-[#23A6F0]">
            <Link to="/login" className="flex items-center gap-1">
              <User size={20} />{" "}
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

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6">
          <nav className="flex flex-col text-center">
            {navItems.map((item) =>
              item.children ? (
                <MobileDropdown
                  key={item.text}
                  item={item}
                  closeMenu={closeMobileMenu}
                />
              ) : (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className="py-3 text-lg text-[#737373] hover:text-[#252B42] border-b border-gray-100"
                  activeClassName="text-[#252B42] font-bold"
                  exact={item.path === "/"}
                  onClick={closeMobileMenu}
                >
                  {item.text}
                </NavLink>
              )
            )}
          </nav>
          <div className="border-t pt-4 mt-4 flex flex-col items-center space-y-4 text-[#23A6F0]">
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
