import React from "react";

const Pagination = () => {
  return (
    <div className="bg-white pb-12">
      <div className="container mx-auto flex justify-center">
        <div className="flex border border-gray-200 rounded-md overflow-hidden text-sm font-bold">
          <button className="px-6 py-4 text-[#23A6F0] bg-white hover:bg-gray-100 transition-colors">
            First
          </button>
          <button className="px-6 py-4 text-[#23A6F0] bg-white hover:bg-gray-100 transition-colors">
            1
          </button>
          <button className="px-6 py-4 text-white bg-[#23A6F0] cursor-default">
            2
          </button>
          <button className="px-6 py-4 text-[#23A6F0] bg-white hover:bg-gray-100 transition-colors">
            3
          </button>
          <button className="px-6 py-4 text-[#23A6F0] bg-white hover:bg-gray-100 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
