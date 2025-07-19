import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#23A6F0]"></div>
      <span className="ml-4 text-lg text-gray-600">Ürünler yükleniyor...</span>
    </div>
  );
};

export default LoadingSpinner;
