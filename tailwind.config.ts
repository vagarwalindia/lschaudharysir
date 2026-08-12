import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // enables toggleable dark mode via a `dark` class on <html>
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — kept to the brief's four colors, plus two
        // functional derivatives (a deep hover-shade of army green, and a
        // brass accent pulled from the sand family for stamps/badges).
        army: {
          DEFAULT: "#4B5320",
          dark: "#363C17",
          light: "#6B7530",
        },
        sand: {
          DEFAULT: "#F4E4C1",
          dark: "#E8D2A0",
        },
        charcoal: {
          DEFAULT: "#2C2C2C",
          light: "#3D3D3D",
        },
        brass: "#A9812D",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        // Subtle topographic contour-line texture used as the site's
        // signature visual motif (mirrors trekking maps / mission briefings).
        topo: "url('/topo.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
