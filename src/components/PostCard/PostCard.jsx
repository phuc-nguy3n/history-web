import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({
  id,
  thumbnail,
  date,
  title,
  excerpt,
  openingTime,
  closingTime,
  ticketPrice,
}) {
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
          <div className="mt-4 flex justify-between text-xs text-slate-500">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {openingTime || "7:00 AM"} - {closingTime || "5:00 PM"}
              </span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              <span>{ticketPrice || "100.000đ"}</span>
            </div>
          </div>
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
