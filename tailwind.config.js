/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple-upt-500': '#18122B'
      },
      gridTemplateRows: {
        'layout': '2rem 1fr 2rem',
      },
      gridTemplateColumns: {
        'principal': '10rem 1fr',
      }
    },
  },
  plugins: [],
}