import { useCallback } from "react";
import { useTilesStore, useMapStore } from "../../store";
import { sizeVariants } from "../../styles/grid";
import { RgbColor } from "../../types";
import Pixel from "../TileEditor/Pixel";
function MapEditor() {
  const mapTiles = useMapStore((state) => state.mapTiles);
  const setMapTiles = useMapStore((state) => state.setMapTiles);
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

  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={`grid aspect-square h-3/5 ${sizeVariants[16]} select-none bg-gray-800`}
      >
        {mapTiles.map((tile, i) => {
          function handleTileChange() {
            const newMapTiles = [...mapTiles];
            newMapTiles[i] = selectedTile;
            setMapTiles(newMapTiles);
          }
          return (
            <div
              className={`grid bg-gray-800 outline-white hover:relative hover:z-10 hover:outline ${sizeVariants[tile && tile.size]
                } 
                `}
              key={"t" + i}
              onClick={handleTileChange}
              onMouseMove={(e) => {
                e.buttons === 1 && handleTileChange();
              }}
            >
              {tile?.pixels.map((pixel, j) => {
                return (
                  <Pixel
                    savedColor={pixel}
                    index={i}
                    key={"t" + i + "-" + j}
                    tileId={tile && (tile.id as string)}
                    onColorChange={handlePixelColorChange}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapEditor;
