import { useRef, useState } from "react";
import Visualizer from "./components/Visualizer";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Controls from "./components/Controls";
import { Separator } from "./components/ui/separator";
import { algorithmInfo, type AlgorithmKey } from "./core/algorithmInfo";
import { useStore } from "./store/useStore";
import AlgorithmInfoPanel from "./core/algorithmInfoPanel";

function App() {
  const { algorithm } = useStore() as { algorithm: AlgorithmKey };
  const infoRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const handleScrollToInfo = () => {
    if (infoRef.current) {
      infoRef.current.scrollIntoView({ behavior: "smooth" });
      setActive(true);
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <div className="p-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Sorting Visualizer</h1>
          <div className="flex items-center gap-4">
            <Controls />
            <ModeToggle />
          </div>
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="ml-6 mt-2 text-lg font-semibold">
            Algorithm: {algorithmInfo[algorithm].name}
          </div>
          <div
            onClick={handleScrollToInfo}
            className={`mt-2 mr-6 cursor-pointer ${active ? "underline" : ""}`}
          >
            Get More Info
          </div>
        </div>

        <div className="flex-1 pb-32">
          <Visualizer />
        </div>

        
      </div>
    </ThemeProvider>
  );
}

export default App;
