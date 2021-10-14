module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      'card': '75vh',
     }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
