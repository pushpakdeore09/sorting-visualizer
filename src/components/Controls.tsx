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
import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from "@/core/sorting.ts";

export default function Controls() {
  const {
    arraySize,
    setArraySize,
    setArray,
    algorithm,
    setAlgorithm,
    speed,
    setSpeed,
    status,
    setStatus,
  } = useStore() as {
    arraySize: number;
    setArraySize: (arraySize: number) => void;
    setArray: (array: number[]) => void;
    algorithm: AlgorithmKey;
    setAlgorithm: (algorithm: AlgorithmKey) => void;
    speed: number;
    setSpeed: (speed: number) => void;
    status: string;
    setStatus: (status: string) => void;
  };

  const shuffle = (size: number) => {
    const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 5);
    setArray(arr);
    setStatus("idle");
  };

  const start = async () => {
    if (status === "sorting") return;
    switch (algorithm) {
      case "bubble":
        await bubbleSort();
        break;
      case "insertion":
        await insertionSort();
        break;
      case "selection":
        await selectionSort();
        break;
      case "quick":
        await quickSort();
        break;
      case "merge":
        await mergeSort();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
        <Select
          value={algorithm}
          onValueChange={(val) => setAlgorithm(val as AlgorithmKey)}
          disabled={status === "sorting"}
        >
          <SelectTrigger className="w-full sm:w-[200px] text-sm sm:text-base">
            <SelectValue placeholder="Select Algorithm" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(algorithmInfo).map((key) => {
              const algoKey = key as AlgorithmKey;
              return (
                <SelectItem key={algoKey} value={algoKey}>
                  {algorithmInfo[algoKey].name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        <Select
          value={arraySize.toString()}
          onValueChange={(val) => {
            const size = parseInt(val);
            setArraySize(size);
            shuffle(size);
          }}
          disabled={status === "sorting"}
        >
          <SelectTrigger className="w-full sm:w-[120px] text-sm sm:text-base">
            <SelectValue placeholder="Array Size" />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 15, 20, 25].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <span className="text-sm sm:text-base font-medium">Time</span>
          <Slider
            value={[speed]}
            min={50}
            max={2000}
            step={50}
            onValueChange={(val) => setSpeed(val[0])}
            className="w-full sm:w-[180px]"
            disabled={status === "sorting"}
          />
          <span className="text-sm sm:text-base text-muted-foreground">{speed} ms</span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full border-t bg-background px-4 py-3 flex flex-col sm:flex-row justify-center sm:justify-center gap-2 sm:gap-4">
        <Button
          variant="secondary"
          onClick={() => shuffle(arraySize)}
          disabled={status === "sorting"}
          className="h-10 w-full sm:w-40 text-sm sm:text-lg"
        >
          Shuffle
        </Button>
        <Button
          onClick={start}
          disabled={status === "sorting"}
          className="h-10 w-full sm:w-40 text-sm sm:text-lg"
        >
          {status === "sorting" ? "Sorting..." : "Sort"}
        </Button>
      </div>
    </>
  );
}
