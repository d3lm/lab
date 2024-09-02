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

            <div className="absolute right-0 top-0 flex h-[540px] w-[215px] bg-gray-500 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE0IiBoZWlnaHQ9IjU0MCIgdmlld0JveD0iMCAwIDIxNCA1NDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOTEuNSA1MjRDMjAxLjg1IDUxNS42NTMgMjA5LjUgNTE0IDIxNCA1MTRWMEgwVjQ2MUM2MSA0NjEgNjAgNTQwIDE2Ny41IDU0MEMxNzcgNTQwIDE3NiA1MzYuNSAxOTEuNSA1MjRaIiBmaWxsPSIjOTc5Nzk3Ii8+Cjwvc3ZnPgo=)]">
              <div className="relative h-full w-[15%] bg-pink-200 bg-[linear-gradient(130deg,rgba(172,172,236,1)_0%,rgba(203,237,253,1)_80%,rgba(222,243,254,1)_100%)]" />
              <div className="relative h-full w-[20%] bg-pink-200 bg-[linear-gradient(260deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]">
                <div className="size-full absolute left-0 top-0 bg-gradient-to-r from-[rgba(222,243,254,0.4)]" />
              </div>
              <div className="h-full w-[65%] bg-pink-100 bg-[linear-gradient(120deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]" />
              <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
              <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
            </div>

            <div className="absolute left-[90px] top-0 flex h-[660px] w-[360px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjY2MCIgdmlld0JveD0iMCAwIDM2MCA2NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDY2MFYwSDM2MFYzNzcuMTQzQzIzOS41IDM3Ny4xNDMgMjY5LjQ4OSA1MTcuNjgzIDIxOC41IDQ5OUMxODAuMDk2IDQ4NC45MjggMTc1Ljg0MiA0ODguNjQ3IDE2NC4wODggNDk4LjkyM0wxNjQgNDk5QzE1Mi4xNzkgNTA5LjMzNCA5My40NzEzIDQ3NS4yNiA3Ny41IDQ4OS4xMDdDNjEuNDc0MiA1MDMuMDAyIDU0Ljk3MTQgNTY2LjUgNDkgNTg1LjVDMzggNjIwLjUgMTMuOTI0OSA2MjYuNjY0IDAgNjYwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)] bg-no-repeat drop-shadow-[0_0_45px_rgba(0,0,0,1)]" />
            <div className="absolute left-[90px] top-0 flex h-[660px] w-[360px] bg-gray-400 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjY2MCIgdmlld0JveD0iMCAwIDM2MCA2NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDY2MFYwSDM2MFYzNzcuMTQzQzIzOS41IDM3Ny4xNDMgMjY5LjQ4OSA1MTcuNjgzIDIxOC41IDQ5OUMxODAuMDk2IDQ4NC45MjggMTc1Ljg0MiA0ODguNjQ3IDE2NC4wODggNDk4LjkyM0wxNjQgNDk5QzE1Mi4xNzkgNTA5LjMzNCA5My40NzEzIDQ3NS4yNiA3Ny41IDQ4OS4xMDdDNjEuNDc0MiA1MDMuMDAyIDU0Ljk3MTQgNTY2LjUgNDkgNTg1LjVDMzggNjIwLjUgMTMuOTI0OSA2MjYuNjY0IDAgNjYwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)]">
              <div className="relative h-full w-[15%] bg-pink-200 bg-[linear-gradient(130deg,rgba(172,172,236,1)_0%,rgba(203,237,253,1)_80%,rgba(222,243,254,1)_100%)]" />
              <div className="relative h-full w-[20%] bg-pink-200 bg-[linear-gradient(260deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]">
                <div className="size-full absolute left-0 top-0 bg-gradient-to-r from-[rgba(222,243,254,0.4)]" />
              </div>
              <div className="h-full w-[65%] bg-pink-100 bg-[linear-gradient(120deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]" />
              <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
              <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
            </div>

            <div className="absolute left-[48px] top-0 flex h-[560px] w-[405px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA1IiBoZWlnaHQ9IjU2MCIgdmlld0JveD0iMCAwIDQwNSA1NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MDUgNTYwVjBIMFYzMjBDNTUgMzIwIDU1LjA4MiA0MDMuMzI3IDExNS41IDM5Ni41QzIwNCAzODYuNSAyMDUuNSAzODEgMjUxIDQxMUMyNjQuMjk5IDQxOS43NjkgMjc2LjAzMiA0MjQuNzUxIDI5NCA0MzYuNUMzMTIuMDI5IDQ0OC4yODkgMzE2IDQ3NyAzNDggNTEzQzM3OC41IDU0MSAzODkuMzM0IDUzMS43MTUgNDA1IDU2MFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)] bg-right-top bg-no-repeat drop-shadow-[-40px_-15px_45px_rgba(0,0,0,0.8)]" />
            <div className="absolute left-[48px] top-0 flex h-[560px] w-[405px] bg-gray-300 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA1IiBoZWlnaHQ9IjU2MCIgdmlld0JveD0iMCAwIDQwNSA1NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MDUgNTYwVjBIMFYzMjBDNTUgMzIwIDU1LjA4MiA0MDMuMzI3IDExNS41IDM5Ni41QzIwNCAzODYuNSAyMDUuNSAzODEgMjUxIDQxMUMyNjQuMjk5IDQxOS43NjkgMjc2LjAzMiA0MjQuNzUxIDI5NCA0MzYuNUMzMTIuMDI5IDQ0OC4yODkgMzE2IDQ3NyAzNDggNTEzQzM3OC41IDU0MSAzODkuMzM0IDUzMS43MTUgNDA1IDU2MFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)]">
              <div className="h-full w-[65%] bg-pink-100 bg-[linear-gradient(200deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]" />
              <div className="relative h-full w-[20%] bg-pink-200 bg-[linear-gradient(150deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]">
                <div className="size-full absolute left-0 top-0 bg-gradient-to-l from-[rgba(222,243,254,0.4)]" />
              </div>
              <div className="relative h-full w-[15%] bg-pink-200 bg-[linear-gradient(220deg,rgba(172,172,236,1)_0%,rgba(203,237,253,1)_80%,rgba(222,243,254,1)_100%)]" />
              <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
              <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
            </div>

            <div className="absolute left-[48px] top-0 flex h-[320px] w-[300px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMwMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMyMFYwSDMwMFYxMTlDMjc0LjUgMTQzIDI1NSAxNDYgMjEzLjUgMTU5LjVDMTc0LjMwMiAxNzIuMjUxIDEzNC41IDI0MC40NzQgMTE4LjUgMjUzLjVDNzIuMzQ2MiAyOTEuMDc0IDI4IDI4MSAwIDMyMFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)] bg-no-repeat drop-shadow-[0_0_45px_rgba(0,0,0,1)]" />
            <div className="absolute left-[48px] top-0 flex h-[320px] w-[300px] bg-gray-200 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMwMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMyMFYwSDMwMFYxMTlDMjc0LjUgMTQzIDI1NSAxNDYgMjEzLjUgMTU5LjVDMTc0LjMwMiAxNzIuMjUxIDEzNC41IDI0MC40NzQgMTE4LjUgMjUzLjVDNzIuMzQ2MiAyOTEuMDc0IDI4IDI4MSAwIDMyMFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)]">
              <div className="h-full w-[50%] bg-pink-100 bg-[linear-gradient(290deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]" />
              <div className="relative h-full w-[30%] bg-pink-200 bg-[linear-gradient(60deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]">
                <div className="size-full absolute left-0 top-0 bg-gradient-to-l from-[rgba(222,243,254,0.5)] to-40%" />
              </div>
              <div className="relative h-full w-[20%] bg-pink-400 bg-[linear-gradient(310deg,rgba(175,196,239,1)_0%,rgba(203,237,253,1)_59%,rgba(222,243,254,1)_100%)]" />
              <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
              <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
            </div>

            <div className="absolute left-0 top-0 flex h-[310px] w-[130px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDEzMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMxMFYwSDEzMFYxODhDMTIyLjUgMTk5LjUgMTE2LjUgMjAyLjUgOTkgMjEwLjVDODEuNSAyMTguNSA3MC41IDIxOC41IDQ1LjUgMjY0QzI1LjUgMzAwLjQgNi44MzMzMyAzMDkuODMzIDAgMzEwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)] bg-right-top bg-no-repeat drop-shadow-[0_0_45px_rgba(0,0,0,1)]" />
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
