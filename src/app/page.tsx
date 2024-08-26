"use client";

import { motion, MotionConfig } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

export default function HomePage() {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <div className="flex h-screen items-center justify-center">
        <div className="relative flex w-[800px] gap-4 rounded-[26px] bg-[#151517] bg-[linear-gradient(45deg,#161618_41.67%,#212123_41.67%,#212123_50%,#161618_50%,#161618_91.67%,#212123_91.67%,#212123_100%)] bg-[size:16.97px_16.97px] p-10 shadow-[0_6px_6px_-3px_rgba(0,0,0,0.1),0_0_0px_2.5px_#161618,0_0_0px_2.5px_rgba(255,255,255,0.15)_inset]">
          <div className="size-9 z-10 flex items-center justify-center rounded-full bg-[#38d199]/20 p-1.5 pt-2">
            <Check className="text-[#38d199]" strokeWidth={2.5} />
          </div>
          <div className="z-10 space-y-5">
            <p className="text-[33px] font-medium leading-none tracking-tight text-[#38d199]">
              Upload Successful
            </p>
            <div className="flex items-center gap-1 font-light">
              <div className="w-fit rounded-[10px] bg-white/10 px-3 py-1">
                <p className="text-3xl text-white">Invoice.pdf</p>
              </div>
              <p className="text-3xl text-white/70">
                was uploaded and is ready to use.
              </p>
            </div>
          </div>
          <div className="absolute left-[2.5px] top-[2.5px] h-[calc(100%-5px)] w-full rounded-[24px] bg-gradient-to-r from-[#151517] from-30%" />
          <div className="absolute left-0 top-0 h-full w-full rounded-[26px] bg-[radial-gradient(at_left_top,rgba(47,162,120,0.35),rgba(0,0,0,0)_90%)]" />
        </div>
      </div>
    </MotionConfig>
  );
}
