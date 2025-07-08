import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembers } from "../../data/team";

// componentim artık dışarıdan bir limit propu alıyor
const TeamMembersSection = ({ limit }) => {
  // eğer bir limit belirtilmişse veriyi o sayıya göre kes- belirtilmemişse hepsini al
  const membersToShow = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {membersToShow.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
