// square grid with sizes 8, 16, 32, 64, 128, 256, 512, 1024
const gridSizes = {
  8: "repeat(8, minmax(0, 1fr))",
  16: "repeat(16, minmax(0, 1fr))",
  24: "repeat(24, minmax(0, 1fr))",
  32: "repeat(32, minmax(0, 1fr))",
  48: "repeat(48, minmax(0, 1fr))",
  64: "repeat(64, minmax(0, 1fr))",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: gridSizes,
      gridTemplateRows: gridSizes,
    },
  },
  plugins: [],
};
