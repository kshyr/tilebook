import { useEffect, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { useEditorStore, useTilesStore } from "../../store";
import { sizeVariants } from "../../styles/grid";
import { RgbColor } from "../../types";
import Pixel from "./Pixel";

function TileEditor() {
  const selectedTile = useTilesStore((state) => state.selectedTile);
  const selectedColor = useEditorStore((state) => state.selectedColor);
  const setSelectedColor = useEditorStore((state) => state.setSelectedColor);
  const setTilePixelColor = useTilesStore((state) => state.setTilePixelColor);

  const size = 16;

  const handlePixelColorChange = useCallback(
    (index: number, color: string) => {
      setTilePixelColor(selectedTile.id as string, index, color as RgbColor);
    },
    [selectedTile.id, setTilePixelColor]
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div
        className={`grid aspect-square h-3/5 ${sizeVariants[16]} select-none bg-gray-800`}
      >
        {selectedTile.pixels.map((color, i) => (
          <Pixel
            key={i}
            index={i}
            tileId={selectedTile.id as string}
            savedColor={color}
            onColorChange={handlePixelColorChange}
            editable
          />
        ))}
      </div>
      <HexColorPicker
        color={selectedColor}
        onChange={setSelectedColor as (newColor: string) => void}
      />
    </div>
  );
}

export default TileEditor;
