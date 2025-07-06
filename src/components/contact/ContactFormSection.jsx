const ContactFormSection = () => {
  return (
    <section className="text-center py-16">
      <div className="container mx-auto px-4">
        <img
          src="/ok2.png"
          alt="Arrow icon"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h6 className="text-sm font-bold text-[#252B42]">
          WE CAN'T WAIT TO MEET YOU
        </h6>
        <h2 className="text-5xl font-bold text-[#252B42] my-4">Let's Talk</h2>
        <button className="bg-[#23A6F0] text-white font-bold py-3 px-10 rounded-md hover:bg-blue-600 transition-colors">
          Try it free now
        </button>
      </div>
    </section>
  );
};

export default ContactFormSection;
