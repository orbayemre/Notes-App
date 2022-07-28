/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {

      colors:{
        favorites:"#FFE162",
        new:"#00BD56",
        search:"#40DFEF",
        add : "#CDF0EA",
        light : "#f2f2f2",
        dark:"#2C3333",
        darkNew:"#4E9F3D",
        lightDark :"#393E46"
      },
      fontFamily:{
        Signika: "'Signika', sans-serif",
      },
      screens:{
        phone: {'max': '768px'},
        miniPhone: {'max': '600px'},
      }
    },

  },
  plugins: [],
}