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

export default function Controls() {
  const {
    array,
    setArray,
    algorithm,
    setAlgorithm,
    speed,
    setSpeed,
    status,
    setStatus,
  } = useStore();

  const shuffle = () => {};
  const start = () => {};
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Select
          value={algorithm}
          onValueChange={(val) => setAlgorithm(val as AlgorithmKey)}
        >
          <SelectTrigger>
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

        <Button
          variant="secondary"
          onClick={shuffle}
          disabled={status === "sorting"}
        >
          Shuffle
        </Button>
        <Button onClick={start} disabled={status === "sorting"}>
          {status === "sorting" ? "Sorting..." : "Start"}
        </Button>
      </div>
    </div>
  );
}
