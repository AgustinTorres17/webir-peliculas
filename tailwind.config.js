/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1024px",
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
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
    },
    extend: {
      colors: {
        primary: '#333333',
        success: '#c7cb07',
        default: '#e0e0e0',
        secondary: '#5c5c5c',
        danger: '#606c00',
        primario: '#333333',
        'primario-claro': '#5c5c5c',
        'primario-claro-xl': '#b9b9b9',
        'primario-claro-lg': '#404040',
        'accent': '#c7cb07',
        'accent-oscuro': '#606c00',
        'fuente': '#e0e0e0',
        'fondo': '#1a1a1a',
        'fondo-claro': '#292929',
      },
    }
  },darkMode: "class",
  plugins: [nextui()],
};
