/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Manrope: ["Manrope", 'sans-serif'],
    },
    backgroundImage: {
      "MainBackground-mobile": 'url(./assets/main/mainBackground-mobile.svg)',
      "MainBackground-desktop": 'url(./assets/main/mainBackground-desktop.svg)',
      "circles-mobile": 'url(./assets/main/circles-mobile.svg)',
      "circles-tablet": 'url(./assets/main/circles-tablet.svg)',
      "circles-desktop": 'url(./assets/main/circles-desktop.svg)',
      "ZX7": 'url(./assets/main/ZX7.svg)',
    },
    extend: {
      dropShadow: {
        '3xl': '0 43px 27px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
