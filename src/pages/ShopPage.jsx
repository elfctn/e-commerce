import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { shopProducts } from "../data/shopProducts.js";
import {
  fetchProducts,
  loadMoreProducts,
} from "../store/actions/productActions";
import ShopHeader from "../components/shop/ShopHeader";
import ShopCategoryCards from "../components/shop/ShopCategoryCards";
import FilterBar from "../components/shop/FilterBar";
import ProductGrid from "../components/shop/ProductGrid";
import Pagination from "../components/shop/Pagination";
import InfiniteScroll from "../components/shop/InfiniteScroll";
import BrandLogos from "../components/common/BrandLogos";

const ITEMS_PER_PAGE = 8; // Test için küçük sayı

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products, total, fetchState } = useSelector((state) => state.product);

  // Sayfa durumu ve ürün filtreleme için state'ler
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(shopProducts);
  const [sortValue, setSortValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [paginationType, setPaginationType] = useState("pagination"); // "pagination" veya "infinite"
  const [offset, setOffset] = useState(0);

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
      setOffset(0); // Offset'i sıfırla
    } else {
      // URL parametresi yoksa tüm ürünleri göster
      setFilteredProducts(shopProducts);
      setOffset(0); // Offset'i sıfırla
    }
  }, [gender]);

  // API'den ürünleri getir (pagination için) - Şu anda static data kullanıyoruz
  // useEffect(() => {
  //   if (paginationType === "pagination") {
  //     const params = {
  //       limit: ITEMS_PER_PAGE,
  //       offset: (currentPage - 1) * ITEMS_PER_PAGE,
  //     };

  //     // Gender'e göre kategori ID'si belirle
  //     if (gender) {
  //       switch (gender) {
  //         case "man":
  //           params.category = 1;
  //           break;
  //         case "woman":
  //           params.category = 2;
  //           break;
  //         case "unisex":
  //           params.category = 3;
  //           break;
  //         default:
  //           break;
  //       }
  //     }

  //     // Sort ve filter parametreleri
  //     if (sortValue) {
  //       params.sort = sortValue;
  //     }

  //     if (filterValue) {
  //       params.filter = filterValue;
  //     }

  //     // API çağrısı yap
  //     dispatch(fetchProducts(params));
  //   }
  // }, [dispatch, currentPage, gender, sortValue, filterValue, paginationType]);

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
      //   offset: offset,
      // };

      // // Gender'e göre kategori ID'si belirle
      // if (gender) {
      //   switch (gender) {
      //     case "man":
      //     params.category = 1;
      //     break;
      //     case "woman":
      //     params.category = 2;
      //     break;
      //     case "unisex":
      //     params.category = 3;
      //     break;
      //     default:
      //     break;
      //   }
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
  const displayProducts =
    paginationType === "pagination" && products.length > 0
      ? products
      : filteredProducts;

  // Filtrelenmiş ürünlere göre toplam sayfa sayısı
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Mevcut sayfadaki ürünleri hesapla (static data için)
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

      {/* Pagination Type Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex border border-gray-200 rounded-md overflow-hidden">
          <button
            onClick={() => setPaginationType("pagination")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              paginationType === "pagination"
                ? "bg-[#23A6F0] text-white"
                : "bg-white text-[#23A6F0] hover:bg-gray-50"
            }`}
          >
            Pagination
          </button>
          <button
            onClick={() => setPaginationType("infinite")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              paginationType === "infinite"
                ? "bg-[#23A6F0] text-white"
                : "bg-white text-[#23A6F0] hover:bg-gray-50"
            }`}
          >
            Infinite Scroll
          </button>
        </div>
      </div>

      <FilterBar
        onSortChange={handleSortChange}
        onFilterClick={handleFilterClick}
        onFilterInputChange={handleFilterInputChange}
        sortValue={sortValue}
        filterValue={filterValue}
        totalProducts={filteredProducts.length}
      />

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

      <BrandLogos />
    </div>
  );
};

export default ShopPage;
