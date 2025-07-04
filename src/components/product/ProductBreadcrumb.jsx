import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ProductBreadcrumb = ({ product }) => {
  return (
    <div className="flex items-center text-sm font-bold text-gray-600">
      <Link to="/" className="hover:text-blue-500">
        Home
      </Link>
      <ChevronRight size={16} className="mx-2" />
      <Link to="/shop" className="hover:text-blue-500">
        Shop
      </Link>
      <ChevronRight size={16} className="mx-2" />
      <span className="text-gray-400">{product.name}</span>
    </div>
  );
};

export default ProductBreadcrumb;
