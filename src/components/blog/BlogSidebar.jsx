import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blog";

const BlogSidebar = () => {
  // Son 3 yazıyı "Recent Posts" için alalım
  const recentPosts = blogPosts.slice(0, 3);

  // kategorileri dinamik olarak oluşturalım (şimdilik statik)
  const categories = [
    { name: "Editor's Pick", count: 5 },
    { name: "Music", count: 8 },
    { name: "Technology", count: 12 },
    { name: "Design", count: 3 },
  ];

  return (
    <aside className="space-y-8">
      {/* Son Yazılar Bölümü */}
      <div>
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
      <div>
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
