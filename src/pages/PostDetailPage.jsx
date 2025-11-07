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
    // Updated main container for 2-column layout
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-x-12">
        {/* Main post content */}
        <article className="lg:flex-1">
          <header className="mb-8">
            <div className="mb-4">
              <Link
                to={`/posts`}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                {post._category}
              </Link>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
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

          {/* Updated content section based on the UI image */}
          <div className="prose prose-slate prose-img:rounded-lg prose-figcaption:text-center max-w-none">
            {post.img1 && (
              <figure className="my-8">
                <img
                  src={post.img1}
                  alt={post.title}
                  className="rounded-lg"
                />
              </figure>
            )}
            <p>{post.content}</p>
            {post.img2 && (
              <figure className="my-8">
                <img
                  src={post.img2}
                  alt={post.title}
                  className="rounded-lg"
                />
              </figure>
            )}
            <p>{post.content2}</p>
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

        {/* Sidebar for related posts */}
        <aside className="mt-12 lg:mt-0 lg:w-1/3 xl:w-1/4 lg:flex-shrink-0">
          <div className="sticky top-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Bài viết liên quan
            </h3>
            <ul className="space-y-5">
              <li>
                <h4 className="font-semibold">
                  <Link to="#" className="text-blue-600 hover:underline">
                    Lịch sử hình thành và phát triển của Hà Nội
                  </Link>
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  Tìm hiểu về hơn 1000 năm lịch sử của thủ đô.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  <Link to="#" className="text-blue-600 hover:underline">
                    Khám phá 36 phố phường Hà Nội
                  </Link>
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  Một chuyến du hành qua những con phố cổ kính.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  <Link to="#" className="text-blue-600 hover:underline">
                    Ẩm thực Hà Nội: những món ăn không thể bỏ lỡ
                  </Link>
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  Phở, bún chả, chả cá Lã Vọng và hơn thế nữa.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  <Link to="#" className="text-blue-600 hover:underline">
                    Hồ Gươm - Viên ngọc xanh giữa lòng thành phố
                  </Link>
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  Truyền thuyết và vẻ đẹp thơ mộng của hồ Hoàn Kiếm.
                </p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
