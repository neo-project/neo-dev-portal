module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#00E599',
        secondary: '#000033',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
