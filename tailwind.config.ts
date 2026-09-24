import type { Config } from "tailwindcss";

/*
 * Optional config for editor/legacy tooling.
 * This project uses Tailwind v4, whose theme is defined CSS-first in
 * `src/app/globals.css` via `@theme`. Keep both in sync if you edit colors.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: "#8a9a7b",
        "sage-deep": "#6b7a5e",
        cream: "#f5f1e8",
        offwhite: "#faf7f2",
        gold: "#c9a961",
        ink: "#2b2b2b",
      },
      fontFamily: {
        serif: [
          "var(--font-cormorant)",
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;