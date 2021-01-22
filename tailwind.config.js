const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#08CA56',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
