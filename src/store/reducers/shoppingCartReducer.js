// Action Types
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

// Initial State
const initialState = {
  cart: [], // [{ count: 1, product: { id: "1235", ... } }, { count: 3, product: { id: "1236", ... } }]
  payment: null,
  address: null,
};

// Reducer
const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
