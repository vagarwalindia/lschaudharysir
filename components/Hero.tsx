"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal pb-20 pt-32 text-white"
    >
      {/* Signature topographic contour texture — echoes trekking maps & mission briefings */}
      <div
        className="absolute inset-0 bg-topo bg-[length:420px_420px] opacity-40"
        style={{ filter: "invert(1)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/70 to-charcoal" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Copy column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-sm border border-brass/50 bg-white/5 px-3 py-1.5 text-xs font-heading uppercase tracking-[0.2em] text-brass"
          >
            <ShieldCheck size={14} />
            Veteran-Led &middot; Est. by an Indian Army Officer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-heading font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            From Battlefield to Basecamp
            <span className="mt-2 block text-brass">
              Leadership Through Adventure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-sand/90 sm:text-lg"
          >
            After a decade leading soldiers in the Indian Army, our founder
            now leads teams up mountains instead. VetVentures turns
            battlefield-tested discipline into corporate events, leadership
            bootcamps, and trekking camps that build sharper, steadier, more
            connected people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#community" className="btn-primary bg-brass hover:bg-brass/80">
              Join Community
              <ArrowRight size={16} />
            </a>
            <a
              href="#events"
              className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal"
            >
              <CalendarDays size={16} />
              View Upcoming Events
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sand/80"
          >
            <Stat value="4,000+" label="Personnel &amp; Professionals Trained" />
            <Stat value="120+" label="Bootcamps &amp; Treks Led" />
            <Stat value="10 yrs" label="Army Service" />
          </motion.div>
        </div>

        {/* Visual column — founder portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-sm border border-brass/40" />
          {/* Founder photo — add the real file at public/media/images/founder-hero.jpg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="media/images/founder-hero.jpeg"
            alt="VetVentures founder"
            className="h-full w-full rounded-sm object-cover"
          />
          <div className="absolute -bottom-5 -left-5 rounded-sm bg-brass px-4 py-3 font-heading text-xs uppercase tracking-widest text-charcoal shadow-lg">
            Major LS Chaudhary
            <br />
            <span className="text-charcoal/70">Indian Army (Retd.)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-heading text-2xl font-semibold text-white">{value}</p>
      <p className="text-xs uppercase tracking-wide text-sand/70">{label}</p>
    </div>
  );
}