import React, { useState } from "react";
import PricingCard from "./PricingCard";

// Fiyatlandırma
const pricingData = {
  free: {
    name: "FREE",
    description: "Organize across all apps by hand",
    price: 0,
    features: [
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "1GB Cloud storage", included: false },
      { text: "Email and community support", included: false },
    ],
  },
  standard: {
    name: "STANDARD",
    description: "Organize across all apps by hand",
    price: 9.99,
    features: [
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "1GB Cloud storage", included: true },
      { text: "Email and community support", included: false },
    ],
  },
  premium: {
    name: "PREMIUM",
    description: "Organize across all apps by hand",
    price: 19.99,
    features: [
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "1GB Cloud storage", included: true },
      { text: "Email and community support", included: true },
    ],
  },
};

const PricingPlans = () => {
  // Aylık/Yıllık seçimi için state (şimdilik işlevsiz)
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">Pricing</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard plan={pricingData.free} />
          <PricingCard plan={pricingData.standard} isHighlighted={true} />
          <PricingCard plan={pricingData.premium} />
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
