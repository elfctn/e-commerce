import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div
          className="relative rounded-[20px] overflow-hidden bg-cover bg-top  flex items-center min-h-[622px]"
          style={{ backgroundImage: "url('/abouthero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[20px]"></div>

          <div className="relative w-full md:w-2/3 lg:w-1/2 p-8 md:p-12 lg:pl-20 z-10 text-center md:text-left">
            <h5 className="font-bold text-white"> ELIFCETIN 2025</h5>
            <h1 className="text-4xl md:text-6xl font-bold my-6 text-white">
              NEW COLLECTION
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-sm mx-auto md:mx-0">
              We know how large objects will act, but things on a small scale
            </p>
            <Link
              to="/shop"
              className="bg-[#2DC071] hover:bg-green-600 text-white font-bold py-4 px-10 rounded transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
