import { SET_CATEGORIES, SET_FETCH_STATE } from "../reducers/productReducer";
import api from "../../services/api";

// Action Creators
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

// Thunk Action Creator - Fetch Categories
export const fetchCategories = () => {
  return async (dispatch, getState) => {
    // Kategoriler zaten yüklenmiş mi kontrol et
    const { categories } = getState().product;
    if (categories.length > 0) {
      return; // Kategoriler zaten yüklenmiş, tekrar yükleme
    }

    try {
      // Fetch state'i FETCHING olarak ayarla
      dispatch(setFetchState("FETCHING"));

      // API'den kategoriler getir
      const response = await api.get("/categories");

      // Kategorileri store'a kaydet
      dispatch(setCategories(response.data));

      // Fetch state'i FETCHED olarak ayarla
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Fetch state'i FAILED olarak ayarla
      dispatch(setFetchState("FAILED"));
    }
  };
};
