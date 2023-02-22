import { useState } from "react";
import { useEditorStore } from "../../store";

type PixelProps = {
  index: number;
  savedColor: string;
};
function Pixel({ index, savedColor }: PixelProps) {
  const selectedColor = useEditorStore((state) => state.selectedColor);
  const setSelectedColor = useEditorStore((state) => state.setSelectedColor);

  const [color, setColor] = useState(savedColor ?? "transparent");
  return (
    <div
      className="h-full w-full"
      style={{ backgroundColor: color }}
      onClick={() => setColor(selectedColor)}
      onContextMenu={(e) => {
        e.preventDefault();
        setSelectedColor(color);
      }}
      onMouseOver={(e) => e.buttons === 1 && setColor(selectedColor)}
    ></div>
  );
}

export default Pixel;
