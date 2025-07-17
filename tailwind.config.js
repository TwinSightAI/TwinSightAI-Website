/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#0f172a",
        'dark-blue': '#1e3a8a',
      },
      keyframes: {
        'color-shift': {
          '0%, 100%': { backgroundColor: '#f0f9ff' },
          '25%': { backgroundColor: '#e0f2fe' },
          '50%': { backgroundColor: '#bae6fd' },
          '75%': { backgroundColor: '#7dd3fc' },
        },
        'slide-in-page': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'color-hover': 'color-shift 3s ease-in-out infinite',
        'page-open': 'slide-in-page 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
