import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shopProducts } from "../data/shopProducts.js";
import ShopHeader from "../components/shop/ShopHeader";
import ShopCategoryCards from "../components/shop/ShopCategoryCards";
import FilterBar from "../components/shop/FilterBar";
import ProductGrid from "../components/shop/ProductGrid";
import Pagination from "../components/shop/Pagination";
import BrandLogos from "../components/common/BrandLogos";

const ITEMS_PER_PAGE = 8;

const ShopPage = () => {
  // Sayfa durumu ve ürün filtreleme için state'ler
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(shopProducts);

  // URL parametrelerini al
  // categoryId: 1 2 3
  // 1: Men's Clothing, 2: Women's Clothing, 3: Outerwear
  const { categoryId } = useParams();

  // URL parametrelerine göre ürünleri filtrele
  // Kategori ID'sine göre ürünleri filtreliyoruz
  // Men's Clothing Women's Clothing Outerwear kategorileri
  useEffect(() => {
    if (categoryId) {
      let filtered = [];

      // Kategori ID'sine göre filtreleme
      switch (categoryId) {
        case "1": // Men's Clothing kategorisi
          filtered = shopProducts.filter(
            (product) => product.category === "Men's Clothing"
          );
          break;
        case "2": // Women's Clothing kategorisi
          filtered = shopProducts.filter(
            (product) => product.category === "Women's Clothing"
          );
          break;
        case "3": // Outerwear kategorisi
          filtered = shopProducts.filter(
            (product) => product.category === "Outerwear"
          );
          break;
        default:
          // Kategori bulunamazsa tüm ürünleri göster
          filtered = shopProducts;
      }

      // Filtrelenmiş ürünleri state'e kaydet
      setFilteredProducts(filtered);
      setCurrentPage(1); // Sayfa 1'e dön
    } else {
      // URL parametresi yoksa tüm ürünleri göster
      setFilteredProducts(shopProducts);
    }
  }, [categoryId]);

  // Sayfalama hesaplamaları
  // Filtrelenmiş ürünlere göre toplam sayfa sayısı
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Mevcut sayfadaki ürünleri hesapla
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Sayfa değiştirme fonksiyonu
  // Sayfa numarası geçerliyse sayfayı değiştir ve yukarı çık
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <ShopHeader />
      </div>
      <ShopCategoryCards />
      <FilterBar />
      <ProductGrid products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <BrandLogos />
    </div>
  );
};

export default ShopPage;
