import { Tile, RgbColor } from "./types";

const colors: RgbColor[] = [];

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

export const demoTile: Tile = {
  id: "demo",
  size: 16,
  pixels: colors,
};
