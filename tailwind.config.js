
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7B2DEE',
        secondary: '#DDDDDD',
      },
      backgroundImage: {
        'hero-pattern': "url('/comingsoon_bg.png')",
      }
    },
  },
  plugins: [],
}