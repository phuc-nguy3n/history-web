import React, { useMemo, useState } from "react";
import PostCard from "../components/PostCard/PostCard";
import { categoryPosts } from "../apis/local_api";

export default function PostsPage() {
  const allPosts = useMemo(() => {
    const list = [];
    Object.values(categoryPosts).forEach((cat) => {
      cat.posts.forEach((p) => list.push({ ...p, _category: cat.title }));
    });
    return list;
  }, []);

  const [filter, setFilter] = useState("all");

  const filteredPosts = useMemo(() => {
    if (filter === "all") return allPosts;
    if (filter === "ancient") return categoryPosts.ancient.posts;
    if (filter === "medieval") return categoryPosts.medieval.posts;
    if (filter === "modern") return categoryPosts.modern.posts;
    return allPosts;
  }, [filter, allPosts]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Bài viết</h1>
          <p className="mt-1 text-sm text-slate-600 md:text-left">
            Tổng cộng {filteredPosts.length} bài viết
          </p>
        </div>
        <div className="sm:min-w-[220px]">
          <label htmlFor="posts-filter" className="sr-only">
            Lọc theo chuyên mục
          </label>
          <select
            id="posts-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="all">Tất cả</option>
            <option value="ancient">{categoryPosts.ancient.title}</option>
            <option value="medieval">{categoryPosts.medieval.title}</option>
            <option value="modern">{categoryPosts.modern.title}</option>
          </select>
        </div>
      </header>

      {filteredPosts.length === 0 ? (
        <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-slate-600">
          Chưa có bài viết.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </main>
  );
}
