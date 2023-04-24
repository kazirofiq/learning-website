/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3D419F',
          secondary: '#38A27B',
          accent: "#3A4256",
          neutral: "#3D4451",
          "basic": "#666666",
          info: "#666666",
          "basic-color": "#333333",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}