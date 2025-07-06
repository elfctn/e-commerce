import { Facebook, Instagram, Twitter } from "lucide-react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="text-center">
      <div className="relative mb-4">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <h5 className="text-base font-bold text-[#252B42]">{member.name}</h5>
      <p className="text-sm text-[#737373] mb-3">{member.title}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={member.socials.facebook}
          className="text-[#23A6F0] hover:text-blue-700"
        >
          <Facebook size={20} />
        </a>
        <a
          href={member.socials.instagram}
          className="text-[#23A6F0] hover:text-blue-700"
        >
          <Instagram size={20} />
        </a>
        <a
          href={member.socials.twitter}
          className="text-[#23A6F0] hover:text-blue-700"
        >
          <Twitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
