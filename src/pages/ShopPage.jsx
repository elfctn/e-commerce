import React from "react";

import ShopHeader from "../components/shop/ShopHeader";
import ShopCategoryCards from "../components/shop/ShopCategoryCards";
import FilterBar from "../components/shop/FilterBar";
import ProductGrid from "../components/shop/ProductGrid";
import Pagination from "../components/shop/Pagination";
import BrandLogos from "../components/common/BrandLogos";
const ShopPage = () => {
  return (
    <>
      <ShopHeader />
      <ShopCategoryCards />
      <FilterBar />
      <ProductGrid />
      <Pagination />
      <BrandLogos />
    </>
  );
};

export default ShopPage;
