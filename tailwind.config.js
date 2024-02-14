/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.concave-container': {
          clipPath: 'ellipse(50% 100% at 50% 100%)',
          // Add other properties and values as needed
        },
        '.convex-container': {
          clipPath: 'ellipse(150% 100% at 50% 100%)',
          // Additional properties and values can be added if needed
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
