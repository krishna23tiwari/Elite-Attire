/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors:{
          primary: "#0f172a",
          secondary: "#ed8900",
        },
        container:{
          center: true,
          padding: {
            DEFAFULT: "1rem",
          }
        }
      },
    },
    plugins: [],
  }