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
        "sakura-10": "#F296AC8A",
        "sakura-100": "#F031A4",
        "sakura-brown": "#5B3819",
      },
    },
  },
  plugins: [],
};
