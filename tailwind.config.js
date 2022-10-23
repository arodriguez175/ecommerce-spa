/* This is an additional file for defining any customizations. */

/** @type {import('tailwindcss').Config} */
module.exports = {
  /* content: adds the paths to all of the HTML templates, JavaScript components, 
  and any other source files that contain Tailwind class names. */
  content: ["./src/**/*.{html,js, jsx}"],
  /* theme: is defining my project's color palette. This helps prevent color values
  over and over as well as keeping all color values in one place. */
  theme: {
    colors: {
      // My colors are assigned CSS variables defined in index.css
      primary: "var(--th-primary)", // What's in the parentheses is the new variable
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
