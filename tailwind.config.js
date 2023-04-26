/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      fontFamily : {
        inter: "'Inter', sans-serif"
      },
      height : {
        "100v": "100vh",
      },
    },
  },
  plugins: [],
}

