import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import CategorySection from "../components/CategorySection/CategorySection";
import { fetchCarouselSlides, fetchHomepageSections } from "../apis/local_api";

export default function HomePage() {
  const [slides, setSlides] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    Promise.all([fetchCarouselSlides(), fetchHomepageSections()])
      .then(([slidesData, sectionsData]) => {
        if (!mounted) return;
        setSlides(slidesData);
        setSections(sectionsData);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message || "Failed to load data");
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="w-full">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {loading && (
          <div className="h-64 w-full animate-pulse rounded-lg border border-slate-200 bg-slate-100" />
        )}

        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <Carousel images={slides} autoPlay interval={4000} className="mt-2" />
        )}
      </section>

      {/* Category Sections */}
      {!loading && !error && sections && sections.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mt-6 space-y-10">
            {sections.map((s, idx) => (
              <CategorySection key={idx} title={s.title} posts={s.posts} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
