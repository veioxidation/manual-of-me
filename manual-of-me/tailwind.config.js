/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure all files are scanned
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Custom deep blue
        secondary: "#818CF8",
        background: "#F8FAFC", // This defines bg-background
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};