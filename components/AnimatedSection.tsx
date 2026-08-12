"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

/**
 * Wraps content in a subtle fade-in + slide-up reveal that triggers once
 * the element scrolls into view. Used consistently across sections so
 * motion feels orchestrated rather than scattered (per design direction).
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
