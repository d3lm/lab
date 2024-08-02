"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import * as React from "react";
import useMeasure from "react-use-measure";
import { useTransform } from "framer-motion";

export function Cards() {
  const [activeCard, setActiveCard] = React.useState(0);
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
    <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}>
      <div
        ref={ref}
        className="relative flex h-screen w-full max-w-[600px] flex-col justify-between overflow-hidden bg-background p-6"
      >
        <motion.div
          animate={
            activeCard === 1
              ? { translateY: -340 }
              : activeCard !== 0
                ? { translateY: 20 }
                : {}
          }
          className="absolute -bottom-[50px] left-0 w-full px-6"
        >
          <motion.div
            whileTap={{
              rotate: rotate.get() * (activeCard === 1 ? -1 : 1),
              translateY: translateY.get() * (activeCard === 1 ? -1 : 1),
            }}
            onClick={() =>
              setActiveCard((prevState) => {
                if (prevState === 1) return 0;
                return 1;
              })
            }
            className="aspect-[1.586] rounded-2xl bg-foreground/70 p-6 text-background"
          >
            Card 1
          </motion.div>
        </motion.div>
        <motion.div
          animate={
            activeCard === 2
              ? { translateY: -410 }
              : activeCard !== 0
                ? { translateY: 20 }
                : {}
          }
          className="absolute bottom-[-120px] left-0 w-full px-6"
        >
          <motion.div
            whileTap={{
              rotate: rotate.get() * (activeCard === 2 ? -1 : 1),
              translateY: translateY.get() * (activeCard === 2 ? -1 : 1),
            }}
            onClick={() =>
              setActiveCard((prevState) => {
                if (prevState === 2) return 0;
                return 2;
              })
            }
            className="bg-foreground/85 aspect-[1.586] rounded-2xl p-6 text-background"
          >
            Card 2
          </motion.div>
        </motion.div>
        <motion.div
          animate={
            activeCard === 3
              ? { translateY: -480 }
              : activeCard !== 0
                ? { translateY: 20 }
                : {}
          }
          className="absolute bottom-[-190px] left-0 w-full px-6"
        >
          <motion.div
            whileTap={{
              rotate: rotate.get() * (activeCard === 3 ? -1 : 1),
              translateY: translateY.get() * (activeCard === 3 ? -1 : 1),
            }}
            onClick={() =>
              setActiveCard((prevState) => {
                if (prevState === 3) return 0;
                return 3;
              })
            }
            className="aspect-[1.586] rounded-2xl bg-foreground p-6 text-background"
          >
            Card 3
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
