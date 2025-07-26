import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  TOGGLE_CHECKED,
  CLEAR_CART,
} from "../reducers/cartReducer";

// ürünü sepete ekle
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// ürünü sepetten kaldır
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// ürün miktarını güncelle
export const updateQuantity = (productId, count) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, count },
});

// ürünün seçili durumunu değiştir
export const toggleChecked = (productId) => ({
  type: TOGGLE_CHECKED,
  payload: productId,
});

// sepeti temizle
export const clearCart = () => ({
  type: CLEAR_CART,
});
