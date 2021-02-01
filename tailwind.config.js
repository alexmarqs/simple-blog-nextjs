const defaultTheme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        inherit: 'inherit'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [typography]
};
