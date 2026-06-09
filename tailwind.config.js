/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#faf7f2',
        parchment: '#f0e9df',
        espresso: '#1c1410',
        mocha: '#5a4639',
        gold: '#b08d57',
        'gold-light': '#d4b98a',
        warmgray: '#8c7b6f',
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(28, 20, 16, 0.06)',
        glow: '0 0 0 1px rgba(176, 141, 87, 0.12)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease both',
        'scale-in': 'scale-in 0.4s ease both',
      },
    },
  },
  plugins: [],
};
