import { useCallback } from "react";
import { useTilesStore } from "../../store";
import { RgbColor } from "../../types";
import { sizeVariants } from "../../styles/grid";
import Pixel from "../TileEditor/Pixel";

function TilePicker() {
  const tiles = useTilesStore((state) => state.tiles);
  const addTile = useTilesStore((state) => state.addTile);
  const selectedTile = useTilesStore((state) => state.selectedTile);
  const setSelectedTile = useTilesStore((state) => state.setSelectedTile);
  const setTilePixelColor = useTilesStore((state) => state.setTilePixelColor);

  const handlePixelColorChange = useCallback(
    (index: number, color: string) => {
      setTilePixelColor(selectedTile.id as string, index, color as RgbColor);
    },
    [selectedTile.id, setTilePixelColor]
  );

  function createTile() {
    addTile({ size: 16, pixels: new Array(256).fill("#333333") as RgbColor[] });
  }

  return (
    <div className="grid max-h-[60%] grid-cols-2 place-items-center gap-2 overflow-y-auto p-4">
      {tiles.map((tile, i) => {
        return (
          <div
            className={`grid h-24 w-24 bg-slate-100 ${sizeVariants[tile.size]
              } ${tile === selectedTile && "outline"}`}
            key={"t" + i}
            onClick={() => setSelectedTile(tile)}
          >
            {tile.pixels.map((pixel, j) => {
              return (
                <Pixel
                  savedColor={pixel}
                  index={i}
                  key={"t" + i + "-" + j}
                  tileId={tile.id as string}
                  onColorChange={handlePixelColorChange}
                />
              );
            })}
          </div>
        );
      })}
      <div
        className="h-24 w-24 border border-dashed hover:cursor-pointer hover:border-solid"
        onClick={createTile}
      >
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="5" x2="8" y2="5" stroke="white" stroke-width="0.1" />
          <line x1="5" y1="2" x2="5" y2="8" stroke="white" stroke-width="0.1" />
        </svg>
      </div>
    </div>
  );
}

export default TilePicker;
