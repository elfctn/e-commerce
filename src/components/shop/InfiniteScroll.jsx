import React, { useEffect, useRef } from "react";

const InfiniteScroll = ({ onLoadMore, hasMore, loading }) => {
  const observerRef = useRef();
  const loadingRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          onLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onLoadMore, hasMore, loading]);

  if (!hasMore) {
    return null;
  }

  return (
    <div ref={loadingRef} className="flex justify-center py-8">
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#23A6F0]"></div>
          <span className="text-[#23A6F0] font-medium">
            Daha fazla ürün yükleniyor...
          </span>
        </div>
      ) : (
        <div className="h-8"></div>
      )}
    </div>
  );
};

export default InfiniteScroll;
