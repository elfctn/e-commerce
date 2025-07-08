import React from "react";

const WorkWithUsSection = () => {
  return (
    // Ana bölüm
    <section className="bg-[#2A7CC7] text-white flex items-center justify-center min-h-[636px] py-20">
      <div className="container mx-auto px-4">
        {/* İçerik Konteyner*/}
        <div className="max-w-[438px] mx-auto text-center flex flex-col items-center space-y-6">
          <h6 className="font-bold text-base">WORK WITH US</h6>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Now Let’s grow Yours
          </h2>

          <p className="text-sm">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>

          <button className="border border-white rounded-[5px] px-10 py-[15px] font-bold hover:bg-white hover:text-[#2A7CC7] transition-colors">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
