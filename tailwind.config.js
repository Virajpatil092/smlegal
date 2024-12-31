/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#edb970',
        green: '#052925',
        brown: '#5c544d'
      },
    },
  },
  plugins: [],
}