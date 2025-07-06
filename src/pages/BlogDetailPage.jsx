import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blog.js";
import BlogDetailContent from "../components/blog/BlogDetailContent";
import BlogSidebar from "../components/blog/BlogSidebar";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // URL'deki id'ye göre doğru post'u bul.
    // Bulamazsa, varsayılan olarak ilk post'u göster.
    const foundPost =
      blogPosts.find((p) => p.id === parseInt(id)) || blogPosts[0];
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return <div className="text-center py-20">Yükleniyor...</div>;
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sol Sütun - Ana İçerik */}
          <div className="w-full lg:w-2/3">
            <BlogDetailContent post={post} />
          </div>

          {/* Sağ Sütun - Kenar Çubuğu (Sidebar) */}
          <div className="w-full lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
