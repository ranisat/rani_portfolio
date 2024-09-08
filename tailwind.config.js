/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        "body_bg":"linear-gradient(#D7ECFF, #FFFFFF, #FFCDF4)",
        "dark_bg":"linear-gradient(#111827, #111827, #111827)",
        "color_bg":"linear-gradient(#D7ECFF, #FFFFFF, #FFCDF4)",
        "text_black":"#000000",
        "text_gray":"#9C9C9C",
        "color_purple":"#8E006E",
        "color_white":"#fff",
    }
  }
},
  plugins: [],
}


