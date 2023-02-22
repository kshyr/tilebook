import { useTilesStore } from "../../store";
import { sizeVariants } from "../TileEditor";
import Pixel from "../TileEditor/Pixel";

function TilePicker() {
  const tiles = useTilesStore((state) => state.tiles);
  return (
    <div className="grid max-h-[60%] grid-cols-2 place-items-center gap-2 overflow-y-auto p-4">
      {tiles.map((tile, i) => {
        console.log(tile.pixels, tile.size);
        return (
          <div
            className={`grid h-24 w-24 bg-slate-100 ${sizeVariants[tile.size]}`}
            key={i}
          >
            {tile.pixels.map((pixel, i) => {
              return <Pixel savedColor={pixel} index={i} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TilePicker;
