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
  const [sortValue, setSortValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  // URL parametrelerini al
  // gender: man, woman
  const { gender } = useParams();

  // URL parametrelerine göre ürünleri filtrele
  // Gender'e göre ürünleri filtreliyoruz
  // man: Men's Clothing, woman: Women's Clothing, unisex: Outerwear
  useEffect(() => {
    if (gender) {
      let filtered = [];

      // Gender'e göre filtreleme
      switch (gender) {
        case "man": // Erkek ürünleri
          filtered = shopProducts.filter(
            (product) => product.category === "Men's Clothing"
          );
          break;
        case "woman": // Kadın ürünleri
          filtered = shopProducts.filter(
            (product) => product.category === "Women's Clothing"
          );
          break;
        case "unisex": // Unisex ürünleri (Outerwear)
          filtered = shopProducts.filter(
            (product) => product.category === "Outerwear"
          );
          break;
        default:
          // Gender bulunamazsa tüm ürünleri göster
          filtered = shopProducts;
      }

      // Filtrelenmiş ürünleri state'e kaydet
      setFilteredProducts(filtered);
      setCurrentPage(1); // Sayfa 1'e dön
    } else {
      // URL parametresi yoksa tüm ürünleri göster
      setFilteredProducts(shopProducts);
    }
  }, [gender]);

  // Sıralama değiştirme fonksiyonu
  const handleSortChange = (value) => {
    setSortValue(value);
  };

  // Filter input değiştirme fonksiyonu
  const handleFilterInputChange = (value) => {
    setFilterValue(value);
  };

  // Filter butonuna basma fonksiyonu
  const handleFilterClick = () => {
    let filtered = [...shopProducts];

    // Önce kategori filtreleme
    if (gender) {
      switch (gender) {
        case "man":
          filtered = filtered.filter(
            (product) => product.category === "Men's Clothing"
          );
          break;
        case "woman":
          filtered = filtered.filter(
            (product) => product.category === "Women's Clothing"
          );
          break;
        case "unisex":
          filtered = filtered.filter(
            (product) => product.category === "Outerwear"
          );
          break;
        default:
          break;
      }
    }

    // Sonra arama filtreleme
    if (filterValue) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    // Son olarak sıralama
    if (sortValue) {
      switch (sortValue) {
        case "price:asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price:desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "name:asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name:desc":
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  };

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
      <FilterBar
        onSortChange={handleSortChange}
        onFilterClick={handleFilterClick}
        onFilterInputChange={handleFilterInputChange}
        sortValue={sortValue}
        filterValue={filterValue}
        totalProducts={filteredProducts.length}
      />
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
