import React from "react";
import ShopHeader from "../components/shop/ShopHeader";
import ShopCategoryCards from "../components/shop/ShopCategoryCards";
import FilterBar from "../components/shop/FilterBar";
import ProductGrid from "../components/shop/ProductGrid";
const ShopPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <ShopHeader />
      </div>
      <ShopCategoryCards />
      <FilterBar />
      <ProductGrid />
      {/* Sayfalama buraya gelecek
        Marka Logoları buraya gelecek
      */}
    </div>
  );
};

export default ShopPage;
