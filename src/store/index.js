// Redux store ana dosyası - tüm reducerları birleştirir ve store oluşturur
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Asenkron işlemler için middleware
import logger from "redux-logger"; // Console'da state değişimlerini görmek için
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

// Tüm reducerları birleştir - her biri store'un farklı bir bölümünü yönetir
const rootReducer = combineReducers({
  client: clientReducer, // Kullanıcı bilgileri, tema, dil vs
  product: productReducer, // Ürün listesi, kategoriler, filtreler vs
  cart: cartReducer, // Sepet işlemleri
  order: orderReducer, // Sipariş işlemleri
});

// Ana store'u oluştur - middleware'ler ile birlikte
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); // thunk: async işlemler, logger: debug için

export default store;
