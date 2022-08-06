/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    colors: {
      primary: "var(--th-primary)",
      secondary: "var(--th-secondary)",
      darkgray: "var(--th-darkgray)",
      red: "var(--th-red)",
      green: "var(--th-green)",
      lightgrayText: "var(--th-lightgrayText)",
      lightgrayBorder: "var(--th-lightgrayBorder)",
    },
    extend: {},
  },
  plugins: [],
};
