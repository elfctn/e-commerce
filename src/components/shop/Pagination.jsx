import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Sayfa numaralarını oluşturmak için bir dizi yaratıyoruz (örn: [1, 2])
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mb-12">
      <div className="flex border border-gray-200 rounded-md overflow-hidden text-sm font-bold">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-6 py-4 text-[#23A6F0] bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            // O anki sayfadaysak farklı, değilsek farklı stil uygula
            className={`px-6 py-4 transition-colors ${
              currentPage === number
                ? "text-white bg-[#23A6F0] cursor-default"
                : "text-[#23A6F0] bg-white hover:bg-gray-100"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-6 py-4 text-[#23A6F0] bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
