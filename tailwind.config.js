module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors:{
        'app-maroon':'#882C37',
      },
      fontFamily:{
        'dancing-script':['Dancing Script'],
        'poppins':['Poppins']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
