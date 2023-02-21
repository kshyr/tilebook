import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { Tile, Tab } from "./types";

type AppState = {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
  selectedTile: Tile | null;
  setSelectedTile: (tile: Tile) => void;
};

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        currentTab: "Tile",
        setCurrentTab: (tab) => set({ currentTab: tab }),
        selectedTile: null,
        setSelectedTile: (tile) => set({ selectedTile: tile }),
      }),
      {
        name: "tilebook",
      }
    )
  )
);
