import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Token'ı localStorage'dan al ve header'a ekle
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

// Sayfa yüklendiğinde localStorage'dan token'ı al
const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

export { setAuthToken };
export default api;
