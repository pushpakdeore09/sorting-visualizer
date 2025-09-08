# Sorting Visualizer

A **fun and interactive Sorting Visualizer** built with **React, TypeScript, Framer Motion, and TailwindCSS**. This project allows you to visualize popular sorting algorithms step by step, including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.

---

## Features

- Visualize **Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort**
- Step-by-step comparison, swaps, and pivot highlighting
- Interactive **speed control**
- Select **array size** dynamically (1–25 elements)
- Algorithm information panel with **description**, **time complexity**, and **space complexity**
- Responsive design for **desktop and mobile**
- Fun animations using **Framer Motion**
- Light/Dark theme toggle

---

## Algorithm Information Panel

Each algorithm comes with a detailed description and its complexities:

| Algorithm       | Best Time   | Average Time | Worst Time  | Space   |
|-----------------|------------|--------------|------------|---------|
| Bubble Sort     | O(n)       | O(n²)        | O(n²)      | O(1)    |
| Selection Sort  | O(n²)      | O(n²)        | O(n²)      | O(1)    |
| Insertion Sort  | O(n)       | O(n²)        | O(n²)      | O(1)    |
| Merge Sort      | O(n log n) | O(n log n)   | O(n log n) | O(n)    |
| Quick Sort      | O(n log n) | O(n log n)   | O(n²)      | O(log n)|

---

## Tech Stack

- **React** with TypeScript
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Zustand** for state management
- **ShadCN/UI** components

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/sorting-visualizer.git
cd sorting-visualizer
npm install
npm run dev
