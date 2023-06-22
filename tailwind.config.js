/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        'kiwi': 'Kiwi Maru',
        'logo': 'Bukhari Script',
        'header': '𝚆𝙰𝙽𝙹𝙸𝙺𝚄',
        'baufra': 'Diamonds'
      },
      colors: {
        'regal': '#131313',
        'royal': '#2e333d',
        'specialblack': 'rgba(17,34,64)',
        'bluu': '#6b8afd',
        'samawati': 'rgba(58, 66, 82)'
      },
      spacing: {
        '100' : '37rem',
      },
      fontSize: {
        xxs: '11px',
      }
    },
  },
  plugins: [],
}

