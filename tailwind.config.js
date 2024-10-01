/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '320px',
      'bsm': '375px',
      'md': '425px',
      'lg': '768px',
      'xl': '1024px',
    },
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
      mono: ['Noto Serif', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}