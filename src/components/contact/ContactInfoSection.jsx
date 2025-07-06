import ContactCard from "./ContactCard";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h6 className="text-sm font-bold text-[#252B42]">VISIT OUR OFFICE</h6>
        <h2 className="text-4xl font-bold text-[#252B42] mt-2 max-w-lg mx-auto">
          We help small businesses with big ideas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactCard
          icon={<Phone size={32} className="text-[#23A6F0]" />}
          emails={["georgia.young@example.com", "georgia.young@ple.com"]}
          title="Get Support"
          buttonText="Submit Request"
        />
        <ContactCard
          icon={<MapPin size={32} className="text-white" />} // vurgulu kart için ikon rengi
          emails={["georgia.young@example.com", "georgia.young@ple.com"]}
          title="Get Support"
          buttonText="Submit Request"
          isHighlighted={true} // bu prop kartın stilini değiştirecekxs
        />
        <ContactCard
          icon={<Mail size={32} className="text-[#23A6F0]" />}
          emails={["georgia.young@example.com", "georgia.young@ple.com"]}
          title="Get Support"
          buttonText="Submit Request"
        />
      </div>
    </section>
  );
};

export default ContactInfoSection;
