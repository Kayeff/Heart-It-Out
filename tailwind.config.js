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
        "button": "#455A64 5px 5px",
        "cards": "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      },
      colors: {
        "health-green": "#32959D",
        "logo-yellow": "#F9E74D",
        "dark-grey": "#455A64",
        "anti-flash-white": "#EDF2F4",
        "prussian-blue": "#003750",
        "stars": "#DF7550",
        "whitesmoke": "#F5F5F5",
        "cerulean": "#006B86",
      },
      fontFamily: {
        "Switzer": ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
}

