import {
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_TOTAL,
  SET_FETCH_STATE,
  ADD_PRODUCTS,
  SET_PRODUCT_DETAIL,
} from "../reducers/productReducer";
import api from "../../services/api";

// Action Creators
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const addProducts = (products) => ({
  type: ADD_PRODUCTS,
  payload: products,
});

// t16: tek ürün detayı için action creator
export const setProductDetail = (product) => ({
  type: SET_PRODUCT_DETAIL,
  payload: product,
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

// Thunk Action Creator - Load More Products (Infinite Scroll)
export const loadMoreProducts = (params = {}) => {
  return async (dispatch, getState) => {
    try {
      // Query parametrelerini oluştur
      const queryParams = new URLSearchParams();

      if (params.category) {
        queryParams.append("category", params.category);
      }

      if (params.sort) {
        queryParams.append("sort", params.sort);
      }

      if (params.filter) {
        queryParams.append("filter", params.filter);
      }

      // Pagination parametreleri
      if (params.limit) {
        queryParams.append("limit", params.limit);
      }

      if (params.offset) {
        queryParams.append("offset", params.offset);
      }

      // API'den ürünler getir
      const url = `/products${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`;
      const response = await api.get(url);

      // Yeni ürünleri mevcut ürünlere ekle (infinite scroll)
      dispatch(addProducts(response.data.products));

      // Fetch state'i FETCHED olarak ayarla
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error loading more products:", error);
      // Fetch state'i FAILED olarak ayarla
      dispatch(setFetchState("FAILED"));
    }
  };
};

// Thunk Action Creator - Fetch Products
export const fetchProducts = (params = {}) => {
  return async (dispatch, getState) => {
    try {
      // Fetch state'i FETCHING olarak ayarla
      dispatch(setFetchState("FETCHING"));

      // Query parametrelerini oluştur
      const queryParams = new URLSearchParams();

      if (params.category) {
        queryParams.append("category", params.category);
      }

      if (params.sort) {
        queryParams.append("sort", params.sort);
      }

      if (params.filter) {
        queryParams.append("filter", params.filter);
      }

      // Pagination parametreleri
      if (params.limit) {
        queryParams.append("limit", params.limit);
      }

      if (params.offset) {
        queryParams.append("offset", params.offset);
      }

      // API'den ürünler getir
      const url = `/products${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`;
      const response = await api.get(url);

      // Ürünleri ve toplam sayıyı store'a kaydet
      dispatch(setProducts(response.data.products));
      dispatch(setTotal(response.data.total));

      // Fetch state'i FETCHED olarak ayarla
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fetch state'i FAILED olarak ayarla
      dispatch(setFetchState("FAILED"));
    }
  };
};

// t16: tek ürün detayını getiren thunk action
export const fetchProductDetail = (productId) => {
  return async (dispatch, getState) => {
    try {
      // fetch state'i fetching olarak ayarla
      dispatch(setFetchState("FETCHING"));

      // api'den ürün detayını getir
      const response = await api.get(`/products/${productId}`);

      // ürün detayını store'a kaydet
      dispatch(setProductDetail(response.data));

      // fetch state'i fetched olarak ayarla
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching product detail:", error);
      // fetch state'i failed olarak ayarla
      dispatch(setFetchState("FAILED"));
    }
  };
};
