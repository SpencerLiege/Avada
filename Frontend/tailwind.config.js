/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avada1: ['Avada1', 'sans-serif'],
        avada2: ['Avada2', 'sans-serif'],
        avada3: ['Avada3', 'sans-serif'],
        avada4: ['Avada4', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
        Bebas: ['Bebas', 'sans-serif']
      },
    //   backgroundImage: {
    //     'bg-bar': "url('/assets/avadabar.jpg')"
    //   }
    },
  },
  plugins: [],
}