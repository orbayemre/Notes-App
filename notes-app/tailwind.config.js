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
      boxShadow:{
        type1:"rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        type2:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
        type3:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
        type4:"#40DFEF 0px 3px 8px;",
        type5:"#393E46 0px 10px 36px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;",
      },
    },
  },
  plugins: [],
}