import React from "react";

const WeLoveWhatWeDo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Sol Taraf - Resimler */}
          <div className="w-full md:w-1/2">
            <div className="flex gap-4 justify-center">
              <div>
                <img
                  src="/foto1.png"
                  alt="Happy Customer"
                  className="w-auto h-auto object-cover rounded"
                />
              </div>
              <div>
                <img
                  src="/foto2.png"
                  alt="Customer with Headphones"
                  className="w-auto h-auto object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İçerik */}
          <div className="w-full md:w-1/2 px-4 md:px-8 text-center md:text-left mt-8 md:mt-0">
            <h5 className="text-[#23A6F0] font-bold mb-4">Featured Products</h5>
            <h2 className="text-4xl font-bold text-[#252B42] mb-6">
              We love what we do
            </h2>
            <div className="space-y-4 text-sm text-[#737373]">
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics.
              </p>
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeLoveWhatWeDo;
