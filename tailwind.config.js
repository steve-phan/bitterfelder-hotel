/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#4f46e5",
          700: "#4338ca",
        },
        overlay: "#c2c2c2b3",
      },
      padding: {
        header: "56px",
        "header-md": "82px",
        bottom: "48px",
      },
      maxHeight: {
        carousel: "460px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
