import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

const ProductCard = ({ product, gender }) => {
  const dispatch = useDispatch();
  const colors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // URL oluştur
  const getProductUrl = () => {
    if (gender) {
      // Gender varsa: /shop/man/hoodedjacket
      const productName = product.name.toLowerCase().replace(/\s+/g, "");
      return `/shop/${gender}/${productName}`;
    } else {
      // Gender yoksa eski format: /product/1
      return `/product/${product.id}`;
    }
  };

  // t16: yeni url formatı için fonksiyon
  const getProductDetailUrl = () => {
    // kategori adını küçük harfli ve tire ile ayır
    const categoryNameSlug = product.category
      ? product.category.toLowerCase().replace(/\s+/g, "-")
      : "";
    // ürün adını küçük harfli ve tire ile ayır
    const productNameSlug = product.name
      ? product.name.toLowerCase().replace(/\s+/g, "-")
      : "";
    // yeni url formatı oluştur
    if (gender && product.category && product.id) {
      return `/shop/${gender}/${categoryNameSlug}/${
        product.categoryId || product.category_id || 1
      }/${productNameSlug}/${product.id}`;
    }
    // eski url formatına geri dön
    return getProductUrl();
  };

  // url formatı seçimi (toggle ile değiştirilebilir)
  const useT16Url = true; // toggle için değiştirilebilir
  const url = useT16Url ? getProductDetailUrl() : getProductUrl();

  // sepete ekle
  const handleAddToCart = (e) => {
    e.preventDefault(); // link'e gitmeyi engelle
    e.stopPropagation(); // event bubbling'i engelle
    console.log(
      "ProductCard - Adding to cart:",
      product,
      "Color:",
      selectedColor
    );
    dispatch(addToCart(product, selectedColor));
    console.log("ProductCard - Dispatched addToCart");
  };

  return (
    <Link to={url} className="group block cursor-pointer">
      <div className="flex flex-col text-center">
        <div className="mb-4 relative overflow-hidden flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-[239px] h-[200px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
          />
          {/* hover efekti için overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[#23A6F0] transition-opacity"></div>
        </div>

        <h4 className="text-base font-bold text-[#252B42] mb-2">
          {product.name}
        </h4>
        <p className="text-sm font-bold text-[#737373] mb-2">
          {product.category}
        </p>

        <div className="flex justify-center items-center gap-2">
          {product.originalPrice && (
            <span className="text-base font-bold text-[#BDBDBD] line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-base font-bold text-[#23856D]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* renk seçimi */}
        <div className="flex justify-center mt-2 space-x-1.5">
          {colors.map((color) => (
            <button
              key={color}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedColor(color);
              }}
              className={`w-4 h-4 rounded-full focus:outline-none ${
                selectedColor === color
                  ? "ring-2 ring-offset-2 ring-gray-400"
                  : ""
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>

        {/* sepete ekle butonu */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-[#23A6F0] text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors font-medium"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
