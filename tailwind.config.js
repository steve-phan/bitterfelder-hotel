/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#4f46e5",
          700: "#4338ca",
        },
        overlay: "#c2c2c2b3",
      },
    },
  },
  plugins: [],
};
