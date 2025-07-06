const images = [
  "/team1.png", // Büyük resim
  "/team2.png",
  "/team3.png",
  "/team4.png",
  "/team5.png",
];

const TeamGallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sol Taraf - Büyük Resim */}
          <div className="relative group overflow-hidden rounded-md h-[540px]">
            <img
              src={images[0]}
              alt="Team large"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Sağ Taraf - 2x2 Küçük Resimler */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((imageSrc, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-md h-[260px]"
              >
                <img
                  src={imageSrc}
                  alt={`Team small ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
