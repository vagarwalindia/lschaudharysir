"use client";

import { Target, Compass, Users, Flame } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const VALUES = [
  {
    icon: Target,
    title: "Discipline",
    copy: "Every program runs on the same standards that keep a platoon alive: preparation, punctuality, and follow-through.",
  },
  {
    icon: Compass,
    title: "Purpose",
    copy: "We don't do trust falls for the sake of it. Every exercise maps back to a real leadership or team outcome.",
  },
  {
    icon: Users,
    title: "Brotherhood",
    copy: "The Army taught us that teams outperform individuals. Our camps are built to forge that same bond, fast.",
  },
  {
    icon: Flame,
    title: "Resilience",
    copy: "Comfort doesn't build character. We take people slightly outside it — safely, deliberately, repeatedly.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-charcoal sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Photo + intro video */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm bg-sand dark:bg-charcoal-light">
                {/* Founder photo — add the real file at public/media/images/founder-about.jpg */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/images/founder-about.jpeg"
                  alt="Founder in the field"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Intro video — add the real file at public/media/videos/founder-intro.mp4 */}
              <div className="mt-6 max-w-md overflow-hidden rounded-sm border border-charcoal/10 dark:border-sand/10">
                <div className="aspect-video w-full bg-charcoal">
                  <video
                    className="h-full w-full"
                    controls
                    preload="metadata"
                    poster="media/images/founder-about.jpeg"
                  >
                    <source src="/media/videos/founder-intro.mp4" type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                </div>
                <p className="bg-sand px-4 py-2 text-xs text-charcoal/70 dark:bg-charcoal-light dark:text-sand/70">
                  Watch: The founder&apos;s two-minute story
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Story copy */}
          <AnimatedSection delay={0.1}>
            <p className="eyebrow">Our Story</p>
            <h2 className="section-heading mt-4">
              Ten Years in Uniform.
              <br />A Lifetime of Leading Teams.
            </h2>
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-charcoal/80 dark:text-sand/80">
              <p>
                Our founder spent a decade as a commissioned officer in the
                Indian Army, leading soldiers through terrain and pressure
                most people never encounter — from high-altitude postings to
                split-second decisions where hesitation wasn&apos;t an option.
              </p>
              <p>
                After hanging up the uniform, he noticed the same gaps
                everywhere in civilian life: teams that couldn&apos;t
                communicate under pressure, leaders who&apos;d never been
                tested, and people who&apos;d forgotten what their limits
                actually were. VetVentures was built to close those gaps —
                not in a classroom, but on a trail, at altitude, under a
                little bit of honest discomfort.
              </p>
              <p>
                Today, that same field-tested discipline shapes every
                corporate offsite, bootcamp, and trek we run — built to leave
                people sharper, calmer under pressure, and genuinely closer
                as a team.
              </p>
            </div>

            {/* Mission statement callout */}
            <div className="mt-8 border-l-4 border-brass bg-sand/60 px-6 py-5 dark:bg-charcoal-light">
              <p className="font-heading text-sm uppercase tracking-widest text-army dark:text-brass">
                Our Mission
              </p>
              <p className="mt-2 font-body text-charcoal/90 dark:text-sand/90">
                To give every participant a taste of the discipline,
                resilience, and brotherhood forged in service — and to prove
                that real transformation happens outside your comfort zone.
              </p>
            </div>

            {/* Values grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {VALUES.map((v) => (
                <div key={v.title}>
                  <v.icon size={20} className="text-army dark:text-brass" />
                  <p className="mt-2 font-heading text-sm uppercase tracking-widest text-charcoal dark:text-white">
                    {v.title}
                  </p>
                  <p className="mt-1 text-sm text-charcoal/70 dark:text-sand/70">
                    {v.copy}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}