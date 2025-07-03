import React from "react";
import ProductCard from "../ProductCard";

//  mock data
const mockProducts = [
  {
    id: 1,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun1.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun2.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun3.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun4.png",
  },
  {
    id: 5,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun5.png",
  },
  {
    id: 6,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun6.png",
  },
  {
    id: 7,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun7.png",
  },
  {
    id: 8,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun8.png",
  },
  {
    id: 9,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun9.png",
  },
  {
    id: 10,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun10.png",
  },
  {
    id: 11,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun11.png",
  },
  {
    id: 12,
    name: "Graphic Design",
    category: "English Department",
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: "/urun12.png",
  },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
