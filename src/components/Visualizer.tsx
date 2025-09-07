import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";

export default function Visualizer() {
  const { array, compareIndices, swapIndices } = useStore();

  if (!array || array.length === 0)
    return (
      <div className="flex items-center justify-center h-[60vh] text-muted-foreground">
        Shuffle to generate an array
      </div>
    );

  const barWidth = Math.max(40, Math.floor(600 / array.length));
  const gapSize = Math.max(10, Math.floor(40 / array.length));

  return (
    <div
      className="flex items-end justify-center h-[60vh] px-6 overflow-hidden"
      style={{ gap: `${gapSize}px` }}
    >
      <AnimatePresence>
        {array.map((val, idx) => {
          const isComparing = compareIndices.includes(idx);
          const isSwapping = swapIndices.includes(idx);

          let xOffset = 0;
          let yOffset = 0;

          if (isSwapping && swapIndices.length === 2) {
            yOffset = -50; // lift bars
            // small left/right offset for visual separation while lifted
            xOffset =
              idx === swapIndices[0] ? 10 : idx === swapIndices[1] ? -10 : 0;
          }

          return (
            <motion.div
              key={`${val}-${idx}`}
              layout
              animate={{
                y: yOffset,
                x: xOffset,
                scale: isSwapping ? 1.05 : 1,
                zIndex: isSwapping ? 10 : 1,
              }}
              transition={{
                y: { type: "spring", stiffness: 200, damping: 18 },
                x: { type: "spring", stiffness: 200, damping: 18 },
                scale: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                layout
                animate={{
                  height: val * 3.2,
                  backgroundColor: isSwapping
                    ? "#22c55e"
                    : isComparing
                    ? "#ef4444"
                    : "#3b82f6",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                className="rounded-t-md flex items-end justify-center text-white font-medium"
                style={{ width: `${barWidth}px` }}
              >
                <span className="mb-0.5 text-md">{val}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
