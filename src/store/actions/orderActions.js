// order actions
export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDERS = "SET_ORDERS";
export const FETCH_ORDERS = "FETCH_ORDERS";

// yeni sipariş ekle
export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});

// siparişleri ayarla
export const setOrders = (orders) => ({
  type: SET_ORDERS,
  payload: orders,
});

// siparişleri getir (mock data ile)
export const fetchOrders = () => {
  return (dispatch, getState) => {
    // localStorage'dan siparişleri al
    const savedOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");

    if (savedOrders.length > 0) {
      dispatch(setOrders(savedOrders));
    } else {
      // eğer hiç sipariş yoksa, örnek siparişler oluştur
      const mockOrders = [
        {
          id: 1,
          order_number: "ORD-123456",
          order_date: new Date(
            Date.now() - 7 * 24 * 60 * 60 * 1000
          ).toISOString(), // 7 gün önce
          total_amount: 1139.33,
          status: "Delivered",
          products: [
            {
              product_id: 1,
              name: "Hooded Jacket",
              count: 1,
              detail: "Blue - L",
              price: 1139.33,
              imageUrl: "/urun1.png",
            },
          ],
          shipping_address: {
            title: "Home Address",
            name: "Elif",
            surname: "Çetin",
            phone: "05376845834",
            city: "Istanbul",
            district: "Esenler",
            neighborhood: "Sample Neighborhood",
            address: "Sample Street, Building 123, Door 4",
          },
          payment_method: {
            card_no: "**** **** **** 1234",
            name_on_card: "Elif Çetin",
            expire_month: 12,
            expire_year: 2025,
          },
        },
        {
          id: 2,
          order_number: "ORD-123457",
          order_date: new Date(
            Date.now() - 3 * 24 * 60 * 60 * 1000
          ).toISOString(), // 3 gün önce
          total_amount: 649.49,
          status: "In Transit",
          products: [
            {
              product_id: 2,
              name: "Knit Sweater",
              count: 1,
              detail: "Green - M",
              price: 299.99,
              imageUrl: "/urun2.png",
            },
            {
              product_id: 5,
              name: "Athletic Jacket",
              count: 1,
              detail: "Orange - L",
              price: 349.5,
              imageUrl: "/urun5.png",
            },
          ],
          shipping_address: {
            title: "Office Address",
            name: "Elif",
            surname: "Çetin",
            phone: "05376845834",
            city: "Istanbul",
            district: "Kadıköy",
            neighborhood: "Office District",
            address: "Business Street, Office Building 5, Floor 3",
          },
          payment_method: {
            card_no: "**** **** **** 5678",
            name_on_card: "Elif Çetin",
            expire_month: 8,
            expire_year: 2026,
          },
        },
      ];

      // localStorage'a kaydet
      localStorage.setItem("userOrders", JSON.stringify(mockOrders));
      dispatch(setOrders(mockOrders));
    }
  };
};
