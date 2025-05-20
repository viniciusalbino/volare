/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        cielo: '#e62c27',    // rgb(230, 44, 39) - Red
        rosado: '#f495d3',   // rgb(244, 149, 211) - Pink
        girasol: '#ff8c4d',  // rgb(255, 140, 77) - Orange
        plata: '#f4f3f2',    // rgb(244, 243, 242) - Light Gray
        
        // Note: Naranja is the same as Cielo (#e62c27)
        // Note: Carbón is the same as Girasol (#ff8c4d)
      },
      fontFamily: {
        'quila': ['Qilla Slant', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
} 