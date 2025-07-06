import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const BlogDetailContent = ({ post }) => {
  if (!post) return null;

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {post.title}
      </h1>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>{post.author}</span>
        <span className="mx-2">•</span>
        <span>{post.date}</span>
      </div>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-auto object-cover rounded-lg mb-6"
      />

      {/* DÜZELTME VAR!!!! dangerouslySetInnerHTML yerine bu güvenli yapıyı kullanacağım */}
      <div className="text-gray-600 space-y-4">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <Facebook />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400">
            <Twitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500">
            <Instagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-700">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailContent;
