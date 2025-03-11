/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure all files are scanned
  theme: {
    extend: {
      colors: {
        primary: "#278C82", // Soft Teal
        secondary: "#6DA0A6", // Warm Beige
        accent: "#6DA0A6", // Light Pastel Orange
        // dark: "#6A4E34", // Earthy Brown
        // deep: "#471E26", // Deep Maroon
        background: "#F2DEC4", // This defines bg-background
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

{/* <palette>
<color name='retro-sky-pattern-on-old-paper-1' rgb='658DA6' r='101' g='140' b='165' />
<color name='retro-sky-pattern-on-old-paper-2' rgb='6DA0A6' r='109' g='160' b='165' />
<color name='retro-sky-pattern-on-old-paper-3' rgb='688C82' r='103' g='140' b='129' />
<color name='retro-sky-pattern-on-old-paper-4' rgb='D9C6A3' r='216' g='197' b='162' />
<color name='retro-sky-pattern-on-old-paper-5' rgb='D9C8B4' r='216' g='200' b='179' />
</palette> */}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         primary: "#58A6B6", // Soft Teal
//         secondary: "#B6906C", // Warm Beige
//         accent: "#FFD7B0", // Light Pastel Orange
//         dark: "#6A4E34", // Earthy Brown
//         deep: "#471E26", // Deep Maroon
//       },
//     },
//   },
//   plugins: [],
// };
