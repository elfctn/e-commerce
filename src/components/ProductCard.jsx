import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }
  const colors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="flex flex-col text-center">
        <div className="mb-4 relative overflow-hidden flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-[239px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h4 className="text-base font-bold text-[#252B42] mb-2">
          {product.name}
        </h4>
        <p className="text-sm font-bold text-[#737373] mb-2">
          {product.category}
        </p>

        <div className="flex justify-center items-center gap-2">
          <span className="text-base font-bold text-[#BDBDBD] line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="text-base font-bold text-[#23856D]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-center mt-2 space-x-1.5">
          {colors.map((color) => (
            <span
              key={color}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
