import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/shop">
            <ShopPage />
          </Route>

          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
