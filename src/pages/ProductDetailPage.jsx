import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products.js";
import { shopProducts } from "../data/shopProducts.js";
import ProductBreadcrumb from "../components/product/ProductBreadcrumb";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import BestsellerProducts from "../components/home/BestsellerProducts"; // Bestseller bölümünü import et

const ProductDetailPage = () => {
  const { id, gender, productName } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let foundProduct = null;

    console.log("URL Params:", { id, gender, productName });

    // Yeni URL yapısı: /shop/man/hoodedjacket
    if (gender && productName) {
      console.log("Yeni URL yapısı kullanılıyor");
      console.log("Aranan productName:", productName);
      console.log(
        "Mevcut ürünler:",
        shopProducts.map((p) => p.name.toLowerCase().replace(/\s+/g, ""))
      );

      foundProduct = shopProducts.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "") === productName
      );

      console.log("Bulunan ürün:", foundProduct);
    }
    // Eski URL yapısı: /product/1
    else if (id) {
      console.log("Eski URL yapısı kullanılıyor");
      foundProduct = products.find((p) => p.id === parseInt(id));
    }

    setProduct(foundProduct);
    setLoading(false);
  }, [id, gender, productName]);

  if (loading) {
    return <div className="text-center py-20">Yükleniyor...</div>;
  }

  if (!product) {
    return <div className="text-center py-20">Ürün bulunamadı.</div>;
  }

  return (
    <div className="bg-gray-50 pt-10">
      <div className="container mx-auto px-4">
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
