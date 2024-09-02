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
          <div className="relative isolate h-[735px] w-[520px] overflow-hidden border-[12px] border-white bg-[#cbd7fc]">
            {/* <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" /> */}

            <div className="absolute right-0 top-0 h-[540px] w-[215px] bg-gray-500" />
            <div className="absolute left-[90px] top-0 h-[660px] w-[360px] bg-gray-400" />
            <div className="absolute left-[48px] top-0 h-[560px] w-[405px] bg-gray-300" />
            <div className="absolute left-[48px] top-0 flex h-[320px] w-[300px] overflow-hidden bg-gray-200">
              <div className="h-full w-[50%] bg-pink-100 bg-[linear-gradient(290deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]" />
              <div className="relative h-full w-[30%] bg-pink-200 bg-[linear-gradient(60deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]">
                <div className="size-full absolute left-0 top-0 bg-gradient-to-l from-[rgba(222,243,254,0.5)] to-40%" />
              </div>
              <div className="relative h-full w-[20%] bg-pink-400" />
              {/* <div className="relative h-full w-[30%] bg-pink-400 bg-[linear-gradient(310deg,rgba(175,196,239,1)_0%,rgba(203,237,253,1)_59%,rgba(222,243,254,1)_100%)]" /> */}
              {/* <div className="size-full absolute left-0 top-0 backdrop-blur-sm" /> */}
              {/* <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" /> */}
            </div>

            {/* <div className="absolute left-0 top-0 flex h-[310px] w-[130px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iMjYwIiB2aWV3Qm94PSIwIDAgODIgMjYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgyIDBIMFYyNTkuNTE5QzIwLjQzMyAyMjMuNDY5IDMxLjI4MSAyMTguODkyIDQ1LjA4MDggMjEzLjA3QzQ2Ljk4NjUgMjEyLjI2NiA0OC45NDg2IDIxMS40MzggNTEgMjEwLjVDNjguNSAyMDIuNSA3NC41IDE5OS41IDgyIDE4OFYwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)] bg-right-top bg-no-repeat drop-shadow-[0_12px_12px_rgba(57,127,117,0.9)]" /> */}
            <div className="absolute left-0 top-0 flex h-[310px] w-[130px] [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDEzMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMxMFYwSDEzMFYxODhDMTIyLjUgMTk5LjUgMTE2LjUgMjAyLjUgOTkgMjEwLjVDODEuNSAyMTguNSA3MC41IDIxOC41IDQ1LjUgMjY0QzI1LjUgMzAwLjQgNi44MzMzMyAzMDkuODMzIDAgMzEwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)]">
              <div className="h-full w-[30%] bg-pink-100 bg-[linear-gradient(290deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]" />
              <div className="relative h-full w-[40%] bg-pink-200 bg-[linear-gradient(60deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]">
                <div className="size-full absolute left-0 top-0 bg-gradient-to-l from-[rgba(222,243,254,0.5)] to-40%" />
              </div>
              <div className="relative h-full w-[30%] bg-pink-400 bg-[linear-gradient(310deg,rgba(175,196,239,1)_0%,rgba(203,237,253,1)_59%,rgba(222,243,254,1)_100%)]" />
              <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
              <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
            </div>
          </div>
        </div>

        {/* Grain SVG */}
        <svg className="hidden">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.65"
              numOctaves="6"
              stitchTiles="stitch"
            />
          </filter>
        </svg>
      </MotionConfig>
    </Context.Provider>
  );
}
