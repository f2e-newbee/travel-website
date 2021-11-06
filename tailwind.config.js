module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#5CAFBB',
      'secondary': '#FBAE8C'
     }),
    extend: {
      colors:{
        'primary':'#5CAFBB',
        'primary-dark':'#246069',
        'primary-light':'#BEE4E9',
        'secondary':'#FBAE8C',
        'secondary-dark':'#D0450A',
        'secondary-light':'#F8E3DA',
        'text-dark':'#1D3A3F',
        'text-regular':'#486165',
        'text-light':'#728096'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
