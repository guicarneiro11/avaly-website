/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#1E88E5',
          600: '#4FC3F7',
        }
      }
    },
  },
  plugins: [],
}