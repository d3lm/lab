"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React from "react";

export default function HomePage() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading, setLoading]);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.8 }}>
      <div className="relative flex h-screen items-center justify-center">
        <button
          type="button"
          aria-label="Generate"
          onClick={() => setLoading((prev) => !prev)}
          className="flex h-10 w-[140px] items-center justify-center rounded-full bg-gradient-to-b from-[#8D22E1] to-[#F043FF] text-white shadow-[0_-4px_6px_2px_#8D22E1_inset,0_0_0_2px_#AF3DFF_inset,0_5px_11px_0_rgba(114,22,123,0.5)]"
        >
          <motion.div
            initial={{ width: 97 }}
            animate={{ width: loading ? 110 : 97 }}
            className="flex items-center justify-between gap-1"
          >
            <div className="size-6 shrink-0 bg-white" />
            <AnimatePresence mode="popLayout">
              <motion.span
                key={loading ? "generating" : "generate"}
                initial={{ opacity: 0, y: -5, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 5, filter: "blur(4px)" }}
              >
                {loading ? "Generating" : "Generate"}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </button>
      </div>
    </MotionConfig>
  );
}
