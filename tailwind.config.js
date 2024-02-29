/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1280px", // Extend xl breakpoint
        "2xl": "1536px", // Extend 2xl breakpoint
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "2rem",
          "2xl": "3rem",
        },
      },
    },
  },
  plugins: [],
};
