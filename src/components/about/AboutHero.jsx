import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    // Ana bölüm
    // Arkaplan resmi ve metin içeriği ile birlikte
    <section
      className="relative bg-cover bg-center min-h-[500px] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/abouthero.png')" }}
    >
      {/* okunabilirlik için arkaplan üzerine yarı şeffaf katman ekledim */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* metin içeriği */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h5 className="text-base font-bold mb-4">ABOUT COMPANY</h5>
        <h1 className="text-4xl md:text-6xl font-bold text-white">ABOUT US</h1>
        <p className="mt-4 text-lg max-w-md mx-auto">
          We know how large objects will act, but things on a small scale
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-[#23A6F0] text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors"
        >
          Get Quote Now
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
