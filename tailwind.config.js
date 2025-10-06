/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#1a1f71',
          950: '#000035',
        },
        'darkblue': {
          500: '#3A4764',
          600: '#2F3A52',
          700: '#252D40',
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        draw: 'draw 1s ease-in-out forwards',
        initialGlow: 'initialGlow 3.5s ease-out',
        floatLeft: 'floatLeft 15s linear infinite',
        floatRight: 'floatRight 18s linear infinite',
        floatDiagonal: 'floatDiagonal 20s linear infinite',
        floatDiagonalReverse: 'floatDiagonalReverse 22s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        lineGlow: 'lineGlow 4s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        draw: {
          '0%': { strokeDasharray: '300', strokeDashoffset: '300' },
          '100%': { strokeDasharray: '300', strokeDashoffset: '0' },
        },
        initialGlow: {
          '0%': { 
            color: '#000035', 
            textShadow: '0 0 60px rgba(0,0,53,1)' 
          },
          '100%': { 
            color: '#000035', 
            textShadow: '0 0 0px rgba(0,0,53,0)' 
          },
        },
        floatLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateX(100vw)', opacity: 0 },
        },
        floatRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateX(-100vw)', opacity: 0 },
        },
        floatDiagonal: {
          '0%': { transform: 'translate(-100%, 100%) rotate(45deg)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translate(100%, -100%) rotate(45deg)', opacity: 0 },
        },
        floatDiagonalReverse: {
          '0%': { transform: 'translate(100%, 100%) rotate(-45deg)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translate(-100%, -100%) rotate(-45deg)', opacity: 0 },
        },
        pulseGlow: {
          '0%, 100%': { 
            opacity: 0.3,
            boxShadow: '0 0 10px rgba(58,71,100,0.4), 0 0 20px rgba(58,71,100,0.3), 0 0 30px rgba(58,71,100,0.2)'
          },
          '50%': { 
            opacity: 0.7,
            boxShadow: '0 0 20px rgba(58,71,100,0.8), 0 0 40px rgba(58,71,100,0.6), 0 0 60px rgba(58,71,100,0.4)'
          }
        },
        lineGlow: {
          '0%, 100%': { 
            opacity: 0.3,
            boxShadow: '0 0 10px rgba(58,71,100,0.3)'
          },
          '50%': { 
            opacity: 0.5,
            boxShadow: '0 0 20px rgba(58,71,100,0.6)'
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 