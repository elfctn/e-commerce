import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutVideo from "../components/about/AboutVideo";
import TeamMembersSection from "../components/team/TeamMembersSection";
import AboutCompanies from "../components/about/AboutCompanies";
import WorkWithUsSection from "../components/about/WorkWithUsSection";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutStats />
      <AboutVideo />
      {/* componentimi bir limitle çağırdım kaç verirsem o kadar kişi geliyor*/}
      <TeamMembersSection limit={6} />
      <AboutCompanies />
      <WorkWithUsSection />
    </div>
  );
};

export default AboutPage;
