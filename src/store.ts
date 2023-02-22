import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { demoTile } from "./demoTile";
import type { Tile, Tab } from "./types";

type AppState = {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
};

type EditorState = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  currentTile: Tile;
};

type TilesState = {
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
        selectedTile: null,
        setSelectedTile: (tile) => set({ selectedTile: tile }),
      }),
      {
        name: "tilebook",
      }
    )
  )
);
