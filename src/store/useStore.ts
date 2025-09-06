import { create } from "zustand";

interface Store {
  array: number[];
  setArray: (arr: number[]) => void;
  algorithm: string;
  setAlgorithm: (algo: string) => void;
  speed: number;
  setSpeed: (val: number) => void;
  status: "idle" | "sorting";
  setStatus: (s: "idle" | "sorting") => void;
}

export const useStore = create<Store>((set) => ({
  array: [],
  setArray: (arr) => set({ array: arr }),
  algorithm: "bubble",
  setAlgorithm: (algo) => set({ algorithm: algo }),
  speed: 200,
  setSpeed: (val) => set({ speed: val }),
  status: "idle",
  setStatus: (s) => set({ status: s }),
}));
