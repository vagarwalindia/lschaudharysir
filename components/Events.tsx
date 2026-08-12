"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import { events, eventTypes, EventType, VetEvent } from "@/lib/events";
import AnimatedSection from "./AnimatedSection";
import RegistrationModal from "./RegistrationModal";

type FilterValue = "All" | EventType;
const FILTERS: FilterValue[] = ["All", ...eventTypes];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  // Which event's registration modal is open (null = closed)
  const [selectedEvent, setSelectedEvent] = useState<VetEvent | null>(null);

  // Recompute the visible list only when the filter changes
  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return events;
    return events.filter((e) => e.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="events" className="bg-white py-24 dark:bg-charcoal sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimatedSection className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">The Calendar</p>
            <h2 className="section-heading mt-4">Upcoming Deployments</h2>
            <p className="mt-3 max-w-xl text-charcoal/70 dark:text-sand/70">
              Every camp runs at limited capacity so our instructors can give
              each participant real attention. Reserve early.
            </p>
          </div>

          {/* Filter controls */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-sm border px-4 py-2 font-heading text-xs uppercase tracking-widest transition-colors ${
                  activeFilter === filter
                    ? "border-army bg-army text-white dark:border-brass dark:bg-brass dark:text-charcoal"
                    : "border-charcoal/20 text-charcoal/70 hover:border-army hover:text-army dark:border-sand/20 dark:text-sand/70 dark:hover:border-brass dark:hover:text-brass"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Event cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.article
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-white shadow-sm dark:border-sand/10 dark:bg-charcoal-light"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-sm bg-charcoal/85 px-3 py-1 font-heading text-[11px] uppercase tracking-widest text-brass">
                    {event.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-charcoal dark:text-white">
                    {event.title}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-sm text-charcoal/70 dark:text-sand/70">
                    <p className="flex items-center gap-2">
                      <Clock size={14} /> {formatDate(event.date)} &middot; {event.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={14} /> {event.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Users size={14} /> {event.seatsLeft} seats left
                    </p>
                  </div>

                  <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                    <span className="font-heading text-base font-semibold text-army dark:text-brass">
                      {event.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(event)}
                      className="rounded-sm bg-army px-4 py-2.5 font-heading text-xs uppercase tracking-widest text-white transition-colors hover:bg-army-dark dark:bg-brass dark:text-charcoal dark:hover:bg-brass/80"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <p className="mt-12 text-center text-charcoal/60 dark:text-sand/60">
            No events in this category right now — check back soon.
          </p>
        )}
      </div>

      {/* Registration form — field set adapts to the selected event's type
          (Trek / Corporate / Bootcamp), see lib/registrationFields.ts */}
      <RegistrationModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
