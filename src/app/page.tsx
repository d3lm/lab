"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React from "react";

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
      <div className="flex h-screen items-center justify-center bg-[#f2f2f2]">
        <div className="size-[500px] relative overflow-hidden rounded-[100px] border border-[#cacaca] bg-[#e3e3e3] font-medium tracking-tight shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.06)]">
          <h1 className="w-full pt-14 text-center text-4xl font-medium tracking-tighter text-[#9f9f9f]">
            Podcast highlights
          </h1>

          <div className="absolute bottom-[-200px] right-[66px] h-full w-[330px] rotate-[22deg] space-y-4 rounded-[40px] bg-gradient-to-t from-[#a69346] from-50% to-[#b54827] px-8 py-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8),0_0_0_4px_rgba(100,100,100,0.15)]">
            <div className="flex justify-between text-lg font-medium tracking-tight text-[#eafafc]/50">
              <p>12 Aug</p>
              <p>Huberman Lab</p>
            </div>
            <h2 className="text-2xl font-medium tracking-tighter text-[#eafafc]">
              Perform with Dr. Andy Galpin: Nutritions to sup&hellip;
            </h2>
            <div className="space-y-1">
              <div className="w-full space-y-1 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">00:41</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal leading-snug text-[#eafafc]/70">
                  Strength of Evidence Scale, Creatine
                </h3>
              </div>
              <div className="w-full space-y-1 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">00:47</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal leading-snug text-[#eafafc]/70">
                  Creatine Doses, Frequency, Adverse Issues; Food Sourc&hellip;
                </h3>
              </div>
              <div className="w-full space-y-2 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">01:03</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal text-[#eafafc]/70">
                  The Upsides and Downsides of Creatine
                </h3>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-170px] right-[90px] h-full w-[330px] rotate-[8deg] space-y-4 rounded-[40px] bg-gradient-to-tl from-[#5c5c5c] from-10% to-[#1f1f1f] px-8 py-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8),0_0_0_4px_rgba(100,100,100,0.15)]">
            <div className="flex justify-between text-lg font-medium tracking-tight text-[#eafafc]/50">
              <p>12 Aug</p>
              <p>Huberman Lab</p>
            </div>
            <h2 className="text-2xl font-medium tracking-tighter text-[#eafafc]">
              Perform with Dr. Andy Galpin: Nutritions to sup&hellip;
            </h2>
            <div className="space-y-1">
              <div className="w-full space-y-1 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">00:41</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal leading-snug text-[#eafafc]/70">
                  Strength of Evidence Scale, Creatine
                </h3>
              </div>
              <div className="w-full space-y-1 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">00:47</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal leading-snug text-[#eafafc]/70">
                  Creatine Doses, Frequency, Adverse Issues; Food Sourc&hellip;
                </h3>
              </div>
              <div className="w-full space-y-2 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">01:03</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal text-[#eafafc]/70">
                  The Upsides and Downsides of Creatine
                </h3>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-140px] left-8 h-full w-[330px] rotate-[-4deg] space-y-4 rounded-[40px] bg-gradient-to-tl from-[#57b9e6] from-25% to-[#177cb0] px-8 py-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8),0_0_0_4px_rgba(100,100,100,0.15)]">
            <div className="flex justify-between text-lg font-medium tracking-tight text-[#eafafc]/50">
              <p>12 Aug</p>
              <p>Huberman Lab</p>
            </div>
            <h2 className="text-2xl font-medium tracking-tighter text-[#eafafc]">
              Perform with Dr. Andy Galpin: Nutritions to sup&hellip;
            </h2>
            <div className="space-y-1">
              <div className="w-full space-y-1 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">00:41</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal leading-snug text-[#eafafc]/70">
                  Strength of Evidence Scale, Creatine
                </h3>
              </div>
              <div className="w-full space-y-1 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">00:47</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal leading-snug text-[#eafafc]/70">
                  Creatine Doses, Frequency, Adverse Issues; Food Sourc&hellip;
                </h3>
              </div>
              <div className="w-full space-y-2 rounded-[16px] border-[1.5px] border-white/10 bg-white/10 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#eafafc]">01:03</p>
                  <ChevronRight className="size-5 text-white/30" />
                </div>
                <h3 className="text-lg font-normal text-[#eafafc]/70">
                  The Upsides and Downsides of Creatine
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
