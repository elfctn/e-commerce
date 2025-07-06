// src/components/testimonials/TestimonialsContent.jsx

import React from "react";

const TestimonialsContent = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Birinci Satır */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 1. Kolon (Sol) */}
          <div>
            <img
              src="/frame1.png"
              alt="Testimonial Frame 1"
              className="w-full h-auto mx-auto"
            />
          </div>

          {/* 2. Kolon (Sağ) */}
          <div>
            <img
              src="/frame2.png"
              alt="Testimonial Frame 2"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>

        {/* İkinci Satır */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          {/* 1. Kolon (Sol) */}
          <div>
            <img
              src="/frame3.png"
              alt="Testimonial Frame 3"
              className="w-full h-auto mx-auto"
            />
          </div>

          {/* 2. Kolon (Sağ) */}
          <div>
            <img
              src="/frame4.png"
              alt="Testimonial Frame 4"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsContent;
