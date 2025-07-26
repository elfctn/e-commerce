// action türleri
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";
export const CLEAR_CART = "CLEAR_CART";

// başlangıç durumu
const initialState = {
  cart: [], // sepet ürünleri dizisi
  totalItems: 0, // toplam ürün sayısı
  totalPrice: 0, // toplam fiyat
};

// sepet reducer'ı
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // ürünü sepete ekle veya miktarını artır (renk + ID kombinasyonu ile)
      const { product, selectedColor } = action.payload;
      const addProductKey = `${product.id}-${selectedColor}`;

      const existingItem = state.cart.find(
        (item) => `${item.product.id}-${item.selectedColor}` === addProductKey
      );

      if (existingItem) {
        // ürün zaten sepette varsa miktarını artır
        const updatedCart = state.cart.map((item) =>
          `${item.product.id}-${item.selectedColor}` === addProductKey
            ? { ...item, count: item.count + 1 }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price,
        };
      } else {
        // yeni ürün ekle
        const newItem = {
          count: 1,
          checked: true,
          product: product,
          selectedColor: selectedColor,
        };

        return {
          ...state,
          cart: [...state.cart, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price,
        };
      }

    case REMOVE_FROM_CART:
      // ürünü sepetten kaldır (renk + ID kombinasyonu ile)
      const itemToRemove = state.cart.find(
        (item) => `${item.product.id}-${item.selectedColor}` === action.payload
      );

      if (itemToRemove) {
        const updatedCart = state.cart.filter(
          (item) =>
            `${item.product.id}-${item.selectedColor}` !== action.payload
        );

        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems - itemToRemove.count,
          totalPrice:
            state.totalPrice - itemToRemove.product.price * itemToRemove.count,
        };
      }
      return state;

    case UPDATE_QUANTITY:
      // ürün miktarını güncelle (renk + ID kombinasyonu ile)
      const {
        productId,
        selectedColor: updateSelectedColor,
        count,
      } = action.payload;
      const updateProductKey = `${productId}-${updateSelectedColor}`;
      const itemToUpdate = state.cart.find(
        (item) =>
          `${item.product.id}-${item.selectedColor}` === updateProductKey
      );

      if (itemToUpdate) {
        const quantityDiff = count - itemToUpdate.count;
        const updatedCart = state.cart.map((item) =>
          `${item.product.id}-${item.selectedColor}` === updateProductKey
            ? { ...item, count: count }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + quantityDiff,
          totalPrice:
            state.totalPrice + itemToUpdate.product.price * quantityDiff,
        };
      }
      return state;

    case TOGGLE_CHECKED:
      // ürünün seçili durumunu değiştir (renk + ID kombinasyonu ile)
      const productKeyToToggle = action.payload;
      const updatedCart = state.cart.map((item) =>
        `${item.product.id}-${item.selectedColor}` === productKeyToToggle
          ? { ...item, checked: !item.checked }
          : item
      );

      return {
        ...state,
        cart: updatedCart,
      };

    case CLEAR_CART:
      // sepeti temizle
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
