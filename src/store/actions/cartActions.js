import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  TOGGLE_CHECKED,
  CLEAR_CART,
} from "../reducers/cartReducer";

// ürünü sepete ekle
export const addToCart = (product, selectedColor) => ({
  type: ADD_TO_CART,
  payload: { product, selectedColor },
});

// ürünü sepetten kaldır
export const removeFromCart = (productKey) => ({
  type: REMOVE_FROM_CART,
  payload: productKey,
});

// ürün miktarını güncelle
export const updateQuantity = (productId, selectedColor, count) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, selectedColor, count },
});

// ürünün seçili durumunu değiştir
export const toggleChecked = (productKey) => ({
  type: TOGGLE_CHECKED,
  payload: productKey,
});

// sepeti temizle
export const clearCart = () => ({
  type: CLEAR_CART,
});
