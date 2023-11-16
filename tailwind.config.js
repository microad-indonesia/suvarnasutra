/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "992px",
        "xl": "1024px",
        "x2l": "1280px",
        "x3l": "1360px",
        "x4l": "1440px",
        "x5l": "1530px",
        "x6l": "1920px",
      },
      colors: {
        "sakura-5": "#FFDFDF",
        "sakura-10": "#ED859E",
        "sakura-100": "#F296AC",
        "sakura-brown": "#5B3819",
        "sakura-blue": "#170F49",
      },
    },
  },
  plugins: [],
};
