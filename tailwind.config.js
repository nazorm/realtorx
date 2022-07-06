/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Pacifico': ['"Pacifico"', 'cursive'],
        'Poppins': ['"Poppins"', 'sans-serif']
      },
      colors:{
        'tahiti': '#3ab7bf',
        'primary' : '#3232a7',
      }
    },
  },
  plugins: [],
}
