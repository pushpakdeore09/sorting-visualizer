import "./App.css";
import Controls from "./components/Controls";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Sorting Visualizer</h1>
          <div className='flex items-center gap-4'>
            <Controls />
            <ModeToggle />
          </div>
        </div>

        <div className="flex-1">
          <Visualizer />
        </div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
