import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/actions/clientActions";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import StatsPage from "./pages/StatsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();

  // Uygulama başladığında auto login'i tetikle
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* Shop sayfası route'ları */}
          {/* Ana shop sayfası tüm ürünleri gösterir */}
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          {/* Kategori bazlı shop sayfası */}
          {/* categoryId: 1 2 3 */}
          {/* 1: Men's Clothing, 2: Women's Clothing, 3: Outerwear */}
          <Route path="/shop/category/:categoryId">
            <ShopPage />
          </Route>
          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route path="/blog/:id">
            <BlogDetailPage />
          </Route>
          <Route path="/stats">
            <StatsPage />
          </Route>
          <Route path="/testimonials">
            <TestimonialsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
