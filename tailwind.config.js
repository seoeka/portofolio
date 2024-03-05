/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rainBlack: '#272932',
        rainWhite: '#F0F0F0',
        darkBlue: '#1D1D28',
        lightBlue: '#9ED8DB',
        textDarkGray: '#2E2E2E',
        textLightGray: '#C3C3C3',
        heroDark: '#1D1D28',
        heroLight: '#8A8F93'
      }
    },
  },
  plugins: [],
}

