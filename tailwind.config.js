/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'model-3': "url('../public/model-3.avif')",
      },
      colors: {
        'tesla-dark': "#393c41"
      }
    },
  },
  plugins: [],
}

