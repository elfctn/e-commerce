import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // product prop'u gelmezse veya boşsa bir şey render etme
  if (!product) {
    return null;
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="flex flex-col text-center">
        <div className="mb-4 relative overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h4 className="text-base font-bold text-[#252B42] mb-2">
          {product.name}
        </h4>
        <p className="text-sm font-bold text-[#737373] mb-2">
          {product.category}
        </p>
        <div className="flex justify-center items-center gap-2">
          {product.originalPrice && (
            <span className="text-[#BDBDBD] font-bold">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-[#23856D] font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
