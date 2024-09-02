"use client";

import { motion, MotionConfig, type Transition } from "framer-motion";
import React from "react";

const transition: Transition = { type: "spring", bounce: 0, duration: 0.4 };

const Context = React.createContext<{
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}>({ status: "", setStatus: () => null });

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
        <div className="flex h-screen items-center justify-center bg-[#f2f2f2]">
          <div className="relative isolate h-[735px] w-[520px] border-[12px] border-white bg-[#cbd7fc]">
            {/*   <div className="absolute right-0 top-0 h-[540px] w-[215px] bg-gray-500" /> */}
            {/*   <div className="absolute left-[90px] top-0 h-[660px] w-[360px] bg-gray-400" /> */}
            {/*   <div className="absolute left-[48px] top-0 h-[560px] w-[405px] bg-gray-300" /> */}
            <div className="absolute left-[48px] top-0 h-[320px] w-[300px] bg-gray-200" />
            <div className="absolute left-0 top-0 h-[310px] w-[130px] bg-gray-100" />
          </div>
        </div>
      </MotionConfig>
    </Context.Provider>
  );
}
