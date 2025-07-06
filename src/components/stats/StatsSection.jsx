const StatsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Ana 3 Sütunlu Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* 1. Kolon (Sol) - Metinler */}
          <div className="text-center md:text-left">
            <h6 className="text-sm font-bold text-gray-500">Subscribe For</h6>
            <h2 className="text-4xl font-bold text-gray-800 my-4">
              Latest Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>

          {/* 2. Kolon (Orta) - Görsel */}
          <div>
            <img
              src="/stats1.png"
              alt="Statistics Illustration 1"
              className="w-full h-auto"
            />
          </div>

          {/* 3. Kolon (Sağ) - Görsel */}
          <div>
            <img
              src="/rates2.png"
              alt="Rates Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
