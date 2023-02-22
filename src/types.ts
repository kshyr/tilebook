export type RgbColor = `#${string}`;

export type Tile = {
  id?: string;
  size: number;
  pixels: (RgbColor | null)[];
};

export type Tab = "Map" | "Tile";
