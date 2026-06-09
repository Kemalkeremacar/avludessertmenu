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
        cream: '#f7f2ea',
        espresso: '#2b1d14',
        mocha: '#6f4e37',
        latte: '#c9a87c',
        sage: '#8a9a7b',
      },
      boxShadow: {
        card: '0 1px 2px rgba(43,29,20,0.04), 0 8px 24px -12px rgba(43,29,20,0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.35s ease both',
      },
    },
  },
  plugins: [],
};
