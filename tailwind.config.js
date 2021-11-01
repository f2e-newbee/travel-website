module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#5CAFBB',
      'secondary': '#FBAE8C'
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
