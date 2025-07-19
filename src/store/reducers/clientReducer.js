// Action Types - Redux'ta hangi işlemlerin yapılabileceğini tanımlar
export const SET_USER = "SET_USER"; // Kullanıcı bilgilerini güncelle
export const SET_ROLES = "SET_ROLES"; // Rolleri güncelle
export const SET_THEME = "SET_THEME"; // Temayı güncelle
export const SET_LANGUAGE = "SET_LANGUAGE"; // Dili güncelle
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; // Başarılı giriş
export const LOGIN_FAILURE = "LOGIN_FAILURE"; // Başarısız giriş
export const LOGOUT = "LOGOUT"; // Çıkış

// Initial State - Başlangıç durumu
const initialState = {
  user: null, // Kullanıcı bilgileri - başlangıçta boş
  addressList: [], // Adres listesi - başlangıçta boş array
  creditCards: [], // Kredi kartı listesi - başlangıçta boş array
  roles: [], // Roller - başlangıçta boş array
  theme: "light", // Tema - başlangıçta açık tema
  language: "tr", // Dil - başlangıçta Türkçe
};

// Reducer - State'i nasıl değiştireceğimizi belirler
const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      // Kullanıcı bilgilerini güncelle
      return {
        ...state, // Mevcut state'i kopyala
        user: action.payload, // Sadece user kısmını değiştir
      };

    case SET_ROLES:
      // Rolleri güncelle
      return {
        ...state,
        roles: action.payload,
      };

    case SET_THEME:
      // Temayı güncelle
      return {
        ...state,
        theme: action.payload,
      };

    case SET_LANGUAGE:
      // Dili güncelle
      return {
        ...state,
        language: action.payload,
      };

    case LOGIN_SUCCESS:
      // Başarılı giriş - kullanıcı bilgilerini kaydet
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_FAILURE:
      // Başarısız giriş - hata mesajını kaydet
      return {
        ...state,
        loginError: action.payload,
      };

    case LOGOUT:
      // Çıkış - kullanıcı bilgilerini temizle
      return {
        ...state,
        user: null,
        loginError: null,
      };

    default:
      // Bilinmeyen action gelirse state'i değiştirme
      return state;
  }
};

export default clientReducer;
