import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";
import AlgorithmInfoPanel from "@/core/algorithmInfoPanel";

interface VisualizerProps {}

const Visualizer = forwardRef<HTMLDivElement, VisualizerProps>((props, ref) => {
  const { array, compareIndices, swapIndices, minIndex, pivotIndex } =
    useStore();

  if (!array || array.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
        <div>Shuffle to generate an array</div>
      </div>
    );

  const baseOffset = 20;
  const isMobile = window.innerWidth < 640; 
  const barWidth = isMobile
    ? Math.max(25, Math.floor(300 / array.length))
    : Math.max(40, Math.floor(600 / array.length));

  const gapSize = isMobile
    ? Math.max(8, Math.floor(15 / array.length))
    : Math.max(10, Math.floor(40 / array.length));

  return (
    <div className="flex flex-col items-center pb-32 w-full">
      <div
        className="flex items-end justify-center px-2"
        style={{ gap: `${gapSize}px` }}
      >
        <AnimatePresence>
          {array.map((val, idx) => {
            const isComparing = compareIndices.includes(idx);
            const isSwapping = swapIndices.includes(idx);
            const isPivot = pivotIndex >= 0 && pivotIndex === idx;
            const y = (isSwapping || isComparing ? -60 : 0) + baseOffset;

            return (
              <motion.div
                key={idx}
                animate={{
                  y,
                  scale: isSwapping ? 1.05 : 1,
                  zIndex: y !== 0 ? 10 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    height: val * 3,
                    backgroundColor: isSwapping
                      ? "#22c55e"
                      : minIndex === idx
                      ? "#facc15"
                      : isComparing
                      ? "#ef4444"
                      : isPivot
                      ? "#eab308"
                      : "#3b82f6",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="rounded-t-md flex items-end justify-center text-white font-medium"
                  style={{ width: `${barWidth}px`, marginTop: 60}}
                />
                <span className="mt-2 text-xs sm:text-sm">{val}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {array.length > 0 && (
        <div ref={ref} className="w-full max-w-xl mt-8">
          <AlgorithmInfoPanel />
        </div>
      )}
    </div>
  );
});


export default Visualizer;
