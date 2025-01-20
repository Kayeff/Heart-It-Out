/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "navbar": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
        "button": "#455A64 5px 5px"
      },
      colors: {
        "health-green": "#32959D",
        "logo-yellow": "#F9E74D",
        "dark-skin": "#FBEEE7",
        "dark-grey": "#455A64",
        "light-yellow": "#FFF9C8",
        "anti-flash-white": "#EDF2F4",
      },
      fontFamily: {
        "Switzer": ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
}

