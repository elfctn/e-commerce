import React from "react";
import { Link } from "react-router-dom";

//mock data
const postsData = [
  {
    id: 1,
    imageUrl: "/grafik1.png",
    category: "English Department",
    title: "Graphic Design",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: 15,
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    id: 2,
    imageUrl: "/grafik2.png",
    category: "English Department",
    title: "Graphic Design",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: 15,
    price: 6.48,
    originalPrice: 16.48,
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-[#23A6F0] font-bold">Practice Advice</h6>
          <h2 className="text-4xl font-bold text-[#252B42]">Featured Posts</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {postsData.map((post) => (
            <div
              key={post.id}
              className="bg-white w-[328px] h-[606px] md:max-w-[700px] md:w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row"
            >
              {/* Görsel Alanı */}
              <div className="relative w-full h-[250px] md:w-2/5 md:h-auto">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded">
                    Sale
                  </span>
                </div>
              </div>

              {/* İçerik Alanı */}
              <div className="p-6 flex flex-col md:w-3/5 flex-1 overflow-hidden">
                <span className="text-sm text-[#23A6F0] font-bold">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-[#252B42] my-3">
                  {post.title}
                </h3>
                <p className="text-sm text-[#737373] mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src="/sales.png"
                      alt="Sales"
                      className="w-4 h-4 mr-1"
                    />
                    <span className="text-sm text-[#737373]">
                      {post.sales} Sales
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#BDBDBD] font-bold line-through">
                      ${post.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-[#23856D] font-bold">
                      ${post.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-1.5 mb-4">
                  <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                </div>

                <div className="flex flex-wrap items-center text-xs text-[#737373] mb-4 gap-2">
                  <div className="flex items-center mr-2">
                    <img
                      src="/22hours.png"
                      alt="22 Hours"
                      className="w-4 h-4 mr-1"
                    />
                    <span>22h...</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <img
                      src="/64lesson.png"
                      alt="64 Lessons"
                      className="w-4 h-4 mr-1"
                    />
                    <span>64 Lessons</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/progress.png"
                      alt="Progress"
                      className="w-4 h-4 mr-1"
                    />
                    <span>Progress</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#23A6F0] font-bold px-5 py-2 border border-[#23A6F0] rounded-full hover:bg-[#23A6F0] hover:text-white transition-all text-sm"
                  >
                    Learn More{" "}
                    <span className="ml-2 font-normal text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
