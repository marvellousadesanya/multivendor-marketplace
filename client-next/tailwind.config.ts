import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        bebas: ["var(--font-bebas)"],
      },
      colors: {
        "brand-blue": "#003049",
        "brand-orange": "#F77F00",
        "brand-light-blue": "#EFF2FF",
      },
    },
  },
  plugins: [],
};
export default config;
