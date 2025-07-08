import React from "react";

const statsData = [
  { value: "15K", label: "Happy Customers" },
  { value: "150K", label: "Monthly Visitors" },
  { value: "15", label: "Countries Worldwide" },
  { value: "100+", label: "Top Partners" },
];

const AboutStats = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Üst Metin Bölümü */}
      <div className="flex flex-col md:flex-row gap-8 mb-20">
        <div className="md:w-1/2">
          <p className="text-red-500 text-sm mb-4">Problems trying</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* İstatistikler Bölümü */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-5xl font-bold text-[#252B42] mb-2">
              {stat.value}
            </h3>
            <p className="text-base font-bold text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
