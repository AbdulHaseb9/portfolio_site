/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        large: "1440px",
      },
      colors: {
        bg_color: "#081B29",
        primary_color: "#18A9EA",
        secondary_color: "#122E43",
        text_secondary_color: "#eaeaea",
      },
    },
  },
  plugins: [],
}