import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="w-full flex justify-center bg-white py-8 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-[1440px] px-4 flex flex-col md:flex-row gap-4">
        {/* Sol: Büyük Kart */}
        <div className="relative group rounded-md overflow-hidden w-full md:w-1/2 aspect-[611/572]">
          <img
            src="/weekprod1.jpg"
            alt="Top Product of the Week"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 w-full bg-[#2D8BC0BF] p-6 md:p-8 z-10">
            <h3 className="text-white text-2xl font-bold mb-2">
              Top Product Of the Week
            </h3>
            <Link
              to="/shop"
              className="text-white font-bold border-b-2 border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition-colors"
            >
              EXPLORE ITEMS
            </Link>
          </div>
        </div>

        {/* Sağ: İki Küçük Kart */}
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-4">
          {/* Üst Kart */}
          <div className="group rounded-md overflow-hidden aspect-[611/282] relative">
            <img
              src="/weekprod22.png"
              alt="Top Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#2D8BC0BF] p-6 z-10">
              <h3 className="text-white text-xl font-bold mb-2">
                Top Product Of the Week
              </h3>
              <Link
                to="/shop"
                className="text-white font-bold border-b-2 border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition-colors"
              >
                EXPLORE ITEMS
              </Link>
            </div>
          </div>

          {/* Alt Kart */}
          <div className="group rounded-md overflow-hidden aspect-[611/282] relative">
            <img
              src="/weekprod33.png"
              alt="Top Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#2D8BC0BF] p-6 z-10">
              <h3 className="text-white text-xl font-bold mb-2">
                Top Product Of the Week
              </h3>
              <Link
                to="/shop"
                className="text-white font-bold border-b-2 border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition-colors"
              >
                EXPLORE ITEMS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
