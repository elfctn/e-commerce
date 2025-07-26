import React, { useState } from "react";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="text-gray-600 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">
              Product Description
            </h3>
            <p>{product.description}</p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        );
      case "additional":
        return (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Additional Information
            </h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>
                Colors:{" "}
                {product.colors && product.colors.length > 0
                  ? product.colors.join(", ")
                  : "Not available"}
              </li>
              <li>
                Category:{" "}
                {product.category ? product.category : "Not available"}
              </li>
              <li>
                Stock:{" "}
                {typeof product.stock === "number"
                  ? product.stock + " units"
                  : "Not available"}
              </li>
            </ul>
          </div>
        );
      case "reviews":
        return (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {product.reviews} Reviews
            </h3>
            {/* Burada normalde reviewlar listelenecek ama şimdilik bir yer tutucu ekledim */}
            <p className="text-gray-600">
              No reviews yet. Be the first to review this product!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-16">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("description");
            }}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "description"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Description
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("additional");
            }}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "additional"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Additional Information
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("reviews");
            }}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "reviews"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Reviews ({product.reviews})
          </button>
        </nav>
      </div>
      <div className="py-8">{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
