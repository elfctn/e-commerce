import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../data/products.js";
console.log("DEBUG - products import:", products);
console.log("DEBUG - products length:", products?.length);
import {
  fetchProducts,
  loadMoreProducts,
} from "../store/actions/productActions";
import FilterBar from "../components/shop/FilterBar";
import ProductGrid from "../components/shop/ProductGrid";
import Pagination from "../components/shop/Pagination";
import InfiniteScroll from "../components/shop/InfiniteScroll";

const ITEMS_PER_PAGE = 8; // Test için küçük sayı

const ShopPage = () => {
  const dispatch = useDispatch();
  const {
    products: reduxProducts,
    total,
    fetchState,
  } = useSelector((state) => state.product);

  // URL parametrelerini al
  const { gender } = useParams();
  // gender: man, woman

  // Sayfa durumu ve ürün filtreleme için state'ler
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [paginationType, setPaginationType] = useState("pagination"); // "pagination" veya "infinite"
  const [offset, setOffset] = useState(0);

  // URL parametrelerine göre ürünleri filtrele
  // Gender'e göre ürünleri filtreliyoruz
  // man: Men's Clothing, woman: Women's Clothing, unisex: Outerwear
  useEffect(() => {
    let filtered = [];

    if (gender) {
      // Gender'e göre filtreleme
      const genderCategoryMap = {
        man: "Men's Clothing",
        woman: "Women's Clothing",
        unisex: "Outerwear",
      };

      const targetCategory = genderCategoryMap[gender];

      console.log(`Total products: ${products.length}, Gender: ${gender}`);

      if (targetCategory) {
        // Belirli kategoriye göre filtrele
        filtered = products.filter(
          (product) => product.category === targetCategory
        );
        console.log(
          `Gender: ${gender}, Category: ${targetCategory}, Filtered: ${filtered.length} products`
        );
      } else {
        // Gender bulunamazsa tüm ürünleri göster
        filtered = products;
        console.log(
          `Gender: ${gender}, No category match, Showing all: ${filtered.length} products`
        );
      }

      // Filtrelenmiş ürünleri state'e kaydet
      setFilteredProducts(filtered);
      setCurrentPage(1); // Sayfa 1'e dön
      setOffset(0); // Offset'i sıfırla
    } else {
      // URL parametresi yoksa tüm ürünleri göster
      setFilteredProducts(products || []);
      setOffset(0); // Offset'i sıfırla
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
    // Her iki modda da filtreleme yap
    let filtered = [...products];

    // Önce kategori filtreleme
    if (gender) {
      const genderCategoryMap = {
        man: "Men's Clothing",
        woman: "Women's Clothing",
        unisex: "Outerwear",
      };
      const targetCategory = genderCategoryMap[gender];

      if (targetCategory) {
        filtered = filtered.filter(
          (product) => product.category === targetCategory
        );
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
      filtered.sort((a, b) => {
        switch (sortValue) {
          case "price:asc":
            return a.price - b.price;
          case "price:desc":
            return b.price - a.price;
          case "name:asc":
            return a.name.localeCompare(b.name);
          case "name:desc":
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
    }

    // Filtrelenmiş ürünleri state'e kaydet
    setFilteredProducts(filtered);
    // Sayfa 1'e dön ve offset'i sıfırla
    setCurrentPage(1);
    setOffset(0);
  };

  // Infinite scroll için daha fazla ürün yükleme fonksiyonu - Şu anda static data kullanıyoruz
  const handleLoadMore = () => {
    if (paginationType === "infinite") {
      // Static data için basit offset hesaplama
      const newOffset = offset + ITEMS_PER_PAGE;
      setOffset(newOffset);
      // Eğer API hazır olduğunda bu kısmı aktif edebilirsin:
      // const params = {
      //   limit: ITEMS_PER_PAGE,
      //   offset: newOffset,
      // };
      // // Gender'e göre kategori ID'si belirle
      // if (gender) {
      //   const genderCategoryMap = {
      //     man: 1,
      //     woman: 2,
      //     unisex: 3,
      //   };
      //   params.category = genderCategoryMap[gender];
      // }
      // // Sort ve filter parametreleri
      // if (sortValue) {
      //   params.sort = sortValue;
      // }
      // if (filterValue) {
      //   params.filter = filterValue;
      // }
      // // API çağrısı yap
      // dispatch(loadMoreProducts(params));
      // setOffset(offset + ITEMS_PER_PAGE);
    }
  };

  // Sayfalama hesaplamaları
  // API'den gelen ürünler varsa onları kullan, yoksa static data kullan
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // Filtrelenmiş ürünlere göre toplam sayfa sayısı
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  // Mevcut sayfadaki ürünleri hesapla (static data için)
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (page) => {
    // Sayfa numarası geçerliyse sayfayı değiştir ve yukarı çık
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Pagination Type Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-sm p-2">
            <div className="flex space-x-1">
              <button
                onClick={() => setPaginationType("pagination")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  paginationType === "pagination"
                    ? "bg-[#23A6F0] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Pagination
              </button>
              <button
                onClick={() => setPaginationType("infinite")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  paginationType === "infinite"
                    ? "bg-[#23A6F0] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Infinite Scroll
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          onSortChange={handleSortChange}
          onFilterClick={handleFilterClick}
          onFilterInputChange={handleFilterInputChange}
          sortValue={sortValue}
          filterValue={filterValue}
          totalProducts={filteredProducts.length} // Simplified
        />

        {/* Product Grid */}
        <ProductGrid products={currentProducts} />

        {paginationType === "pagination" ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        ) : (
          <InfiniteScroll
            onLoadMore={handleLoadMore}
            hasMore={offset < filteredProducts.length}
            loading={false}
          />
        )}
      </div>
    </div>
  );
};

export default ShopPage;
