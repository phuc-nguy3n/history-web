import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// Import the new fetch function
import { fetchPostById } from "../apis/local_api";

export default function PostDetailPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the new API function to fetch the post
    fetchPostById(postId).then((foundPost) => {
      setPost(foundPost);
      setLoading(false);
    });
  }, [postId]);

  if (loading) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-slate-600">Đang tải bài viết...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-900">
          404 - Không tìm thấy bài viết
        </h1>
        <p className="mt-4 text-slate-600">
          Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <Link
          to="/posts"
          className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Quay về trang bài viết
        </Link>
      </main>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="mb-4">
          <Link
            to={`/posts`}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            {post._category}
          </Link>
        </div>
        <h1 className="text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
          <span>
            Tác giả:{" "}
            <span className="font-medium text-slate-600">{post.author}</span>
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-400"></span>
          <span>
            Đăng ngày{" "}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("vi-VN")}
            </time>
          </span>
        </div>
      </header>

      {/* Use a plugin like @tailwindcss/typography for better content styling */}
      <div className="prose prose-slate prose-img:rounded-lg max-w-none">
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={`Ảnh thumbnail cho bài viết "${post.title}"`}
          />
        )}

        {/* Use the full content from the API */}
        <p className="lead">{post.excerpt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, "<br />"),
          }}
        />
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-8">
        <Link
          to="/posts"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          &larr; Quay lại danh sách bài viết
        </Link>
      </footer>
    </article>
  );
}
