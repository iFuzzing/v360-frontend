/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app-orange-primary': '#E5481B',
        'app-orange-secondary': '#E67717'
      },
      backgroundImage: {
        'sec-hero-bg': "url('/imgs/herobg_sm.png')"
      },
      fontFamily:{
        'Roboto': ['Roboto', 'sans-serif'],
        'KitOne': ['Kite One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

