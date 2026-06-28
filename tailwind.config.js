/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ['"Crimson Pro"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          dark: "#0d0d0d",
          light: "#2c2c2c",
        },
        sand: {
          DEFAULT: "#f8f7f4",
          alt: "#f0efeb",
        },
        gold: {
          DEFAULT: "#d4a853",
          dark: "#c99a40",
          light: "#e8c97a",
        },
        coral: {
          DEFAULT: "#e07a5f",
          light: "#efa08d",
        },
        line: "#e4e3df",
        muted: "#5c5c5c",
        faint: "#8f8f8f",
      },
    },
  },
  plugins: [],
}

