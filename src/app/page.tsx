"use client";

import { motion, MotionConfig, type Transition } from "framer-motion";
import Image from "next/image";
import React from "react";
import imageBarn from "@/assets/barn.jpg";

const transition: Transition = { type: "spring", bounce: 0, duration: 0.4 };

const Context = React.createContext<{
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}>({ status: "", setStatus: () => null });

function InnerContent() {
  const ctx = React.useContext(Context);

  return (
    <div className="size-[600px] relative overflow-hidden rounded-[100px] border border-[#cacaca] bg-[#e3e3e3] font-medium tracking-tight shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.06)]">
      <Image
        src={imageBarn}
        alt="Barn"
        className="size-full scale-150 object-cover"
      />

      <div className="absolute left-0 top-0 h-1/2 w-full backdrop-blur-md [mask:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-black/40" />

      <div className="absolute left-0 top-0 p-14 px-16">
        <p className="text-3xl font-normal leading-[1.4] tracking-wide text-white">
          Snowy Barn
          <br />
          Paradise
          <br />
          WA
        </p>
      </div>
      <div className="absolute right-0 top-0 flex gap-1 p-[75px] px-16">
        <div className="h-[3px] w-3.5 rounded-full bg-white/30" />
        <div className="h-[3px] w-3.5 rounded-full bg-white/30" />
        <div className="h-[3px] w-3.5 rounded-full bg-white" />
        <div className="h-[3px] w-3.5 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

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
    <Context.Provider value={{ status, setStatus }}>
      <MotionConfig transition={transition}>
        <main className="relative flex h-screen items-center justify-center">
          <InnerContent />
        </main>
      </MotionConfig>
    </Context.Provider>
  );
}
