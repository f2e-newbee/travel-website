module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#5CAFBB',
      'primary-dark': '#246069',
      'secondary': '#FBAE8C',
      'secondary-light': '#FFEDE5'
     }),

     borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#5CAFBB',
      'secondary': '#FBAE8C',
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
        'text-light':'#728096',
        'grey':'#C4C4C4'
      },
      backgroundImage: {
        'food-banner': "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%,rgb(57 37 37 / 70%) 100%), url(/src/assets/img/food.jpg)",
       },
       height: {
        'screen-md' : '40vh',
       },
       minHeight: {
         '150': '150px',
         '400': '400px'
       },

       margin: {
        $40: '40%',
        md: '16px',
        lg: '24px',
        xl: '48px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
