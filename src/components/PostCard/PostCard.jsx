import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ id, thumbnail, date, title, excerpt }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link to={`/posts/${id}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-400">
              No image
            </div>
          )}
        </div>
        <div className="p-4">
          {date && (
            <time dateTime={date} className="mb-1 block text-xs text-slate-500">
              {formatDate(date)}
            </time>
          )}
          <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
            {title}
          </h3>
          {excerpt && (
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
              {excerpt}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}

function formatDate(d) {
  try {
    const date = new Date(d);
    return new Intl.DateTimeFormat("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  } catch {
    return d;
  }
}
