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
        "bd-blue": "#164895",
        "bd-red": "#B92025",
        "bd-dark": "#16171C",
        "bd-grey": "#696969",
      },
    },
  },
  plugins: [],
};
