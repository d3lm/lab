"use client";

import { motion, MotionConfig, useMotionValue } from "framer-motion";
import * as React from "react";
import { useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function Card(props: {
  className?: string;
  index: number;
  activeCard: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
}) {
  const x = useMotionValue(0.5);
  const xFromCenter = useMotionValue(0);

  const rotate = useTransform(x, [0, 1], [5, -5]);
  const translateY = useTransform(xFromCenter, [0, 1], [-30, -5]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set((event.clientX - rect.left) / rect.width);
    xFromCenter.set(
      (Math.abs(event.clientX - rect.left - rect.width / 2) / rect.width) * 2,
    );
  }

  // function handleMouseLeave() {
  //   x.set(0.5);
  //   xFromCenter.set(0);
  // }

  return (
    <motion.div
      key={props.index}
      animate={
        props.activeCard === props.index
          ? { translateY: -340 + (props.index - 1) * -60 }
          : props.activeCard !== 0
            ? { translateY: 20 }
            : {}
      }
      className={cn("absolute bottom-0 left-0 w-full px-6", props.className)}
    >
      <motion.div
        whileTap={{
          rotate: rotate.get() * (props.activeCard === props.index ? -1 : 1),
          translateY:
            translateY.get() * (props.activeCard === props.index ? -1 : 1),
        }}
        whileHover={{
          translateY: -5,
        }}
        onClick={() =>
          props.setActiveCard((prevState) => {
            if (prevState === props.index) return 0;
            return props.index;
          })
        }
        onMouseMove={handleMouse}
        // onMouseLeave={handleMouseLeave}
        className="aspect-[1.6] rounded-2xl bg-foreground/70 p-6 text-background sm:aspect-[2]"
      >
        Card {props.index}
      </motion.div>
    </motion.div>
  );
}

export function Cards() {
  const [activeCard, setActiveCard] = React.useState(0);

  return (
    <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}>
      <div className="relative flex h-screen w-full max-w-[600px] flex-col justify-between overflow-hidden bg-background p-6">
        <Card index={1} activeCard={activeCard} setActiveCard={setActiveCard} />
        <Card
          index={2}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          className="bottom-[-60px]"
        />
        <Card
          index={3}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          className="bottom-[-120px]"
        />
      </div>
    </MotionConfig>
  );
}
