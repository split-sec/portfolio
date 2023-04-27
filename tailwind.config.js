/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily : {
        inter: "'Inter', sans-serif"
      },
      fontSize : {
        "xxs": "0.65rem", 
        "xxxs": "0.6rem",
      },
      height : {
        "100v": "100vh",
      },
    },
  },
  plugins: [],
}

