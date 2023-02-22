export type RgbColor = `#${string}` | "transparent";

export type Pixel = RgbColor;

export type Tile = {
  size: number;
  pixels: Pixel[];
};

export type Tab = "Map" | "Tile";
