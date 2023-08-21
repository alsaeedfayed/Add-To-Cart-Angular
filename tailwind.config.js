/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode  :'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
  
    extend: {
      colors: {
        '--wd-primary-color': 'rgb(28, 97, 231)',
        '--wd-primary-hover': 'rgb(32, 90, 207)',
        '--nav-background': 'rgba(230, 239, 253, 1)',
        '--white-theme-color': 'rgb(246,246,246)'
      },

    },
  },
  plugins: [require("rippleui")],
}