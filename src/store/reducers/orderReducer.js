import { ADD_ORDER, SET_ORDERS } from "../actions/orderActions";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrders = [action.payload, ...state.orders];
      // localStorage'a kaydet
      localStorage.setItem("userOrders", JSON.stringify(newOrders));
      return {
        ...state,
        orders: newOrders,
      };

    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default orderReducer;
