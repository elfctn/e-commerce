import { Check, X } from "lucide-react";

const PricingCard = ({ plan, isHighlighted = false }) => {
  const cardClasses = isHighlighted
    ? "bg-[#252B42] text-white"
    : "bg-white text-gray-800 border-2 border-blue-500";

  const buttonClasses = isHighlighted
    ? "bg-blue-500 hover:bg-blue-600"
    : "bg-blue-500 text-white hover:bg-blue-600";

  const priceClasses = isHighlighted ? "text-blue-500" : "text-blue-500";

  return (
    <div
      className={`p-8 rounded-lg shadow-lg flex flex-col items-center text-center ${cardClasses}`}
    >
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-sm mb-6 h-10">{plan.description}</p>

      <div className="flex items-center mb-6">
        <span className={`text-5xl font-bold ${priceClasses}`}>
          {plan.price}
        </span>
        <div className="ml-2 flex flex-col items-start">
          <span className={`font-bold text-2xl ${priceClasses}`}>$</span>
          <span className="text-gray-500 text-sm">Per Month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 text-left">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                feature.included ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {feature.included ? (
                <Check size={16} className="text-white" />
              ) : (
                <X size={16} className="text-white" />
              )}
            </div>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full font-bold py-3 px-8 rounded transition-colors mt-auto ${buttonClasses}`}
      >
        Try for free
      </button>
    </div>
  );
};

export default PricingCard;
