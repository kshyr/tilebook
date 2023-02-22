import React, { useState, useCallback } from "react";
import { useEditorStore, useTilesStore } from "../../store";
import { RgbColor } from "../../types";

type PixelProps = {
  index: number;
  tileId: string;
  savedColor: RgbColor | null;
  onColorChange: (index: number, color: RgbColor) => void;
  editable?: boolean;
};

function Pixel({
  index,
  tileId,
  savedColor,
  onColorChange,
  editable = false,
}: PixelProps) {
  const selectedColor = useEditorStore((state) => state.selectedColor);
  const setSelectedColor = useEditorStore((state) => state.setSelectedColor);
  const setTilePixelColor = useTilesStore((state) => state.setTilePixelColor);
  const [color, setColor] = useState(savedColor);

  const handleClick = useCallback(() => {
    if (editable) {
      setColor(selectedColor);
      onColorChange(index, selectedColor);
    }
  }, [editable, selectedColor, setTilePixelColor, tileId, index]);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (editable) {
        setSelectedColor(color as RgbColor);
      }
    },
    [editable, setSelectedColor, color]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (editable && e.buttons === 1) {
        setColor(selectedColor);
        onColorChange(index, selectedColor);
      }
    },
    [editable, selectedColor, setTilePixelColor, tileId, index]
  );

  return (
    <div
      className="h-full w-full"
      style={{ backgroundColor: color ?? "transparent" }}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseMove={handleMouseMove}
    />
  );
}

export default React.memo(Pixel);
