/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poiret: "'Poiret One', serif",
          inter: "'Inter', serif",
        }
     }
    },
    plugins: [],
  }
