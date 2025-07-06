import React from "react";
import ProductCard from "../ProductCard";

const ProductGrid = ({ products }) => {
  // Veriyi prop olarak al
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {/* mockProducts yerine products propunu kullanıyorum */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
