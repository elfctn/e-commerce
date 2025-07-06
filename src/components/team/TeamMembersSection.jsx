import TeamMemberCard from "./TeamMemberCard";

// bizim 6 kişilik team
const teamMembers = [
  {
    id: 1,
    name: " Elif Cetin",
    title: " Full Stack Developer ",
    imageUrl: "/elf.png",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Yalcın Kaya",
    title: "Project Manager",
    imageUrl: "/ylcn.png",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Emre Sahiner",
    title: "Frontend Instructor",
    imageUrl: "/emr.png",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 4,
    name: "Enis Gayretli",
    title: "Backend Instructor",
    imageUrl: "/ens.png",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 5,
    name: "Ceren Ayder",
    title: "Career Coach ",
    imageUrl: "/crn.png",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 6,
    name: "Inci Bayram",
    title: "Education Coach",
    imageUrl: "/inc.png",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
];

const TeamMembersSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
