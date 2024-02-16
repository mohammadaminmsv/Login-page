/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
  
      md: "768px",
      // => @media (min-width: 768px) { ... }
  
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
     
      xl: "1405px",
      // => @media (min-width: 1280px) { ... }
       
      
  
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    } ,spacing: {
    1200:"1450px",
    15:"40pt"
    },
      colors: {
        colorself: { 100: "#1F1F1F", 200: "#4682B4" , 300:"#3F3F3F" ,400: "	#FF8C00" },
      },
    },
    plugins: [],
  },
};
