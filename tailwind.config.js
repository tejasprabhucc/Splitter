/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "#dc2f02",
        green: "#00474b",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
    },
    screens: {
      sm: { max: "550px" },
      md: { max: "1100px" },
      lg: { min: "1100px" },
    },
  },
  plugins: [],
};
