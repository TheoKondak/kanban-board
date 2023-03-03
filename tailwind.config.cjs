const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.slate,
        mirage: {
          100: '#B9C1D4',
          200: '#9AA5BF',
          300: '#7E8BA9',
          400: '#657394',
          500: '#4E5C7E',
          600: '#3A4869',
          700: '#293654',
          800: '#1A253E',
          900: '#0F172A',
        },
        companyColor: '#ff6224',
        white: '#ffffff',
        black: '#000000',
      },
      fontSize: {
        xs: '14px',
        xxs: '13px',
        xxxs: '12px',
      },
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'cursive'],
      },
    },
  },
  plugins: [],
};
