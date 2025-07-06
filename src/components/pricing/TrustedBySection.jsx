import React from "react";
import BrandLogos from "../common/BrandLogos";

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-[#252B42] mb-12">
          Trusted By Over 4000 Big Companies
        </h2>
        <BrandLogos className="pb-8" />
      </div>
    </section>
  );
};

export default TrustedBySection;
