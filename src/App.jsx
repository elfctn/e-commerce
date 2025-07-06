import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import StatsPage from "./pages/StatsPage";

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
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
