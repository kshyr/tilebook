export type Pixel = `#${string}`;

export type Tile = {
  pixels: Pixel[];
};

export type Tab = "Map" | "Tile";
