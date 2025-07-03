import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "CLOTHS", imageUrl: "/card1.png", link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: "/card2.png", link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: "/card3.png", link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: "/card4.png", link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: "/card5.png", link: "/shop/category/cloths" },
];

const ShopCategoryCards = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.link}
          className="relative group overflow-hidden rounded"
        >
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-auto h-auto object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
};

export default ShopCategoryCards;
