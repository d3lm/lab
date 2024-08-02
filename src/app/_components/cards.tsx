"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion, useMotionValue } from "framer-motion";
import * as React from "react";
import useMeasure from "react-use-measure";
import { useTransform } from "framer-motion";

export function Cards() {
  const [ref, screen] = useMeasure();
  const mousePosition = useMousePosition();

  const mouseRelativeToScreen = useMotionValue(0);
  const mouseRelativeToCenter = useMotionValue(0);

  mouseRelativeToScreen.set(mousePosition.x / screen.width);
  mouseRelativeToCenter.set(
    Math.abs((mousePosition.x - screen.width / 2) / screen.width),
  );

  const rotate = useTransform(mouseRelativeToScreen, [0, 1], [10, -10]);
  const translateY = useTransform(mouseRelativeToCenter, [0, 0.5], [-20, -5]);

  return (
    <div
      ref={ref}
      className="flex h-screen w-full flex-col justify-between p-6"
    >
      <div className="absolute bottom-1/4 left-0 w-full">
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
