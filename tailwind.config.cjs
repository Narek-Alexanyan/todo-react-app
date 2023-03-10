/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "567px" },
      xs: { max: "420px" },
    },
    extend: {
      colors: {
        "todo-white": "#FFFFFF",
        "todo-black": "#69665C",
        "todo-gray": "#B2AFA1",
        "todo-yellow": "#FFF9DE",
        "todo-blue": "#D1E5F7",
        "todo-green": "#DAF2D6",
        "todo-pink": "#FFCECE",
        "todo-purple": "#D2CEFF",
      },
    },
  },
  plugins: [],
}
