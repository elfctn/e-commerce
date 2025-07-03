import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* BÜYÜK KART (SOL) */}
        <div className="relative group overflow-hidden rounded-md h-[500px] md:h-auto">
          <img
            src="/weekprod1.jpg"
            alt="Top Product of the Week"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-bold mb-2">
              Top Product Of the Week
            </h3>
            <Link
              to="/shop"
              className="text-white font-bold border-b-2 border-white pb-1 self-start hover:text-gray-200 hover:border-gray-200 transition-colors"
            >
              EXPLORE ITEMS
            </Link>
          </div>
        </div>

        {/* SAĞ SÜTUN (İKİ KÜÇÜK KART) */}
        <div className="flex flex-col gap-8">
          {/* Üstteki Küçük Kart */}
          <div className="relative group overflow-hidden rounded-md h-[240px] flex-1">
            <img
              src="/weekprod22.png"
              alt="Top Product"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">
                Top Product Of the Week
              </h3>
              <Link
                to="/shop"
                className="text-white font-bold border-b-2 border-white pb-1 self-start hover:text-gray-200 hover:border-gray-200 transition-colors"
              >
                EXPLORE ITEMS
              </Link>
            </div>
          </div>

          {/* Alttaki Küçük Kart */}
          <div className="relative group overflow-hidden rounded-md h-[240px] flex-1">
            <img
              src="/weekprod33.png"
              alt="Top Product"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">
                Top Product Of the Week
              </h3>
              <Link
                to="/shop"
                className="text-white font-bold border-b-2 border-white pb-1 self-start hover:text-gray-200 hover:border-gray-200 transition-colors"
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
