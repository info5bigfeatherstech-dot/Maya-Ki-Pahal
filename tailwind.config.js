/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#EF8B22",
        teal: "#16803C",
        cream: "#FFF9F2",
        charcoal: "#2B1948",
        terracotta: "#D41483",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 45px rgba(43, 43, 43, 0.09)",
      },
    },
  },
  plugins: [],
};
