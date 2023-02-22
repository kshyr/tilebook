import { HexColorPicker } from "react-colorful";
import { useEditorStore, useTilesStore } from "../../store";
import Pixel from "./Pixel";

export const sizeVariants: { [key: number]: string } = {
  8: "grid-cols-8 grid-rows-8",
  16: "grid-cols-16 grid-rows-16",
  24: "grid-cols-24 grid-rows-24",
  32: "grid-cols-32 grid-rows-32",
  48: "grid-cols-48 grid-rows-48",
  64: "grid-cols-64 grid-rows-64",
};
function TileEditor() {
  const currentTile = useEditorStore((state) => state.currentTile);

  const selectedColor = useEditorStore((state) => state.selectedColor);
  const setSelectedColor = useEditorStore((state) => state.setSelectedColor);

  const size = 16;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div
        className={`grid aspect-square h-3/5 ${sizeVariants[size]} select-none bg-gray-800`}
      >
        {currentTile.pixels.map((color, i) => (
          <Pixel key={i} index={i} savedColor={color} editable />
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
