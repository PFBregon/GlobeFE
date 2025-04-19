/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{hotml,css,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'albert-sans': ['"Albert Sans-Bold"', 'Helvetica', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
