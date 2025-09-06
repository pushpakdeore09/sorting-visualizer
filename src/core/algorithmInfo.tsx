export const algorithmInfo = {
  bubble: { name: "Bubble Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)" },
  insertion: { name: "Insertion Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)" },
  selection: { name: "Selection Sort", best: "O(n²)", avg: "O(n²)", worst: "O(n²)", space: "O(1)" },
} as const

export type AlgorithmKey = keyof typeof algorithmInfo
