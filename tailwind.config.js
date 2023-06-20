/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        'kiwi': 'Kiwi Maru',
        'logo': 'Bukhari Script',
        'header': 'Graublau Sans Pro',
        'baufra': 'Diamonds'
      },
      colors: {
        'regal': '#FFC38C',
        'royal': 'rgba(100,255,218)',
        'specialblack': 'rgba(17,34,64)'
      },
      spacing: {
        '100' : '45rem',
      },
    },
  },
  plugins: [],
}

