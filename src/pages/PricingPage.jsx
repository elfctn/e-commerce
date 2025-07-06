import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import TrustedBySection from "../components/pricing/TrustedBySection";
import PricingFaq from "../components/pricing/PricingFaq";
import TrialSection from "../components/pricing/TrialSection"; // Yeni bölümü import et

const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <PricingPlans />
      <TrustedBySection />
      <PricingFaq />
      <TrialSection />
    </div>
  );
};

export default PricingPage;
