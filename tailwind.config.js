/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button-rgb': 'rgb(76, 175, 79)', // Buttons color
        'light-grey': '#F5F7FA',
        'light-green': "#E8F5E9"
      },
      textColor: {
        'themeColor': '#4CAF4F',
        'greyColor': '#717171',
        'theme-black': '#4D4D4D'
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      maxWidth: {
        '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       '1/3': '33.33%'
      }

    },
  },
  plugins: [],
}

