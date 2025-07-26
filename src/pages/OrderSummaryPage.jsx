import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { clearCart } from "../store/actions/cartActions";
import {
  MapPin,
  CreditCard,
  Package,
  CheckCircle,
  ArrowLeft,
  Loader,
} from "lucide-react";

const OrderSummaryPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { cart } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  // location state'den adres ve kart bilgilerini al
  const { selectedShippingAddress, selectedBillingAddress, selectedCard } =
    location.state || {};

  // seçili ürünleri filtrele
  const selectedItems = cart.filter((item) => item.checked);

  // toplam fiyat hesapla
  const productsTotal = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );
  const shippingCost = 4.99;
  const discount = 0;
  const grandTotal = productsTotal + shippingCost - discount;

  // sipariş oluştur
  const createOrder = async () => {
    if (!selectedShippingAddress || !selectedBillingAddress || !selectedCard) {
      alert("Please select address and payment method");
      return;
    }

    setLoading(true);

    try {
      // mock implementasyon (backend hazır olduğunda kaldır)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 saniye bekle

      // başarılı sipariş sonrası sepeti temizle
      dispatch(clearCart());

      // başarı sayfasına yönlendir
      history.push("/order-success", {
        orderNumber: `ORD-${Date.now()}`,
        totalAmount: grandTotal,
      });

      // backend hazır olduğunda yorumu kaldır:
      /*
      const orderData = {
        address_id: selectedShippingAddress.id,
        order_date: new Date().toISOString(),
        card_no: selectedCard.card_no,
        card_name: selectedCard.name_on_card,
        card_expire_month: selectedCard.expire_month,
        card_expire_year: selectedCard.expire_year,
        card_ccv: 321, // ccv bilgisi formda yok, mock değer
        price: grandTotal,
        products: selectedItems.map(item => ({
          product_id: item.product.id,
          count: item.count,
          detail: `${item.color || 'default'} - ${item.size || 'default'}`
        }))
      };

      const token = localStorage.getItem("token");
      const response = await fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const orderResult = await response.json();
        
        // sepeti temizle
        dispatch(clearCart());
        
        // başarı sayfasına yönlendir
        history.push("/order-success", {
          orderNumber: orderResult.order_number,
          totalAmount: grandTotal
        });
      } else {
        throw new Error("Failed to create order");
      }
      */
    } catch (error) {
      console.error("Order creation error:", error);
      alert("Failed to create order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!selectedShippingAddress || !selectedBillingAddress || !selectedCard) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Missing Information
          </h2>
          <p className="text-gray-600 mb-4">
            Please complete address and payment selection first.
          </p>
          <button
            onClick={() => history.push("/create-order")}
            className="px-6 py-3 bg-[#23856D] text-white rounded-lg hover:bg-[#1a6b5a] transition-colors"
          >
            Go Back to Address Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => history.goBack()}
            className="flex items-center text-gray-600 hover:text-[#23856D] transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Payment Method
          </button>

          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Order Summary
            </h1>
            <p className="text-base lg:text-lg text-gray-600">
              Step 3: Review and Confirm Your Order
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Taraf - Sipariş Detayları */}
          <div className="lg:col-span-2 space-y-6">
            {/* Adres Bilgileri */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#23856D]" />
                Shipping & Billing Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Shipping Address */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Shipping Address
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      {selectedShippingAddress.name}{" "}
                      {selectedShippingAddress.surname}
                    </p>
                    <p>{selectedShippingAddress.phone}</p>
                    <p>
                      {selectedShippingAddress.district},{" "}
                      {selectedShippingAddress.city}
                    </p>
                    <p>{selectedShippingAddress.neighborhood}</p>
                  </div>
                </div>

                {/* Billing Address */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Billing Address
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      {selectedBillingAddress.name}{" "}
                      {selectedBillingAddress.surname}
                    </p>
                    <p>{selectedBillingAddress.phone}</p>
                    <p>
                      {selectedBillingAddress.district},{" "}
                      {selectedBillingAddress.city}
                    </p>
                    <p>{selectedBillingAddress.neighborhood}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ödeme Bilgileri */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-[#23856D]" />
                Payment Method
              </h2>

              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-[#23856D] mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">
                    {selectedCard.card_type} •••• {selectedCard.last_four}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedCard.name_on_card}
                  </p>
                  <p className="text-sm text-gray-600">
                    Expires:{" "}
                    {selectedCard.expire_month.toString().padStart(2, "0")}/
                    {selectedCard.expire_year}
                  </p>
                </div>
              </div>
            </div>

            {/* Ürün Listesi */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2 text-[#23856D]" />
                Order Items
              </h2>

              <div className="space-y-4">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      {item.product.imageUrl ? (
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : null}
                      <div className="hidden w-full h-full items-center justify-center text-gray-500 text-xs">
                        <Package className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.count} × ${item.product.price}
                      </p>
                      {item.selectedColor && (
                        <p className="text-sm text-gray-600">
                          Color:{" "}
                          {item.selectedColor.charAt(0).toUpperCase() +
                            item.selectedColor.slice(1)}
                        </p>
                      )}
                      {item.size && (
                        <p className="text-sm text-gray-600">
                          Size: {item.size}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${(item.product.price * item.count).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Toplam ve Onay */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Total
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Products Total</span>
                  <span className="font-semibold text-gray-900">
                    ${productsTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-900">
                    ${shippingCost.toFixed(2)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-semibold text-green-600">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Grand Total
                    </span>
                    <span className="text-2xl font-bold text-[#23856D]">
                      ${grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={createOrder}
                disabled={loading || selectedItems.length === 0}
                className={`w-full mt-6 py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center ${
                  loading || selectedItems.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#23856D] text-white hover:bg-[#1a6b5a]"
                }`}
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Confirm Order"
                )}
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                {selectedItems.length > 0 ? (
                  <span>
                    {selectedItems.length} item
                    {selectedItems.length !== 1 ? "s" : ""} in order
                  </span>
                ) : (
                  <span>No items selected</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
