/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'shadow100': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'shadow200': 'inset 0px 2px 4px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        'bg100': "url('./assets/Images/bg.png')"
      }
    },
  },
  plugins: [],
}

