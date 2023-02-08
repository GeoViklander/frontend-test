/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b93739', // vermelho das letras
        secundary: '#b1b1b1', // cinza das descrições,
        tertiary: '#f2f0f1', //cinza da ordenação
        neutral: {
          400: '#FFFFFF', // fontes brancas
          500: '#121925', // fonte preta
        },
        content: '#151C25', //cor do menu mobile e seção
      },
    },
  },
  plugins: [],
}
