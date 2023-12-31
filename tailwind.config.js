/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      space:['Space Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ],
}

