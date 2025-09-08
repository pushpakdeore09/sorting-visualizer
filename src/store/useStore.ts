import { create } from "zustand";

interface Store {
  array: number[];
  setArray: (arr: number[]) => void;
  arraySize: number;
  setArraySize: (size: number) => void;
  algorithm: string;
  setAlgorithm: (algo: string) => void;
  speed: number;
  setSpeed: (val: number) => void;
  status: "idle" | "sorting";
  setStatus: (s: "idle" | "sorting") => void;
  compareIndices: number[]
  setCompareIndices: (indices: number[]) => void
  swapIndices: number[] 
  setSwapIndices: (indices: number[]) => void
  pivotIndex: number
  setPivotIndex: (index: number) => void
  sortedIndices: number[];
  setSortedIndices: (idx: number[]) => void;
  minIndex: number,
  setMinIndex: (i: number) =>void;
}

export const useStore = create<Store>((set) => ({
  array: [],
  setArray: (arr) => set({ array: arr }),
  arraySize: 10,
  setArraySize: (size) => set({arraySize: size}),
  algorithm: "bubble",
  setAlgorithm: (algo) => set({ algorithm: algo }),
  speed: 1000,
  setSpeed: (val) => set({ speed: val }),
  status: "idle",
  setStatus: (s) => set({ status: s }),
   compareIndices: [],
  setCompareIndices: (indices) => set({ compareIndices: indices }),
  swapIndices: [],
  setSwapIndices: (indices) => set({ swapIndices: indices }),
  pivotIndex: 0,
  setPivotIndex: (index) => set({pivotIndex: index}),
  sortedIndices: [],
  setSortedIndices: (idx) => set({ sortedIndices: idx }),
  minIndex: -1,
  setMinIndex: (i: number) => set({ minIndex: i }),
  
  
}));
