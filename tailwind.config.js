/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Especifica o arquivo HTML principal
    "./assets/**/*.js", // Inclui arquivos JS no diretório 'assets' (se aplicável)
    "./styles/**/*.css", // Inclui arquivos CSS no diretório 'styles'
  ],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg1.png')"
      }
    },
  },
  plugins: [],
};
