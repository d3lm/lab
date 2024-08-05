"use client";

import { motion, MotionConfig, useMotionValue } from "framer-motion";
import * as React from "react";
import { useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { Heart } from "lucide-react";

function Card(props: {
  className?: string;
  cardClassName?: string;
  index: number;
  activeCard: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
  src: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
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

  return (
    <motion.div
      key={props.index}
      animate={
        props.activeCard === props.index
          ? { translateY: -500 + (props.index - 1) * -72 }
          : props.activeCard !== 0
            ? { translateY: 32 }
            : {}
      }
      style={{ bottom: `-${(props.index + 0.6) * 72}px` }}
      className={cn("absolute left-0 w-full px-16", props.className)}
    >
      <motion.div
        key={props.index}
        whileTap={{
          rotate: rotate.get() * (props.activeCard === props.index ? -1 : 1),
          translateY:
            translateY.get() * (props.activeCard === props.index ? -1 : 1),
        }}
        onClick={() =>
          props.setActiveCard((prevState) => {
            if (prevState === props.index) return 0;
            return props.index;
          })
        }
        onMouseOver={() => videoRef.current?.play()}
        onMouseLeave={() => {
          if (props.activeCard !== props.index) {
            videoRef.current?.pause();
          }
        }}
        onMouseMove={handleMouse}
        className={cn(
          "aspect-square overflow-hidden rounded-2xl bg-gray-300 text-background drop-shadow-[0_0_20px_rgba(0,0,0,0.0)] grayscale first:drop-shadow-[0_-50px_100px_rgba(0,0,0,0.1)] hover:grayscale-0",
          { "grayscale-0": props.activeCard === props.index },
          props.cardClassName,
        )}
      >
        <video
          ref={videoRef}
          src={props.src}
          muted
          loop
          className="aspect-square"
        />
      </motion.div>
    </motion.div>
  );
}

export function Cards() {
  const [activeCard, setActiveCard] = React.useState(0);
  useMousePosition();

  return (
    <MotionConfig transition={{ duration: 0.6, type: "spring", bounce: 0.1 }}>
      <div className="relative flex h-screen w-full max-w-[600px] flex-col justify-between overflow-hidden bg-background p-6">
        <motion.div
          animate={{ scale: activeCard !== 0 ? 0.95 : 1 }}
          className="size-full"
        >
          <div className="mx-8 space-y-1">
            <p className="ml-1 pt-12 text-sm text-muted-foreground">2024</p>
            <h1 className="text-2xl font-semibold tracking-tight">
              July recap
            </h1>
          </div>
          <div className="mt-[72px] flex flex-col items-center justify-center space-y-2 whitespace-pre rounded-2xl bg-muted py-[72px] text-center">
            <p className="font-semibold">{`Thank you all for\nthe support`}</p>
            <Heart fill="hsl(var(--foreground))" className="h-auto w-[144px]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: activeCard !== 0 ? 1 : 0 }}
          className="size-full absolute left-0 top-0 bg-background/20 backdrop-blur-sm"
        />
        <Card
          index={1}
          src="/love-this/9-hours.mp4"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <Card
          index={2}
          src="/love-this/2.25-hours.mp4"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          cardClassName="bg-blue-300"
        />
        <Card
          index={3}
          src="/love-this/simple-kit.mp4"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          cardClassName="bg-red-300"
        />
        <Card
          index={4}
          src="/love-this/fade-away.mp4"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          cardClassName="bg-red-300"
        />
        <Card
          index={5}
          src="/love-this/swap-component.mp4"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          cardClassName="bg-red-300"
        />
      </div>
    </MotionConfig>
  );
}
