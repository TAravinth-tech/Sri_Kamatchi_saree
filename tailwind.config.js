/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silk: {
          // Primary red #F23C48 ramp
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fcced1',
          300: '#f9a8ad',
          400: '#f4747c',
          500: '#f23c48',
          600: '#d61f2d',
          700: '#b31622',
          800: '#8f141d',
          900: '#75151c',
          950: '#400a0f',
        },
        gold: {
          // Accent gold #FFC221 ramp
          50: '#fffaeb',
          100: '#fff3c7',
          200: '#ffe585',
          300: '#ffd44a',
          400: '#ffc221',
          500: '#f0a800',
          600: '#cb7e00',
          700: '#a25b00',
          800: '#854700',
          900: '#713b00',
          950: '#411e00',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf2e0',
          300: '#f5e8c8',
          400: '#edd9a8',
        },
        charcoal: {
          700: '#3a2f2d',
          800: '#27201e',
          900: '#1a1513',
        },
        whatsapp: {
          green: '#1f8a4c',
          greenDark: '#166b39',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(214, 31, 45, 0.10)',
        card: '0 8px 30px -8px rgba(214, 31, 45, 0.14)',
        gold: '0 8px 24px -6px rgba(255, 194, 33, 0.40)',
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2s ease-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
