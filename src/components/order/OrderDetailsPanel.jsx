import React from "react";

const OrderDetailsPanel = ({ order }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* products section */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Order Items
          </h3>
          <div className="space-y-4">
            {order.products.map((product, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs hidden">
                    📦
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Quantity: {product.count} | {product.detail}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* order info section */}
        <div className="space-y-6">
          {/* shipping address */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Shipping Address
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-900">
                <p className="font-medium">{order.shipping_address.title}</p>
                <p className="mt-1">
                  {order.shipping_address.name} {order.shipping_address.surname}
                </p>
                <p className="mt-1">{order.shipping_address.phone}</p>
                <p className="mt-2">
                  {order.shipping_address.neighborhood},{" "}
                  {order.shipping_address.district}
                </p>
                <p className="mt-1">{order.shipping_address.city}</p>
                <p className="mt-2 text-gray-600">
                  {order.shipping_address.address}
                </p>
              </div>
            </div>
          </div>

          {/* payment method */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Payment Method
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-900">
                <p className="font-medium">
                  {order.payment_method.name_on_card}
                </p>
                <p className="mt-1">{order.payment_method.card_no}</p>
                <p className="mt-1">
                  Expires:{" "}
                  {order.payment_method.expire_month
                    .toString()
                    .padStart(2, "0")}
                  /{order.payment_method.expire_year}
                </p>
              </div>
            </div>
          </div>

          {/* order summary */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Order Summary
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium">{order.order_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="font-medium">
                    {new Date(order.order_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium">{order.status}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-base font-semibold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">
                      ${order.total_amount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPanel;
