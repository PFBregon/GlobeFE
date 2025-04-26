/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{html,css,js,ts,jsx,tsx}",
    ],
    
    theme: {
      extend: {
        fontFamily: {
          'albert-sans': ['"Albert Sans-Bold"', 'Helvetica', 'sans-serif'],
          'albert': ['Albert Sans', 'system-ui', 'sans-serif'],
        },
        colors: {
          primary: '#00A1D6',
          button: '#1a1a1a',
          'button-hover': '#646cff',
        }
      },
      plugins: [],  
    },
  };

