/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: 'var(--primary-color)',
            secondary: 'var(--secondary-color)',
            textColor: 'var(--text-color)',
            bgColor: 'var(--bg-color)',
    
        },
      },
    },
    plugins: [],
  }
  