import React, { useState } from "react";
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
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Shop", path: "/shop" },
    { text: "About", path: "/about" },
    { text: "Blog", path: "/blog" },
    { text: "Contact", path: "/contact" },
    { text: "Pages", path: "/pages" },
  ];

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
            <a href="#" className="hover:text-sky-400 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <Youtube size={16} />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            ELFCTN
          </Link>

          {/* Navigasyon Linkleri (Masaüstü) */}
          <nav className="hidden md:flex items-center space-x-6 text-[#737373] font-medium">
            {navLinks.map((link) => (
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
          </nav>

          {/* Sağ Taraftaki İkonlar (Masaüstü) */}
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
            {navLinks.map((link) => (
              <NavLink
                key={link.text}
                to={link.path}
                className="hover:text-[#252B42]"
                activeClassName="text-[#252B42]"
                exact={link.path === "/"}
                onClick={() => setIsMobileMenuOpen(false)} // Linke tıklayınca menüyü kapat
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
