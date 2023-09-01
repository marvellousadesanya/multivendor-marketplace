/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "product-bg": "url('/src/images/product-bg.png')",
      },
    },
    fontFamily: {
      heading: ["Bebas Neue", "cursive"],
      innerbody: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
