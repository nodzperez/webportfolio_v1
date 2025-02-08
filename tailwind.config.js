/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1000px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
        navFont: ["SF Mono", "sans-serf"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors: {
        bodyColor: "#022F3C",
        textGreen: "#64ffda",
        textLight: "#e5e5e5",
        textDark: "#8892b0",
        hoverColor: "rgba(100, 255, 218, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
