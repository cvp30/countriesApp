/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'iconSky': '0px 4px 6px #009cff',
      },
    },
    colors: {
      'silver': '#676767',
      'white': 'white',
      'darkBg': '#00000076',
      'dark': 'black',
      'blue': '#009cff',
      'sky': '#e3f4ff',
    }
  },
  plugins: [],
}

