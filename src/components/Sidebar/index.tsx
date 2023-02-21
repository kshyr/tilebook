import Tabs from "./Tabs";
import TilePicker from "./TilePicker";

function Sidebar() {
  return (
    <div className="flex h-full w-1/6 flex-col justify-around gap-16 bg-slate-400">
      <Tabs />
      <TilePicker />
    </div>
  );
}
export default Sidebar;
