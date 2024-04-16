/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Manrope: ["Manrope", 'sans-serif'],
    },
    backgroundImage: {
      "MainBackground-mobile": 'url(./assets/main/mainBackground-mobile.svg)'
    },
    extend: {
      dropShadow: {
        '3xl': '0 43px 27px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
