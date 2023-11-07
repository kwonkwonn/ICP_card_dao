/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [    "../index.html",
  "../frontend/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      top:{
      92:"7em"
    },
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },},
  },
  plugins: [],
}

