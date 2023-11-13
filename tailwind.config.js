/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
