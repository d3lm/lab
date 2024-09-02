"use client";

import { motion, MotionConfig, type Transition } from "framer-motion";
import React from "react";

const transition: Transition = { type: "spring", bounce: 0, duration: 0.4 };

const Context = React.createContext<{
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}>({ status: "", setStatus: () => null });

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.12499 8.12502H16.875M6.45833 3.95835V2.29169M13.5417 3.95835V2.29169M4.79166 16.875H15.2083C16.1288 16.875 16.875 16.1289 16.875 15.2084V5.62502C16.875 4.70455 16.1288 3.95835 15.2083 3.95835H4.79166C3.87119 3.95835 3.12499 4.70455 3.12499 5.62502V15.2084C3.12499 16.1289 3.87119 16.875 4.79166 16.875Z"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.12522 4.60311L8.93066 3.79771C10.9387 1.78968 14.1943 1.78968 16.2023 3.79771C18.2103 5.80572 18.2103 9.06136 16.2023 11.0694L15.3952 11.8766M4.60738 8.12096L3.79768 8.93069C1.78965 10.9387 1.78966 14.1944 3.79768 16.2024C5.8057 18.2104 9.06133 18.2104 11.0693 16.2024L11.8732 15.3985M7.91666 12.0834L12.0833 7.91669"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.54167 7.49997L6.63092 9.41072C6.30548 9.73614 6.30548 10.2638 6.63092 10.5892L8.54167 12.5M11.4583 7.49997L13.3691 9.41072C13.6945 9.73614 13.6945 10.2638 13.3691 10.5892L11.4583 12.5M4.79167 16.875H15.2083C16.1288 16.875 16.875 16.1288 16.875 15.2083V4.79164C16.875 3.87116 16.1288 3.12497 15.2083 3.12497H4.79167C3.87119 3.12497 3.125 3.87116 3.125 4.79164V15.2083C3.125 16.1288 3.87119 16.875 4.79167 16.875Z"
        stroke="#666666"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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
        <div className="relative flex h-screen items-center justify-center">
          <div className="group flex w-full max-w-[620px] flex-col items-center justify-center space-y-6 rounded-xl border border-dashed border-black/[8%] bg-[#fcfcfc] p-14 transition-colors duration-500 hover:bg-black/[2%] hover:duration-200">
            <div className="isolate flex">
              <div className="size-12 relative left-3 flex rotate-[-4deg] items-center justify-center rounded-xl bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.02),0_4px_8px_0_rgba(0,0,0,0.04)] ring-[0.8px] ring-black/[0.08] transition-transform duration-500 group-hover:-translate-x-5 group-hover:rotate-[-8deg] group-hover:duration-200">
                <CalendarIcon />
              </div>
              <div className="size-12 relative z-10 -mt-1 flex items-center justify-center rounded-xl bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.02),0_4px_8px_0_rgba(0,0,0,0.04)] ring-[0.8px] ring-black/[0.08] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:duration-200">
                <LinkIcon />
              </div>
              <div className="size-12 relative right-3 flex rotate-[4deg] items-center justify-center rounded-xl bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.02),0_4px_8px_0_rgba(0,0,0,0.04)] ring-[0.8px] ring-black/[0.08] transition-transform duration-500 group-hover:translate-x-5 group-hover:rotate-[8deg] group-hover:duration-200">
                <CodeIcon />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="max-w-[240px] space-y-1 text-center">
                <h3 className="font-medium text-[#212121]">No Forms Created</h3>
                <p className="text-sm text-[#666666]">
                  You can create a template to add in your pages.
                </p>
              </div>
              <button
                aria-label="Create Form"
                type="button"
                className="h-10 rounded-lg bg-white px-4 text-sm font-medium text-[#212121] shadow-[0_1px_1px_0_rgba(0,0,0,0.04)] ring-[0.8px] ring-black/[0.08] transition-[background-color,box-shadow] hover:bg-[#ededed] active:shadow-none"
              >
                Create Form
              </button>
            </div>
          </div>
        </div>
      </MotionConfig>
    </Context.Provider>
  );
}
