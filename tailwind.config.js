/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./javascripts/script.js"],
  theme: {
    colors: {
      black: "#041a1c",
      dark: "#003C43",
      dim: "#135D66",
      bright: "#77B0AA",
      light: "#E3FEF7",
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards 1s",
      },
    },
  },
  plugins: [],
};
