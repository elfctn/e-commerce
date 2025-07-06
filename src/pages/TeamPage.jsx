import TeamHero from "../components/team/TeamHero";
import TeamGallery from "../components/team/TeamGallery";
import TeamMembersSection from "../components/team/TeamMembersSection"; // Yeni bölümü import et

const TeamPage = () => {
  return (
    <div>
      <TeamHero />
      <TeamGallery />
      <TeamMembersSection />
    </div>
  );
};

export default TeamPage;
