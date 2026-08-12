"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Toggles the `dark` class on <html>. Theme choice persists via localStorage
 * and is applied pre-paint by an inline script in the root layout to avoid
 * a flash of incorrect theme (FOUC).
 */
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Sync local state with whatever the pre-paint script already applied
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("vetventures-theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-sm border border-charcoal/20 text-charcoal transition-colors hover:bg-charcoal hover:text-white dark:border-sand/30 dark:text-sand dark:hover:bg-sand dark:hover:text-charcoal"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
