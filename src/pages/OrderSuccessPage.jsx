import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { CheckCircle, Home, Package, ArrowRight } from "lucide-react";

const OrderSuccessPage = () => {
  const history = useHistory();
  const location = useLocation();

  const { orderNumber, totalAmount } = location.state || {};

  // auto-redirect kaldırıldı - kullanıcı kendisi gidecek

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600">
              Thank you for your purchase. Your order has been successfully
              placed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Order Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-600">Order Number</p>
                <p className="font-semibold text-gray-900">
                  {orderNumber || "ORD-123456"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-semibold text-[#23856D] text-lg">
                  ${totalAmount?.toFixed(2) || "0.00"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-semibold text-gray-900">
                  {new Date().toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-semibold text-green-600">Confirmed</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              What's Next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium text-blue-900">Order Processing</p>
                  <p className="text-sm text-blue-700">
                    We'll start processing your order immediately
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium text-blue-900">
                    Shipping Confirmation
                  </p>
                  <p className="text-sm text-blue-700">
                    You'll receive tracking information via email
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium text-blue-900">Delivery</p>
                  <p className="text-sm text-blue-700">
                    Your order will be delivered within 3-5 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => history.push("/")}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-[#23856D] text-white rounded-lg hover:bg-[#1a6b5a] transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Continue Shopping
            </button>

            <button
              onClick={() => history.push("/shop")}
              className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Package className="w-5 h-5 mr-2" />
              Browse Products
            </button>
          </div>

          {/* Success Message */}
          <div className="mt-6 text-sm text-gray-500">
            <p>Thank you for your purchase! 🎉</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
