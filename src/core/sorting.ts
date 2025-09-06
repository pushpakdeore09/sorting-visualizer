import { useStore } from "@/store/useStore";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function bubbleSort() {
  const store = useStore.getState();
  const {
    array,
    setArray,
    speed,
    setStatus,
    setCompareIndices,
    setSwapIndices,
  } = store;
  setStatus("sorting");
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      setCompareIndices([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        setSwapIndices([j, j + 1]);
        await sleep(500);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        //await sleep(speed)
        setSwapIndices([]);
      }
      await sleep(speed);
    }
  }
  setCompareIndices([]);
  setStatus("idle");
}

export async function insertionSort() {
  const store = useStore.getState();
  const {
    array,
    setArray,
    speed,
    setStatus,
    setCompareIndices,
    setSwapIndices,
  } = store;
  setStatus("sorting");
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      setCompareIndices([j - 1, j]);
      await sleep(speed / 2);
      if (arr[j - 1] > arr[j]) {
        setSwapIndices([j - 1, j]);
        await sleep(speed / 2);
        [arr[j - 1], arr[j]] = [arr[j], arr[j-1]];
        setArray([...arr]);
        //await sleep(speed);
        setSwapIndices([]);
      } else {
        break;
      }
      j--;
    }
    //await sleep(speed / 2);
  }
  setCompareIndices([]);
  setStatus("idle");
}
