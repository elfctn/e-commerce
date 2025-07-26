import React, { useState } from "react";
import ProductCard from "../ProductCard";
import { products } from "../../data/products";

const BestsellerProducts = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const totalProducts = products.length;

  const visibleProducts = products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(totalProducts);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xl text-[#737373]">Featured Products</p>
          <h2 className="text-2xl font-bold text-[#252B42] uppercase">
            Bestseller Products
          </h2>
          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              gender={
                product.category === "Men's Clothing"
                  ? "man"
                  : product.category === "Women's Clothing"
                  ? "woman"
                  : "unisex"
              }
            />
          ))}
        </div>

        {visibleCount < totalProducts && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="border-2 border-[#23A6F0] text-[#23A6F0] font-bold py-3 px-10 rounded hover:bg-[#23A6F0] hover:text-white transition-colors"
            >
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestsellerProducts;
