// create a type for a tile. app is a tilemap editor
type Pixel = {
  id: string;
  color: string;
};

export type Tile = {
  id: string;
  name: string;
  pixels: Pixel[][];
};

export type Tab = "Map" | "Tile";
