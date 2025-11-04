import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import PostCard from "../components/PostCard/PostCard";
import { categoryPosts } from "../apis/local_api";

function useQueryParam(name) {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search).get(name) || "", [search, name]);
}

export default function SearchPage() {
  const q = useQueryParam("q");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(q);
  }, [q]);

  const allPosts = useMemo(() => {
    const list = [];
    Object.values(categoryPosts).forEach((cat) => {
      cat.posts.forEach((p) => list.push({ ...p, _category: cat.title }));
    });
    return list;
  }, []);

  const results = useMemo(() => {
    const term = (query || "").trim().toLowerCase();
    if (!term) return [];
    return allPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(term))
    );
  }, [allPosts, query]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">Kết quả tìm kiếm</h1>
        <p className="mt-1 text-sm text-slate-600">
          Từ khóa: <span className="font-medium text-slate-900">{query || "(trống)"}</span>
        </p>
      </header>

      {/* Search input (optional on page) */}
      <div className="mb-6">
        <label htmlFor="search-on-page" className="sr-only">Search</label>
        <input
          id="search-on-page"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập từ khóa để tìm..."
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:max-w-md"
        />
      </div>

      {query && results.length === 0 && (
        <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-slate-600">
          Không tìm thấy bài viết phù hợp.
        </div>
      )}

      {results.length > 0 && (
        <>
          <div className="mb-4 text-sm text-slate-600">{results.length} kết quả</div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
