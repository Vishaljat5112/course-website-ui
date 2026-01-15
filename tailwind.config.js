/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUpScale: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0px) scale(1)" },
        },
      },
      animation: {
        fadeUpScale: "fadeUpScale 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
