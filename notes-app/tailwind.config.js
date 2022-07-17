/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        favorites:"#FFE162",
        new:"#00BD56",
        search:"#40DFEF",
        den :"#4C3A51",
        add : "#CDF0EA",
        light : "#f2f2f2"
      },
      fontFamily:{
        Signika: "'Signika', sans-serif",
      },
      boxShadow:{
        type1:"rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        type2:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
        type3:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
      }
    },
  },
  plugins: [],
}