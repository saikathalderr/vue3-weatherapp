/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        'theme-green': '#BADA55',
      },
    },
  },
  plugins: [],
};
