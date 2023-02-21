import { HexColorPicker } from "react-colorful";
import Pixel from "./Pixel";
function TileEditor() {
  const width = 16;
  const height = 16;
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div
        className={`grid aspect-square h-3/5 grid-cols-16 grid-rows-16 bg-gray-800`}
      >
        {Array.from({ length: width * height }).map((_, i) => (
          <Pixel key={i} />
        ))}
      </div>
      <HexColorPicker />
    </div>
  );
}

export default TileEditor;
