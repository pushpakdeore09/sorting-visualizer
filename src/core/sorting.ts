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
      await sleep(speed);

      if (arr[j] > arr[j + 1]) {
        // lift and visually swap
        setSwapIndices([j, j + 1]);
        await sleep(speed); 

        // swap array values immediately while lifted
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);

        await sleep(speed); // let them drop
        setSwapIndices([]); // clear swap highlight
        await sleep(speed);
      }
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
        setSwapIndices([]);
      } else {
        break;
      }
      j--;
    }
    
  }
  setCompareIndices([]);
  setStatus("idle");
}

export async function selectionSort() {
  const store = useStore.getState();
  const {
    array,
    setArray,
    speed,
    setStatus,
    setCompareIndices,
    setSwapIndices,
    setSortedIndices,
    setMinIndex, 
  } = store;

  setStatus("sorting");
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // highlight only i at start
    setCompareIndices([i]);
    setMinIndex(minIndex);
    await sleep(speed);

    for (let j = i + 1; j < arr.length; j++) {
      // highlight i and j
      setCompareIndices([i, j]);
      await sleep(speed);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        setMinIndex(minIndex); // update min highlight
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setSwapIndices([i, minIndex]);
      setArray([...arr]);
      await sleep(speed);
      setSwapIndices([]);
    }

    // mark i as sorted
    setSortedIndices([...useStore.getState().sortedIndices, i]);
    setMinIndex(-1); // clear min highlight for next round
  }

  setCompareIndices([]);
  setMinIndex(-1);
  setStatus("idle");
}
