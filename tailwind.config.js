/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#3A7326",
        "smoky-blak": "#0D0E0C",
        "slate-gray": "#A2A89E",
        "white-smoke": "#E0E3DD",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },

      screens: {
        wide: "1204px",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },

      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
