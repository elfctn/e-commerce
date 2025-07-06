import { Link } from "react-router-dom";
import { Clock, BarChart2 } from "lucide-react";

const BlogCard = ({ post }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
          NEW
        </div>
      </div>
      <div className="p-6">
        <div className="flex space-x-4 text-xs text-gray-500 mb-2">
          <a href="#" className="hover:text-blue-500">
            Google
          </a>
          <a href="#" className="hover:text-blue-500">
            Trending
          </a>
          <a href="#" className="hover:text-blue-500">
            New
          </a>
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-2 h-16">
          {post.title}
        </h4>
        <p className="text-sm text-gray-500 mb-4 h-20 overflow-hidden">
          {post.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1 text-blue-500" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <BarChart2 size={14} className="mr-1 text-green-500" />
            <span>{post.comments} comments</span>
          </div>
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="font-bold text-gray-600 mt-4 inline-block hover:text-blue-500"
        >
          Learn More <span className="text-blue-500">&gt;</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
