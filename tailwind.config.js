/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#90ff00",
        darkPrimary: " #17E205",
        primaryAccent: "#bcff66",
        primaryLight: "#d3ff99",
        specialBlack: "#141414",
        specialWhite: "#fefdfd",
        grey: "#dfdddd",
        darkGrey: "#808080",
        black: "#1e1e1e"
      },
      fontFamily: {
        lato: "Lato",
        poppins: "Poppins"
      },
      backgroundImage: {
        heroPattern: "url('/assets/images/home_background.png')",
        advertPattern: "url('/assets/images/advert_background.png')"
      }
    },
  },
  plugins: [],
}