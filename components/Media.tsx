"use client";

import { Youtube, Instagram, Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useEffect } from "react";



// Placeholder video IDs — swap with the founder's actual latest uploads
const YOUTUBE_VIDEOS = [
  { id: "hHX8ekAGFgU", title: "What Combat Taught Us About Leadership | Major LS Chaudhary & Col Hemanto Panging | 9 PARA SF" },
  { id: "4O-DiD22n2o", title: "He Ordered Their Evacuation… Not His Own | Major Satish Dahiya SC" },
  { id: "V3O7pgbLCq8", title: "Leadership Under Water | Trapped Waist-Deep During a Kashmir Patrol" },
];

// Placeholder Instagram post thumbnails — swap with the real feed/API integration
const INSTAGRAM_POSTS = [
  {
    id: "Db7gD4SBxMN",
    url: "https://www.instagram.com/p/Db7gD4SBxMN/",
    image: "media/images/insta/reel1.jpg",
  },
  {
    id: "Db2UdbWSPy6",
    url: "https://www.instagram.com/p/Db2UdbWSPy6/",
    image: "media/images/insta/reel2.jpg",
  },
  {
    id: "DbzlcnXS2Xy",
    url: "https://www.instagram.com/p/DbzlcnXS2Xy/",
    image: "media/images/insta/reel3.jpg",
  },
  {
    id: "DbxHgYySJV7",
    url: "https://www.instagram.com/p/DbxHgYySJV7/",
    image: "media/images/insta/reel4.jpg",
  },
  {
    id: "DbumG5Jy3bd",
    url: "https://www.instagram.com/p/DbumG5Jy3bd/",
    image: "media/images/insta/reel5.jpg",
  },
  {
    id: "DbseuNYhfVA",
    url: "https://www.instagram.com/p/DbseuNYhfVA/",
    image: "media/images/insta/reel6.jpg",
  },
];

export default function Media() {
  useEffect(() => {
  const script = document.createElement("script");

  script.src = "https://www.instagram.com/embed.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);
  return (
    <section id="media" className="bg-sand/50 py-24 dark:bg-charcoal-light sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto justify-center">On the Feed</p>
          <h2 className="section-heading mt-4">Follow the Journey</h2>
          <p className="mt-4 text-charcoal/70 dark:text-sand/70">
            No filmi stories. Real ops from Kashmir, real lessons from NDA, real cost of war for India.
          </p>
        </AnimatedSection>

        {/* YouTube */}
        <AnimatedSection delay={0.1} className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Youtube size={20} className="text-red-600" />
            <h3 className="font-heading text-sm uppercase tracking-widest text-charcoal dark:text-white">
              Latest on YouTube
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {YOUTUBE_VIDEOS.map((video, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-sm border border-charcoal/10 bg-white dark:border-sand/10 dark:bg-charcoal"
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="p-4 text-sm font-medium text-charcoal/80 dark:text-sand/80">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
          <a
            href="https://www.youtube.com/@MajorLSC"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-widest text-army hover:text-brass dark:text-brass"
          >
            <Play size={14} /> Watch More on YouTube
          </a>
        </AnimatedSection>

        {/* Instagram */}
        <AnimatedSection delay={0.15} className="mt-16">
  <div className="mb-6 flex items-center gap-2">
    <Instagram size={20} className="text-pink-600" />

    <h3 className="font-heading text-sm uppercase tracking-widest text-charcoal dark:text-white">
      Latest on Instagram
    </h3>
  </div>

  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
    {INSTAGRAM_POSTS.map((post) => (
      <a
        key={post.id}
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-[9/16] overflow-hidden rounded-sm bg-transparent"
      >
        <img
          src={post.image}
          alt="Instagram Reel"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            <Play
              size={20}
              className="ml-1 text-charcoal"
              fill="currentColor"
            />
          </div>
        </div>
      </a>
    ))}
  </div>

  <a
    href="https://www.instagram.com/major_lsc/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-widest text-army hover:text-brass dark:text-brass"
  >
    <Instagram size={14} />
    Follow @major_lsc
  </a>
</AnimatedSection>
      </div>
    </section>
  );
}
