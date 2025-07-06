import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const TrialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-[#252B42] mb-4">
          Start your 14 days free trial
        </h2>
        <p className="text-gray-500 mb-8">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-[#23A6F0] text-white font-bold py-3 px-10 rounded-md hover:bg-blue-600 transition-colors mb-8">
          Try it free now
        </button>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-800 hover:text-[#23A6F0]">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-800 hover:text-[#23A6F0]">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-800 hover:text-[#23A6F0]">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-800 hover:text-[#23A6F0]">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
