import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          {/* Diğer sayfaların rotaları buraya eekleyecegim */}
          {/* <Route path="/shop">
            <ShopPage />
          </Route> 
          */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
