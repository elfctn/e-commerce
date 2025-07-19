import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../reducers/clientReducer";
import api, { setAuthToken } from "../../services/api";

// Login Action Type
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Action Creators - Redux'ta state değişikliklerini tetikleyen fonksiyonlar
export const setUser = (user) => ({
  type: SET_USER, // Hangi işlemi yapacağımızı belirt
  payload: user, // Yeni kullanıcı bilgileri
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles, // Yeni roller listesi
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme, // Yeni tema (light/dark)
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language, // Yeni dil (tr/en)
});

// Thunk Action Creator - Asenkron işlemler için (API çağrıları)
export const fetchRoles = () => {
  return async (dispatch, getState) => {
    // Roller zaten yüklenmiş mi kontrol et
    const { roles } = getState().client;
    if (roles.length > 0) {
      return; // Roller zaten yüklenmiş, tekrar yükleme
    }

    try {
      // API'den roller getir
      const response = await api.get("/roles");
      // Rolleri store'a kaydet
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
};

// Login Action Creators
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => {
  // Token'ı temizle
  setAuthToken(null);

  return {
    type: LOGOUT,
  };
};

// Thunk Action Creator - Login
export const loginUser = (email, password, rememberMe = false) => {
  return async (dispatch) => {
    try {
      // API'ye login isteği gönder
      const response = await api.post("/login", { email, password });

      // Token'ı header'a ve localStorage'a kaydet
      setAuthToken(response.data.token);

      // Kullanıcı bilgilerini store'a kaydet
      dispatch(loginSuccess(response.data));

      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Giriş başarısız";
      dispatch(loginFailure(errorMessage));
      return { success: false, error: errorMessage };
    }
  };
};

// Thunk Action Creator - Auto Login (Token ile)
export const autoLogin = () => {
  return async (dispatch) => {
    try {
      // localStorage'dan token'ı al
      const token = localStorage.getItem("token");

      if (!token) {
        return { success: false, error: "Token bulunamadı" };
      }

      // Token'ı header'a ekle
      setAuthToken(token);

      // Token'ı doğrula
      const response = await api.get("/verify");

      // Yeni token'ı güncelle
      setAuthToken(response.data.token);

      // Kullanıcı bilgilerini store'a kaydet
      dispatch(loginSuccess(response.data));

      return { success: true };
    } catch (error) {
      // Token geçersizse temizle
      setAuthToken(null);
      dispatch(logout());
      return { success: false, error: "Token geçersiz" };
    }
  };
};
