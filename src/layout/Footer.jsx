import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Geçici olarak

// Footer linklerini yönetmek için bir veri yapısı
const footerLinkSections = [
  {
    title: "Company Info",
    links: [
      { text: "About Us", path: "/about" },
      { text: "Carrier", path: "/careers" },
      { text: "We are hiring", path: "/hiring" },
      { text: "Blog", path: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "About Us", path: "/about" }, // Bu linkler Figma tasarımına göre düzeltilecek
      { text: "Carrier", path: "/careers" },
      { text: "We are hiring", path: "/hiring" },
      { text: "Blog", path: "/blog" },
    ],
  },
  {
    title: "Features",
    links: [
      { text: "Business Marketing", path: "/features/business-marketing" },
      { text: "User Analytic", path: "/features/user-analytic" },
      { text: "Live Chat", path: "/features/live-chat" },
      { text: "Unlimited Support", path: "/features/unlimited-support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "IOS & Android", path: "/resources/ios-android" },
      { text: "Watch a Demo", path: "/resources/demo" },
      { text: "Customers", path: "/resources/customers" },
      { text: "API", path: "/resources/api" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Logo ve Sosyal Medya */}
        <div className="flex justify-between items-center mb-12 border-b border-gray-300 pb-6">
          <h2 className="text-2xl font-bold">Bandage</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-[#23A6F0]"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-[#23A6F0]"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-[#23A6F0]"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Footer Linkleri */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {footerLinkSections.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h3 className="text-base font-bold text-[#252B42] mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.path}
                      className="text-[#737373] hover:text-[#23A6F0]"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get In Touch */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-[#252B42] mb-5">
              Get In Touch
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="bg-[#23A6F0] text-white px-5 py-3 rounded-r-md whitespace-nowrap text-sm hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#737373] mt-2">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#737373] pt-6">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
