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
        nature: {
          50: '#f4f8f4',
          100: '#e4f0e5',
          200: '#cbe2ce',
          300: '#a3cca8',
          400: '#75b07e',
          500: '#4d9357',
          600: '#3a7744',
          700: '#2f5f37',
          800: '#284c2e',
          900: '#1b3b22',
          950: '#0e2013',
        },
        wood: {
          50: '#faf6f0',
          100: '#f4ede1',
          200: '#e8dac5',
          300: '#d7c0a1',
          400: '#c3a17b',
          500: '#b1875c',
          600: '#9c6f4b',
          700: '#80573e',
          800: '#694735',
          900: '#462f23',
          950: '#281a14',
        },
        amberGlow: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(245, 158, 11, 0.45)',
        'glow-green': '0 0 25px -5px rgba(54, 114, 67, 0.35)',
        'card-warm': '0 10px 30px -10px rgba(47, 31, 24, 0.08)',
      },
    },
  },
  plugins: [],
}


