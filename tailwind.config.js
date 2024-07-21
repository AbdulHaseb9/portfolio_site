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
        gray: '#535754',
      },
      backgroundImage: {
        'hero-pattern': "url('/comingsoon_bg.png')",
        'profile-image': "url('/profile_pic.png')",
      },
      screens: {
        mobilelarge: '425px'
      },
      fontFamily: {
        roman: ["Martian Mono, monospace"],
      },
    },
  },
  plugins: [],
}