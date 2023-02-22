import { Tile, Pixel } from "./types";

const colors: Pixel[] = [];

for (let i = 0; i < 256; i++) {
  const value = (i * 255) / 255;
  const r = Math.floor(value);
  const g = Math.floor(value);
  const b = Math.floor(value);
  colors.push(
    `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
      .toString(16)
      .padStart(2, "0")}`
  );
}

for (let i = 0; i < colors.length; i += 16) {
  const row = colors.slice(i, i + 16);
  console.log(row.join(" "));
}

export const demoTile: Tile = {
  size: 16,
  pixels: colors,
};
