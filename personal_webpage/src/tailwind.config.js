const autoprefixer = require("autoprefixer");

module.exports = {
    content: [
      "./src/**/*.{html,js,ejs}",
      "./public/**/*.{html,js,ejs}",
      "./views/**/*.{html,js,ejs}"
    ],
    theme: {
      extend: {
        colors: {
          'sage': {
            light: '#CAD2C5',
            DEFAULT: '#84A98C',
            medium: '#52796F',
            'medium-dark': '#354F52',
            dark: '#2F3E46',
          }
        },
        backgroundImage: {
          'gradient-custom': 'linear-gradient(to right, #52796F, #354F52)',
        },
      },
    },
    plugins: [
    ],
  }