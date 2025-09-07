import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { algorithmInfo, type AlgorithmKey } from "../core/algorithmInfo.tsx";
import { useStore } from "@/store/useStore.ts";
import { Button } from "./ui/button.tsx";
import { Slider } from "./ui/slider.tsx";
import { bubbleSort, insertionSort, selectionSort } from "@/core/sorting.ts";

export default function Controls() {
  const {
    setArray,
    algorithm,
    setAlgorithm,
    speed,
    setSpeed,
    status,
    setStatus,
  } = useStore() as {
    setArray: (array: number[]) => void;
    algorithm: AlgorithmKey;
    setAlgorithm: (algorithm: AlgorithmKey) => void;
    speed: number;
    setSpeed: (speed: number) => void;
    status: string;
    setStatus: (status: string) => void;
  };

  const shuffle = () => {
    const arr = Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * 100) + 5
    );
    setArray(arr);
    setStatus("idle");
  };
  const start = async () => {
    if(status === 'sorting') return
    switch(algorithm){
        case "bubble":
            await bubbleSort();
            break;
        case "insertion":
            await insertionSort();
            break;
        case "selection":
          await selectionSort()
          break;
        default: break;
    }
  };
  return (
    <>
      <div className="flex items-center gap-6">
        <Select
          value={algorithm}
          onValueChange={(val) => setAlgorithm(val as AlgorithmKey)}
          disabled={status === 'sorting'}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Algorithm" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(algorithmInfo).map((key) => {
              const algoKey = key as AlgorithmKey
              return (
                <SelectItem key={algoKey} value={algoKey}>
                  {algorithmInfo[algoKey].name}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Speed</span>
          <Slider
            value={[speed]}
            min={50}
            max={2000}
            step={50}
            onValueChange={(val) => setSpeed(val[0])}
            className="w-[180px]"
            
          />
          <span className="text-sm text-muted-foreground">{speed} ms</span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full border-t bg-background px-6 py-4 flex justify-center gap-4">
        <Button
          variant="secondary"
          onClick={shuffle}
          disabled={status === "sorting"}
          className='h-10 w-35 border-4 cursor-pointer text-lg'
        >
          Shuffle
        </Button>
        <Button onClick={start} disabled={status === "sorting"} className='h-10 w-35 cursor-pointer text-lg'>
          {status === "sorting" ? "Sorting..." : "Sort"}
        </Button>
      </div>
    </>
  );
}
