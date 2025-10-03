/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#CE93D8',
          400: '#AB47BC',
          500: '#AB47BC',
          600: '#6A1B9A',
          700: '#6A1B9A',
          800: '#4A148C',
          900: '#4A148C',
        }
      }
    },
  },
  plugins: [],
};
