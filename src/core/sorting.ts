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
    setPivotIndex,
  } = store;

  setStatus("sorting");
  setPivotIndex(-1);
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let swapped = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      setCompareIndices([j, j + 1]);
      await sleep(speed);

      if (arr[j] > arr[j + 1]) {
        setSwapIndices([j, j + 1]);

        await sleep(500);

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        swapped=true
        setSwapIndices([]);
      }
    }
     if (!swapped) break;
  }

  setCompareIndices([]);
  setSwapIndices([]);
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
    setPivotIndex,
  } = store;
  setStatus("sorting");
  setPivotIndex(-1);
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      setCompareIndices([j - 1, j]);
      await sleep(speed / 2);
      if (arr[j - 1] > arr[j]) {
        setSwapIndices([j - 1, j]);
        await sleep(speed / 2);
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
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
    setPivotIndex,
  } = store;

  setStatus("sorting");
  setPivotIndex(-1);
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    setCompareIndices([i]);
    setMinIndex(minIndex);
    await sleep(speed);

    for (let j = i + 1; j < arr.length; j++) {
      setCompareIndices([i, j]);
      await sleep(speed);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        setMinIndex(minIndex);
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setSwapIndices([i, minIndex]);
      setArray([...arr]);
      await sleep(speed);
      setSwapIndices([]);
    }

    setSortedIndices([...useStore.getState().sortedIndices, i]);
    setMinIndex(-1);
  }

  setCompareIndices([]);
  setMinIndex(-1);
  setStatus("idle");
}

export async function quickSort(low?: number, high?: number) {
  const store = useStore.getState();
  const {
    array,
    setArray,
    speed,
    setStatus,
    setCompareIndices,
    setSwapIndices,
    setPivotIndex,
  } = store;

  setStatus("sorting");
  const arr = [...array];

  async function partition(low: number, high: number) {
    const pivot = arr[low];
    setPivotIndex(low);
    let i = low + 1;

    for (let j = low + 1; j <= high; j++) {
      setCompareIndices([i, j]);
      await sleep(speed);

      if (arr[j] < pivot) {
        setSwapIndices([i, j]);
        await sleep(speed);

        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);

        await sleep(speed);
        setSwapIndices([]);
        i++;
      }
    }

    setSwapIndices([low, i - 1]);
    await sleep(speed);

    [arr[low], arr[i - 1]] = [arr[i - 1], arr[low]];
    setArray([...arr]);

    await sleep(speed);
    setSwapIndices([]);
    setPivotIndex(-1);

    return i - 1;
  }

  async function quickSortRecursive(low: number, high: number) {
    if (low < high) {
      const pi = await partition(low, high);
      await quickSortRecursive(low, pi - 1);
      await quickSortRecursive(pi + 1, high);
    }
  }

  const start = low ?? 0;
  const end = high ?? arr.length - 1;

  await quickSortRecursive(start, end);

  setCompareIndices([]);
  setSwapIndices([]);
  setPivotIndex(-1);
  setStatus("idle");
}

export async function mergeSort() {
  const store = useStore.getState();
  const {
    array,
    setArray,
    speed,
    setStatus,
    setCompareIndices,
    setSwapIndices,
    setPivotIndex,
  } = store;

  setStatus("sorting");
  setPivotIndex(-1);
  const arr = [...array];

  async function merge(low: number, mid: number, high: number) {
    let left = arr.slice(low, mid + 1);
    let right = arr.slice(mid + 1, high + 1);

    let i = 0,
      j = 0,
      k = low;

    while (i < left.length && j < right.length) {
      // lift both comparing bars
      setCompareIndices([low + i, mid + 1 + j]);
      await sleep(speed);

      if (left[i] <= right[j]) {
        // show chosen element also lifting as "swap"
        setSwapIndices([low + i]);
        arr[k] = left[i];
        setArray([...arr]);
        await sleep(speed);
        setSwapIndices([]);
        i++;
      } else {
        setSwapIndices([mid + 1 + j]);
        arr[k] = right[j];
        setArray([...arr]);
        await sleep(speed);
        setSwapIndices([]);
        j++;
      }

      k++;
      setCompareIndices([]); // clear highlight after decision
    }

    while (i < left.length) {
      arr[k] = left[i];
      setSwapIndices([k]);
      setArray([...arr]);
      await sleep(speed);
      setSwapIndices([]);
      i++;
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      setSwapIndices([k]);
      setArray([...arr]);
      await sleep(speed);
      setSwapIndices([]);
      j++;
      k++;
    }
  }

  async function mergeSortRecursive(low: number, high: number) {
    if (low < high) {
      const mid = Math.floor((low + high) / 2);

      await mergeSortRecursive(low, mid);
      await mergeSortRecursive(mid + 1, high);

      await merge(low, mid, high);
    }
  }

  await mergeSortRecursive(0, arr.length - 1);

  setCompareIndices([]);
  setSwapIndices([]);
  setStatus("idle");
}
