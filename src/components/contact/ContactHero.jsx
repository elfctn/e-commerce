import { Link } from "react-router-dom";
import {
  ChevronRight,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactHero = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
        {/* Sol Taraf - Metinler */}
        <div className="md:w-1/3 px-4 md:px-0">
          <div className="flex items-center justify-center md:justify-start text-sm font-bold mb-4">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-500">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#252B42]">
            Get in touch today!
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-md mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div className="mt-6 space-y-2 flex flex-col items-center md:items-start">
            <p className="text-xl font-bold text-[#252B42] flex items-center gap-2">
              <Phone size={24} className="text-[#23A6F0]" />
              <span>+90 (530) 478-0487</span>
            </p>
            <p className="text-xl font-bold text-[#252B42] flex items-center gap-2">
              <Mail size={24} className="text-[#23A6F0]" />
              <span>elifcetin.dev@gmail.com</span>
            </p>
          </div>

          {/* ikonlar eklendi-sol */}
          <div className="flex items-center justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#23A6F0]"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#23A6F0]"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#23A6F0]"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#23A6F0]"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        {/* Sağ Taraf - Görsel */}
        <div className="w-full md:w-2/3">
          <img
            src="/contacthero.png"
            alt="Contact Us"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
