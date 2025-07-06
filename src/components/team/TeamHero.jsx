import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const TeamHero = () => {
  return (
    <div className="bg-gray-50 py-16 text-center">
      <div className="container mx-auto px-4">
        <h6 className="text-sm uppercase tracking-wider text-gray-600 mb-2 font-semibold">
          WHAT WE DO
        </h6>
        <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6">
          Innovation tailored for you
        </h1>
        <div className="flex justify-center items-center space-x-2 text-sm font-bold">
          <Link to="/" className="text-gray-800 hover:text-[#23A6F0]">
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-500">Team</span>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
