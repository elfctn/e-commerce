import React from "react";
import { products } from "../../data/products.js";

const FilterBar = ({
  onSortChange,
  onFilterClick,
  onFilterInputChange,
  sortValue,
  filterValue,
  totalProducts,
}) => {
  return (
    <div className="bg-[#FAFAFA] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <div className="md:mb-0">
            <p className="text-sm font-bold text-[#737373]">
              Showing all {totalProducts || products.length} results
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:space-x-4">
            <div className="flex items-center">
              <span className="text-sm font-bold text-[#737373] mr-4">
                Views:
              </span>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded cursor-pointer">
                  <img src="/filtre1.png" alt="Grid View" />
                </button>
                <button className="p-2 border border-gray-300 rounded cursor-pointer">
                  <img src="/filtre2.png" alt="List View" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              {/* Filter Input */}
              <input
                type="text"
                placeholder="Search products..."
                value={filterValue || ""}
                onChange={(e) =>
                  onFilterInputChange && onFilterInputChange(e.target.value)
                }
                className="w-full sm:w-auto bg-white border border-[#DDDDDD] rounded px-4 py-2 text-sm text-[#737373] focus:outline-none focus:border-[#23A6F0]"
              />

              <div className="relative w-full sm:w-auto">
                <select
                  value={sortValue || ""}
                  onChange={(e) => onSortChange && onSortChange(e.target.value)}
                  className="w-full sm:w-auto appearance-none cursor-pointer bg-white border border-[#DDDDDD] rounded px-4 py-2 pr-8 text-sm text-[#737373] focus:outline-none"
                >
                  <option value="">Sort by</option>
                  <option value="price:asc">Price: Low to High</option>
                  <option value="price:desc">Price: High to Low</option>
                  <option value="name:asc">Name: A to Z</option>
                  <option value="name:desc">Name: Z to A</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#737373]">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <button
                onClick={() => onFilterClick && onFilterClick()}
                className="w-full sm:w-auto bg-[#23A6F0] text-white font-bold px-6 py-2 rounded text-sm cursor-pointer hover:bg-blue-600 transition-colors"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
