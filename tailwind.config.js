cls/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600 de Tailwind
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'blue-light': '#3b82f6',
        'green-light': '#22c55e',
        'red-light': '#ef4444',
        'yellow-light': '#facc15',
        'purple-light': '#a78bfa',
        'pink-light': '#f472b6',
      },
    },
  },
  plugins: [],
};
