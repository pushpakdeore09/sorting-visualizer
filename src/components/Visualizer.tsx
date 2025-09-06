import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";

export default function Visualizer() {
  const { array, compareIndices, swapIndices, pivotIndex, algorithm } =
    useStore();

 if (!array || array.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-muted-foreground">
        Shuffle to generate an array
      </div>
    );
  }

  return (
    <div className="flex items-end justify-center h-[60vh] gap-1 px-6">
      <AnimatePresence>
        {array.map((val, idx) => {
        //   const isComparing = compareIndices.includes(idx);
        //   const isSwapping = swapIndices.includes(idx);
        //   const isPivot = algorithm === "quick" && pivotIndex === idx;

          return (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                y: swapIndices.includes(idx) ? -30 : 0,
                x:
                  swapIndices.length === 2
                    ? // check if current idx is left or right of the swap
                      idx === swapIndices[0]
                      ? -20 // move left bar slightly left
                      : idx === swapIndices[1]
                      ? 20 // move right bar slightly right
                      : 0
                    : 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="flex flex-col items-center"
            >
              

              <motion.div
                layout
                animate={{
                  height: val * 5,
                  backgroundColor:
                    algorithm === "quick" && pivotIndex === idx
                      ? "#facc15"
                      : swapIndices.includes(idx)
                      ? "#22c55e"
                      : compareIndices.includes(idx)
                      ? "#ef4444"
                      : "#3b82f6",
                }}
                transition={{ duration: 0.3 }}
                className="w-10 rounded-t-md"
              />
              {val}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
