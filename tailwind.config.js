/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'kuhn-light-green': '#639c4d',
        'kuhn-green': '#244B29',
        'kuhn-dark-green': '#1b381f',
      },
      fontFamily: {
        sans: ['ABeeZee', 'sans-serif'],
        heading: ['Kameron', 'serif'],
      },
    },
  },
  plugins: [],
}
