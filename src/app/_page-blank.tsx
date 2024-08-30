"use client";

import { motion, MotionConfig, type Transition } from "framer-motion";
import React from "react";

const transition: Transition = { type: "spring", bounce: 0, duration: 0.4 };

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
    <MotionConfig transition={transition}>
      <div className="relative flex h-screen items-center justify-center">
        <p>Start</p>
      </div>
    </MotionConfig>
  );
}
