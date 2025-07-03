import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-center text-slate-700 my-10">
          Bandage E-Commerce
        </h1>
        <p className="text-center text-slate-500">
          Proje iskeleti başarıyla oluşturuldu.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
