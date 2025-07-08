import React from "react";
import BrandLogos from "../common/BrandLogos";

const AboutCompanies = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Big Companies Are Here
          </h2>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/*arkaplan rengi vermedm çünkü arkaplanı zaten bu bölümün kendisi sağlıyor */}
        <BrandLogos className="pt-12" />
      </div>
    </section>
  );
};

export default AboutCompanies;
