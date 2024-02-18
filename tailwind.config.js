/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['var(--font-secondary)', 'sans-serif'],
        sans: ['var(--font-primary)', 'sans-serif']
      },
      screens: {
        xs: { max: "576px" },
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "0.5rem",
      },
      colors: {
        gredient1: "bg-gradient-to-r from-orange-300 via-pink-500 to-blue-700",
        primary: "#101112",
        secondary: "#ff9046",
        blue: "#1c6cd9",
        textColor: "#1a1a2e",
        pink: "#c122fd",
        black: "#222222",
        darkCTA: "#181b23",
        green: "#00d9a5",
      },
    },
  },
  plugins: [],
};