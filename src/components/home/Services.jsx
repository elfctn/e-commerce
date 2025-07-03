import React from "react";

const servicesData = [
  {
    iconUrl: "/easywins.png",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    iconUrl: "/concrete.png",
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    iconUrl: "/hackgrowth.png",
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-xl text-[#737373]">Featured Products</h3>
          <h2 className="text-2xl font-bold text-[#252B42] uppercase">
            The Best Services
          </h2>
          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center"
            >
              <img src={service.iconUrl} alt={service.title} className="mb-4" />
              <h4 className="text-2xl font-bold text-[#252B42] mb-2">
                {service.title}
              </h4>
              <p className="text-[#737373]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
