import { useState } from "react";
import { useEditorStore } from "../../store";
import { RgbColor } from "../../types";

type PixelProps = {
  index: number;
  savedColor: string;
  editable?: boolean;
};
function Pixel({ index, savedColor, editable = false }: PixelProps) {
  const selectedColor = useEditorStore((state) => state.selectedColor);
  const setSelectedColor = useEditorStore((state) => state.setSelectedColor);

  const [color, setColor] = useState(savedColor ?? "transparent");
  return (
    <div
      className="h-full w-full"
      style={{ backgroundColor: color }}
      onClick={() => editable && setColor(selectedColor)}
      onContextMenu={(e) => {
        e.preventDefault();
        editable && setSelectedColor(color as RgbColor | "transparent");
      }}
      onMouseOver={(e) =>
        editable && e.buttons === 1 && setColor(selectedColor)
      }
    ></div>
  );
}

export default Pixel;
