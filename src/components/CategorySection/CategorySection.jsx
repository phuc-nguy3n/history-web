import React from "react";
import PostCard from "../PostCard/PostCard";
import { Link } from "react-router-dom";

/**
 * CategorySection component
 *
 * Props:
 * - title: string (category title)
 * - posts: Array<{
 *     id?: string | number,
 *     href?: string,            // optional link to post detail
 *     thumbnail: string,        // image URL
 *     date?: string,            // formatted date string
 *     title: string,            // post title
 *     excerpt?: string          // short description
 *   }>
 * - className?: string (extra classes for container)
 *
 * Example usage:
 *
 * import CategorySection from "../components/CategorySection/CategorySection";
 *
 * const posts = [
 *   {
 *     id: 1,
 *     href: "#",
 *     thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
 *     date: "2024-09-01",
 *     title: "The Rise of Ancient Civilizations",
 *     excerpt: "A brief look at the earliest complex societies and their contributions.",
 *   },
 * ];
 *
 * <CategorySection title="Ancient History" posts={posts} />
 */
export default function CategorySection({
  title,
  posts = [],
  className = "",
  // href = "/posts",
}) {
  return (
    <section className={`w-full ${className}`}>
      {/* Header */}
      <div className="mb-4 flex items-center gap-4">
        <h2 className="relative -mb-[1px] border-b-2 border-slate-900 pb-1 text-xl font-semibold whitespace-nowrap text-slate-900">
          {title}
        </h2>
        <div className="h-px flex-1 bg-slate-200" />
        {/* <Link
          to={href}
          className="shrink-0 text-sm font-medium whitespace-nowrap text-indigo-600 hover:text-indigo-700 hover:underline"
          aria-label={`Xem thêm ${title}`}
        >
          Xem thêm →
        </Link> */}
      </div>

      {/* Empty state */}
      {(!posts || posts.length === 0) && (
        <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-slate-600">
          Chưa có bài viết.
        </div>
      )}

      {/* Grid of posts */}
      {posts && posts.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <PostCard key={post.id ?? idx} {...post} />
          ))}
        </div>
      )}
    </section>
  );
}
