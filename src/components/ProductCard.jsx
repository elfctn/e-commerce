import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  // Renk seçenekleri için bir dizi
  const colors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="flex flex-col text-center">
        {/* Resim Alanı */}
        <div className="mb-4 relative overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Metin İçeriği */}
        <h4 className="text-base font-bold text-[#252B42] mb-2">
          {product.name}
        </h4>
        <p className="text-sm font-bold text-[#737373] mb-2">
          {product.category}
        </p>

        {/* Fiyat Alanı - Orijinal stile göre düzeltildi */}
        <div className="flex justify-center items-center gap-2">
          <span className="text-base font-bold text-[#BDBDBD] line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="text-base font-bold text-[#23856D]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Renkler Alanı - Yeni eklendi */}
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
