"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion, useMotionValue } from "framer-motion";
import * as React from "react";
import useMeasure from "react-use-measure";
import { useTransform } from "framer-motion";

export function Cards() {
  const [ref, screen] = useMeasure();
  const mousePosition = useMousePosition();

  const halfScreenWidth = screen.width / 2;
  const mouseRange = Math.min(
    Math.max(mousePosition.x - (screen.x + screen.width / 2), -halfScreenWidth),
    halfScreenWidth,
  );

  const mouseRelativeToCenter = useMotionValue(0);
  mouseRelativeToCenter.set(mouseRange);

  const rotate = useTransform(
    mouseRelativeToCenter,
    [-halfScreenWidth, halfScreenWidth],
    [5, -5],
  );
  const translateY = useTransform(
    mouseRelativeToCenter,
    [-halfScreenWidth, halfScreenWidth],
    [-30, -5],
  );

  return (
    <div
      ref={ref}
      className="relative flex h-screen w-full max-w-[600px] flex-col justify-between overflow-hidden bg-background p-6"
    >
      <div className="absolute bottom-[180px] left-0 w-full">
        <div className="relative">
          <div className="absolute w-full px-6">
            <motion.div
              whileTap={{ rotate: rotate.get(), translateY: translateY.get() }}
              className="aspect-[1.586] rounded-2xl bg-foreground/70 p-6 text-background"
            >
              Card 1
            </motion.div>
          </div>
          <div className="absolute top-[60px] w-full px-6">
            <motion.div
              whileTap={{ rotate: rotate.get(), translateY: translateY.get() }}
              className="bg-foreground/85 aspect-[1.586] rounded-2xl p-6 text-background"
            >
              Card 2
            </motion.div>
          </div>
          <div className="absolute top-[120px] w-full px-6">
            <motion.div
              whileTap={{ rotate: rotate.get(), translateY: translateY.get() }}
              className="aspect-[1.586] rounded-2xl bg-foreground p-6 text-background"
            >
              Card 3
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
