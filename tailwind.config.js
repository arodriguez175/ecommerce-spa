/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    colors: {
      "shoe-primary": "var(--th-primary)",
      "shoe-primary-text": "var(--th-primary-text)",
      "shoe-hover": "var(--th-hover)",
      "shoe-text-hover": "white",
      "shoe-text": "var(--th-text)",
      "shoe-option": "var(--th-secondary)",
      red: "#ff0000",
      white: "#fff",
      green: "#008000",
      lightgrayText: "#b5b5b5",
      lightgrayBorder: "#e7e7e7",
    },
    extend: {},
  },
  plugins: [],
};
