/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Open Sans"', "sans-serif"],
        secondary: ["Rubik", "sans-serif"],
      },
      colors:{
        primary:"#E33A88",
        secondary:"#F74D4D",
        tertiary: "#68D585",
        dark:{
          100:"#150F37",
          200:"#161C2D",
          300:"#161C2D"
        },
        light:{
          100:"#E7E9ED"
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
