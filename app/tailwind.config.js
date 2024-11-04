// app/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all source files are included
  ],
  safelist: [
    'bg-blue-100',
    'bg-blue-200',
    'bg-green-100',
    'bg-green-200',
    'bg-yellow-100',
    'bg-yellow-200',
    'bg-orange-100',
    'bg-orange-200',
    'bg-red-100',
    'bg-red-200',
    'bg-teal-500',
    'bg-teal-600',
    'bg-amber-900',
    'bg-amber-800',
    'bg-amber-700',
    'bg-amber-600',
    'bg-amber-500',
    'bg-amber-400',
    'bg-amber-300',
    'bg-amber-50',
    // Add any other color classes you use
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        slideIn: 'slideIn 0.8s ease-out',
        spinSlow: 'spin 60s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        // Define custom colors if needed
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(251, 191, 36, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}