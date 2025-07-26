// Action Types
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
// t16: tek ürün detayı için action type
export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";

// Initial State
const initialState = {
  categories: [],
  products: [],
  total: 0,
  fetchState: "NOT_FETCHED", // NOT_FETCHED, FETCHING, FETCHED, FAILED
  // t16: tek ürün detayı için state
  productDetail: null,
};

// Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };

    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };

    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    // t16: tek ürün detayı için reducer case
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
