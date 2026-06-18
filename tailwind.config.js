/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
        'menu': ['1.0625rem', { lineHeight: '1.45' }],
        'hero': ['clamp(2rem,6vw,3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'welcome': ['clamp(2.25rem,7vw,3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        label: '0.1em',
        caps: '0.14em',
      },
      lineHeight: {
        snug: '1.35',
        relaxed: '1.65',
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
