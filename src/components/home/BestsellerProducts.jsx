import React from "react";
import ProductCard from "../ProductCard";

// 10 ürün içeren yeni mock data listesi
const mockProducts = [
  {
    id: 1,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product1.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product2.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product3.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product4.png",
  },
  {
    id: 5,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product5.png",
  },
  {
    id: 6,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product6.png",
  },
  {
    id: 7,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product7.png",
  },
  {
    id: 8,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product8.png",
  },
  {
    id: 9,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product9.png",
  },
  {
    id: 10,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/product10.png",
  },
];

const BestsellerProducts = () => {
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
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border-2 border-[#23A6F0] text-[#23A6F0] font-bold py-3 px-10 rounded hover:bg-[#23A6F0] hover:text-white transition-colors">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;
