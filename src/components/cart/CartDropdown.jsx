import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";
import {
  removeFromCart,
  updateQuantity,
  toggleChecked,
} from "../../store/actions/cartActions";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const { cart, totalItems, totalPrice } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  // dropdown'ı aç/kapat
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // ürünü sepetten kaldır
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // miktar güncelle
  const handleQuantityChange = (productId, newCount) => {
    if (newCount > 0) {
      dispatch(updateQuantity(productId, newCount));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  // seçili durumu değiştir
  const handleToggleChecked = (productId) => {
    dispatch(toggleChecked(productId));
  };

  return (
    <div className="relative">
      {/* sepet iconu */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 md:p-2 p-3 text-[#23A6F0] hover:bg-gray-100 rounded-full transition-colors"
      >
        <ShoppingCart size={20} className="md:w-5 md:h-5 w-6 h-6" />

        {/* sepet sayısı badge */}
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs md:text-xs text-sm rounded-full h-5 w-5 md:h-5 md:w-5 h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* dropdown */}
      {isOpen && (
        <div className="absolute right-0 md:right-0 left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 mt-2 w-80 md:w-80 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-bold text-[#252B42] mb-4">My Cart</h3>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                Your cart is empty
              </p>
            ) : (
              <>
                {/* ürün listesi */}
                <div className="max-h-64 overflow-y-auto space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center space-x-3 p-2 border-b border-gray-100"
                    >
                      {/* ürün resmi */}
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded"
                      />

                      {/* ürün bilgileri */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-[#252B42] truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-[#23856D] font-bold">
                          ${item.product.price.toFixed(2)}
                        </p>
                      </div>

                      {/* miktar kontrolleri */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.product.id,
                              item.count - 1
                            )
                          }
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.count}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.product.id,
                              item.count + 1
                            )
                          }
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>

                      {/* kaldır butonu */}
                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                {/* toplam */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-[#252B42]">Total:</span>
                    <span className="font-bold text-[#23856D]">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* checkout butonu */}
                  <button className="w-full bg-[#23A6F0] text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
