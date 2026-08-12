"use client";

import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Media", href: "#media" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Adds a solid background + shadow once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur dark:bg-charcoal/95"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-heading text-xl font-semibold tracking-wide text-charcoal dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-army text-white">
            <Compass size={18} strokeWidth={2.25} />
          </span>
          VetVentures
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading text-sm uppercase tracking-widest text-charcoal/80 transition-colors hover:text-army dark:text-sand/80 dark:hover:text-brass"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <DarkModeToggle />
          <a href="#community" className="btn-primary !py-2.5 !px-5 text-xs">
            Join Community
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <DarkModeToggle />
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center text-charcoal dark:text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-charcoal/10 bg-white px-5 pb-6 pt-2 lg:hidden dark:bg-charcoal dark:border-sand/10">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 font-heading text-sm uppercase tracking-widest text-charcoal/80 dark:text-sand/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#community"
            onClick={handleLinkClick}
            className="btn-primary mt-3 w-full"
          >
            Join Community
          </a>
        </div>
      )}
    </header>
  );
}
