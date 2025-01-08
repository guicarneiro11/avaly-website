/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEFEFE',
        secondary: '#171D24',
        accent: '#5372FE',
        error: '#E53935',
        'primary-alpha': 'rgba(254, 254, 254, 0.95)',
        'secondary-alpha': 'rgba(23, 29, 36, 0.8)',
        'accent-alpha': 'rgba(83, 114, 254, 0.9)',
      }
    },
  },
  plugins: [],
}