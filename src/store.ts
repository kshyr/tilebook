import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { demoTile } from "./demoTile";
import type { RgbColor, Tile, Tab } from "./types";

type AppState = {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
};

type EditorState = {
  selectedColor: RgbColor;
  setSelectedColor: (color: RgbColor) => void;
  currentTile: Tile;
};

type TilesState = {
  tiles: Tile[];
  setTiles: (tiles: Tile[]) => void;
  selectedTile: Tile | null;
  setSelectedTile: (tile: Tile) => void;
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
        currentTile: demoTile,
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
        tiles: [useEditorStore.getState().currentTile],
        setTiles: (newTiles) => set({ tiles: newTiles }),
        selectedTile: null,
        setSelectedTile: (tile) => set({ selectedTile: tile }),
      }),
      {
        name: "tilebook",
      }
    )
  )
);
