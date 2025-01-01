/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scans all relevant files
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scans app directory (if applicable)
    "./components/**/*.{js,ts,jsx,tsx}", // Scans components folder
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6246ea', // Purple
        textPrimary: '#2b2d42', // Dark gray text
        backgroundLight: '#f9fafb', // Light gray background
        accent: '#6246ea', // Accent color for buttons/links
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards', // Define the animation utility
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
