import { ChevronRight } from "lucide-react";

// SSS maddesi sayısı 6ya çıkardım
const faqData = [
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.",
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.",
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.",
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.",
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.",
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.",
  },
];

const PricingFaq = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#252B42] mb-4">
            Pricing FAQs
          </h2>
          <p className="text-gray-500">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>

        {/* 2 sütunlu grid yapısına çevrdim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="flex items-start space-x-4">
              <ChevronRight className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold text-[#252B42]">
                  {faq.question}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Haven't got your answer? Contact our support
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
