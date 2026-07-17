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
        darkBg: '#030712', // slate-950
        cardDark: '#0f172a', // slate-900
        lightBg: '#f8fafc', // slate-50
        cardLight: '#ffffff',
        accentIndigo: '#6366f1', // indigo-500
        accentTeal: '#0d9488', // teal-600 or teal-500
        accentCyan: '#06b6d4', // cyan-500
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('light', '.light &');
    }
  ],
}
