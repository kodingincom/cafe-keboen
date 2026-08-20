/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#14532d',
          900: '#0f3e2e',
          950: '#08251b',
        },
        sand: {
          50: '#fdfcf9',
          100: '#f8f5ee',
          200: '#eee6d8',
          300: '#dfd2bd',
          400: '#cca06c',
          500: '#b5834b',
          600: '#9b6c3b',
          700: '#7c5331',
          800: '#64432c',
          900: '#4a3222',
          950: '#261810',
        },
        amberGlow: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(245, 158, 11, 0.45)',
        'glow-emerald': '0 0 25px -5px rgba(22, 163, 74, 0.35)',
        'card-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.07)',
        'float': '0 20px 40px -15px rgba(15, 62, 46, 0.2)',
      },
    },
  },
  plugins: [],
}
