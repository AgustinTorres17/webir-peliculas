/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["14px", {lineHeight: "24px", letterSpacing: "-0.03em"}],
      sm: ["16px", {lineHeight: "28px", letterSpacing: "-0.03em"}],
      base: ["18px", {lineHeight: "28px", letterSpacing: "-0.03em"}],
      lg: ["20px", {lineHeight: "36px", letterSpacing: "-0.03em"}],
      xl: ["24px", {lineHeight: "36px", letterSpacing: "-0.03em"}],
      "2xl": ["32px", {lineHeight: "40px", letterSpacing: "-0.032em"}],
      "3xl": ["40px", {lineHeight: "48px", letterSpacing: "-0.032em"}],
      "4xl": ["48px", {lineHeight: "56px", letterSpacing: "-0.032em"}],
      "5xl": ["64px", {lineHeight: "72px", letterSpacing: "-0.032em"}],
      "6xl": ["72px", {lineHeight: "80px", letterSpacing: "-0.032em"}],
      "7xl": ["96px", {lineHeight: "104px", letterSpacing: "-0.032em"}],
      "8xl": ["128px", {lineHeight: "136px", letterSpacing: "-0.032em"}],
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
