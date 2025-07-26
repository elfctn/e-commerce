import React, { useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  LogOut,
} from "lucide-react";
import DesktopDropdown from "../layout/DesktopDropdown";
import MobileDropdown from "../layout/MobileDropdown";
import CartDropdown from "../components/cart/CartDropdown";
import { logout } from "../store/actions/clientActions";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Redux state'inden kullanıcı bilgilerini al
  const user = useSelector((state) => state.client.user);
  const dispatch = useDispatch();

  // Gender kodunu Türkçe'ye çevir
  const getGenderText = (gender) => {
    return gender === "k" ? "kadin" : "erkek";
  };

  // Mevcut ürün kategorilerini kullan
  // Bu kategoriler static data olarak tanımlanmış
  // API'den gelen kategoriler yerine mevcut ürün kategorilerini kullanıyoruz
  const existingCategories = [
    { id: 1, title: "Men's Clothing", gender: "erkek" },
    { id: 2, title: "Women's Clothing", gender: "kadin" },
    { id: 3, title: "Outerwear", gender: "unisex" },
  ];

  // Nav items'ı mevcut kategorilerle oluştur
  // Shop dropdown'ında Men Women Outerwear kategorileri
  // Her kategori kendi sayfasına yönlendiriyor
  const navItems = [
    { text: "Home", path: "/" },
    {
      text: "Shop",
      children: [
        {
          text: "Men",
          path: "/shop/man",
        },
        {
          text: "Women",
          path: "/shop/woman",
        },
        {
          text: "Outerwear",
          path: "/shop/unisex",
        },
      ],
    },
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

  // Gravatar URL'i oluştur
  const getGravatarUrl = (email) => {
    const hash = email ? email.toLowerCase().trim() : "";
    return `https://www.gravatar.com/avatar/${hash}?d=mp&s=40`;
  };

  // Çıkış yap
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

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
            {user ? (
              // Kullanıcı giriş yapmışsa profil göster
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={getGravatarUrl(user.email)}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-bold text-sm">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 hover:text-red-600 transition-colors"
                >
                  <LogOut size={16} />
                  <span className="text-sm">Çıkış</span>
                </button>
              </div>
            ) : (
              // Kullanıcı giriş yapmamışsa login/signup göster
              <>
                <Link to="/login" className="flex items-center gap-1">
                  <User size={20} />
                  <span className="font-bold">Login</span>
                </Link>
                <Link to="/signup" className="flex items-center gap-1">
                  <User size={20} />
                  <span className="font-bold">Sign Up</span>
                </Link>
              </>
            )}
            <button className="hover:text-blue-700">
              <Search size={20} />
            </button>
            <CartDropdown />
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-blue-700"
            >
              <span className="font-bold text-sm">Cart</span>
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
            {/* mobil sepet dropdown */}
            <div className="w-full flex justify-center">
              <CartDropdown />
            </div>

            {user ? (
              // Kullanıcı giriş yapmışsa profil göster
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={getGravatarUrl(user.email)}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-bold text-lg">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut size={20} />
                  <span>Çıkış</span>
                </button>
              </div>
            ) : (
              // Kullanıcı giriş yapmamışsa login/signup göster
              <>
                <Link to="/login" className="flex items-center gap-2 text-xl">
                  <User size={24} />
                  <span className="font-bold">Login</span>
                </Link>
                <Link to="/signup" className="flex items-center gap-2 text-xl">
                  <User size={24} />
                  <span className="font-bold">Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
