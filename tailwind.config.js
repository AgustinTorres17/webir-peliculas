/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      base: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      lg: ["20px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["32px", { lineHeight: "40px", letterSpacing: "-0.032em" }],
      "3xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "4xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "5xl": ["64px", { lineHeight: "72px", letterSpacing: "-0.032em" }],
      "6xl": ["72px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
      "7xl": ["96px", { lineHeight: "104px", letterSpacing: "-0.032em" }],
      "8xl": ["128px", { lineHeight: "136px", letterSpacing: "-0.032em" }],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: "#c7cb07",
        default: "#e0e0e0",
        secondary: "#5c5c5c",
        danger: "#606c00",
        primario: "#333333",
        "primario-claro": "#5c5c5c",
        "primario-claro-xl": "#b9b9b9",
        "primario-claro-lg": "#404040",
        accent: "#c7cb07",
        "accent-oscuro": "#606c00",
        fuente: "#e0e0e0",
        fondo: "#1a1a1a",
        "fondo-claro": "#292929",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
