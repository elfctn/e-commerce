import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { cart } = useSelector((state) => state.cart);

  // Seçili ürünlerin toplam fiyatı
  const selectedItems = cart.filter((item) => item.checked);
  const productsTotal = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  // Sabit değerler (ileride dinamik olabilir)
  const shippingCost = 4.99;
  const discount = 0; // Şimdilik 0, ileride dinamik olabilir

  // Grand total hesaplama
  const grandTotal = productsTotal + shippingCost - discount;

  return (
    <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8 h-fit lg:ml-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="space-y-4">
        {/* Products Total */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Products Total</span>
          <span className="font-semibold text-gray-900">
            ${productsTotal.toFixed(2)}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold text-gray-900">
            ${shippingCost.toFixed(2)}
          </span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Discount</span>
            <span className="font-semibold text-green-600">
              -${discount.toFixed(2)}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Grand Total</span>
            <span className="text-2xl font-bold text-[#23856D]">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Create Order Button */}
      <button
        className="w-full mt-6 bg-[#23856D] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#1a6b5a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={selectedItems.length === 0}
      >
        Create Order
      </button>

      {/* Selected Items Info */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {selectedItems.length > 0 ? (
          <span>
            {selectedItems.length} item{selectedItems.length !== 1 ? "s" : ""}{" "}
            selected
          </span>
        ) : (
          <span>No items selected</span>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
