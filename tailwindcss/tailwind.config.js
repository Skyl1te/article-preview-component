 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "../src/css/style.css",
    "../src/js/app.js"
  ],
  theme: {
    extend: {
      colors(theme) {
        return {
          'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
          'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
          'grayish-blue': 'hsl(212, 23%, 69%)',
          'light-grayish-blue': 'hsl(210, 46%, 95%)',
        }
      }
    },
  },
  plugins: [],
}