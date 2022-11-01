/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            50: "#EDEFF6",
            100: "#DBDFEC",
            200: "#B7BFD9",
            300: "#92A0C7",
            400: "#6E80B4",
            500: "#4A60A1",
            600: "#3B4D81",
            700: "#2C3A61",
            800: "#1E2640",
            900: "#0F1320",
        },
        gray: {
            50: "#E7E9EB",
            100: "#CFD3D6",
            200: "#B8BCC2",
            300: "#A0A6AD",
            400: "#889099",
            500: "#6D737A",
            600: "#52565C",
            700: "#363A3D",
            black: "#1B1D1F",
        },
        white: "#ffffff",
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(0deg, rgba(6, 48, 83, 0.6), rgba(6, 48, 83, 0.6)), url('/src/assets/hero_bg.jpg')",
      },
    },
  },
  plugins: [],
}