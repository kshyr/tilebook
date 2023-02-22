import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { demoTile } from "./demoTile";
import type { RgbColor, Tile, Tab } from "./types";

type AppState = {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
};

type EditorState = {
  selectedColor: RgbColor;
  setSelectedColor: (color: RgbColor) => void;
};

type TilesState = {
  tiles: Tile[];
  setTiles: (tiles: Tile[]) => void;
  addTile: (tile: Tile) => void;
  selectedTile: Tile;
  setSelectedTile: (tile: Tile) => void;
  setTilePixelColor: (
    tileId: string,
    pixelIndex: number,
    color: RgbColor
  ) => void;
};

type MapState = {
  mapTiles: Tile[];
  setMapTiles: (mapTiles: Tile[]) => void;
};

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        currentTab: "Tile",
        setCurrentTab: (tab) => set({ currentTab: tab }),
      }),
      {
        name: "tilebook",
      }
    )
  )
);

export const useEditorStore = create<EditorState>()(
  devtools(
    persist(
      (set) => ({
        selectedColor: "#000",
        setSelectedColor: (color) => set({ selectedColor: color }),
      }),
      {
        name: "tilebook",
      }
    )
  )
);

export const useTilesStore = create<TilesState>()(
  devtools(
    persist(
      (set) => ({
        tiles: [demoTile],
        setTiles: (newTiles) => set({ tiles: newTiles }),
        addTile: (newTile) =>
          set((state) => ({
            tiles: [...state.tiles, { ...newTile, id: uuidv4() }],
          })),
        selectedTile: demoTile,
        setSelectedTile: (newSelectedTile) =>
          set({ selectedTile: newSelectedTile }),
        setTilePixelColor: (
          tileId: string,
          pixelIndex: number,
          color: RgbColor
        ) =>
          set((state) => {
            const tiles = state.tiles.map((tile) => {
              if (tile.id === tileId) {
                const pixels = [...tile.pixels];
                pixels[pixelIndex] = color;
                return { ...tile, pixels };
              }
              return tile;
            });
            return { tiles };
          }),
      }),
      {
        name: "tilebook-tiles",
      }
    )
  )
);

export const useMapStore = create<MapState>()(
  devtools(
    persist(
      (set) => ({
        mapTiles: new Array(256).fill(null),
        setMapTiles: (newMapTiles) => set({ mapTiles: newMapTiles }),
      }),
      {
        name: "tilebook-map",
      }
    )
  )
);
