import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { products } from "../data/products.js";
import { shopProducts } from "../data/shopProducts.js";
import ProductBreadcrumb from "../components/product/ProductBreadcrumb";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import BestsellerProducts from "../components/home/BestsellerProducts"; // Bestseller bölümünü import et

const ProductDetailPage = () => {
  // yeni url parametreleri
  const {
    id,
    gender,
    productName,
    categoryName,
    categoryId,
    productNameSlug,
    productId,
  } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory(); // back button için

  useEffect(() => {
    let foundProduct = null;

    // yeni url yapısı desteği
    if (productId) {
      // t16 url ile geldiyse id ile bul
      foundProduct = shopProducts.find(
        (p) => String(p.id) === String(productId)
      );
    } else if (gender && productName) {
      // eski url yapısı
      foundProduct = shopProducts.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "") === productName
      );
    } else if (id) {
      // en eski url yapısı
      foundProduct = products.find((p) => p.id === parseInt(id));
    }

    setProduct(foundProduct);
    setLoading(false);
  }, [
    id,
    gender,
    productName,
    categoryName,
    categoryId,
    productNameSlug,
    productId,
  ]);

  if (loading) {
    // yükleniyor spinnerı
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#23A6F0] mb-4"></div>
        <span className="text-[#23A6F0] font-medium">yükleniyor...</span>
      </div>
    );
  }

  if (!product) {
    // ürün bulunamazsa
    return <div className="text-center py-20">ürün bulunamadı.</div>;
  }

  return (
    <div className="bg-gray-50 pt-10">
      <div className="container mx-auto px-4">
        {/* geri butonu */}
        <button
          onClick={() => history.goBack()}
          className="mb-4 px-4 py-2 bg-[#23A6F0] text-white rounded hover:bg-blue-600 transition-colors"
        >
          geri dön
        </button>
        {/* Üst Kısım: Galeri ve Bilgiler */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ProductBreadcrumb product={product} />
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-1/2">
              <ProductGallery
                images={product.images}
                productName={product.name}
                product={product}
              />
            </div>
            <div className="md:w-1/2">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>

        {/* Orta Kısım: Sekmeler */}
        <div className="bg-white mt-8 p-6 rounded-lg shadow-sm">
          <ProductTabs product={product} />
        </div>

        {/* Alt Kısım: Çok Satanlar */}
        <BestsellerProducts />
      </div>
    </div>
  );
};

export default ProductDetailPage;
