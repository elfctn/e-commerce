import React from "react";

const brands = [
  { name: "Hooli", src: "/hooli.png" },
  { name: "Lyft", src: "/lyft.png" },
  { name: "Leaf", src: "/leaf.png" },
  { name: "Stripe", src: "/stripe.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Reddit", src: "/reddit.png" },
];

const BrandLogos = ({ className = "py-1" }) => {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 py-12 bg-white ">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-6">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              className="h-8 md:h-10 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
