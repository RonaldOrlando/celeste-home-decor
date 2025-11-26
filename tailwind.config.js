/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celeste: "#DDEFF7",
        beige: "#F5E7D3",
        dorado: "#C8A87A",
        grisSuave: "#F5F5F5",
      },
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
        nunito: ['"Nunito"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
