"use client";

import { motion, MotionConfig } from "framer-motion";
import imageTiger from "@/assets/tiger.jpg";
import Image from "next/image";
import React from "react";
import svgPhone from "./iphone-gold.svg";
import { cn } from "@/lib/utils";

function InnerContent() {
  const ctx = React.useContext(Context);

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[51px] bg-[#523505]">
      <motion.div
        animate={{ scale: ctx.blurred ? 1 : 0.8 }}
        className="size-full"
      >
        <Image
          src={imageTiger}
          alt="tiger"
          className="size-full object-cover"
        />
      </motion.div>

      <motion.div
        animate={{ height: ctx.blurred ? "100%" : "30%" }}
        className="absolute left-0 top-0 w-full rounded-t-[24px] bg-transparent backdrop-blur-xl [mask:linear-gradient(180deg,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)]"
      />
      <motion.div
        animate={{ width: ctx.blurred ? "100%" : "40%" }}
        className="absolute right-0 top-0 h-full rounded-l-[24px] bg-transparent backdrop-blur-xl [mask:linear-gradient(270deg,rgba(0,0,0,1)_30%,rgba(0,0,0,0)_100%)]"
      />
      <motion.div
        animate={{ height: ctx.blurred ? "100%" : "30%" }}
        className="absolute bottom-0 left-0 w-full rounded-b-[24px] bg-transparent backdrop-blur-xl [mask:linear-gradient(0deg,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)]"
      />
      <motion.div
        animate={{ width: ctx.blurred ? "100%" : "40%" }}
        className="absolute left-0 top-0 h-full rounded-l-[24px] bg-transparent backdrop-blur-xl [mask:linear-gradient(90deg,rgba(0,0,0,1)_30%,rgba(0,0,0,0)_100%)]"
      />

      <motion.div className="absolute left-0 top-0 h-[30%] w-full bg-gradient-to-b from-[#523505] from-10%" />
      <motion.div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-t from-[#523505] from-10%" />
    </div>
  );
}

const Context = React.createContext<{
  blurred: boolean;
  setBlurred: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  blurred: false,
  setBlurred: () => null,
});

export default function HappyCardsPage() {
  const [blurred, setBlurred] = React.useState(true);

  React.useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setBlurred(false);
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setBlurred]);

  return (
    <Context.Provider value={{ blurred, setBlurred }}>
      <MotionConfig transition={{ type: "spring", bounce: 0, duration: 3 }}>
        <main className="flex h-screen select-none items-center justify-center overflow-hidden">
          <div
            className={cn(
              "relative flex aspect-square h-screen items-center justify-center bg-[#fafafa] transition-colors duration-300",
            )}
          >
            <div className="absolute left-1/2 top-1/2 z-20 h-[814px] w-[376px] -translate-x-1/2 -translate-y-1/2">
              <InnerContent />
            </div>

            <div className="fixed bottom-[72px] left-1/2 z-50 h-1.5 w-[360px] -translate-x-1/2 px-28">
              <div className="size-full rounded-3xl bg-black" />
            </div>

            <Image
              src={svgPhone}
              alt="iphone mock"
              className="pointer-events-none relative z-30"
            />
          </div>
        </main>
      </MotionConfig>
    </Context.Provider>
  );
}
