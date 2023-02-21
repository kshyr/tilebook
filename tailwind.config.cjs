// square grid with sizes 8, 16, 32, 64, 128, 256, 512, 1024
const gridSizes = Array.from({ length: 8 }, (_, i) =>
  Math.pow(2, i + 3).toString()
).reduce(
  (obj, key) => ({
    ...obj,
    [key]: `repeat(${key}, minmax(0, 1fr))`,
  }),
  {}
);

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
