"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React from "react";
import imageThunderBg from "@/assets/thunder-bg.png";
import imageAzura from "@/assets/azura.png";
import Image from "next/image";

export default function HomePage() {
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setStatus("idle");
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setStatus]);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <div className="relative flex h-screen items-center justify-center">
        <div className="size-[500px] relative flex flex-col justify-between overflow-hidden rounded-2xl px-2.5 pt-3">
          <div className="relative z-10 text-[42px] font-[450] leading-none tracking-tighter">
            <h1 className="text-white">Meet Thunder:</h1>
            <p className="text-white/50">
              The New, Fastest Way to Trade On-Chain.
            </p>
          </div>

          <div className="z-10 flex flex-1 pt-5">
            <div className="flex w-full flex-col justify-between">
              <div></div>
              <div className="flex h-12 items-end border-t-[1.5px] pb-2">
                <p className="text-4xl font-[450] leading-none tracking-tighter text-white">
                  Thunder
                </p>
              </div>
            </div>
            <div className="h-full w-2 bg-[linear-gradient(0deg,#ffffff_7.14%,rgba(0,0,0,0)_7.14%,rgba(0,0,0,0)_50%,#ffffff_50%,#ffffff_57.14%,rgba(0,0,0,0)_57.14%,rgba(0,0,0,0)_100%)] bg-[size:14px_14px]" />
            <div className="flex w-full flex-col justify-between">
              <div></div>
              <div className="flex h-12 items-end justify-end border-t-[1.5px] pb-2">
                <Image src={imageAzura} alt="Azura" className="size-7" />
              </div>
            </div>
          </div>

          <Image
            src={imageThunderBg}
            alt="Thunder BG"
            className="size-full absolute left-0 top-0 z-0"
          />
          <div className="size-full absolute left-0 top-0 z-0 opacity-30 [filter:url(#grain)]" />
        </div>
      </div>

      {/* Grain SVG */}
      <svg className="hidden">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </MotionConfig>
  );
}
