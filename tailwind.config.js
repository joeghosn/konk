
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Kaspa-inspired cool cyan/green, Bonk-inspired orange
        kaspa: {
          50: '#eafffb',
          400: '#4ce2c9',
          500: '#1fd7bb',
          600: '#12bda3'
        },
        bonk: {
          300: '#ffbf6e',
          400: '#ffa84a',
          500: '#ff8a00'
        },
        space: '#0a0f1e'
      },
      boxShadow: {
        glow: '0 0 32px rgba(31, 215, 187, .35)'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)'}, '50%': { transform: 'translateY(-8px)'} },
        pop: { from: { transform: 'scale(.96)', opacity: '0'}, to: { transform: 'scale(1)', opacity: '1'} },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pop: 'pop .7s ease-out both',
        shimmer: 'shimmer 2.5s linear infinite',
        orbit: 'orbit 18s linear infinite'
      }
    },
    container: { center: true, padding: '1rem' }
  },
  plugins: [],
}
