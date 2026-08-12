"use client";

import { Building2, Mountain, Tent, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    icon: Building2,
    title: "Corporate Events",
    tagline: "Team-Building Treks & Leadership Workshops",
    copy: "Take your team off the org chart and onto the trail. We design offsites that reveal how your people actually communicate, decide, and lead under mild real-world pressure.",
    points: [
      "Half-day to 3-day formats",
      "Custom leadership workshops",
      "Debrief reports for HR & leadership",
    ],
  },
  {
    icon: Mountain,
    title: "Leadership Bootcamps",
    tagline: "Multi-Day Intensive Programs",
    copy: "Immersive, multi-day programs built on Army training principles — early mornings, physical challenges, and structured reflection designed to build lasting discipline.",
    points: [
      "4–7 day residential formats",
      "Physical & mental resilience drills",
      "1:1 mentorship from veteran instructors",
    ],
  },
  {
    icon: Tent,
    title: "Trekking Camps",
    tagline: "Weekend & Getaway Adventures",
    copy: "For individuals and small groups who want the reset that only altitude and open sky can give — guided by people who've made the mountains their job.",
    points: [
      "Weekend & long-weekend routes",
      "All fitness levels welcome",
      "Full gear & safety support",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand/50 py-24 dark:bg-charcoal-light sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto justify-center">What We Offer</p>
          <h2 className="section-heading mt-4">
            Three Ways to Build Something Real
          </h2>
          <p className="mt-4 text-charcoal/70 dark:text-sand/70">
            Whether it&apos;s a team of twelve or a personal challenge of one,
            every program is led directly by veterans and built on
            field-tested method — not generic team-building clichés.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.12}>
              <div className="group flex h-full flex-col rounded-sm border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-sand/10 dark:bg-charcoal">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-army text-white transition-colors group-hover:bg-brass">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-wide text-charcoal dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs font-heading uppercase tracking-widest text-brass">
                  {service.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70 dark:text-sand/70">
                  {service.copy}
                </p>
                <ul className="mt-6 space-y-2 border-t border-charcoal/10 pt-6 dark:border-sand/10">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-charcoal/80 dark:text-sand/80"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-army dark:text-brass" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1 font-heading text-sm uppercase tracking-widest text-army transition-colors hover:text-brass dark:text-brass"
                >
                  Enquire Now &rarr;
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
