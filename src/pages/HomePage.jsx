import React from "react";
import HeroSection from "../components/home/HeroSection";
import BrandLogos from "../components/common/BrandLogos";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BestsellerProducts from "../components/home/BestsellerProducts";
import WeLoveWhatWeDo from "../components/home/WeLoveWhatWeDo";
import Services from "../components/home/Services";
import FeaturedPosts from "../components/home/FeaturedPosts";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BrandLogos />
      <FeaturedProducts />
      <BestsellerProducts />
      <WeLoveWhatWeDo />
      <Services />
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;
