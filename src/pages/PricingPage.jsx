import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import TrustedBySection from "../components/pricing/TrustedBySection"; // Yeni bölümü import et

const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <PricingPlans />
      <TrustedBySection />
    </div>
  );
};

export default PricingPage;
