/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "product-bg": "url('/src/images/product-bg.png')",
      },
    },
    colors: {
      mainColor: "#F77F00",
      bodyColor: "#003049",
      backgroundColor: "#ECF0FF",
    },
    fontFamily: {
      heading: ["Bebas Neue", "cursive"],
      innerbody: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
