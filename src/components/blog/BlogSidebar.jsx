import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blog";
import { teamMembers } from "../../data/team";

const BlogSidebar = ({ authorName }) => {
  // o anki yazının yazarını takım listesinde bul
  const author = teamMembers.find((member) => member.name === authorName);

  const recentPosts = blogPosts.slice(0, 3);
  const categories = [
    { name: "Editor's Pick", count: 5 },
    { name: "Music", count: 8 },
    { name: "Technology", count: 12 },
    { name: "Design", count: 3 },
  ];

  return (
    <aside className="space-y-8">
      {/* Yazar Bölümü */}
      {author && (
        <div className="p-6 bg-white rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-bold mb-4">About The Author</h3>
          <img
            src={author.imageUrl}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <h4 className="font-bold text-lg">{author.name}</h4>
          <p className="text-sm text-gray-500">{author.title}</p>
        </div>
      )}

      {/* Son Yazılar Bölümü */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="flex items-center group"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h4 className="font-bold text-sm group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Kategoriler Bölümü */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex justify-between items-center"
            >
              <a
                href="#"
                className="font-bold text-gray-700 hover:text-blue-500"
              >
                {category.name}
              </a>
              <span className="text-gray-500">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
