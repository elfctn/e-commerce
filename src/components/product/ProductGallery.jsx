import React from "react";
const ProductGallery = ({ images, productName }) => {
  const mainImage =
    images && images.length > 0 ? images[0] : "/placeholder.png";

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 border rounded-lg overflow-hidden">
        <img
          src={mainImage}
          alt={productName}
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Thumbnail  buraya eklenebilir belki */}
    </div>
  );
};

export default ProductGallery;
