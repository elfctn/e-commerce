import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ShopHeader = () => {
  return (
    <div className="bg-white py-6">
      <div className="container mx-auto px-4 flex flex-col gap-4 md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
        <div className="flex items-center text-sm font-bold">
          <Link to="/" className="text-[#252B42] hover:text-[#23A6F0]">
            Home
          </Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-500">Shop</span>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
