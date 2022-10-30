/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#EDEFF6",
        "primary-100": "#DBDFEC",
        "primary-200": "#B7BFD9",
        "primary-300": "#92A0C7",
        "primary-400": "#6E80B4",
        "primary-500": "#4A60A1",
        "primary-600": "#3B4D81",
        "primary-700": "#2C3A61",
        "primary-800": "#1E2640",
        "primary-900": "#0F1320",
        "white": "#ffffff",
        "gray-50": "#E7E9EB",
        "gray-100": "#CFD3D6",
        "gray-200": "#B8BCC2",
        "gray-300": "#A0A6AD",
        "gray-400": "#889099",
        "gray-500": "#6D737A",
        "gray-600": "#52565C",
        "gray-700": "#363A3D",
        "gray-black": "#1B1D1F",
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(0deg, rgba(6, 48, 83, 0.6), rgba(6, 48, 83, 0.6)), url('/src/assets/hero_bg.jpg')",
      },
    },
  },
  plugins: [],
}