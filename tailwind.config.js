/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'sidebar': '#676767',
      'white': 'white',
      'dark': 'black',
      'silver': '#7a7a7a',
      'blue': '#009cff',
      'sky': '#e3f4ff',
    }
  },
  plugins: [],
}

