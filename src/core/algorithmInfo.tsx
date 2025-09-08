export const algorithmInfo = {
  bubble: {
    name: "Bubble Sort",
    best: "O(n)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    description: `Bubble Sort is like a lazy kid pushing bubbles in a pond: 
it repeatedly compares adjacent elements and swaps them if needed, 
letting the largest values slowly "bubble up" to the top. 
It’s easy to implement, but don’t try it on huge datasets — it will take 
forever, just like waiting for that lazy kid to finish. 
At least it doesn’t eat extra memory, so your computer won’t go hungry!`,
  },
  insertion: {
    name: "Insertion Sort",
    best: "O(n)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    description: `Insertion Sort works like sorting cards in your hand: 
it picks one element and inserts it in its correct position among the sorted part. 
It’s fast on small or nearly sorted arrays, but slows down when the array is large. 
Memory usage is minimal, so it won’t clutter your RAM. 
Perfect for teaching sorting logic with a visual demonstration!`,
  },
  selection: {
    name: "Selection Sort",
    best: "O(n²)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    description: `Selection Sort is like picking the best apple from a basket over and over: 
it scans the unsorted part of the array, finds the minimum, 
and puts it in its rightful place. Always predictable, always stubborn — 
it does the same number of comparisons regardless of input. 
Good for small arrays, bad for huge ones, like eating one apple at a time.`,
  },
  quick: {
    name: "Quick Sort",
    best: "O(n log n)",
    avg: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
    description: `Quick Sort is a clever ninja: it picks a pivot, partitions the array 
into smaller and larger elements, and sorts them recursively. 
If the pivot is smart, it slices the problem in half like a master chef. 
But choose a bad pivot, and Quick Sort will stumble like someone tripping on a banana peel. 
Randomized pivots save the day, and it usually finishes fast — no ninja tricks wasted!`,
  },
  merge: {
    name: "Merge Sort",
    best: "O(n log n)",
    avg: "O(n log n)",
    worst: "O(n log n)",
    space: "O(n)",
    description: `Merge Sort is like a team of librarians: it splits the books into halves, 
sorts each half separately, and then merges them neatly back together. 
It’s reliable — always O(n log n), even if the books are messy. 
But it needs extra tables (memory) to sort efficiently, so your library better have space! 
Stable, predictable, and a joy for order-loving nerds.`,
  },
} as const;

export type AlgorithmKey = keyof typeof algorithmInfo;
