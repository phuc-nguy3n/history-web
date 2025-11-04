import React, { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = "About | History";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="w-full">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">About</h1>
          <p className="mt-3 text-slate-700">
            History is a curated collection of timelines, events, and stories.
            Our goal is to make exploring the past simple, visual, and
            delightful.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                What you can find here
              </h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                <li>Featured timelines and eras</li>
                <li>Curated articles and categories</li>
                <li>Highlights and visual carousels</li>
              </ul>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">Mission</h2>
              <p className="mt-2 text-sm text-slate-700">
                Make history accessible and engaging for everyone by combining
                concise content with clean, modern presentation.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Tip: Use the header brand to return to the homepage at any time.
          </p>
        </div>
      </section>
    </main>
  );
}
