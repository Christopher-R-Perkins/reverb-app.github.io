/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './javascripts/script.js'],
  theme: {
    extend: {
      width: ['responsive'],
      height: ['responsive'],
      keyframes: {
        slideIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        slideIn: 'slideIn .25s ease-in-out forwards 1s',
      },
      colors: {
        bgBlue: '#25384D',
        offWhite: '#FAFFFA',
        turquoise: {
          100: '#FAFFFA',
          200: '#CEFFF9',
          300: '#B0FAF1',
          400: '#97FFE9',
          500: '#7EFFE2',
          600: '#31F8DA',
          700: '#00E9CA',
          800: '#00b099',
        },
        black: '#041a1c',
        dark: '#111827',
        dim: '#135D66',
        bright: '#77B0AA',
        light: '#E3FEF7',
        bgGray: '#1E2834',
      },
      fontFamily: {
        varela: ['Varela Round', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
