import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categoryPosts } from "../../apis/local_api";

// Simple, responsive site header built with Tailwind CSS utilities
// Usage: import Header from "../Header/Header"; and place <Header /> at the top of your layout/App
export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const containerRef = useRef(null);

  // Flatten posts from all categories
  const allPosts = useMemo(() => {
    const list = [];
    Object.values(categoryPosts).forEach((cat) => {
      cat.posts.forEach((p) => list.push({ ...p, _category: cat.title }));
    });
    return list;
  }, []);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allPosts
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.excerpt && p.excerpt.toLowerCase().includes(q)),
      )
      .slice(0, 5);
  }, [allPosts, query]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setShowSuggest(false);
        setHighlight(-1);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function goToSearch(q) {
    const trimmed = (q || "").trim();
    if (!trimmed) return;
    setShowSuggest(false);
    setHighlight(-1);
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function onSelectSuggestion(item) {
    if (!item) return;
    goToSearch(item.title);
  }

  function onKeyDown(e) {
    if (!showSuggest || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlight >= 0 && suggestions[highlight]) {
        onSelectSuggestion(suggestions[highlight]);
      } else {
        goToSearch(query);
      }
    } else if (e.key === "Escape") {
      setShowSuggest(false);
      setHighlight(-1);
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.webp" alt="logo" className="h-8 w-8" />
            <span className="text-lg font-semibold text-slate-900">
              History
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Trang chủ
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Giới thiệu
            </Link>
            <Link
              to="/posts?category=north"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Miền Bắc
            </Link>
            <Link
              to="/posts?category=central"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Miền Trung
            </Link>
            <Link
              to="/posts?category=southern"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Miền Nam
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="relative hidden md:block" ref={containerRef}>
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Tìm bài viết..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggest(true);
                setHighlight(-1);
              }}
              onFocus={() => suggestions.length > 0 && setShowSuggest(true)}
              onKeyDown={onKeyDown}
              className="w-64 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {showSuggest && suggestions.length > 0 && (
              <ul className="absolute right-0 mt-1 w-80 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
                {suggestions.map((s, i) => (
                  <li
                    key={s.id ?? i}
                    className={`flex cursor-pointer items-start gap-3 px-3 py-2 text-sm hover:bg-slate-50 ${
                      i === highlight ? "bg-slate-50" : ""
                    }`}
                    onMouseEnter={() => setHighlight(i)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => onSelectSuggestion(s)}
                  >
                    <img
                      src={s.thumbnail}
                      alt={s.title}
                      className="h-10 w-14 flex-none rounded object-cover"
                    />
                    <div className="min-w-0">
                      <div className="truncate font-medium text-slate-900">
                        {s.title}
                      </div>
                      <div className="truncate text-xs text-slate-500">
                        {s._category}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.5a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Panel */}
        {open && (
          <div className="md:hidden">
            <nav className="space-y-1 border-t border-slate-200 py-3">
              <a
                href="#home"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Home
              </a>
              <a
                href="/posts?category=north"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {categoryPosts.north.title}
              </a>
              <a
                href="/posts?category=central"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {categoryPosts.central.title}
              </a>
              <a
                href="/posts?category=southern"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {categoryPosts.southern.title}
              </a>
            </nav>
            <div className="border-t border-slate-200 pb-4">
              <label htmlFor="site-search-mobile" className="sr-only">
                Search
              </label>
              <div className="relative px-3 pt-3" ref={containerRef}>
                <input
                  id="site-search-mobile"
                  type="search"
                  placeholder="Tìm bài viết..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowSuggest(true);
                    setHighlight(-1);
                  }}
                  onFocus={() => suggestions.length > 0 && setShowSuggest(true)}
                  onKeyDown={onKeyDown}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {showSuggest && suggestions.length > 0 && (
                  <ul className="absolute right-3 left-3 mt-1 max-h-80 overflow-auto rounded-md border border-slate-200 bg-white shadow-lg">
                    {suggestions.map((s, i) => (
                      <li
                        key={s.id ?? i}
                        className={`flex cursor-pointer items-start gap-3 px-3 py-2 text-sm hover:bg-slate-50 ${
                          i === highlight ? "bg-slate-50" : ""
                        }`}
                        onMouseEnter={() => setHighlight(i)}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => onSelectSuggestion(s)}
                      >
                        <img
                          src={s.thumbnail}
                          alt={s.title}
                          className="h-10 w-14 flex-none rounded object-cover"
                        />
                        <div className="min-w-0">
                          <div className="truncate font-medium text-slate-900">
                            {s.title}
                          </div>
                          <div className="truncate text-xs text-slate-500">
                            {s._category}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}