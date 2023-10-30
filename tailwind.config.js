/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    screens: {
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "576px" },
    },
    extend: {},
  },
  plugins: [],
};

