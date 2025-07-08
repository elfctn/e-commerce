import React from "react";

const AboutVideo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
          {/* Ana Görsel */}
          <img
            src="/video.png"
            alt="Promotional video"
            className="w-full h-auto"
          />

          {/* oynat Butonu Görseli */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => alert("Video oynatılıyor!")} // şimdilik bir uyarı gösterdim
              className="group"
            >
              <img
                src="/videobuton.png"
                alt="Play Video"
                className="w-20 h-20 cursor-pointer transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;
