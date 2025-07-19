// Action Types
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

// Initial State
const initialState = {
  categories: [],
  fetchState: "NOT_FETCHED", // NOT_FETCHED, FETCHING, FETCHED, FAILED
};

// Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
