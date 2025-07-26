import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  toggleChecked,
} from "../store/actions/cartActions";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  // tüm ürünler seçili mi?
  const allChecked = cart.length > 0 && cart.every((item) => item.checked);

  // seçili ürünlerin toplamı
  const totalSelected = cart.reduce(
    (sum, item) => (item.checked ? sum + item.product.price * item.count : sum),
    0
  );

  // toplu seç/deselect
  const handleSelectAll = () => {
    cart.forEach((item) => {
      if (item.checked !== !allChecked) {
        dispatch(toggleChecked(`${item.product.id}-${item.selectedColor}`));
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8 lg:mb-10 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Shopping Cart
          </h1>
          <p className="text-base lg:text-lg text-gray-600">
            Manage your cart items and proceed to checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 lg:py-24">
            <ShoppingBag className="w-16 h-16 lg:w-20 lg:h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-8 text-base lg:text-lg">
              Add some products to your cart to get started
            </p>
            <a
              href="/shop/man"
              className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-[#23856D] text-white font-medium rounded-lg hover:bg-[#1a6b5a] transition-colors duration-200 text-base lg:text-lg"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-50 px-3 sm:px-4 lg:px-6 py-4 lg:py-6 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-2 sm:gap-4 lg:gap-6 items-center">
                  <div className="col-span-1 flex justify-center">
                    <input
                      type="checkbox"
                      checked={allChecked}
                      onChange={handleSelectAll}
                      className="w-4 h-4 lg:w-5 lg:h-5 text-[#23856D] bg-gray-100 border-gray-300 rounded focus:ring-[#23856D] focus:ring-2"
                    />
                  </div>
                  <div className="col-span-4 font-semibold text-gray-700 text-sm lg:text-lg px-4 lg:px-6">
                    Product
                  </div>
                  <div className="col-span-2 font-semibold text-gray-700 text-center text-sm lg:text-base px-4 lg:px-6">
                    Color
                  </div>
                  <div className="col-span-2 font-semibold text-gray-700 text-center text-sm lg:text-base px-4 lg:px-6">
                    Quantity
                  </div>
                  <div className="col-span-2 font-semibold text-gray-700 text-center text-sm lg:text-base px-4 lg:px-6">
                    Price
                  </div>
                  <div className="col-span-1 font-semibold text-gray-700 text-center text-sm lg:text-base px-4 lg:px-6">
                    Remove
                  </div>
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {cart.map((item) => {
                  const productKey = `${item.product.id}-${item.selectedColor}`;
                  return (
                    <div
                      key={productKey}
                      className="px-3 sm:px-4 lg:px-6 py-6 lg:py-8 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="grid grid-cols-12 gap-2 sm:gap-4 lg:gap-6 items-center">
                        {/* Checkbox */}
                        <div className="col-span-1 flex justify-center">
                          <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => dispatch(toggleChecked(productKey))}
                            className="w-4 h-4 lg:w-5 lg:h-5 text-[#23856D] bg-gray-100 border-gray-300 rounded focus:ring-[#23856D] focus:ring-2"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="col-span-4 px-4 lg:px-6">
                          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.name}
                              className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-cover rounded-lg lg:rounded-xl border border-gray-200 shadow-sm"
                            />
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 lg:mb-2 truncate">
                                {item.product.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-500">
                                Product ID: {item.product.id}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Color */}
                        <div className="col-span-2">
                          <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-4 lg:px-6">
                            <div
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-gray-200 shadow-sm"
                              style={{ backgroundColor: item.selectedColor }}
                            ></div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 capitalize truncate">
                              {item.selectedColor}
                            </span>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2">
                          <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-4 lg:px-6">
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedColor,
                                    Math.max(1, item.count - 1)
                                  )
                                )
                              }
                              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                            </button>
                            <span className="w-12 sm:w-16 text-center font-semibold text-gray-900 text-sm sm:text-lg">
                              {item.count}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedColor,
                                    item.count + 1
                                  )
                                )
                              }
                              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-center px-4 lg:px-6">
                          <div className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">
                            ${item.product.price.toFixed(2)}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500 mt-1">
                            ${(item.product.price * item.count).toFixed(2)}
                          </div>
                        </div>

                        {/* Remove */}
                        <div className="col-span-1 text-center px-4 lg:px-6">
                          <button
                            onClick={() =>
                              dispatch(
                                removeFromCart(
                                  `${item.product.id}-${item.selectedColor}`
                                )
                              )
                            }
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="bg-gray-50 px-3 sm:px-4 lg:px-6 py-6 lg:py-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <div className="text-sm sm:text-base text-gray-600">
                    <span className="font-semibold">
                      {cart.filter((item) => item.checked).length}
                    </span>{" "}
                    of <span className="font-semibold">{cart.length}</span>{" "}
                    items selected
                  </div>
                  <div className="text-right">
                    <div className="text-sm sm:text-base text-gray-600 mb-2">
                      Selected Total:
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#23856D]">
                      ${totalSelected.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <a
                href="/shop/man"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 text-base lg:text-lg"
              >
                Continue Shopping
              </a>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 lg:px-10 py-3 lg:py-4 bg-[#23856D] text-white font-medium rounded-lg hover:bg-[#1a6b5a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base lg:text-lg"
                disabled={totalSelected === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
