"use client";

import Image from "next/image";
import svgPhone from "./iphone-black.svg";
import imageMesh1 from "./mesh-1.png";
import imageMesh2 from "./mesh-2.png";
import imageMesh3 from "./mesh-3.png";
import imageRegionalBackground from "./mesh-3.png";
import React from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";

function Toolbar() {
  return (
    <header className="w-full p-5">
      <div className="flex h-[50px] items-center justify-between rounded-full border border-[#e7e7e7] bg-white p-2 shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.0.1)]">
        <p className="pl-3 text-3xl font-semibold tracking-tighter text-[#363636]">
          Popcorn
        </p>
        <button className="h-full rounded-full bg-[#363636] px-4 text-sm text-white">
          Get the app
        </button>
      </div>
    </header>
  );
}

function InnerContent() {
  const [active, setActive] = React.useState("regional");
  const [pressing, setPressing] = React.useState(false);

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[51px]">
      <div className="size-full absolute top-0 z-30 bg-gradient-to-b from-[#efefef] from-45% to-transparent to-60%" />

      <div className="z-40 w-full space-y-16">
        <Toolbar />

        <Tabs.Root value={active} onValueChange={setActive} className="px-5">
          <Tabs.List className="absolute left-1/2 -translate-x-1/2 items-center whitespace-nowrap rounded-full border-2 border-[#e2e2e2] bg-[#e2e0e1] p-px tracking-tight">
            <Tabs.Trigger value="local" asChild>
              <motion.button
                aria-label="Local"
                onMouseDown={(e) => e.preventDefault()}
                onTapStart={() => {
                  if (active !== "local") setPressing(true);
                }}
                onTapCancel={() => setPressing(false)}
                onTap={() => {
                  setPressing(false);
                  setActive("local");
                }}
                whileTap={{ scale: 1.1 }}
                className="rounded-full px-2.5 py-[5px] text-[13px] font-semibold text-[#929091] data-[state=active]:bg-white data-[state=active]:text-[#3e3e3e] data-[state=active]:shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.16)]"
              >
                Local
              </motion.button>
            </Tabs.Trigger>
            <Tabs.Trigger value="regional" asChild>
              <motion.button
                aria-label="Regional"
                onMouseDown={(e) => e.preventDefault()}
                onTapStart={() => {
                  if (active !== "regional") setPressing(true);
                }}
                onTapCancel={() => setPressing(false)}
                onTap={() => {
                  setPressing(false);
                  setActive("regional");
                }}
                whileTap={{ scale: 1.1 }}
                className="rounded-full px-2.5 py-[5px] text-[13px] font-semibold text-[#929091] data-[state=active]:bg-white data-[state=active]:text-[#3e3e3e] data-[state=active]:shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.16)]"
              >
                Regional
              </motion.button>
            </Tabs.Trigger>
            <Tabs.Trigger value="global" asChild>
              <motion.button
                aria-label="Global"
                onMouseDown={(e) => e.preventDefault()}
                onTapStart={() => {
                  if (active !== "global") setPressing(true);
                }}
                onTapCancel={() => setPressing(false)}
                onTap={() => {
                  setPressing(false);
                  setActive("global");
                }}
                whileTap={{ scale: 1.1 }}
                className="rounded-full px-2.5 py-[5px] text-[13px] font-semibold text-[#929091] data-[state=active]:bg-white data-[state=active]:text-[#3e3e3e] data-[state=active]:shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.16)]"
              >
                Global
              </motion.button>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="local" className="pt-24">
            <motion.div
              initial={{ scale: 0.95, filter: "blur(4px)", opacity: 0.8 }}
              animate={
                pressing
                  ? { scale: 0.95, filter: "blur(4px)", opacity: 0.8 }
                  : { scale: 1, filter: "blur(0px)", opacity: 1 }
              }
              className="space-y-9"
            >
              <h1 className="flex flex-col gap-1 text-center font-serif text-4xl font-medium">
                <span>Fixed price,</span>
                <span>No hidden costs,</span>
                <span>Global roaming,</span>
                <span>Efficient support</span>
              </h1>

              <div className="w-full divide-y divide-[#e7e7e7] rounded-[25px] border border-[#e7e7e7] bg-[#f7f7f7] shadow-[0_6px_6px_-3px_rgba(0,0,0,0.0.16)]">
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">
                      N. Virginia
                    </p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      324 MB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh1}
                    alt="Mesh 1"
                    className="size-10 rotate-180 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">
                      Oregon
                    </p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      1.1 GB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh2}
                    alt="Mesh 2"
                    className="size-10 rotate-180 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">Ohio</p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      78 MB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh3}
                    alt="Mesh 3"
                    className="size-10 rotate-90 rounded-full"
                  />
                </div>
              </div>

              <div className="flex w-full justify-center">
                <button
                  aria-label="See More"
                  type="button"
                  className="rounded-full bg-white px-2.5 py-[5px] text-[13px] font-semibold text-[#3e3e3e] shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.16)]"
                >
                  See More
                </button>
              </div>
            </motion.div>
          </Tabs.Content>
          <Tabs.Content value="regional" className="pt-24">
            <motion.div
              initial={{ scale: 0.95, filter: "blur(4px)", opacity: 0.8 }}
              animate={
                pressing
                  ? { scale: 0.95, filter: "blur(4px)", opacity: 0.8 }
                  : { scale: 1, filter: "blur(0px)", opacity: 1 }
              }
              className="space-y-9"
            >
              <h1 className="flex flex-col gap-1 text-center font-serif text-4xl font-medium">
                <span>Fixed price,</span>
                <span>No hidden costs,</span>
                <span>Global roaming,</span>
                <span>Efficient support</span>
              </h1>

              <div className="w-full divide-y divide-[#e7e7e7] rounded-[25px] border border-[#e7e7e7] bg-[#f7f7f7] shadow-[0_6px_6px_-3px_rgba(0,0,0,0.0.16)]">
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">
                      United States
                    </p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      700 MB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh1}
                    alt="Mesh 1"
                    className="size-10 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">
                      Germany
                    </p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      1.2GB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh2}
                    alt="Mesh 2"
                    className="size-10 rotate-180 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">Japan</p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      1.45GB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh3}
                    alt="Mesh 3"
                    className="size-10 rotate-90 rounded-full"
                  />
                </div>
              </div>

              <div className="flex w-full justify-center">
                <button
                  aria-label="See More"
                  type="button"
                  className="rounded-full bg-white px-2.5 py-[5px] text-[13px] font-semibold text-[#3e3e3e] shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.16)]"
                >
                  See More
                </button>
              </div>
            </motion.div>
          </Tabs.Content>
          <Tabs.Content value="global" className="pt-24">
            <motion.div
              initial={{ scale: 0.95, filter: "blur(4px)", opacity: 0.8 }}
              animate={
                pressing
                  ? { scale: 0.95, filter: "blur(4px)", opacity: 0.8 }
                  : { scale: 1, filter: "blur(0px)", opacity: 1 }
              }
              className="space-y-9"
            >
              <h1 className="flex flex-col gap-1 text-center font-serif text-4xl font-medium">
                <span>Fixed price,</span>
                <span>No hidden costs,</span>
                <span>Global roaming,</span>
                <span>Efficient support</span>
              </h1>

              <div className="w-full divide-y divide-[#e7e7e7] rounded-[25px] border border-[#e7e7e7] bg-[#f7f7f7] shadow-[0_6px_6px_-3px_rgba(0,0,0,0.0.16)]">
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">
                      North America
                    </p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      7.43 GB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh1}
                    alt="Mesh 1"
                    className="size-10 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">
                      Europe
                    </p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      6 GB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh2}
                    alt="Mesh 2"
                    className="size-10 rotate-180 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-serif leading-5 tracking-tight">Asia</p>
                    <p className="text-[12px] tracking-tight text-[#9b9a96]">
                      10.24 GB remaining
                    </p>
                  </div>
                  <Image
                    src={imageMesh3}
                    alt="Mesh 3"
                    className="size-10 rotate-90 rounded-full"
                  />
                </div>
              </div>

              <div className="flex w-full justify-center">
                <button
                  aria-label="See More"
                  type="button"
                  className="rounded-full bg-white px-2.5 py-[5px] text-[13px] font-semibold text-[#3e3e3e] shadow-[0_3px_3px_-1.5px_rgba(0,0,0,0.16)]"
                >
                  See More
                </button>
              </div>
            </motion.div>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      {active === "local" && (
        <motion.div
          initial={{ height: "50vh" }}
          animate={pressing ? { height: "50vh" } : { height: "57vh" }}
          className="absolute bottom-0 z-20 h-[57vh] w-auto"
        >
          <Image
            src={imageMesh1}
            alt="Local background"
            className="size-full"
          />
        </motion.div>
      )}
      {active === "regional" && (
        <motion.div
          initial={{ height: "50vh" }}
          animate={pressing ? { height: "50vh" } : { height: "57vh" }}
          className="absolute bottom-0 z-20 h-[57vh] w-auto"
        >
          <Image
            src={imageRegionalBackground}
            alt="Regional background"
            className="size-full"
          />
        </motion.div>
      )}
      {active === "global" && (
        <motion.div
          initial={{ height: "50vh" }}
          animate={pressing ? { height: "50vh" } : { height: "57vh" }}
          className="absolute bottom-0 z-20 h-[57vh] w-auto"
        >
          <Image
            src={imageMesh2}
            alt="Regional background"
            className="size-full"
          />
        </motion.div>
      )}
    </div>
  );
}

export default function StagingPage() {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.5 }}>
      <main className="flex h-screen select-none items-center justify-center overflow-hidden">
        <div className="relative flex aspect-square h-screen items-center justify-center bg-gradient-to-br from-[#FAFAFA]/70 to-[#FFFFFF]">
          <div className="absolute left-1/2 top-1/2 z-20 h-[813px] w-[376px] -translate-x-1/2 -translate-y-1/2">
            <InnerContent />
          </div>

          <div className="fixed left-1/2 top-[70px] z-10 h-9 w-[345px] -translate-x-1/2 px-28">
            <div className="size-full rounded-3xl bg-[#efefef]" />
          </div>

          <div className="fixed bottom-[72px] left-1/2 z-50 h-1.5 w-[360px] -translate-x-1/2 px-28">
            <div className="size-full rounded-3xl bg-black" />
          </div>

          <Image
            src={svgPhone}
            alt="iphone mock"
            className="pointer-events-none relative z-0"
          />
        </div>
      </main>
    </MotionConfig>
  );
}
