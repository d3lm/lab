"use client";

import { motion, MotionConfig, type Transition } from "framer-motion";
import React from "react";

// NOTE: TOOK 3 HOURS

const transition: Transition = {
  type: "spring",
  bounce: 0,
  duration: 3,
};

const Context = React.createContext<{
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}>({ status: "", setStatus: () => null });

export default function HomePage() {
  const [status, setStatus] = React.useState("idle");
  const isHovered1 = status === "hovered-1";
  const isHovered2 = status === "hovered-2";
  const isHovered3 = status === "hovered-3";
  const isHovered4 = status === "hovered-4";
  const isHovered5 = status === "hovered-5";

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
          <div className="relative h-[735px] w-[518px] overflow-hidden bg-[#cbd7fc] outline outline-[12px] outline-white">
            <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />

            <div className="absolute h-[660px] w-[520px] bg-top bg-no-repeat [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIwIiBoZWlnaHQ9IjY2MCIgdmlld0JveD0iMCAwIDUyMCA2NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAzMTBWMEg0OEg5MEgxMzBIMzA2SDM0OEg0NTBINDUzSDUyMFY1MDhDNTE1LjUgNTA4IDQ5NSA1MTIgNDc0IDUyMkM0NjcuODA2IDUyNC45NSA0NjMuNzQzIDUyNy45OTggNDYwLjE1OCA1MzAuNjg3QzQ1Ny43MjQgNTMyLjUxMyA0NTUuNTExIDUzNC4xNzQgNDUzIDUzNS41MjZWNTYwQzQ0Ni41OTggNTQ4LjQ0MSA0NDEuMDAzIDU0My4xNTYgNDM0LjU0MyA1MzkuMDM3QzQzNC4yIDUzOS4wMjcgNDMzLjg1MyA1MzkuMDE1IDQzMy41IDUzOUMzOTYuOTU5IDUzNy40NTYgMzgwLjQxNiA1MTYuODQxIDM2NC42NSA0OTcuMTk0QzM1Ny41NjkgNDg4LjM3IDM1MC42NDUgNDc5Ljc0MSAzNDIuMTM1IDQ3My4xMjNDMzM0LjIyNyA0OTIuNjQ3IDMyNi4yOTUgNTA1LjUyMSAzMDguNSA0OTlDMjcwLjA5NiA0ODQuOTI4IDI2NS44NDIgNDg4LjY0NyAyNTQuMDg4IDQ5OC45MjNMMjU0IDQ5OUMyNDguNTI0IDUwMy43ODcgMjMyLjk4OCA0OTkuMDQ1IDIxNi4yOTkgNDkzLjk1MkMxOTYuOTYgNDg4LjA0OSAxNzYuMDczIDQ4MS42NzQgMTY3LjUgNDg5LjEwN0MxNTYuMjA2IDQ5OC44OTkgMTQ5LjY0MiA1MzMuMzI1IDE0NC42NiA1NTkuNDUyTDE0NC42NiA1NTkuNDUyQzE0Mi41NzMgNTcwLjM5OSAxNDAuNzYzIDU3OS44OSAxMzkgNTg1LjVDMTMzLjE3MSA2MDQuMDQ3IDEyMy42NyA2MTQuNDk3IDExMy45NTMgNjI1LjE4NEMxMDUuMzM0IDYzNC42NjMgOTYuNTQ1NyA2NDQuMzMgOTAgNjYwVjM0Mi41NzNDNzkuMzc2IDMyOS44ODggNjYuOTQ2NSAzMjAgNDggMzIwVjI1OS41MTlDNDcuMTgyMyAyNjAuOTYxIDQ2LjM0OTIgMjYyLjQ1NCA0NS41IDI2NEMyNS41IDMwMC40IDYuODMzMzMgMzA5LjgzMyAwIDMxMFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)]">
              <div
                onMouseOver={() => setStatus("hovered-5")}
                onMouseOut={() => setStatus("idle")}
                className="absolute right-0 top-0 flex h-[540px] w-[215px] bg-gray-500 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE0IiBoZWlnaHQ9IjU0MCIgdmlld0JveD0iMCAwIDIxNCA1NDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNjggNTIyQzE4OSA1MTIgMjA5LjUgNTA4IDIxNCA1MDhWMEgwVjQ2MUM2MSA0NjEgNTYuNSA1MzYgMTI3LjUgNTM5QzE1MCA1MzkuOTUxIDE1MC4wMjIgNTMwLjU2MSAxNjggNTIyWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)]"
              >
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(130deg,rgba(172,172,236,1) 0%,rgba(203,237,253,1) 80%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered5
                      ? {
                          backgroundImage:
                            "linear-gradient(310deg,rgba(172,172,236,1) 0%,rgba(203,237,253,1) 80%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[15%] bg-pink-200 bg-[linear-gradient(130deg,rgba(172,172,236,1)_0%,rgba(203,237,253,1)_80%,rgba(222,243,254,1)_100%)]"
                />
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(260deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered5
                      ? {
                          backgroundImage:
                            "linear-gradient(80deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[20%] bg-pink-200 bg-[linear-gradient(260deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]"
                >
                  <div className="size-full absolute left-0 top-0 bg-gradient-to-r from-[rgba(222,243,254,0.4)]" />
                </motion.div>
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(120deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered5
                      ? {
                          backgroundImage:
                            "linear-gradient(300deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="h-full w-[65%] bg-pink-100 bg-[linear-gradient(120deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]"
                />
                <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
                <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
              </div>

              <div className="absolute left-[90px] top-0 flex h-[660px] w-[360px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjY2MCIgdmlld0JveD0iMCAwIDM2MCA2NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDY2MFYwSDM2MFYzNzcuMTQzQzIzOS41IDM3Ny4xNDMgMjY5LjQ4OSA1MTcuNjgzIDIxOC41IDQ5OUMxODAuMDk2IDQ4NC45MjggMTc1Ljg0MiA0ODguNjQ3IDE2NC4wODggNDk4LjkyM0wxNjQgNDk5QzE1Mi4xNzkgNTA5LjMzNCA5My40NzEzIDQ3NS4yNiA3Ny41IDQ4OS4xMDdDNjEuNDc0MiA1MDMuMDAyIDU0Ljk3MTQgNTY2LjUgNDkgNTg1LjVDMzggNjIwLjUgMTMuOTI0OSA2MjYuNjY0IDAgNjYwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)] bg-no-repeat drop-shadow-[0_0_45px_rgba(0,0,0,0.6)]" />
              <div
                onMouseOver={() => setStatus("hovered-4")}
                onMouseOut={() => setStatus("idle")}
                className="absolute left-[90px] top-0 flex h-[660px] w-[360px] bg-gray-400 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjY2MCIgdmlld0JveD0iMCAwIDM2MCA2NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDY2MFYwSDM2MFYzNzcuMTQzQzIzOS41IDM3Ny4xNDMgMjY5LjQ4OSA1MTcuNjgzIDIxOC41IDQ5OUMxODAuMDk2IDQ4NC45MjggMTc1Ljg0MiA0ODguNjQ3IDE2NC4wODggNDk4LjkyM0wxNjQgNDk5QzE1Mi4xNzkgNTA5LjMzNCA5My40NzEzIDQ3NS4yNiA3Ny41IDQ4OS4xMDdDNjEuNDc0MiA1MDMuMDAyIDU0Ljk3MTQgNTY2LjUgNDkgNTg1LjVDMzggNjIwLjUgMTMuOTI0OSA2MjYuNjY0IDAgNjYwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)]"
              >
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(130deg,rgba(172,172,236,1) 0%,rgba(203,237,253,1) 80%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered4
                      ? {
                          backgroundImage:
                            "linear-gradient(310deg,rgba(172,172,236,1) 0%,rgba(203,237,253,1) 80%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[15%] bg-pink-200 bg-[linear-gradient(130deg,rgba(172,172,236,1)_0%,rgba(203,237,253,1)_80%,rgba(222,243,254,1)_100%)]"
                />
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(260deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered4
                      ? {
                          backgroundImage:
                            "linear-gradient(80deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[20%] bg-pink-200 bg-[linear-gradient(260deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]"
                >
                  <div className="size-full absolute left-0 top-0 bg-gradient-to-r from-[rgba(222,243,254,0.4)]" />
                </motion.div>
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(120deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered4
                      ? {
                          backgroundImage:
                            "linear-gradient(300deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="h-full w-[65%] bg-pink-100 bg-[linear-gradient(120deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]"
                />
                <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
                <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
              </div>

              <div className="absolute left-[48px] top-0 flex h-[560px] w-[405px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA1IiBoZWlnaHQ9IjU2MCIgdmlld0JveD0iMCAwIDQwNSA1NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MDUgNTYwVjBIMFYzMjBDNTUgMzIwIDU1LjA4MiA0MDMuMzI3IDExNS41IDM5Ni41QzIwNCAzODYuNSAyMDUuNSAzODEgMjUxIDQxMUMyNjQuMjk5IDQxOS43NjkgMjc2LjAzMiA0MjQuNzUxIDI5NCA0MzYuNUMzMTIuMDI5IDQ0OC4yODkgMzE2IDQ3NyAzNDggNTEzQzM3OC41IDU0MSAzODkuMzM0IDUzMS43MTUgNDA1IDU2MFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)] bg-right-top bg-no-repeat drop-shadow-[-40px_-15px_45px_rgba(0,0,0,0.8)]" />
              <div
                onMouseOver={() => setStatus("hovered-3")}
                onMouseOut={() => setStatus("idle")}
                className="absolute left-[48px] top-0 flex h-[560px] w-[405px] bg-gray-300 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA1IiBoZWlnaHQ9IjU2MCIgdmlld0JveD0iMCAwIDQwNSA1NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MDUgNTYwVjBIMFYzMjBDNTUgMzIwIDU1LjA4MiA0MDMuMzI3IDExNS41IDM5Ni41QzIwNCAzODYuNSAyMDUuNSAzODEgMjUxIDQxMUMyNjQuMjk5IDQxOS43NjkgMjc2LjAzMiA0MjQuNzUxIDI5NCA0MzYuNUMzMTIuMDI5IDQ0OC4yODkgMzE2IDQ3NyAzNDggNTEzQzM3OC41IDU0MSAzODkuMzM0IDUzMS43MTUgNDA1IDU2MFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)]"
              >
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(200deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered3
                      ? {
                          backgroundImage:
                            "linear-gradient(20deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="h-full w-[65%] bg-pink-100 bg-[linear-gradient(200deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]"
                />
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(150deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered3
                      ? {
                          backgroundImage:
                            "linear-gradient(330deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 40%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[20%] bg-pink-200 bg-[linear-gradient(150deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_40%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]"
                >
                  <div className="size-full absolute left-0 top-0 bg-gradient-to-l from-[rgba(222,243,254,0.4)]" />
                </motion.div>
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(220deg,rgba(172,172,236,1) 0%,rgba(203,237,253,1) 80%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered3
                      ? {
                          backgroundImage:
                            "linear-gradient(40deg,rgba(172,172,236,1) 0%,rgba(203,237,253,1) 80%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[15%] bg-pink-200 bg-[linear-gradient(220deg,rgba(172,172,236,1)_0%,rgba(203,237,253,1)_80%,rgba(222,243,254,1)_100%)]"
                />
                <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
                <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
              </div>

              <div className="absolute left-[48px] top-0 flex h-[320px] w-[300px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMwMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMyMFYwSDMwMFYxMTlDMjc0LjUgMTQzIDI1NSAxNDYgMjEzLjUgMTU5LjVDMTc0LjMwMiAxNzIuMjUxIDEzNC41IDI0MC40NzQgMTE4LjUgMjUzLjVDNzIuMzQ2MiAyOTEuMDc0IDI4IDI4MSAwIDMyMFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)] bg-no-repeat drop-shadow-[0_0_45px_rgba(0,0,0,0.6)]" />
              <div
                onMouseOver={() => setStatus("hovered-2")}
                onMouseOut={() => setStatus("idle")}
                className="absolute left-[48px] top-0 flex h-[320px] w-[300px] bg-gray-200 [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMwMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMyMFYwSDMwMFYxMTlDMjc0LjUgMTQzIDI1NSAxNDYgMjEzLjUgMTU5LjVDMTc0LjMwMiAxNzIuMjUxIDEzNC41IDI0MC40NzQgMTE4LjUgMjUzLjVDNzIuMzQ2MiAyOTEuMDc0IDI4IDI4MSAwIDMyMFoiIGZpbGw9IiM5Nzk3OTciLz4KPC9zdmc+Cg==)]"
              >
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(290deg, rgba(32,34,98,1) 0%, rgba(59,88,135,1) 15%, rgba(172,172,236,1) 60%, rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered2
                      ? {
                          backgroundImage:
                            "linear-gradient(110deg, rgba(32,34,98,1) 0%, rgba(59,88,135,1) 15%, rgba(172,172,236,1) 60%, rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="h-full w-[50%] bg-pink-100 bg-[linear-gradient(290deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(222,243,254,1)_100%)]"
                />
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(60deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 15%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered2
                      ? {
                          backgroundImage:
                            "linear-gradient(240deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 15%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[30%] bg-pink-200 bg-[linear-gradient(60deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]"
                >
                  <motion.div className="size-full absolute left-0 top-0 bg-gradient-to-l from-[rgba(222,243,254,0.5)] to-40%" />
                </motion.div>
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(310deg,rgba(175,196,239,1) 0%,rgba(203,237,253,1) 59%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered2
                      ? {
                          backgroundImage:
                            "linear-gradient(130deg,rgba(175,196,239,1) 0%,rgba(203,237,253,1) 59%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[20%] bg-pink-400 bg-[linear-gradient(310deg,rgba(175,196,239,1)_0%,rgba(203,237,253,1)_59%,rgba(222,243,254,1)_100%)]"
                />
                <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
                <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
              </div>

              <div className="absolute left-0 top-0 flex h-[310px] w-[130px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDEzMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMxMFYwSDEzMFYxODhDMTIyLjUgMTk5LjUgMTE2LjUgMjAyLjUgOTkgMjEwLjVDODEuNSAyMTguNSA3MC41IDIxOC41IDQ1LjUgMjY0QzI1LjUgMzAwLjQgNi44MzMzMyAzMDkuODMzIDAgMzEwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)] bg-right-top bg-no-repeat drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]" />
              <div
                onMouseOver={() => setStatus("hovered-1")}
                onMouseOut={() => setStatus("idle")}
                className="absolute left-0 top-0 flex h-[310px] w-[130px] [mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDEzMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDMxMFYwSDEzMFYxODhDMTIyLjUgMTk5LjUgMTE2LjUgMjAyLjUgOTkgMjEwLjVDODEuNSAyMTguNSA3MC41IDIxOC41IDQ1LjUgMjY0QzI1LjUgMzAwLjQgNi44MzMzMyAzMDkuODMzIDAgMzEwWiIgZmlsbD0iIzk3OTc5NyIvPgo8L3N2Zz4K)]"
              >
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(290deg, rgba(32,34,98,1) 0%, rgba(59,88,135,1) 15%, rgba(172,172,236,1) 60%, rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered1
                      ? {
                          backgroundImage:
                            "linear-gradient(110deg, rgba(32,34,98,1) 0%, rgba(59,88,135,1) 15%, rgba(172,172,236,1) 60%, rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="h-full w-[30%]"
                />
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(60deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 15%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered1
                      ? {
                          backgroundImage:
                            "linear-gradient(240deg,rgba(32,34,98,1) 0%,rgba(59,88,135,1) 15%,rgba(172,172,236,1) 60%,rgba(203,237,253,1) 90%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[40%] bg-pink-200 bg-[linear-gradient(60deg,rgba(32,34,98,1)_0%,rgba(59,88,135,1)_15%,rgba(172,172,236,1)_60%,rgba(203,237,253,1)_90%,rgba(222,243,254,1)_100%)]"
                >
                  <div className="size-full absolute left-0 top-0 bg-gradient-to-l from-[rgba(222,243,254,0.5)] to-40%" />
                </motion.div>
                <motion.div
                  initial={{
                    backgroundImage:
                      "linear-gradient(310deg,rgba(175,196,239,1) 0%,rgba(203,237,253,1) 59%,rgba(222,243,254,1) 100%)",
                  }}
                  animate={
                    isHovered1
                      ? {
                          backgroundImage:
                            "linear-gradient(130deg,rgba(175,196,239,1) 0%,rgba(203,237,253,1) 59%,rgba(222,243,254,1) 100%)",
                        }
                      : {}
                  }
                  className="relative h-full w-[30%] bg-pink-400 bg-[linear-gradient(310deg,rgba(175,196,239,1)_0%,rgba(203,237,253,1)_59%,rgba(222,243,254,1)_100%)]"
                />
                <div className="size-full absolute left-0 top-0 backdrop-blur-sm" />
                <div className="size-full absolute left-0 top-0 opacity-20 [filter:url(#grain)]" />
              </div>
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
