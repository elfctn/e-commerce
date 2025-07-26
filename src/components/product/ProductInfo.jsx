import React, { useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

// yıldızları render etmek için yardımcı component ekledim
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={starValue}
            className={`w-5 h-5 ${
              starValue <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
};

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  // products'tan gelen ürünlerde colors alanı yoksa, varsayılan renkler kullan
  const defaultColors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];
  const [selectedColor, setSelectedColor] = useState(defaultColors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-4">
      <h4 className="text-xl text-gray-800">{product.name}</h4>

      <div className="flex items-center my-4">
        <StarRating rating={product.rating || 4} />
        <span className="ml-3 text-sm text-gray-500">
          {product.reviews || 10} Reviews
        </span>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800">
          ${product.price.toFixed(2)}
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Availability:{" "}
          <span className="text-blue-500">
            {product.availability || "In Stock"}
          </span>
        </p>
      </div>

      <p className="text-sm text-gray-600 my-6 pb-6 border-b border-gray-200">
        {product.description ||
          "High quality product with excellent design and comfort."}
      </p>

      <div className="flex items-center space-x-2 mb-8">
        {defaultColors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-full focus:outline-none ${
              selectedColor === color
                ? "ring-2 ring-offset-2 ring-gray-400"
                : ""
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>

      {/* quantity selector */}
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 py-1 text-center min-w-[3rem]">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => {
            console.log(
              "Add to Cart clicked:",
              product,
              "Quantity:",
              quantity,
              "Color:",
              selectedColor
            );
            // seçilen miktar kadar ürün ekle
            for (let i = 0; i < quantity; i++) {
              dispatch(addToCart(product, selectedColor));
            }
          }}
          className="bg-[#23A6F0] text-white font-bold py-3 px-6 rounded hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
        <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
          <Heart size={20} />
        </button>
        <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
          <ShoppingCart size={20} />
        </button>
        <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
          <Eye size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
