import Sidebar from "./components/Sidebar";
import TileEditor from "./components/TileEditor";
import { useAppStore } from "./store";

function App() {
  const currentTab = useAppStore((state) => state.currentTab);

  return (
    <div className="flex h-screen bg-gray-700 text-2xl">
      <Sidebar />
      <div className="h-full flex-1 bg-slate-900">
        {currentTab === "Map" ? (
          <div>Map</div>
        ) : currentTab === "Tile" ? (
          <TileEditor />
        ) : null}
      </div>
    </div>
  );
}

export default App;
