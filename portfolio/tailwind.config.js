/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scans all relevant files
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scans app directory (if applicable)
    "./components/**/*.{js,ts,jsx,tsx}", // Scans components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
