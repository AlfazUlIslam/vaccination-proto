/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    colors: {
      darkPurple: "#0B153C",
      fadedGrey: "#C4C4C4",
      darkTurquoise: "#17C2EC"
    },
    fontFamily: {
      montserrat: "'Montserrat', sans-serif"
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

