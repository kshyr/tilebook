import { useAppStore } from "../../store";
import type { Tab } from "../../types";

const tabs: Tab[] = ["Map", "Tile"];

function Tabs() {
  const currentTab = useAppStore((state) => state.currentTab);
  const setCurrentTab = useAppStore((state) => state.setCurrentTab);

  return (
    <div className="flex h-24 flex-col">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`h-12 w-full text-white  ${
            currentTab === tab
              ? "bg-slate-600"
              : "bg-slate-400 hover:bg-slate-500"
          }`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
